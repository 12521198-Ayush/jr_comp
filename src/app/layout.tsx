import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "JR Compliance - Expert Business Registration & Compliance Services",
  description: "JR Compliance offers comprehensive corporate and technical compliance services including company registration, GST registration, FSSAI license, PSARA license, BIS registration, AERB registration, EPR services, and WPC approval.",
  keywords: "company registration, GST registration, FSSAI license, PSARA license, BIS registration, AERB registration, EPR services, WPC approval, compliance services, business registration India",
  authors: [{ name: "JR Compliance" }],
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "JR Compliance - Expert Business Registration & Compliance Services",
    description: "Your trusted partner for all corporate and technical compliance needs in India.",
    url: "https://jrcompliance.com",
    siteName: "JR Compliance",
    locale: "en_IN",
    type: "website",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
