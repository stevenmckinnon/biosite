import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Steve McKinnon | Photographer & Camera Operator",
  description:
    "Biosite for Steve McKinnon, a photographer and camera operator based in Glasgow.",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} dark:bg-black dark:text-white`}>
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
      </body>
    </html>
  );
};

export default RootLayout;
