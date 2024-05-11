import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Digital Garden",
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
        className={cn(
          "flex min-h-screen flex-col antialiased",
          inter.className,
        )}
        suppressHydrationWarning={true}
      >
        <Header />
        <main className="flex flex-1 border-b">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
