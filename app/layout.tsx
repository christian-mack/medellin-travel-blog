import "./globals.css";
import Footer from "@/components/Footer";
import Subscribe from "@/components/Subscribe";
import Header from "@/components/Header";
import { Archivo } from "@next/font/google";

const archivo = Archivo({
  subsets: ["latin"],
  display: "swap",
});

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
    <html lang="en" className={archivo.className}>
      <body className="bg-background text-foreground">
        <Header />
        <main className="flex flex-col items-center">{children}</main>
        <Subscribe />
        <Footer />
      </body>
    </html>
  );
}
