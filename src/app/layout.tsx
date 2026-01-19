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
  metadataBase: new URL('https://vascoverso.com.br'),
  title: {
    default: "Vascoverso - Notícias do Vasco da Gama | Gigante da Colina",
    template: "%s | Vascoverso"
  },
  description: "Portal independente de notícias do Vasco da Gama. Notícias em tempo real, análises, história e tudo sobre o Gigante da Colina. De torcedor para torcedor.",
  keywords: ['Vasco da Gama', 'Vasco', 'CRVG', 'Gigante da Colina', 'notícias Vasco', 'futebol brasileiro', 'Brasileirão', 'São Januário', 'torcida vascaína'],
  authors: [{ name: 'Equipe Vascoverso' }],
  creator: 'Vascoverso',
  publisher: 'Vascoverso',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://vascoverso.com.br',
    siteName: 'Vascoverso',
    title: 'Vascoverso - Portal de Notícias do Vasco da Gama',
    description: 'Portal independente de notícias do Vasco da Gama. De torcedor para torcedor.',
    images: [
      {
        url: '/cruzdemalta.webp',
        width: 512,
        height: 512,
        alt: 'Cruz de Malta - Vasco da Gama',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vascoverso - Notícias do Vasco da Gama',
    description: 'Portal independente de notícias do Vasco da Gama',
    images: ['/cruzdemalta.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://vascoverso.com.br',
  },
  category: 'sports',
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
