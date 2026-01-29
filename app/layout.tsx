import type { Metadata } from "next";
import { Instrument_Serif, Public_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CallToActionSticky from "@/components/CallToActionSticky";

const instrument = Instrument_Serif({ 
  weight: "400", 
  subsets: ["latin"], 
  style: ["normal", "italic"],
  variable: "--font-instrument" 
});
const publicSans = Public_Sans({ subsets: ["latin"], variable: "--font-public" });

export const metadata: Metadata = {
  title: "Vivi Breathwork | Bienestar y Alto Rendimiento",
  description: "Sesiones de respiración consciente 1 a 1 y programas de bienestar corporativo.",
};

import BreathingBackground from "@/components/BreathingBackground";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body suppressHydrationWarning={true} className={`${publicSans.className} ${instrument.variable} ${publicSans.variable} font-sans antialiased text-base-content bg-base-100`}>
        <BreathingBackground />
        <Header />
        <main className="min-h-screen relative overflow-hidden">
            {children}
        </main>
        <Footer />
        <CallToActionSticky />
      </body>
    </html>
  );
}
