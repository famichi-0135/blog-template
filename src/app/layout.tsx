import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Famichi Blog",
  description:
    "日々、ITに関する様々な事柄を勉強する中での備忘録や考察を綴ったブログです。",
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-scre`}
      >
        <Header />
        <main className="flex-grow container mx-auto px-5 py-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
