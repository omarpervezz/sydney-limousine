import type { Metadata } from "next";
import { roboto } from "@/lib/font";
import "./globals.css";
import Topheader from "@/components/topheader";
import Header from "@/components/navbar";
import AppSection from "@/components/appsection";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Sydney Limousine Service",
  description: "Sydney Limousine Service",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} overflow-x-hidden`}>
        <Topheader />
        <Header />
        {children}
        <AppSection />
        <Footer />
      </body>
    </html>
  );
}
