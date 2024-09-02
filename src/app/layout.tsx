import type { Metadata } from "next";
import { roboto } from "@/lib/font";
import "./globals.css";
import Topheader from "@/components/topheader";
import Header from "@/components/navbar";
import AppSection from "@/components/appsection";
import Footer from "@/components/footer";
import Loading from "@/components/loading";

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
      <body className={roboto.className}>
        <Topheader />
        <Header />
        {children}
        <AppSection />
        <Footer />
      </body>
    </html>
  );
}
