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
  it("renders the Japanese home experience by default", () => {
    const html = renderAt("/");
    expect(html).toContain("1796年");
    expect(html).toContain("コレクションを見る");
    expect(html).toContain("正規海外販売パートナー");
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
