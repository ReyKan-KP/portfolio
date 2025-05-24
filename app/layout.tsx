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
  description: "Kanishaka Pranjal's Portfolio",
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
