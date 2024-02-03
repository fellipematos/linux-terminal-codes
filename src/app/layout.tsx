import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/themes-provider";
import ThemeSwitcher from "@/components/theme-switcher";

const roboto = Roboto({ weight:"400", subsets: ["latin"] });

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
      <body className={roboto.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ThemeSwitcher />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
