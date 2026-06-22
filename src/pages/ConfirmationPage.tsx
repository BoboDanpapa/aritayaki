import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import { useApp } from "../state/AppContext";

const content = {
  ja: ["購入相談を受け付けました", "これはデモ送信です。実際のデータは送信されていません。正式運用では、在庫、状態、梱包後重量、国際送料を確認してご連絡します。", "コレクションへ戻る"],
  en: ["Inquiry prepared", "This is a demo submission. No data has been transmitted. In production, availability, condition, packed weight, and international shipping will be confirmed personally.", "Return to collection"],
  "zh-TW": ["採購詢價已建立", "這是 Demo 提交，沒有傳送任何資料。正式運作後，將由專人確認庫存、狀態、包裝後重量與國際運費。", "返回器物精選"]
};

export function ConfirmationPage() {
  const { language } = useApp();
  const t = content[language];
  return <div className="confirmation-page page-section"><Check size={36} /><h1>{t[0]}</h1><p>{t[1]}</p><Link className="button primary" to="/collection">{t[2]}</Link></div>;
}
