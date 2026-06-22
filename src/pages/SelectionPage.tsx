import { Minus, Plus, Trash2 } from "lucide-react";
import { type FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getCopy } from "../content/copy";
import { formatMarketPrice } from "../domain/markets";
import { products } from "../domain/products";
import { calculateSelection } from "../domain/selection";
import { useApp } from "../state/AppContext";

const labels = {
  ja: { title: "選品リストと購入相談", lead: "器、数量、参考送料を確認し、レストランの用途をお知らせください。", contact: "購入相談者情報", restaurant: "レストラン・会社名", name: "ご担当者名", email: "業務用メール", country: "国・地域", city: "都市・郵便番号", type: "レストランの業態", use: "使用目的", arrival: "希望時期", channel: "希望連絡方法", notes: "補足事項", condition: "各商品の Condition Report を確認しました", similar: "類似する器形の提案を希望します", saving: "5点以上の組み合わせは、平均的な国際送料を抑えやすくなります。", duties: "関税・輸入税は含まれていません。最終在庫と送料は個別に確認します。" },
  en: { title: "Selection and inquiry", lead: "Review vessels, quantities, and reference shipping, then tell us about your restaurant and intended use.", contact: "Buyer information", restaurant: "Restaurant or company", name: "Contact name", email: "Work email", country: "Country or market", city: "City and postal code", type: "Restaurant type", use: "Intended use", arrival: "Preferred arrival", channel: "Preferred contact", notes: "Additional notes", condition: "I have reviewed each Condition Report", similar: "I welcome suggestions for similar vessel forms", saving: "Combining five or more vessels can reduce average international shipping per piece.", duties: "Duties and import taxes are not included. Final availability and shipping are confirmed personally." },
  "zh-TW": { title: "選品清單與採購詢價", lead: "確認器物、數量與參考運費，並告訴我們餐廳類型和預計用途。", contact: "採購聯絡資料", restaurant: "餐廳或公司名稱", name: "聯絡人姓名", email: "工作信箱", country: "國家或市場", city: "城市與郵遞區號", type: "餐廳類型", use: "預計用途", arrival: "希望到貨時間", channel: "希望聯絡方式", notes: "補充說明", condition: "我已閱讀每件器物的 Condition Report", similar: "願意收到類似器型建議", saving: "組合五件以上器物，通常較容易降低平均單件國際運費。", duties: "參考總額不含關稅與進口稅。最終庫存和運費需由專人確認。" }
};

export function SelectionPage() {
  const { language, market, selection, setQuantity, removeFromSelection } = useApp();
  const [confirmed, setConfirmed] = useState(false);
  const navigate = useNavigate();
  const c = getCopy(language);
  const t = labels[language];
  const summary = calculateSelection(selection, market);
  const rows = selection.map((item) => ({ item, product: products.find((product) => product.id === item.productId) })).filter((row) => row.product);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!confirmed || rows.length === 0) return;
    navigate("/inquiry-confirmation");
  }

  if (rows.length === 0) return <div className="empty-state page-section"><h1>{c.emptySelection}</h1><Link className="button primary" to="/collection">{c.browseCollection}</Link></div>;

  return (
    <div className="selection-page page-section">
      <header className="page-intro narrow"><span>Selection</span><h1>{t.title}</h1><p>{t.lead}</p></header>
      <div className="selection-layout">
        <div className="selection-list">
          {rows.map(({ item, product }) => product && <article className="selection-row" key={product.id}>
            <img src={product.image} alt={product.name[language]} />
            <div><span>{product.id}</span><h2>{product.name[language]}</h2><p>{formatMarketPrice(product.priceUsd, market)} / {c.pieces}</p></div>
            <div className="quantity-control compact"><button type="button" onClick={() => setQuantity(product.id, item.quantity - 1)}><Minus size={15} /></button><span>{item.quantity}</span><button type="button" onClick={() => setQuantity(product.id, item.quantity + 1)}><Plus size={15} /></button></div>
            <button className="icon-button" type="button" onClick={() => removeFromSelection(product.id)} aria-label={c.remove}><Trash2 size={17} /></button>
          </article>)}
          <p className="shipping-tip">{t.saving}</p>
        </div>
        <aside className="quote-summary">
          <div><span>{c.subtotal}</span><strong>{formatMarketPrice(summary.subtotal, market)}</strong></div>
          <div><span>{c.shipping}</span><strong>{formatMarketPrice(summary.shippingEstimate, market)}</strong></div>
          <div className="quote-total"><span>{c.total}</span><strong>{formatMarketPrice(summary.total, market)}</strong></div>
          <p>{t.duties}</p>
        </aside>
      </div>
      <form className="inquiry-form" onSubmit={submit}>
        <h2>{t.contact}</h2>
        <div className="form-grid">
          <label><span>{t.restaurant}</span><input required name="restaurant" /></label>
          <label><span>{t.name}</span><input required name="name" /></label>
          <label><span>{t.email}</span><input required type="email" name="email" /></label>
          <label><span>{t.country}</span><select name="country" defaultValue={market}><option value="tw">Taiwan</option><option value="au">Australia</option><option value="us">United States</option></select></label>
          <label><span>{t.city}</span><input required name="city" /></label>
          <label><span>{t.type}</span><input required name="restaurant-type" /></label>
          <label><span>{t.use}</span><input name="use" /></label>
          <label><span>{t.arrival}</span><input name="arrival" /></label>
          <label><span>{t.channel}</span><select name="channel"><option>Email</option><option>LINE</option><option>WhatsApp</option></select></label>
          <label className="full-field"><span>{t.notes}</span><textarea name="notes" rows={4}></textarea></label>
        </div>
        <label className="check-field"><input type="checkbox" checked={confirmed} onChange={(event) => setConfirmed(event.target.checked)} /><span>{t.condition}</span></label>
        <label className="check-field"><input type="checkbox" /><span>{t.similar}</span></label>
        <button className="button primary" disabled={!confirmed} type="submit">{c.submitInquiry}</button>
      </form>
    </div>
  );
}
