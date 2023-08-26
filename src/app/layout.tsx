'use client'
import { Inter } from "next/font/google";
import StyledComponentsRegistry from "./registry";
import GlobalStyle from '../styles/global';

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <GlobalStyle/>
          {children}
          </StyledComponentsRegistry>
        </body>
    </html>
  );
}
