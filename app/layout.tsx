import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";

import { Rubik } from "next/font/google";
import "./globals.css";

const fontSans = Rubik({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.stevenmckinnon.co.uk"),
  title: {
    default: `Steve McKinnon`,
    template: `%s | Steve McKinnon`,
  },
  description:
    "Bio site for Steve McKinnon, a photographer and camera operator based in Glasgow.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#000000" },
    ],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: `Steve McKinnon`,
    description:
      "Bio site for Steve McKinnon, a photographer and camera operator based in Glasgow.",
    url: "https://www.stevenmckinnon.co.uk",
    siteName: `Steve McKinnon`,
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: `Steve McKinnon`,
    card: "summary_large_image",
  },
  verification: {
    google: "",
    yandex: "",
  },
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" className="dark">
      <head>
        <meta name="theme-color" content="var(--background)" />
      </head>
      <body className={`${fontSans.className} dark:bg-black dark:text-white`}>
        <div className="fixed inset-0 -z-10 h-full w-full">
          <div className="relative h-full w-full">
            <div
              className="absolute -top-40 -right-20 h-[500px] w-[500px] rounded-full bg-gradient-to-r from-blue-600 to-teal-400 opacity-20 blur-[100px] animate-pulse"
              style={{ animationDuration: "8s" }}
            ></div>
            <div
              className="absolute top-1/2 left-1/3 h-[400px] w-[400px] rounded-full bg-gradient-to-r from-cyan-500 to-emerald-500 opacity-20 blur-[100px] animate-pulse"
              style={{ animationDuration: "10s" }}
            ></div>
            <div
              className="absolute -bottom-40 -left-20 h-[500px] w-[500px] rounded-full bg-gradient-to-r from-blue-500 to-green-400 opacity-20 blur-[100px] animate-pulse"
              style={{ animationDuration: "12s" }}
            ></div>
          </div>
        </div>
        <main className="min-h-screen relative z-0">{children}</main>
        <Analytics />
      </body>
    </html>
  );
};

export default RootLayout;
