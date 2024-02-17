import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/Footer";
// 다음 프로젝트에서는 layout에 header랑 footer삽입해보기

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "농촌여행 농행동행",
  description: "Generated by 농행동행",
  icons: {
    icon: "./favi.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
