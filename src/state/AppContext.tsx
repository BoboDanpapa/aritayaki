import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { DEFAULT_LANGUAGE, getRecommendedMarket, type Language, type MarketId } from "../domain/markets";
import type { SelectionItem } from "../domain/selection";

type Theme = "light" | "dark";

interface AppContextValue {
  language: Language;
  setLanguage: (language: Language) => void;
  market: MarketId;
  setMarket: (market: MarketId) => void;
  theme: Theme;
  toggleTheme: () => void;
  selection: SelectionItem[];
  addToSelection: (productId: string) => void;
  setQuantity: (productId: string, quantity: number) => void;
  removeFromSelection: (productId: string) => void;
  clearSelection: () => void;
}

const AppContext = createContext<AppContextValue | null>(null);

function readStorage<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  const value = window.localStorage.getItem(key);
  if (!value) return fallback;
  try {
    return JSON.parse(value) as T;
  } catch {
    return fallback;
  }
}

export function AppProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => readStorage("kazan-language", DEFAULT_LANGUAGE));
  const [market, setMarket] = useState<MarketId>(() => {
    if (typeof window === "undefined") return "us";
    const saved = readStorage<MarketId | null>("kazan-market", null);
    if (saved) return saved;
    const browserLanguage = window.navigator.language || "";
    const region = browserLanguage.split("-")[1] || "";
    return getRecommendedMarket(browserLanguage, region);
  });
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === "undefined") return "light";
    const saved = readStorage<Theme | null>("kazan-theme", null);
    if (saved) return saved;
    return window.matchMedia?.("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  });
  const [selection, setSelection] = useState<SelectionItem[]>(() => readStorage("kazan-selection", []));

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("kazan-language", JSON.stringify(language));
    window.localStorage.setItem("kazan-market", JSON.stringify(market));
    window.localStorage.setItem("kazan-theme", JSON.stringify(theme));
    window.localStorage.setItem("kazan-selection", JSON.stringify(selection));
  }, [language, market, selection, theme]);

  const value = useMemo<AppContextValue>(() => ({
    language,
    setLanguage,
    market,
    setMarket,
    theme,
    toggleTheme: () => setTheme((current) => current === "light" ? "dark" : "light"),
    selection,
    addToSelection: (productId) => setSelection((current) => {
      const existing = current.find((item) => item.productId === productId);
      if (existing) return current.map((item) => item.productId === productId ? { ...item, quantity: item.quantity + 1 } : item);
      return [...current, { productId, quantity: 1 }];
    }),
    setQuantity: (productId, quantity) => setSelection((current) => current
      .map((item) => item.productId === productId ? { ...item, quantity: Math.max(1, quantity) } : item)),
    removeFromSelection: (productId) => setSelection((current) => current.filter((item) => item.productId !== productId)),
    clearSelection: () => setSelection([])
  }), [language, market, selection, theme]);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) throw new Error("useApp must be used within AppProvider");
  return context;
}
