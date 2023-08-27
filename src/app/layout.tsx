"use client";
import { Bellefair, Barlow_Condensed } from "next/font/google";
import StyledComponentsRegistry from "./registry";
import GlobalStyle from "../styles/global";
import { ThemeProvider } from "styled-components";
import { theme } from "@/styles/theme";

const bellefair = Bellefair({
  weight: "400",
  subsets:["latin"]
})

const barlow = Barlow_Condensed({
  weight: "400",
  subsets:["latin"]
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={bellefair.className}>
        <ThemeProvider theme={theme}>
          <StyledComponentsRegistry>
            <GlobalStyle />
            {children}
          </StyledComponentsRegistry>
        </ThemeProvider>
      </body>
    </html>
  );
}
