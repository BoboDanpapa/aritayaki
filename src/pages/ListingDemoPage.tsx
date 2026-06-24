import { Check, ChevronLeft, ChevronRight, ImagePlus, Link2, Sparkles, X } from "lucide-react";
import { useState } from "react";
import { publicAssetUrl } from "../domain/assets";

type DemoImage = {
  id: string;
  role: string;
  src: string;
  alt: string;
  linkedRecord?: string;
};

const demoImages: DemoImage[] = [
  {
    id: "main",
    role: "主写真",
    src: publicAssetUrl("/images/listing-demo/sometsuke-bowl-main.png"),
    alt: "染付唐草小鉢の主写真"
  },
  {
    id: "side",
    role: "側面",
    src: publicAssetUrl("/images/listing-demo/sometsuke-bowl-side.png"),
    alt: "染付唐草小鉢の側面"
  },
  {
    id: "overhead",
    role: "俯瞰",
    src: publicAssetUrl("/images/listing-demo/sometsuke-bowl-overhead.png"),
    alt: "染付唐草小鉢の俯瞰"
  },
  {
    id: "foot",
    role: "高台",
    src: publicAssetUrl("/images/listing-demo/sometsuke-bowl-foot.png"),
    alt: "染付唐草小鉢の高台",
    linkedRecord: "状態記録 02"
  },
  {
    id: "condition",
    role: "状態特写",
    src: publicAssetUrl("/images/listing-demo/sometsuke-bowl-condition.png"),
    alt: "釉薬の濃淡を示す状態特写",
    linkedRecord: "状態記録 01"
  }
];

const initialConditions = [
  {
    id: "01",
    type: "釉薬の濃淡",
    location: "外縁、時計の2時方向",
    visibility: "軽微",
    contact: "食品接触面なし",
    photo: "状態特写",
    note: "外側の縁に小さな釉薬の濃淡があります。盛り面にはかかりません。"
  },
  {
    id: "02",
    type: "鉄粉点",
    location: "高台近く",
    visibility: "軽微",
    contact: "食品接触面なし",
    photo: "高台",
    note: "高台付近に小さな鉄粉点があります。通常使用への影響はありません。"
  }
];

