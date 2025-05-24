import type { Metadata } from "next";
import { Inter, Calistoga } from "next/font/google";
import "@styles/globals.css";
import { twMerge } from "tailwind-merge";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const calistoga = Calistoga({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Kanishaka Pranjal | Portfolio",
  description: "Kanishaka Pranjal's Portfolio - Full Stack Developer and Designer specialized in creating engaging digital experiences",
  keywords: ["Kanishaka Pranjal", "Portfolio", "Web Developer", "Full Stack Developer", "Designer", "Developer"],
  authors: [{ name: "Kanishaka Pranjal" }],
  creator: "Kanishaka Pranjal",
  publisher: "Kanishaka Pranjal",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://portfolio-kanishaka-pranjal.vercel.app/",
    title: "Kanishaka Pranjal | Portfolio",
    description: "Kanishaka Pranjal's Portfolio - Full Stack Developer and Designer specialized in creating engaging digital experiences",
    siteName: "Kanishaka Pranjal Portfolio",
    images: [
      {
        url: "/images/preview.png",
        width: 1200,
        height: 630,
        alt: "Kanishaka Pranjal Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kanishaka Pranjal | Portfolio",
    description: "Kanishaka Pranjal's Portfolio - Full Stack Developer and Designer",
    images: ["/images/preview.png"],
    creator: "@kanishakapranjal",
  },
  icons: {
    icon: "/images/logo.ico",
    apple: "/images/logo.ico",
  },
  verification: {
    google: "verification_token",
  },
  alternates: {
    canonical: "https://portfolio-kanishaka-pranjal.vercel.app/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/images/logo.ico" />
      </head>
      <body
        className={twMerge(
          inter.variable,
          calistoga.variable,
          "bg-gray-900 text-white antialiased font-sans"
        )}
      >
       
          {children}
          <Analytics />
          <SpeedInsights />
       
      </body>
    </html>
  );
}
