import { Globe2, Menu, Moon, ShoppingBag, Sun, X } from "lucide-react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { getCopy } from "../content/copy";
import { MARKETS, type Language, type MarketId } from "../domain/markets";
import { useApp } from "../state/AppContext";

const languages: { id: Language; label: string }[] = [
  { id: "ja", label: "日本語" },
  { id: "en", label: "English" },
  { id: "zh-TW", label: "繁體中文" }
];

export function SiteHeader() {
  const { language, setLanguage, market, setMarket, theme, toggleTheme, selection } = useApp();
  const [open, setOpen] = useState(false);
  const c = getCopy(language);
  const count = selection.reduce((sum, item) => sum + item.quantity, 0);
  const nav = [
    ["/heritage", c.navHeritage],
    ["/collection", c.navCollection],
    ["/condition", c.navCondition],
    ["/for-chefs", c.navChefs],
    ["/listing-demo", c.navListingDemo]
  ];

  return (
    <>
      <div className="demo-bar">{c.demoNotice}</div>
      <header className="site-header">
        <Link to="/" className="wordmark" aria-label="Kazan home" onClick={() => setOpen(false)}>
          <strong>華山</strong>
          <span>KAZAN ARITA</span>
        </Link>
        <nav className={open ? "site-nav is-open" : "site-nav"} aria-label="Primary navigation">
          {nav.map(([path, label]) => (
            <NavLink key={path} to={path} onClick={() => setOpen(false)}>{label}</NavLink>
          ))}
          <div className="mobile-preferences">
            <label>
              <span>{c.market}</span>
              <select value={market} onChange={(event) => setMarket(event.target.value as MarketId)}>
                {(Object.keys(MARKETS) as MarketId[]).map((id) => <option key={id} value={id}>{MARKETS[id].label[language]}</option>)}
              </select>
            </label>
            <label>
              <span>{c.language}</span>
              <select value={language} onChange={(event) => setLanguage(event.target.value as Language)}>
                {languages.map((item) => <option key={item.id} value={item.id}>{item.label}</option>)}
              </select>
            </label>
          </div>
        </nav>
        <div className="header-tools">
          <label className="select-control" aria-label={c.market}>
            <Globe2 size={16} strokeWidth={1.7} />
            <select value={market} onChange={(event) => setMarket(event.target.value as MarketId)}>
              {(Object.keys(MARKETS) as MarketId[]).map((id) => <option key={id} value={id}>{MARKETS[id].label[language]}</option>)}
            </select>
          </label>
          <label className="select-control language-control" aria-label={c.language}>
            <select value={language} onChange={(event) => setLanguage(event.target.value as Language)}>
              {languages.map((item) => <option key={item.id} value={item.id}>{item.label}</option>)}
            </select>
          </label>
          <button className="icon-button" type="button" onClick={toggleTheme} aria-label={c.theme} title={c.theme}>
            {theme === "light" ? <Moon size={18} strokeWidth={1.7} /> : <Sun size={18} strokeWidth={1.7} />}
          </button>
          <Link className="selection-link" to="/selection" aria-label={`${c.navSelection} ${count}`}>
            <ShoppingBag size={19} strokeWidth={1.7} />
            <span>{count}</span>
          </Link>
          <button className="menu-button" type="button" onClick={() => setOpen((value) => !value)} aria-label={c.menu}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>
    </>
  );
}
