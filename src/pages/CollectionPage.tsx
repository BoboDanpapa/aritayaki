import { ProductCard } from "../components/ProductCard";
import { products } from "../domain/products";
import { useApp } from "../state/AppContext";

const copy = {
  ja: ["華山 セカンドセレクション", "一客ずつ状態を記録した、料理のための器。", "一級品外観基準に届かなかった理由を開示し、通常使用に影響しない器だけを掲載するデモコレクションです。"],
  en: ["KAZAN Second Selection", "Vessels for cuisine, documented one piece at a time.", "A demo collection that discloses why each vessel fell outside the first-grade visual standard and presents only pieces with no functional impact."],
  "zh-TW": ["華山 非一級品精選", "逐件記錄狀態，為料理而選的器物。", "每件器物皆說明未達一級品外觀標準的原因，只展示不影響正常使用的 Demo 精選。"]
};

export function CollectionPage() {
  const { language } = useApp();
  const t = copy[language];
  return (
    <div className="page-section collection-page">
      <header className="page-intro">
        <span>KAZAN Second Selection</span>
        <h1>{t[0]}</h1>
        <p>{t[1]}</p>
        <small>{t[2]}</small>
      </header>
      <div className="catalog-grid">
        {products.map((product, index) => <ProductCard key={product.id} product={product} featured={index === 0 || index === 5} />)}
      </div>
    </div>
  );
}
