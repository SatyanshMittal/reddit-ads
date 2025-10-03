import type { Metadata } from "next";
import { Inter, Montserrat, Manrope } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-subheading",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Smarter Funnels — Premium Growth Systems",
  description:
    "We help growing businesses turn more clicks into customers with smarter funnels, tracking, and automation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-black">
      <body className={`${inter.variable} ${montserrat.variable} ${manrope.variable} antialiased`}>{children}</body>
    </html>
  );
}
