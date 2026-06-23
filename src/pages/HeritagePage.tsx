import { Link } from "react-router-dom";
import { publicAssetUrl } from "../domain/assets";
import { useApp } from "../state/AppContext";

type Language = "ja" | "en" | "zh-TW";

const content: Record<Language, {
  heroLabel: string;
  title: string;
  lead: string;
  heroMarks: string[];
  imageCaption: string;
  chapterLabel: string;
  aritaTitle: string;
  aritaBody: string;
  kazanTitle: string;
  kazanBody: string;
  philosophy: string;
  archiveTitle: string;
  archiveIntro: string;
  cultureTitle: string;
  cultureItems: { title: string; body: string }[];
  secondTitle: string;
  secondBody: string;
  collectionLink: string;
  source: string;
  sourceLink: string;
  imageCredit: string;
}> = {
  ja: {
    heroLabel: "華山と有田焼の沿革",
    title: "華山と有田",
    lead: "四百年の磁器文化と、1796年から続く華山の窯業。",
    heroMarks: ["1796 鍋島藩御用窯", "1893 シカゴ国際展覧会", "1972 株式会社華山"],
    imageCaption: "有田内山の町並み。窯業、商家、職人の時間が重なる場所。",
    chapterLabel: "KAZAN ARITA",
    aritaTitle: "有田という土地が、磁器の時間をつくった。",
    aritaBody: "有田は日本の磁器文化を代表する産地です。白磁の余白、染付の藍、赤絵の華やぎ。山あいの町に窯、商家、職人の技が集まり、伊万里港を通じて海外へも渡った器の文化が育ちました。",
    kazanTitle: "華山は、産地の歴史を暮らしの器へつなぐ窯元です。",
    kazanBody: "華山は寛政八年、1796年に鍋島藩の御用窯として開窯しました。大物陶磁器から割烹用食器、家庭用食器、美術陶磁器まで、時代の食卓と空間に向き合いながら技術と感覚を更新してきました。",
    philosophy: "伝統は、保管されるだけでは続かない。料理人の手に渡り、客席の時間に置かれて、器はもう一度その役割を得ます。",
    archiveTitle: "華山の歩み",
    archiveIntro: "公式沿革に記された節目を、海外の料理人へ伝えるための短い記録として再構成しています。",
    cultureTitle: "器を見る前に、背景を見る。",
    cultureItems: [
      { title: "白磁の余白", body: "料理の色を受け止める静かな白。盛り付けの余白を、器の一部として扱います。" },
      { title: "染付の藍", body: "有田の印象を形づくる藍。料理の輪郭を締め、食卓に清潔な緊張感を与えます。" },
      { title: "割烹の寸法感", body: "一客の深さ、縁の立ち上がり、高台の手触り。料理人が使う場面から器を読みます。" },
      { title: "Second Selection", body: "一級品基準に届かなかった差異を隠さず記録し、使う価値のある器として丁寧に紹介します。" }
    ],
    secondTitle: "販売より先に、理解を置く。",
    secondBody: "この Demo では、コレクションは文化ページの後に置いています。華山の名を守るため、価格よりも由来、状態、使い方の説明を先に示します。",
    collectionLink: "選品を見る",
    source: "本ページは株式会社華山の公式沿革と公開参考資料をもとに構成した Demo です。正式公開前に店主確認、素材差し替え、翻訳監修を行います。",
    sourceLink: "株式会社華山 公式沿革",
    imageCredit: "画像: Wikimedia Commons, File:Arita Japan.jpg, Butch, CC BY-SA 4.0"
  },
  en: {
    heroLabel: "Kazan and Arita Ware Chronicle",
    title: "Kazan and Arita",
    lead: "Four centuries of porcelain culture, and Kazan's kiln history since 1796.",
    heroMarks: ["1796 Nabeshima kiln", "1893 Chicago exposition", "1972 Kazan Co., Ltd."],
    imageCaption: "The Uchiyama townscape of Arita, where kilns, merchants, and craft memory meet.",
    chapterLabel: "KAZAN ARITA",
    aritaTitle: "Arita is a place where porcelain became culture.",
    aritaBody: "Arita is one of Japan's defining porcelain districts. White porcelain, blue underglaze, and overglaze decoration developed within a town shaped by kilns, merchants, and skilled hands. Through the port of Imari, its vessels also entered overseas tables and collections.",
    kazanTitle: "Kazan carries that regional history into vessels for daily use.",
    kazanBody: "Kazan opened in 1796 as an official kiln of the Nabeshima domain. From large ceramic works to kappo tableware, household vessels, and ceramic art pieces, the kiln has continued to renew inherited technique for changing tables and spaces.",
    philosophy: "Tradition does not continue by being stored away. It continues when a chef uses it, when it enters a room, and when a vessel receives its role again.",
    archiveTitle: "The Kazan Chronicle",
    archiveIntro: "A concise record based on Kazan's official history, edited for overseas chefs and buyers.",
    cultureTitle: "Before the vessel, understand the ground it comes from.",
    cultureItems: [
      { title: "White space", body: "A quiet porcelain white that receives the color of cuisine and treats negative space as part of plating." },
      { title: "Arita blue", body: "Blue underglaze gives the table a clean tension and frames the contour of food." },
      { title: "Kappo scale", body: "Depth, rim, foot ring, and hand feel are read from the point of view of professional service." },
      { title: "Second Selection", body: "Variations below first-grade visual standards are documented directly and presented only when functional use remains sound." }
    ],
    secondTitle: "Understanding comes before selling.",
    secondBody: "In this demo, the collection sits after the cultural page. To protect Kazan's name, origin, condition, and use come before price.",
    collectionLink: "View selection",
    source: "This demo is based on Kazan's official history and public reference material. Owner review, approved photography, and professional translation are required before public release.",
    sourceLink: "Kazan official history",
    imageCredit: "Image: Wikimedia Commons, File:Arita Japan.jpg, Butch, CC BY-SA 4.0"
  },
  "zh-TW": {
    heroLabel: "華山與有田燒沿革",
    title: "華山與有田",
    lead: "四百年的磁器文化，以及華山自 1796 年延續至今的窯業。",
    heroMarks: ["1796 鍋島藩御用窯", "1893 芝加哥國際展覽會", "1972 株式会社華山"],
    imageCaption: "有田內山町屋街景。窯業、商家與職人記憶交會的地方。",
    chapterLabel: "KAZAN ARITA",
    aritaTitle: "有田這片土地，孕育了日本磁器文化。",
    aritaBody: "有田是日本磁器文化的代表產地。白磁的留白、染付的藍、赤繪的華麗，在山間町屋、窯場、商家與職人技藝中逐漸形成。透過伊萬里港，有田器物也曾走向海外餐桌與收藏。",
    kazanTitle: "華山將產地歷史，延續到日常與料理人的器皿中。",
    kazanBody: "華山於寬政八年，也就是 1796 年，以鍋島藩御用窯身分開窯。從大型陶磁器、割烹用食器、家庭用食器到美術陶磁器，持續因應不同時代的餐桌與空間需求，更新傳承技術。",
    philosophy: "傳統不是只靠保存而延續。當器物進入主廚手中，被放置於餐席時間裡，它才重新取得自己的角色。",
    archiveTitle: "華山的沿革",
    archiveIntro: "依據華山官方沿革，整理成海外主廚與採購者容易理解的短篇記錄。",
    cultureTitle: "看器物之前，先理解它的背景。",
    cultureItems: [
      { title: "白磁的留白", body: "安靜承接料理色彩的白。盤面空間不只是背景，也是擺盤的一部分。" },
      { title: "染付之藍", body: "有田印象中的藍，能收束料理輪廓，讓餐桌呈現清潔而克制的張力。" },
      { title: "割烹的尺寸感", body: "深度、口沿、高台與手感，都應從料理人實際使用的場景來閱讀。" },
      { title: "Second Selection", body: "未達一級品外觀標準的差異會被清楚記錄，只介紹不影響正常使用的器物。" }
    ],
    secondTitle: "先建立理解，再進入選品。",
    secondBody: "在這個 Demo 裡，選品頁被放在文化頁之後。為了保護華山之名，我們先說明由來、狀態與使用方式，再呈現價格。",
    collectionLink: "查看選品",
    source: "本 Demo 依據株式会社華山官方沿革與公開參考資料編排。正式公開前需由店主確認、替換正式素材，並完成專業翻譯監修。",
    sourceLink: "株式会社華山官方沿革",
    imageCredit: "圖片: Wikimedia Commons, File:Arita Japan.jpg, Butch, CC BY-SA 4.0"
  }
};

