import { Button } from "@/public/components/atoms/button.atom";
import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { NavBar } from "@/public/components/organisms/navbar.organism";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Golfcaddy 2.0",
  description: "The Improved Golfcaddy",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <NavBar />
        {children}
        </body>
    </html>
  );
}
