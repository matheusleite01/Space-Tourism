"use client";
import StyledComponentsRegistry from "./registry";
import GlobalStyle from "../styles/global";
import { ThemeProvider } from "styled-components";
import { theme } from "@/styles/theme";
import Header from "@/components/Header/Index";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <StyledComponentsRegistry>
            <GlobalStyle />
            <Header />
            <main>{children}</main>
          </StyledComponentsRegistry>
        </ThemeProvider>
      </body>
    </html>
  );
}