export function ListingDemoPage() {
  const [activeImage, setActiveImage] = useState(0);
  const [viewerImage, setViewerImage] = useState<number | null>(null);
  const [conditions, setConditions] = useState(initialConditions);
  const [draftState, setDraftState] = useState<"ready" | "refined" | "publish-ready">("ready");
  const active = demoImages[activeImage];
  const openImage = viewerImage === null ? null : demoImages[viewerImage];

  function showPreviousImage() {
    setViewerImage((current) => current === null ? null : (current + demoImages.length - 1) % demoImages.length);
  }

  function showNextImage() {
    setViewerImage((current) => current === null ? null : (current + 1) % demoImages.length);
  }

  function addConditionRecord() {
    if (conditions.length > 2) return;
    setConditions((items) => [
      ...items,
      {
        id: "03",
        type: "追加状態記録",
        location: "確認予定",
        visibility: "未確認",
        contact: "店主確認待ち",
        photo: "紐づけ予定",
        note: "Demo 用の追加枠です。正式版では写真と位置を確認して記録します。"
      }
    ]);
  }

  return (
    <div className="listing-demo-page">
      <section className="listing-demo-header">
        <div>
          <p className="listing-demo-kicker">KAZAN Second Selection</p>
          <h1>出品準備室</h1>
          <p>写真、店主メモ、状態記録をもとに、海外向けの商品下書きを整えます。</p>
        </div>
        <p className="listing-demo-notice">Demo専用：実際の公開、在庫更新、画像保存は行われません。</p>
      </section>

      <section className="listing-demo-status" aria-label="出品準備状態">
        <div><span>記録状態</span><strong>{draftState === "publish-ready" ? "公開準備完了" : "下書き"}</strong></div>
        <div><span>写真</span><strong>{demoImages.length}枚</strong></div>
        <div><span>状態記録</span><strong aria-label={`状態記録 ${conditions.length}件`}>{conditions.length}件</strong></div>
        <div><span>海外向け説明</span><strong>{draftState === "ready" ? "下書き済み" : "更新済み"}</strong></div>
      </section>

      <section className="listing-demo-workbench">
        <aside className="listing-demo-panel listing-demo-images">
          <div className="listing-demo-section-head">
            <h2>画像記録</h2>
            <p>主写真、角度写真、状態の特写を一つの器物にまとめます。</p>
          </div>

          <button className="listing-demo-main-image" type="button" onClick={() => setViewerImage(activeImage)}>
            <img src={active.src} alt={active.alt} />
            <span>{active.role} / クリックで大きく表示</span>
          </button>

          <div className="listing-demo-thumbnails">
            {demoImages.map((image, index) => (
              <button
                className={index === activeImage ? "is-active" : ""}
                key={image.id}
                type="button"
                onClick={() => setActiveImage(index)}
              >
                <img src={image.src} alt={image.alt} />
                <span>{image.role}</span>
                {image.linkedRecord ? <small>{image.linkedRecord}</small> : null}
              </button>
            ))}
          </div>

          <div className="listing-demo-actions">
            <button className="button secondary" type="button"><ImagePlus size={16} />写真を追加</button>
            <button className="button text-button" type="button"><Link2 size={16} />状態記録に紐づける</button>
          </div>
        </aside>

        <main className="listing-demo-panel listing-demo-inputs">
          <section>
            <div className="listing-demo-section-head">
              <h2>器物情報</h2>
            </div>
            <div className="listing-demo-form-grid">
              <label>器名<input value="染付唐草 小鉢" readOnly /></label>
              <label>品類<input value="小鉢" readOnly /></label>
              <label>窯 / ブランド<input value="華山" readOnly /></label>
              <label>数量<input value="1" readOnly /></label>
              <label>寸法<input value="径 12.5 cm / 高さ 5.2 cm" readOnly /></label>
              <label>重量<input value="260 g" readOnly /></label>
              <label>参考価格<input value="USD 48" readOnly /></label>
              <label>料理用途<input value="先付、珍味、季節の小さな一品" readOnly /></label>
            </div>
          </section>

          <section>
            <div className="listing-demo-section-head">
              <h2>店主メモ</h2>
              <p>短い言葉で構いません。器の印象、気になる箇所、使い方を店主の言葉で残します。</p>
            </div>
            <textarea
              readOnly
              value="縁の外側に小さな釉薬の濃淡があります。料理を盛る面には影響ありません。形と絵付けは落ち着いており、少量の先付に使いやすい器です。"
            />
            <div className="listing-demo-prompts">
              <span>どんな料理に合いますか</span>
              <span>気になる箇所はどこですか</span>
              <span>通常使用に影響はありますか</span>
            </div>
          </section>

          <section>
            <div className="listing-demo-section-head with-action">
              <div>
                <h2>状態記録</h2>
                <p>状態差異を警告ではなく、海外向けに確認できる記録として残します。</p>
              </div>
              <button className="button secondary" type="button" onClick={addConditionRecord}>状態記録を追加</button>
            </div>
            <div className="listing-demo-condition-list">
              {conditions.map((condition) => (
                <article key={condition.id}>
                  <div>
                    <span>{condition.id}</span>
                    <h3>{condition.type}</h3>
                  </div>
                  <dl>
                    <div><dt>位置</dt><dd>{condition.location}</dd></div>
                    <div><dt>見え方</dt><dd>{condition.visibility}</dd></div>
                    <div><dt>食品面</dt><dd>{condition.contact}</dd></div>
                    <div><dt>写真</dt><dd>{condition.photo}</dd></div>
                  </dl>
                  <p>{condition.note}</p>
                </article>
              ))}
            </div>
          </section>

          <section>
            <div className="listing-demo-section-head">
              <h2>公開前確認</h2>
              <p>正式公開前に店主が見るべき項目を Demo として表示します。</p>
            </div>
            <ul className="listing-demo-checklist">
              <li><Check size={16} />写真を確認</li>
              <li><Check size={16} />状態説明を確認</li>
              <li><Check size={16} />価格と在庫を確認</li>
              <li><Check size={16} />海外向け下書きを確認</li>
            </ul>
          </section>
        </main>

        <aside className="listing-demo-panel listing-demo-preview">
          <div className="listing-demo-section-head">
            <h2>海外向け下書き</h2>
            <p>店主メモと状態記録を、海外の料理人が判断しやすい形へ整えます。</p>
          </div>

          <article className="listing-demo-buyer-card">
            <img src={active.src} alt="買い手側カード主写真" />
            <div>
              <span>KAZAN Second Selection</span>
              <h3>染付唐草 小鉢</h3>
              <p>Small sometsuke bowl for seasonal appetizers.</p>
              <strong>USD 48</strong>
            </div>
          </article>

          <section className="listing-demo-draft">
            <div className="listing-demo-tabs" aria-label="多言語下書き">
              <button type="button">日本語</button>
              <button className="is-active" type="button">English</button>
              <button type="button">繁中</button>
            </div>
            <p>
              A small sometsuke bowl with calm arabesque painting, suitable for seasonal appetizers and small composed dishes.
              A subtle glaze tone variation appears on the outer rim and does not affect normal use.
            </p>
          </section>

          <section className="listing-demo-report">
            <h3>Condition Report</h3>
            <ul>
              <li><Check size={16} />Glaze tone variation, outer rim, subtle visibility</li>
              <li><Check size={16} />Tiny iron speck near foot ring, no functional impact</li>
            </ul>
          </section>

          <div className="listing-demo-actions stacked">
            <button className="button primary full" type="button" onClick={() => setDraftState("refined")}><Sparkles size={16} />海外向けに整える</button>
            <button className="button secondary full" type="button" onClick={() => setDraftState("publish-ready")}>内容を確認して公開</button>
          </div>
          {draftState === "publish-ready" ? (
            <p className="listing-demo-ready">公開準備完了：正式公開前に、写真・価格・在庫を店主が確認してください。</p>
          ) : null}
        </aside>
      </section>

      {openImage ? (
        <div className="listing-demo-viewer" role="dialog" aria-modal="true" aria-label="画像を大きく表示">
          <div className="listing-demo-viewer-bar">
            <button type="button" onClick={() => setViewerImage(null)}><X size={18} />閉じる</button>
            <span>{openImage.role}{openImage.linkedRecord ? ` / ${openImage.linkedRecord}` : ""}</span>
          </div>
          <div className="listing-demo-viewer-stage">
            <button type="button" onClick={showPreviousImage}><ChevronLeft size={24} />前へ</button>
            <img src={openImage.src} alt={openImage.alt} />
            <button type="button" onClick={showNextImage}>次へ<ChevronRight size={24} /></button>
          </div>
          <div className="listing-demo-viewer-actions">
            <span>Demo image</span>
            <button className="button inverted" type="button" onClick={() => {
              if (viewerImage !== null) setActiveImage(viewerImage);
            }}>主写真に設定</button>
            <button className="button inverted" type="button">状態記録に紐づける</button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
