import "./globals.css";
import type { Metadata } from "next";
import { Nunito_Sans, Playfair_Display } from "next/font/google";
import Footer from "@/components/Footer";
import { ScrollToTop } from "@/utils/ScrollToTop";
const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-nunito-sans",
  display: "swap",
  weight: ["400", "600", "700"],
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "MBH Studioo | Design & Architecture Agency in Faisalabad",
  description:
    "MBH Studioo is a leading design and architecture agency based in Faisalabad, near Eden Valley. We specialize in creating modern, functional, and aesthetic spaces for residential and commercial projects.",
  keywords: [
    "MBH Studioo",
    "Design Agency Faisalabad",
    "Architecture Agency",
    "Interior Design Faisalabad",
    "Architects in Faisalabad",
    "Eden Valley Architecture",
    "MBH Faisalabad",
    "Modern Architecture Pakistan",
  ],
  authors: [{ name: "MBH Studioo", url: "https://mbhstudioo.com" }],
  creator: "MBH Studioo",
  publisher: "MBH Studioo",
  metadataBase: new URL("https://mbhstudioo.com"),
  openGraph: {
    title: "MBH Studioo | Modern Design & Architecture in Faisalabad",
    description:
      "Explore premium design and architectural services by MBH Studioo in Faisalabad. Located near Eden Valley at Office No.291, Makkah Commercial Market.",
    url: "https://mbhstudioo.com",
    siteName: "MBH Studioo",
    locale: "en_PK",
    type: "website",
  },
  alternates: {
    canonical: "https://mbhstudioo.com",
  },
  icons: {
    icon: "/icons/mbh.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${nunitoSans.variable} ${playfairDisplay.variable} antialiased`}
      >
        <ScrollToTop />
        {children}
        <Footer />
      </body>
    </html>
  );
}
