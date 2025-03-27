import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Header from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "MyMovie",
  description: "A movie app based on The Movie Database API",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main className="mb-20">
          {children}
        </main>
        <footer className="fixed bottom-0 w-full">
          <nav className="p-4 bg-blue-200">
            <ul className="flex justify-between">
              <li><Link href="#">X</Link></li>
              <li><Link href="#">X</Link></li>
              <li><Link href="#">X</Link></li>
            </ul>
          </nav>
        </footer>
      </body>
    </html>
  );
}
