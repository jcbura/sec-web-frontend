import "./globals.css";
import { Inter } from "next/font/google";
import { Teko } from "next/font/google";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });
const teko = Teko({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SEChedules",
  description: "The college football schedules of all 16 SEC teams.",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body className={`${teko.className} tracking-wide`}>{children}</body>
    </html>
  );
};

export default RootLayout;
