import type { Metadata } from "next";
import { Oswald, Lato } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AdSpace from "@/components/AdSpace";
import GoogleAdsense from "@/components/GoogleAdsense";
import { ThemeProvider } from "@/components/ThemeProvider";
import { SearchProvider } from "@/components/SearchProvider";
import LoadingScreen from "@/components/LoadingScreen";

const oswald = Oswald({
  subsets: ["latin"],
  variable: '--font-oswald',
});

const lato = Lato({
  subsets: ["latin"],
  weight: ['400', '700'],
  variable: '--font-lato',
});

export const metadata: Metadata = {
  title: "Vascoverso - Notícias do Gigante da Colina",
  description: "Fique por dentro de tudo sobre o Vasco da Gama.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`${oswald.variable} ${lato.variable} font-sans antialiased bg-background text-foreground`}
      >
        <GoogleAdsense />
        <LoadingScreen />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SearchProvider>
            {/* Espaços para AdSense nos cantos */}
            <AdSpace position="top-left" />
            <AdSpace position="top-right" />
            <AdSpace position="bottom-left" />
            <AdSpace position="bottom-right" />

            <Header />
            <main className="container mx-auto px-4 2xl:px-56 xl:px-48 py-4 min-h-screen">{children}</main>
            <Footer />
          </SearchProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
