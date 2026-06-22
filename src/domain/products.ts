import { publicAssetUrl } from "./assets";
import type { Language } from "./markets";

export type LocalizedText = Record<Language, string>;

export interface ConditionReport {
  type: string;
  location: string;
  visibility: "subtle" | "visible";
  functionalImpact: "none";
  foodContactArea: boolean;
  note: LocalizedText;
}

export interface Product {
  id: string;
  slug: string;
  name: LocalizedText;
  category: LocalizedText;
  description: LocalizedText;
  usage: LocalizedText;
  image: string;
  sourceUrl: string;
  priceUsd: number;
  sampleStock: number;
  dimensions: string;
  weightGrams: number;
  condition: ConditionReport;
}

export const products: Product[] = [
  {
    id: "KZ-DEMO-01",
    slug: "balloon-flower-plate",
    name: { ja: "色鍋島 風船六寸皿", en: "Balloon Motif Six-Sun Plate", "zh-TW": "色鍋島風船紋六寸皿" },
    category: { ja: "中皿", en: "Medium plate", "zh-TW": "中皿" },
    description: {
      ja: "花形の輪郭に、毬を思わせる色鍋島の絵付け。前菜から煮魚まで、余白を美しく残します。",
      en: "A flower-shaped plate with a festive Iro-Nabeshima motif, composed to leave deliberate space around the dish.",
      "zh-TW": "花形輪廓搭配色鍋島風格紋樣，能為前菜、刺身與煮魚留下漂亮的盤面餘白。"
    },
    usage: { ja: "前菜・刺身・煮魚", en: "Appetizer, sashimi, simmered fish", "zh-TW": "前菜、刺身、煮魚" },
    image: publicAssetUrl("/images/balloon-plate.jpg"),
    sourceUrl: "https://store.shopping.yahoo.co.jp/hanaemishop/6-087.html",
    priceUsd: 22,
    sampleStock: 8,
    dimensions: "Ø 180 × H 33 mm",
    weightGrams: 320,
    condition: {
      type: "glaze variation",
      location: "outer rim, 2 o'clock",
      visibility: "subtle",
      functionalImpact: "none",
      foodContactArea: false,
      note: {
        ja: "外縁に淡い釉薬の濃淡があります。使用面には影響しません。",
        en: "A subtle shift in glaze tone appears on the outer rim. The serving surface is unaffected.",
        "zh-TW": "外緣有輕微釉色濃淡差異，不影響盛裝與正常使用。"
      }
    }
  },
  {
    id: "KZ-DEMO-02",
    slug: "camellia-rectangular-plate",
    name: { ja: "山茶花 長角焼皿", en: "Camellia Long Plate", "zh-TW": "山茶花長角燒物皿" },
    category: { ja: "焼皿", en: "Long plate", "zh-TW": "長角皿" },
    description: {
      ja: "山茶花を余白の中に描いた長角皿。焼魚や串物を端正に受け止めます。",
      en: "A long plate with hand-painted camellia, proportioned for grilled fish, skewers, and seasonal sashimi.",
      "zh-TW": "以山茶花留白構圖的長角皿，適合烤魚、串物與季節刺身。"
    },
    usage: { ja: "焼魚・串物・刺身", en: "Grilled fish, skewers, sashimi", "zh-TW": "烤魚、串物、刺身" },
    image: publicAssetUrl("/images/camellia-plate.jpg"),
    sourceUrl: "https://store.shopping.yahoo.co.jp/hanaemishop/6-041.html",
    priceUsd: 27,
    sampleStock: 5,
    dimensions: "W 230 × D 110 × H 25 mm",
    weightGrams: 320,
    condition: {
      type: "painting offset",
      location: "camellia stem, right side",
      visibility: "visible",
      functionalImpact: "none",
      foodContactArea: true,
      note: {
        ja: "絵付けの線が基準位置からわずかに外れています。表面は平滑です。",
        en: "One painted line sits slightly outside the first-grade reference position. The surface remains smooth.",
        "zh-TW": "一處繪付線條稍偏離一級品參考位置，器面仍平滑完整。"
      }
    }
  },
  {
    id: "KZ-DEMO-03",
    slug: "celadon-carved-bowl",
    name: { ja: "青磁 唐草彫小鉢", en: "Celadon Arabesque Bowl", "zh-TW": "青磁唐草雕小缽" },
    category: { ja: "小鉢", en: "Small bowl", "zh-TW": "小缽" },
    description: {
      ja: "青磁の静かな色調と唐草彫。先付や取り鉢として料理の色を引き立てます。",
      en: "Quiet celadon over carved arabesque, sized for an amuse-bouche, side dish, or shared table setting.",
      "zh-TW": "青磁釉色覆於唐草雕紋之上，適合先付、小菜與分食料理。"
    },
    usage: { ja: "先付・煮物・取り鉢", en: "Amuse-bouche, nimono, side dish", "zh-TW": "先付、煮物、分食" },
    image: publicAssetUrl("/images/celadon-bowl.jpg"),
    sourceUrl: "https://store.shopping.yahoo.co.jp/hanaemishop/8-33.html",
    priceUsd: 18,
    sampleStock: 10,
    dimensions: "Ø 130 × H 45 mm",
    weightGrams: 175,
    condition: {
      type: "kiln speck",
      location: "outer wall, lower third",
      visibility: "subtle",
      functionalImpact: "none",
      foodContactArea: false,
      note: {
        ja: "外側下部に小さな鉄粉点が一箇所あります。内面にはありません。",
        en: "A small kiln speck appears on the lower outer wall. The interior is clear.",
        "zh-TW": "外側下方有一處細小窯點，內部盛裝面無異常。"
      }
    }
  },
  {
    id: "KZ-DEMO-04",
    slug: "white-porcelain-carved-bowl",
    name: { ja: "白磁 唐草彫多用鉢", en: "White Porcelain Carved Bowl", "zh-TW": "白磁唐草雕多用缽" },
    category: { ja: "多用鉢", en: "Multi-use bowl", "zh-TW": "多用缽" },
    description: {
      ja: "白磁に浮かぶ唐草彫が、出汁や旬の色を静かに支える多用鉢です。",
      en: "Carved white porcelain designed to hold broth, seasonal color, and restrained modern plating.",
      "zh-TW": "白磁上的唐草雕紋能安靜承托高湯、時令食材與現代擺盤。"
    },
    usage: { ja: "煮物・汁物・小丼", en: "Nimono, broth, small rice dish", "zh-TW": "煮物、湯品、小丼" },
    image: publicAssetUrl("/images/white-bowl.jpg"),
    sourceUrl: "https://store.shopping.yahoo.co.jp/hanaemishop/12363.html",
    priceUsd: 20,
    sampleStock: 7,
    dimensions: "Ø 145 × H 50 mm",
    weightGrams: 236,
    condition: {
      type: "form variation",
      location: "rim profile",
      visibility: "subtle",
      functionalImpact: "none",
      foodContactArea: false,
      note: {
        ja: "口縁の真円からごく軽い揺らぎがあります。卓上での安定性に影響はありません。",
        en: "The rim has a slight deviation from the first-grade circular profile. Table stability is unaffected.",
        "zh-TW": "口緣輪廓有極輕微偏差，不影響桌面穩定與正常使用。"
      }
    }
  },
  {
    id: "KZ-DEMO-05",
    slug: "blue-silver-oval-bowl",
    name: { ja: "ブルー釉 銀彩多用鉢", en: "Blue Glaze Silver Bowl", "zh-TW": "藍釉銀彩多用缽" },
    category: { ja: "変形鉢", en: "Oval bowl", "zh-TW": "橢圓缽" },
    description: {
      ja: "深いブルー釉と銀彩の光が、和洋を問わず料理の輪郭を際立たせます。",
      en: "Deep blue glaze with a silver-toned rim, suited to contemporary Japanese and Western plating.",
      "zh-TW": "深藍釉色搭配銀彩邊緣，適合當代日式與西式料理擺盤。"
    },
    usage: { ja: "前菜・サラダ・デザート", en: "Starter, salad, dessert", "zh-TW": "前菜、沙拉、甜點" },
    image: publicAssetUrl("/images/blue-bowl.jpg"),
    sourceUrl: "https://store.shopping.yahoo.co.jp/hanaemishop/12-12.html",
    priceUsd: 25,
    sampleStock: 6,
    dimensions: "Ø 165 × H 55 mm",
    weightGrams: 255,
    condition: {
      type: "silver finish variation",
      location: "rim, 7 o'clock",
      visibility: "visible",
      functionalImpact: "none",
      foodContactArea: false,
      note: {
        ja: "銀彩の縁に細い色抜けがあります。釉面の欠けではありません。",
        en: "A narrow break in the silver finish appears on the rim. The glaze beneath is intact.",
        "zh-TW": "銀彩邊緣有一處細微色差，底層釉面完整，並非缺口。"
      }
    }
  },
  {
    id: "KZ-DEMO-06",
    slug: "clematis-basket-bowl",
    name: { ja: "鉄仙花 バスケット鉢", en: "Clematis Basket Bowl", "zh-TW": "鐵線花籃形缽" },
    category: { ja: "変形鉢", en: "Handled bowl", "zh-TW": "提籃形缽" },
    description: {
      ja: "鉄仙花を描いた取手付きの器。果物や菓子、季節の盛り合わせに立体感を生みます。",
      en: "A handled basket form painted with clematis, giving height to fruit, sweets, or a seasonal arrangement.",
      "zh-TW": "帶把手的籃形器物繪有鐵線花，適合水果、菓子與季節拼盤。"
    },
    usage: { ja: "果物・菓子・盛り合わせ", en: "Fruit, sweets, seasonal arrangement", "zh-TW": "水果、菓子、季節拼盤" },
    image: publicAssetUrl("/images/clematis-basket.jpg"),
    sourceUrl: "https://store.shopping.yahoo.co.jp/hanaemishop/12-72.html",
    priceUsd: 34,
    sampleStock: 4,
    dimensions: "Ø 193 × H 58 mm",
    weightGrams: 367,
    condition: {
      type: "glaze pooling",
      location: "underside of left handle",
      visibility: "visible",
      functionalImpact: "none",
      foodContactArea: false,
      note: {
        ja: "左取手の裏側に釉薬の溜まりがあります。把持と安定性に影響はありません。",
        en: "A visible glaze pool sits beneath the left handle. Grip and stability are unaffected.",
        "zh-TW": "左側把手下方有可見釉藥積聚，不影響握持與穩定性。"
      }
    }
  }
];

export function getProduct(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}
