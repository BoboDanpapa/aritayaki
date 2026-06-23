import { renderToStaticMarkup } from "react-dom/server";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import { AppRoutes } from "./app";
import { AppProvider } from "./state/AppContext";

function renderAt(path: string) {
  return renderToStaticMarkup(
    <MemoryRouter initialEntries={[path]}>
      <AppProvider>
        <AppRoutes />
      </AppProvider>
    </MemoryRouter>
  );
}

describe("clickable multi-page demo", () => {
  it("renders the Japanese heritage chronicle as the home experience by default", () => {
    const html = renderAt("/");
    expect(html).toContain("華山、窯業の記録。");
    expect(html).toContain("OFFICIAL KILN, 1796");
    expect(html).toContain("御用窯の鑑札");
    expect(html).toContain("正規海外販売パートナー");
  });

  it("keeps the culture page before the collection in the primary navigation", () => {
    const html = renderAt("/");
    expect(html.indexOf("華山と有田")).toBeLessThan(html.indexOf("コレクション"));
  });

  it("renders the collection as a dedicated page", () => {
    const html = renderAt("/collection");
    expect(html).toContain("華山 セカンドセレクション");
    expect(html).toContain("色鍋島 風船六寸皿");
  });

  it("renders a vessel detail with a factual condition report", () => {
    const html = renderAt("/vessels/celadon-carved-bowl");
    expect(html).toContain("青磁 唐草彫小鉢");
    expect(html).toContain("コンディションレポート");
    expect(html).toContain("機能への影響なし");
  });
});
