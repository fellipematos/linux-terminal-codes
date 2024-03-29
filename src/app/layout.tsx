import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/providers/ThemesProvider";
import Header from "@/components/Header"
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Linux Terminal Codes",
  description: "Projeto tem como objetivo facilitar a utilização do terminal no Linux.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>          
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
