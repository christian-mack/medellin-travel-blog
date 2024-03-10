import { GeistSans } from "geist/font/sans";
import "./globals.css";

import { GoogleTagManager } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/react";
import { bebas } from "./fonts";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Medellin Travel Blog",
  description: "The best way to to explore Colombia",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={bebas.className}>
      <body className="bg-background text-foreground">
        <main className="flex">{children}</main>
        <Analytics />
      </body>
      <GoogleTagManager gtmId="GTM-K646DZ9C" />
    </html>
  );
}
