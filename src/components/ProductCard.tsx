import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { getCopy } from "../content/copy";
import { formatMarketPrice } from "../domain/markets";
import type { Product } from "../domain/products";
import { useApp } from "../state/AppContext";

export function ProductCard({ product, featured = false }: { product: Product; featured?: boolean }) {
  const { language, market } = useApp();
  const c = getCopy(language);
  return (
    <article className={featured ? "product-card featured" : "product-card"}>
      <Link className="product-image-link" to={`/vessels/${product.slug}`}>
        <img src={product.image} alt={product.name[language]} loading={featured ? "eager" : "lazy"} />
      </Link>
      <div className="product-card-body">
        <div className="product-meta">
          <span>{product.category[language]}</span>
          <span>{product.id}</span>
        </div>
        <h3><Link to={`/vessels/${product.slug}`}>{product.name[language]}</Link></h3>
        <p>{product.usage[language]}</p>
        <div className="product-card-footer">
          <span>{formatMarketPrice(product.priceUsd, market)}</span>
          <Link to={`/vessels/${product.slug}`} aria-label={`${c.viewVessel}: ${product.name[language]}`}>
            {c.viewVessel}<ArrowUpRight size={15} strokeWidth={1.7} />
          </Link>
        </div>
      </div>
    </article>
  );
}
