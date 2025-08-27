import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ratoo - Your Local Retail Solution",
  description: "Discover Ratoo, the innovative platform connecting local retailers with customers. Download our app or order by phone for the best local shopping experience.",
  keywords: "Ratoo, local retail, shopping app, local stores, delivery, phone orders",
  authors: [{ name: "Ratoo Team" }],
  openGraph: {
    title: "Ratoo - Your Local Retail Solution",
    description: "Connect with local retailers through our innovative platform. Download the app or call us to get started.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ratoo - Your Local Retail Solution",
    description: "Connect with local retailers through our innovative platform.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`} suppressHydrationWarning>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
