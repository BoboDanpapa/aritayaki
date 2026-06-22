import { ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { ProductCard } from "../components/ProductCard";
import { getCopy } from "../content/copy";
import { publicAssetUrl } from "../domain/assets";
import { products } from "../domain/products";
import { useApp } from "../state/AppContext";

const homeCopy = {
  ja: {
    heroLabel: "有田焼 1796年創業",
    heroTitle: "二百年の器を、世界の料理人へ。",
    heroText: "華山の有田焼を、料理の構成と余白から選ぶ。",
    historyTitle: "有田の伝統陶芸で、暮らしの文化をつくる。",
    historyText: "華山は1796年、鍋島藩の御用窯として開窯しました。受け継いだ技術に新しい感覚を重ね、家庭用食器から割烹用食器まで製作しています。",
    historyLink: "華山の歩みを読む",
    collectionTitle: "料理から選ぶ、六つの器。",
    collectionText: "前菜、焼物、煮物、甘味。料理の構成と余白を起点に選んだデモコレクションです。",
    secondTitle: "一級品と同じ窯から、別の選択肢を。",
    secondText: "Second Selection は、華山の一級品外観基準に届かなかった器です。差異を一客ずつ記録し、通常使用に影響しないものだけをご紹介します。",
    secondLink: "状態基準を見る",
    chefTitle: "少量から、料理人の意図に合わせて。",
    chefText: "一客から相談でき、複数の器を組み合わせた選品にも対応します。最終在庫と国際送料は個別に確認します。",
    partnerTitle: "華山と海外の食卓をつなぐ。",
    partnerText: "本サイトは華山の正規海外販売パートナーによるデモです。運営主体と連絡先は正式公開前に確定します。"
  },
  en: {
    heroLabel: "Arita ware, established 1796",
    heroTitle: "Two centuries of craft, composed for the modern table.",
    heroText: "Kazan Arita ware for chefs, restaurants, and considered culinary spaces overseas.",
    historyTitle: "Arita craft, made to shape the culture of daily life.",
    historyText: "Kazan began in 1796 as an official kiln of the Nabeshima domain. Today it brings inherited technique to household, kappo, and professional tableware.",
    historyLink: "Read the Kazan history",
    collectionTitle: "Six vessels, selected through cuisine.",
    collectionText: "Starters, grilled dishes, simmered dishes, and sweets. A demo collection organized around plating and negative space.",
    secondTitle: "From the same kiln, a different selection.",
    secondText: "Second Selection vessels did not meet Kazan's first-grade visual standard. Each variation is documented, and only pieces with no functional impact are presented.",
    secondLink: "View the condition standard",
    chefTitle: "Selected around a chef's intent, from one vessel onward.",
    chefText: "Request a single piece or compose a mixed service. Final availability and international shipping are confirmed personally.",
    partnerTitle: "Connecting Kazan with tables overseas.",
    partnerText: "This demo is presented by an authorized overseas sales partner of Kazan. Operator details will be confirmed before public release."
  },
  "zh-TW": {
    heroLabel: "有田燒，創業於 1796 年",
    heroTitle: "以兩百年器藝，整理料理的留白。",
    heroText: "將華山有田燒帶給海外主廚、餐廳與重視器物的餐飲空間。",
    historyTitle: "以有田傳統陶藝，創造生活文化。",
    historyText: "華山於 1796 年以鍋島藩御用窯身分開窯。今日將傳承技藝運用於家用、割烹與專業餐飲器皿。",
    historyLink: "閱讀華山沿革",
    collectionTitle: "從料理出發，選擇六件器物。",
    collectionText: "前菜、燒物、煮物與甘味。這是一組以料理構成和盤面留白為出發點的 Demo 精選。",
    secondTitle: "來自同一座窯，另一種選擇。",
    secondText: "Second Selection 未達華山一級品外觀檢驗標準。每件差異皆單獨記錄，只展示不影響正常使用的器物。",
    secondLink: "查看狀態標準",
    chefTitle: "從單件開始，依照主廚意圖選器。",
    chefText: "可以單件詢價，也能組合不同器物。最終庫存與國際運費將由專人確認。",
    partnerTitle: "連結華山與海外餐桌。",
    partnerText: "本 Demo 由華山授權海外銷售夥伴製作。正式公開前將補足營運主體與聯絡資料。"
  }
};

export function HomePage() {
  const { language } = useApp();
  const t = homeCopy[language];
  const c = getCopy(language);
  return (
    <>
      <section className="home-hero">
        <div className="home-hero-copy reveal">
          <p className="hero-label">{t.heroLabel}</p>
          <h1>{t.heroTitle}</h1>
          <p className="hero-summary">{t.heroText}</p>
          <div className="hero-actions">
            <Link className="button primary" to="/collection">{c.explore}<ArrowRight size={17} /></Link>
            <Link className="button text-button" to="/for-chefs">{c.forChefs}</Link>
          </div>
        </div>
        <div className="home-hero-image reveal delay-one">
          <img src={publicAssetUrl("/images/camellia-plate.jpg")} alt="華山 山茶花長角皿 reference" />
          <p>{c.sourceNote}</p>
        </div>
      </section>

      <section className="heritage-intro page-section">
        <div className="year-mark">1796</div>
        <div>
          <h2>{t.historyTitle}</h2>
          <p>{t.historyText}</p>
          <Link className="inline-link" to="/heritage">{t.historyLink}<ArrowRight size={16} /></Link>
        </div>
      </section>

      <section className="collection-preview page-section">
        <header className="stacked-heading">
          <h2>{t.collectionTitle}</h2>
          <p>{t.collectionText}</p>
        </header>
        <div className="featured-products">
          <ProductCard product={products[0]} featured />
          <ProductCard product={products[2]} />
          <ProductCard product={products[4]} />
        </div>
        <Link className="button secondary" to="/collection">{c.explore}<ArrowRight size={17} /></Link>
      </section>

      <section className="second-selection-band">
        <div className="second-selection-copy">
          <span>KAZAN Second Selection</span>
          <h2>{t.secondTitle}</h2>
          <p>{t.secondText}</p>
          <Link className="button secondary" to="/condition">{t.secondLink}<ArrowRight size={17} /></Link>
        </div>
        <div className="condition-sample">
          <div className="condition-sample-head">
            <span>Condition Report</span>
            <strong>KZ-DEMO-03</strong>
          </div>
          <img src={publicAssetUrl("/images/celadon-bowl.jpg")} alt="青磁唐草彫小鉢 reference" />
          <ul>
            <li><Check size={16} />Kiln speck, outer wall</li>
            <li><Check size={16} />Subtle visibility</li>
            <li><Check size={16} />{c.noImpact}</li>
          </ul>
        </div>
      </section>

      <section className="chef-editorial page-section">
        <div className="chef-image-grid">
          <img src={publicAssetUrl("/images/blue-bowl.jpg")} alt="藍釉銀彩多用缽 reference" />
          <img src={publicAssetUrl("/images/balloon-plate.jpg")} alt="色鍋島風船紋六寸皿 reference" />
        </div>
        <div className="chef-copy">
          <h2>{t.chefTitle}</h2>
          <p>{t.chefText}</p>
          <Link className="inline-link" to="/for-chefs">{c.forChefs}<ArrowRight size={16} /></Link>
        </div>
      </section>

      <section className="partner-statement page-section">
        <h2>{t.partnerTitle}</h2>
        <p>{t.partnerText}</p>
        <span>{c.partner}</span>
      </section>
    </>
  );
}
