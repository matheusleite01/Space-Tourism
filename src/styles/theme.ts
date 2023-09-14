import { Bellefair, Barlow_Condensed, Barlow } from "next/font/google";

const bellefair = Bellefair({
  weight: "400",
  subsets: ["latin"],
});

const barlowCondesed = Barlow_Condensed({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const barlow = Barlow({
  weight: "400",
  subsets: ["latin"],
})

export const theme = {
  color: {
    colorBlack: "#0B0D17",
    colorWhite: " #FFFFFF",
    colorNeutral: "#D0D6F9",
  },
  font: {
    family: {
      bellefair: bellefair.style.fontFamily,
      barlowCondensed: barlowCondesed.style.fontFamily,
      barlow: barlow.style.fontFamily
    },
    size: {
      size_150px: "9.375rem",
      size_100px: "6.25rem",
      size_80px: "5rem",
      size_56px: "3.5rem",
      size_40px: "2.5rem",
      size_32px: "2rem",
      size_28px: "1.75rem",
      size_24px: "1.5rem",
      size_20px: "1.25rem",
      size_18px: "1.125rem",
      size_16px: "1rem",
      size_15px: "0.938rem",
      size_14px: "0.875rem",
    },
    fontWeight: {
      w400: "400",
      w700: "700",
    },
    responsiveDevice: {
      w1024:'64rem',
      w760: '47.5rem'
    }
  },
};
