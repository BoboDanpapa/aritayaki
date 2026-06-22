import { Check, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useApp } from "../state/AppContext";

const content = {
  ja: {
    title: "状態を、美辞麗句で隠さない。",
    lead: "Second Selection は、一級品外観基準に届かなかった理由を一客ずつ開示します。公開等級は設けません。",
    accepted: "ご紹介できる差異",
    excluded: "ご紹介しない状態",
    report: "各商品で確認すること",
    acceptedItems: ["釉薬の軽微な濃淡", "小さな鉄粉点", "絵付け位置のずれ", "器形のわずかな揺らぎ", "金彩や銀彩の色差"],
    excludedItems: ["ひび割れ", "鋭利な欠け", "水漏れ", "構造の不安定", "洗浄に支障がある状態", "食品接触安全性が不明な状態"],
    reportItems: ["差異の種類と位置", "見え方", "食品接触面との関係", "通常使用への影響", "全体写真と細部写真", "買い手による確認"]
  },
  en: {
    title: "Condition, without euphemism.",
    lead: "Second Selection documents why each vessel fell outside the first-grade visual standard. No public grade ladder is used.",
    accepted: "Variations we may present",
    excluded: "Conditions we do not present",
    report: "What every report includes",
    acceptedItems: ["Subtle glaze tone variation", "Small kiln speck", "Painting position variation", "Minor form variation", "Gold or silver finish variation"],
    excludedItems: ["Cracks", "Sharp chips", "Leaks", "Structural instability", "A condition that prevents proper cleaning", "Uncertain food-contact safety"],
    reportItems: ["Type and exact location", "Visibility", "Relation to food-contact area", "Functional impact", "Overall and detail images", "Buyer acknowledgement"]
  },
  "zh-TW": {
    title: "不以漂亮文字掩蓋器物狀態。",
    lead: "Second Selection 逐件說明未達一級品外觀標準的原因，不使用公開品質分級。",
    accepted: "可展示的外觀差異",
    excluded: "不展示的器物狀態",
    report: "每份報告包含",
    acceptedItems: ["輕微釉色濃淡", "細小窯點", "繪付位置差異", "器形輕微變化", "金彩或銀彩色差"],
    excludedItems: ["裂紋", "銳利缺口", "滲漏", "結構不穩", "妨礙正常清潔", "食品接觸安全性不明"],
    reportItems: ["差異類型與位置", "可見程度", "與食品接觸面的關係", "對正常使用的影響", "整體與細節圖片", "買家閱讀確認"]
  }
};

export function ConditionPage() {
  const { language } = useApp();
  const t = content[language];
  return (
    <div className="condition-page page-section">
      <header className="page-intro narrow"><span>Condition Standard</span><h1>{t.title}</h1><p>{t.lead}</p></header>
      <div className="condition-columns">
        <section><h2>{t.accepted}</h2>{t.acceptedItems.map((item) => <p key={item}><Check size={17} />{item}</p>)}</section>
        <section><h2>{t.excluded}</h2>{t.excludedItems.map((item) => <p key={item}><X size={17} />{item}</p>)}</section>
      </div>
      <section className="report-includes"><h2>{t.report}</h2><div>{t.reportItems.map((item) => <span key={item}>{item}</span>)}</div></section>
      <Link className="button primary" to="/collection">KAZAN Second Selection</Link>
    </div>
  );
}
