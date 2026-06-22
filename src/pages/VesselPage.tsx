import { Check, Minus, Plus } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { getCopy } from "../content/copy";
import { formatMarketPrice } from "../domain/markets";
import { getProduct } from "../domain/products";
import { useApp } from "../state/AppContext";

const labels = {
  ja: { dimensions: "寸法", weight: "重量", use: "料理用途", availability: "参考在庫", type: "差異の種類", location: "位置", visibility: "見え方", food: "食品接触面", yes: "該当", no: "非該当", subtle: "軽微", visible: "明瞭", disclaimer: "画像・状態・価格・在庫はデモ用の参考情報です。" },
  en: { dimensions: "Dimensions", weight: "Weight", use: "Culinary use", availability: "Sample availability", type: "Variation type", location: "Location", visibility: "Visibility", food: "Food-contact area", yes: "Yes", no: "No", subtle: "Subtle", visible: "Visible", disclaimer: "Images, condition, price, and availability are demo reference data." },
  "zh-TW": { dimensions: "尺寸", weight: "重量", use: "料理用途", availability: "參考庫存", type: "差異類型", location: "位置", visibility: "可見程度", food: "食品接觸面", yes: "是", no: "否", subtle: "輕微可見", visible: "明顯可見", disclaimer: "圖片、狀態、價格與庫存皆為 Demo 參考資料。" }
};

const conditionVocabulary = {
  ja: {
    "glaze variation": "釉薬の濃淡",
    "painting offset": "絵付け位置のずれ",
    "kiln speck": "鉄粉点",
    "form variation": "器形の揺らぎ",
    "silver finish variation": "銀彩の色差",
    "glaze pooling": "釉薬の溜まり",
    "outer rim, 2 o'clock": "外縁、時計の2時方向",
    "camellia stem, right side": "山茶花の茎、右側",
    "outer wall, lower third": "外側下部",
    "rim profile": "口縁の輪郭",
    "rim, 7 o'clock": "口縁、時計の7時方向",
    "underside of left handle": "左取手の裏側"
  },
  en: {},
  "zh-TW": {
    "glaze variation": "釉色濃淡差異",
    "painting offset": "繪付位置差異",
    "kiln speck": "細小窯點",
    "form variation": "器形輕微變化",
    "silver finish variation": "銀彩色差",
    "glaze pooling": "釉藥積聚",
    "outer rim, 2 o'clock": "外緣，約兩點鐘方向",
    "camellia stem, right side": "山茶花莖部右側",
    "outer wall, lower third": "外側下方",
    "rim profile": "口緣輪廓",
    "rim, 7 o'clock": "口緣，約七點鐘方向",
    "underside of left handle": "左側把手下方"
  }
} as const;

export function VesselPage() {
  const { slug } = useParams();
  const { language, market, addToSelection, selection, setQuantity } = useApp();
  const product = getProduct(slug || "");
  const c = getCopy(language);
  const t = labels[language];
  const vocabulary = conditionVocabulary[language] as Record<string, string>;
  if (!product) return <div className="page-section not-found"><h1>Vessel not found</h1><Link to="/collection">{c.explore}</Link></div>;
  const selected = selection.find((item) => item.productId === product.id);
  return (
    <div className="vessel-page">
      <section className="vessel-hero page-section">
        <div className="vessel-image-stage">
          <img src={product.image} alt={product.name[language]} />
          <p>{c.sourceNote}</p>
        </div>
        <div className="vessel-summary">
          <span>{product.category[language]} / {product.id}</span>
          <h1>{product.name[language]}</h1>
          <p className="lead">{product.description[language]}</p>
          <dl className="vessel-facts">
            <div><dt>{t.dimensions}</dt><dd>{product.dimensions}</dd></div>
            <div><dt>{t.weight}</dt><dd>{product.weightGrams} g</dd></div>
            <div><dt>{t.use}</dt><dd>{product.usage[language]}</dd></div>
            <div><dt>{t.availability}</dt><dd>{product.sampleStock} {c.pieces}</dd></div>
          </dl>
          <div className="price-block"><span>{c.demoPrice}</span><strong>{formatMarketPrice(product.priceUsd, market)}</strong></div>
          {selected ? (
            <div className="quantity-control">
              <button type="button" onClick={() => setQuantity(product.id, selected.quantity - 1)} aria-label="Decrease quantity"><Minus size={16} /></button>
              <span>{selected.quantity}</span>
              <button type="button" onClick={() => setQuantity(product.id, selected.quantity + 1)} aria-label="Increase quantity"><Plus size={16} /></button>
              <Link to="/selection">{c.navSelection}</Link>
            </div>
          ) : <button className="button primary full" type="button" onClick={() => addToSelection(product.id)}>{c.addSelection}</button>}
          <small>{t.disclaimer}</small>
        </div>
      </section>

      <section className="condition-detail page-section">
        <header><span>KAZAN Second Selection</span><h2>{c.conditionReport}</h2></header>
        <div className="condition-layout">
          <div className="condition-visual"><img src={product.image} alt="Condition reference" /><i></i></div>
          <div className="condition-data">
            <dl>
              <div><dt>{t.type}</dt><dd>{vocabulary[product.condition.type] || product.condition.type}</dd></div>
              <div><dt>{t.location}</dt><dd>{vocabulary[product.condition.location] || product.condition.location}</dd></div>
              <div><dt>{t.visibility}</dt><dd>{t[product.condition.visibility]}</dd></div>
              <div><dt>{t.food}</dt><dd>{product.condition.foodContactArea ? t.yes : t.no}</dd></div>
            </dl>
            <p>{product.condition.note[language]}</p>
            <div className="functional-note"><Check size={18} />{c.noImpact}</div>
          </div>
        </div>
      </section>
      <div className="source-reference page-section"><a href={product.sourceUrl} target="_blank" rel="noreferrer">Yahoo Shopping reference source</a></div>
    </div>
  );
}
