import "./globals.css";

import { GoogleTagManager } from "@next/third-parties/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { bebas } from "./fonts";
import { ThemeProvider } from "@/utils/theme-provider";

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
        <main className="flex">
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </main>
        <SpeedInsights />
        <Analytics />
      </body>
      <GoogleTagManager gtmId="GTM-K646DZ9C" />
    </html>
  );
}