const timelines: Record<Language, { year: string; text: string }[]> = {
  ja: [
    { year: "1796", text: "鍋島藩の御用窯として開窯。大物陶磁器を生産。" },
    { year: "1887-1890", text: "住吉大社、北野天満宮、金刀比羅宮へ陶器製大灯籠を奉納。" },
    { year: "1893", text: "米国シカゴで開催された国際展覧会で賞牌。" },
    { year: "1895", text: "内国勧業博覧会で賞牌。" },
    { year: "1962", text: "山本製陶株式会社を設立。" },
    { year: "1969", text: "ガス窯を導入し、本焼成の品質安定と納期短縮を進める。" },
    { year: "1972", text: "株式会社華山へ社名変更。華山展示場を開設。" },
    { year: "現在", text: "伝統技術に新しい技術と感覚を重ね、食器と美術陶磁器を製作。" }
  ],
  en: [
    { year: "1796", text: "Opened as an official kiln of the Nabeshima domain, producing large ceramic works." },
    { year: "1887-1890", text: "Produced and dedicated large ceramic lanterns to Sumiyoshi Taisha, Kitano Tenmangu, and Kotohira-gu." },
    { year: "1893", text: "Received an award at the international exposition held in Chicago." },
    { year: "1895", text: "Received an award at Japan's National Industrial Exhibition." },
    { year: "1962", text: "Yamamoto Ceramics Co., Ltd. was established." },
    { year: "1969", text: "Introduced gas kilns to stabilize main firing quality and shorten delivery times." },
    { year: "1972", text: "Changed the company name to Kazan Co., Ltd. and opened the Kazan showroom." },
    { year: "Today", text: "Continues to make tableware and ceramic art with inherited technique, new technology, and fresh sensibility." }
  ],
  "zh-TW": [
    { year: "1796", text: "以鍋島藩御用窯身分開窯，製作大型陶磁器。" },
    { year: "1887-1890", text: "為住吉大社、北野天滿宮與金刀比羅宮製作並奉納陶器製大燈籠。" },
    { year: "1893", text: "於美國芝加哥國際展覽會獲獎。" },
    { year: "1895", text: "於日本內國勸業博覽會獲獎。" },
    { year: "1962", text: "成立山本製陶株式会社。" },
    { year: "1969", text: "導入瓦斯窯，推動本燒成品質穩定與交期縮短。" },
    { year: "1972", text: "更名為株式会社華山，並開設華山展示場。" },
    { year: "今日", text: "在傳統技術上加入新技術與新感受，製作食器與美術陶磁器。" }
  ]
};

