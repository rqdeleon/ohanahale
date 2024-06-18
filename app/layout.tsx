import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";

import WebChat from "@/hooks/3x";
import { Toaster } from "@/components/ui/toaster";
import { siteinfo } from "@/siteinfo";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: siteinfo.sitename,
  description: siteinfo.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
    <html lang="en" className="md:scroll-smooth">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <WebChat />
        <Toaster />
      </body>
    </html>
  );
}
