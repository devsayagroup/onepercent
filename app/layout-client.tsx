"use client";
import { useEffect, useState } from "react";
import { Cinzel, Poppins, Inter} from "next/font/google";
import "@/styles/globals.css";
import SmoothScroll from "@/components/ui/SmoothScroll";
import Loading from "./loading";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const styleFont = Cinzel({
  variable: "--font-style",
  subsets: ["latin"],
});

const textFont = Inter({
  variable: "--font-text",
  subsets: ["latin"],
  weight:["100", '200', '300', '400', '500', '600', '700', '800', '900']
});

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className={`${styleFont.variable} ${textFont.variable} font-text antialiased`}>
        {loading ? (
            <Loading />
        ) : (
            <>
            <Header />
            
            <SmoothScroll>{children}</SmoothScroll>
            <Footer />
            </>
        )}
    </div>
  );
}
