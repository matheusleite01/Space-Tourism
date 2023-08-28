import { Bellefair, Barlow_Condensed } from "next/font/google";

const bellefair = Bellefair({
  weight: "400",
  subsets: ["latin"],
});

const barlow = Barlow_Condensed({
  weight: ["400", '700'],
  subsets: ["vietnamese"],
});

export const theme = {
  color: {
    colorBlack: "#0B0D17",
    colorWhite: " #FFFFFF",
    colorNeutral: "#D0D6F9",
  },
  font: {
    family: {
      barlow: bellefair.style.fontFamily,
      barlowCondensed: barlow.style.fontFamily,
    },
    size: {
    size_150px: "9.375rem",
    size_100px: "6.25rem",
    size_56px: "3.5rem",
    size_32px: "2rem",
    size_28px: "1.75rem",
    size_16px: "1rem",
    size_14px: "0.875rem",
    },
    fontWeight: {
      w400: "400",
      w700: "700"
    }
  },
};

console.log(theme.font.family.barlow)


