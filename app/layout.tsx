import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/providers/theme";
import { Toaster } from "@/components/ui/sonner";
import { SparklesBackground } from "@/components/layout/sparkles-background";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Alaladin's Digital Garden",
  description: "☆*: .｡. o(≧▽≦)o .｡.:*☆",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "flex min-h-screen flex-col antialiased",
          inter.className,
        )}
        suppressHydrationWarning={true}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SparklesBackground />
          <Header />
          <main className="flex flex-1 border-b">{children}</main>
          <Toaster position="top-right" duration={1000} richColors />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
