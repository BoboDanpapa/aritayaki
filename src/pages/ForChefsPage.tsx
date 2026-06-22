import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { publicAssetUrl } from "../domain/assets";
import { useApp } from "../state/AppContext";

const content = {
  ja: {
    title: "料理の構成から、器を選ぶ。",
    lead: "一客の相談から、複数器種を組み合わせた選品まで。海外の料理人と購買担当者に向けた相談窓口です。",
    reasons: [["少量から", "一客でも相談可能。新しい器を小さく試せます。"], ["用途から", "前菜、焼物、煮物、甘味など料理の役割から選べます。"], ["状態を確認", "各器の差異を購入相談前に確認できます。"], ["国際配送", "市場、数量、包装後重量に応じて送料を個別に確認します。"]],
    process: "選品から相談まで",
    steps: ["器を選ぶ", "数量と用途を伝える", "状態を確認する", "在庫と送料の回答を受ける"],
    cta: "器を選び始める"
  },
  en: {
    title: "Select vessels through the structure of a dish.",
    lead: "From one piece to a mixed service, this is an inquiry desk for chefs and professional buyers overseas.",
    reasons: [["Start small", "Request a single vessel and test a new form with low commitment."], ["Select by use", "Choose through appetizers, grilled dishes, simmered dishes, or sweets."], ["Review condition", "See the documented variation before submitting an inquiry."], ["Ship internationally", "Shipping is confirmed against market, quantity, and packed weight."]],
    process: "From selection to inquiry",
    steps: ["Choose vessels", "Set quantity and intended use", "Acknowledge condition", "Receive availability and shipping"],
    cta: "Begin a selection"
  },
  "zh-TW": {
    title: "從料理構成出發，選擇器物。",
    lead: "從單件詢問到組合不同器型，這是面向海外主廚與專業採購者的選品窗口。",
    reasons: [["從少量開始", "允許單件詢價，以較低負擔測試新的器型。"], ["依用途選擇", "從前菜、燒物、煮物與甘味等料理角色選器。"], ["確認狀態", "提交詢價前即可查看每件器物的具體差異。"], ["國際配送", "依市場、數量和包裝後重量個別確認運費。"]],
    process: "從選品到詢價",
    steps: ["選擇器物", "填寫數量與用途", "確認器物狀態", "取得庫存與運費回覆"],
    cta: "開始選擇器物"
  }
};

export function ForChefsPage() {
  const { language } = useApp();
  const t = content[language];
  return (
    <div className="chefs-page">
      <section className="chefs-hero page-section"><div><span>For Culinary Professionals</span><h1>{t.title}</h1><p>{t.lead}</p><Link className="button primary" to="/collection">{t.cta}<ArrowRight size={17} /></Link></div><img src={publicAssetUrl("/images/blue-bowl.jpg")} alt="Blue glaze bowl reference" /></section>
      <section className="chef-reasons page-section">{t.reasons.map(([title, body]) => <article key={title}><h2>{title}</h2><p>{body}</p></article>)}</section>
      <section className="inquiry-process page-section"><h2>{t.process}</h2><div>{t.steps.map((step) => <div key={step}><span>{step}</span></div>)}</div></section>
    </div>
  );
}
