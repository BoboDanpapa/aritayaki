import { useApp } from "../state/AppContext";

const content = {
  ja: {
    title: "華山と有田",
    lead: "有田の伝統陶芸で、暮らしの文化をつくる。",
    body: "華山は1796年、鍋島藩の御用窯として開窯しました。大物陶磁器から割烹用食器まで、時代の需要に向き合いながら技術と感覚を更新してきました。",
    philosophy: "伝統は、保存するだけでは続かない。料理と暮らしの中で使われてこそ、次の時間へ渡ります。",
    source: "本ページは株式会社華山の公式沿革をもとに構成した Demo です。正式公開前に店主確認と英訳監修を行います。"
  },
  en: {
    title: "Kazan and Arita",
    lead: "Arita craft, made to shape the culture of daily life.",
    body: "Kazan began in 1796 as an official kiln of the Nabeshima domain. From large ceramic works to professional kappo tableware, it has continued to renew inherited technique for the needs of each era.",
    philosophy: "Tradition continues when it is used. At the table, inherited craft enters its next chapter.",
    source: "This demo is based on the official history published by Kazan. Owner review and professional translation are required before public release."
  },
  "zh-TW": {
    title: "華山與有田",
    lead: "以有田傳統陶藝，創造生活文化。",
    body: "華山於 1796 年以鍋島藩御用窯身分開窯。從大型陶磁器到割烹專業食器，持續因應時代需要，更新傳承技術與審美。",
    philosophy: "傳統不只是被保存。當器物持續進入料理與生活，技藝才能走向下一段時間。",
    source: "本 Demo 依據株式会社華山官方沿革編排。正式公開前需由店主確認並完成專業翻譯。"
  }
};

const timelines = {
  ja: [["1796", "鍋島藩の御用窯として開窯"], ["1887-1890", "住吉大社、北野天満宮、金刀比羅宮へ大灯籠を奉納"], ["1893", "シカゴ国際展覧会で賞牌"], ["1895", "内国勧業博覧会で賞牌"], ["1962", "山本製陶株式会社を設立"], ["1972", "株式会社華山へ社名変更"], ["現在", "伝統技術に新しい技術と感覚を重ねる"]],
  en: [["1796", "Opened as an official kiln of the Nabeshima domain"], ["1887-1890", "Produced and dedicated large ceramic lanterns to three major shrines"], ["1893", "Received an award at the international exposition in Chicago"], ["1895", "Received an award at Japan's National Industrial Exhibition"], ["1962", "Yamamoto Ceramics Co., Ltd. established"], ["1972", "Company name changed to Kazan Co., Ltd."], ["Today", "Inherited technique continues with new technology and sensibility"]],
  "zh-TW": [["1796", "以鍋島藩御用窯身分開窯"], ["1887-1890", "為住吉大社、北野天滿宮與金刀比羅宮製作並奉納大型陶磁燈籠"], ["1893", "於芝加哥國際展覽會獲獎"], ["1895", "於日本內國勸業博覽會獲獎"], ["1962", "成立山本製陶株式会社"], ["1972", "公司更名為株式会社華山"], ["今日", "在傳統技術上持續加入新技術與新感受"]]
};

export function HeritagePage() {
  const { language } = useApp();
  const t = content[language];
  const timeline = timelines[language];
  return (
    <div className="heritage-page">
      <section className="heritage-hero page-section">
        <div><span>ARITA, SAGA</span><h1>{t.title}</h1><p>{t.lead}</p></div>
        <img src="/images/balloon-plate.jpg" alt="華山 reference vessel" />
      </section>
      <section className="heritage-narrative page-section">
        <p className="large-copy">{t.body}</p>
        <blockquote>{t.philosophy}</blockquote>
      </section>
      <section className="timeline page-section">
        {timeline.map(([year, text]) => <div className="timeline-row" key={year}><strong>{year}</strong><p>{text}</p></div>)}
      </section>
      <section className="heritage-source page-section"><p>{t.source}</p><a href="https://aritakazan.com/about.html" target="_blank" rel="noreferrer">株式会社華山 公式沿革</a></section>
    </div>
  );
}