export function HeritagePage() {
  const { language } = useApp();
  const t = content[language];
  const timeline = timelines[language];

  return (
    <div className="heritage-page museum-chronicle">
      <section className="heritage-hero page-section">
        <div className="heritage-hero-copy reveal">
          <span>{t.heroLabel}</span>
          <h1>{t.title}</h1>
          <p>{t.lead}</p>
          <div className="hero-archive-marks" aria-label={t.archiveTitle}>
            {t.heroMarks.map((mark) => <small key={mark}>{mark}</small>)}
          </div>
        </div>
        <figure className="heritage-place-image reveal delay-one">
          <img src={publicAssetUrl("/images/arita-uchiyama-townscape.jpg")} alt={t.imageCaption} />
          <figcaption>{t.imageCaption}</figcaption>
        </figure>
      </section>

      <section className="heritage-dual-story page-section">
        <div className="chapter-mark">{t.chapterLabel}</div>
        <article>
          <h2>{t.aritaTitle}</h2>
          <p>{t.aritaBody}</p>
        </article>
        <article>
          <h2>{t.kazanTitle}</h2>
          <p>{t.kazanBody}</p>
        </article>
      </section>

      <section className="heritage-narrative page-section">
        <p className="large-copy">{t.philosophy}</p>
      </section>

      <section className="timeline heritage-archive page-section">
        <div className="archive-intro">
          <h2>{t.archiveTitle}</h2>
          <p>{t.archiveIntro}</p>
        </div>
        <div className="archive-rows">
          {timeline.map((item) => (
            <div className="timeline-row" key={item.year}>
              <strong>{item.year}</strong>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="heritage-culture page-section">
        <h2>{t.cultureTitle}</h2>
        <div className="culture-grid">
          {t.cultureItems.map((item) => (
            <article key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="heritage-source page-section">
        <div>
          <h2>{t.secondTitle}</h2>
          <p>{t.secondBody}</p>
        </div>
        <Link className="button secondary" to="/collection">{t.collectionLink}</Link>
      </section>

      <section className="heritage-reference page-section">
        <p>{t.source}</p>
        <div>
          <a href="https://aritakazan.com/about.html" target="_blank" rel="noreferrer">{t.sourceLink}</a>
          <a href="https://commons.wikimedia.org/wiki/File:Arita_Japan.jpg" target="_blank" rel="noreferrer">{t.imageCredit}</a>
        </div>
      </section>
    </div>
  );
}
