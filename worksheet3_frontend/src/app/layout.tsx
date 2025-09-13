import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.css"; // 引入Bootstrap CSS
import "./globals.css";
import BootstrapClient from "@/components/BootstrapClient"; // 引入BootstrapClient

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = { title: "Book App", description: "MNNN Stack Book App" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <BootstrapClient /> {/* 加载Bootstrap JS */}
        {children}
      </body>
    </html>
  );
}