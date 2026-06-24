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

  it("shows the listing demo entry after the buyer-facing navigation", () => {
    const html = renderAt("/");
    expect(html).toContain("出品Demo");
    expect(html.indexOf("料理人の方へ")).toBeLessThan(html.indexOf("出品Demo"));
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

  it("renders the seller-side listing demo with prefilled vessel content", () => {
    const html = renderAt("/listing-demo");
    expect(html).toContain("出品準備室");
    expect(html).toContain("Demo専用：実際の公開、在庫更新、画像保存は行われません。");
    expect(html).toContain("染付唐草 小鉢");
    expect(html).toContain("状態記録 2件");
  });

  it("renders the listing demo preparation checklist and overseas draft controls", () => {
    const html = renderAt("/listing-demo");
    expect(html).toContain("公開前確認");
    expect(html).toContain("写真を確認");
    expect(html).toContain("状態説明を確認");
    expect(html).toContain("海外向けに整える");
    expect(html).toContain("内容を確認して公開");
  });
});
