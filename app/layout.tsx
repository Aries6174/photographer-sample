import type { Metadata, Viewport } from "next";
import { Caveat, Cormorant_Garamond, Manrope } from "next/font/google";
import { site } from "@/content/site";
import "./globals.css";

// next/font downloads the fonts at build time and serves them from this site,
// so there is no extra request to Google and no layout jump while they load.
const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

// Handwriting font, used only for the polaroid captions.
const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${site.name} | ${site.role}`,
  description: site.description,
  openGraph: {
    title: `${site.name} | ${site.role}`,
    description: site.description,
    images: ["/images/hero.webp"],
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#f5f1ea",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${cormorant.variable} ${manrope.variable} ${caveat.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
