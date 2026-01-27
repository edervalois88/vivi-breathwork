import type { Metadata } from "next";
import { Outfit, DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CallToActionSticky from "@/components/CallToActionSticky";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });
const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm" });

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
    <html lang="es" data-theme="winter" className="scroll-smooth">
      <body className={`${dmSans.className} ${outfit.variable} ${dmSans.variable} font-sans`}>
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
