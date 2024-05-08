import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nelson's Digital Garden",
  description: "☆*: .｡. o(≧▽≦)o .｡.:*☆",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn("min-h-screen antialiased", inter.className)}
        suppressHydrationWarning={true}
      >
        <div className="relative flex min-h-screen flex-col">
          <Header />
          <main className="flex-1 border-b">
            <div className="container">{children}</div>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
