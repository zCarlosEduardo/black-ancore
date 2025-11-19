import type { Metadata } from "next";
import "./globals.css";
import { Commissioner } from "next/font/google";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: "Black - Ancore",
  description: 'Ancore BlackFriday: Aproveite descontos exclusivos',
};

const commissioner = Commissioner({
  variable: "--font-commissioner",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className="scroll-smooth">
      <body className={`${commissioner.variable} antialiased font-sans`}>
        <ScrollToTop />
        {children}
      </body>
    </html>
  );
}
