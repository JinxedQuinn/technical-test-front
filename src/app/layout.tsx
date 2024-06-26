import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MOVIE NIGHT",
  description: "Which movie will you watch tonight?",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className= {`${inter.className} background bg-no-repeat bg-cover bg-top bg-fixed`}>{children}</body>
    </html>
  );
}