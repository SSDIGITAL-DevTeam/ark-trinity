import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Montserrat } from "next/font/google";
import { Suspense } from "react";
import "./globals.css";
import DrawerLayout from "@/components/layout/drawer-layout";
import ProgressBar from "@/components/ui/progress-bar";

import ComingSoonOverlay from "@/components/ComingSoonOverlay";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
  ? new URL(process.env.NEXT_PUBLIC_BASE_URL)
  : new URL("http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: baseUrl,
  title: {
    default: "ARK Trinity | The Future of AI Capital",
    template: "%s | ARK Trinity",
  },
  description:
    "ARK Trinity is the region's first integrated AI holding company, uniting Digital, Capital, and AI into a single scalable engine.",
  keywords: [
    "AI Capital",
    "Venture Builder",
    "Investment",
    "Southeast Asia",
    "Artificial Intelligence",
    "ARK Trinity",
  ],
  authors: [{ name: "ARK Trinity" }],
  creator: "ARK Trinity",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "ARK Trinity | The Future of AI Capital",
    description:
      "Uniting Digital, Capital, and AI into a single scalable engine.",
    siteName: "ARK Trinity",
    images: [
      {
        url: "/images/bg.png",
        width: 1200,
        height: 630,
        alt: "ARK Trinity - Building Empires of Intelligence",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ARK Trinity | The Future of AI Capital",
    description:
      "Uniting Digital, Capital, and AI into a single scalable engine.",
    images: ["/images/bg.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isComingSoon = process.env.NEXT_PUBLIC_COMING_SOON === "true";
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" sizes="any" />
      </head>
      <body
        className={`${plusJakartaSans.variable} ${montserrat.variable} antialiased`}
      >
        {isComingSoon ? (
          <ComingSoonOverlay />
        ) : (
          <>
            <Suspense fallback={null}>
              <ProgressBar />
            </Suspense>
            <DrawerLayout>{children}</DrawerLayout>
          </>
        )}
      </body>
    </html>
  );
}
