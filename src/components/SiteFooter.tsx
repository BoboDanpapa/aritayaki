import { Link } from "react-router-dom";
import { getCopy } from "../content/copy";
import { useApp } from "../state/AppContext";

export function SiteFooter() {
  const { language } = useApp();
  const c = getCopy(language);
  const placeholder = {
    ja: "[ 海外販売パートナー情報は正式公開前に確定 ]",
    en: "[ Overseas sales partner details to be confirmed ]",
    "zh-TW": "[ 海外銷售夥伴資料將於正式公開前確認 ]"
  }[language];
  return (
    <footer className="site-footer">
      <div>
        <div className="footer-wordmark">華山</div>
        <p>{c.partner}</p>
      </div>
      <div className="footer-links">
        <Link to="/heritage">{c.navHeritage}</Link>
        <Link to="/condition">{c.navCondition}</Link>
        <Link to="/for-chefs">{c.navChefs}</Link>
      </div>
      <p className="footer-placeholder">{placeholder}</p>
    </footer>
  );
}
