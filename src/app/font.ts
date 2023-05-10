import { Noto_Sans_KR, Poor_Story, East_Sea_Dokdo } from "next/font/google";

export const notoSansKr = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--noto-sans-font",
});

export const eastSeaDokdo = East_Sea_Dokdo({
  subsets: ["latin"],
  weight: "400",
  variable: "--dokdo-font",
});

export const poorStory = Poor_Story({
  subsets: ["latin"],
  weight: "400",
  variable: "--poor-font",
});
