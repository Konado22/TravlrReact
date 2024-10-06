//============================================================================
// Name        : layout.tsx
// Author      : Jesse Draper
// Version     : 1.0
// Copyright   : Copyright © 2017 SNHU COCE
// Description : tailwind global css layout for root directory
//============================================================================
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
//main layout page
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Travler Application",
  description: "A travel project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-blue-600 bg-blend-darken`}
      >
        {children}
      </body>
    </html>
  );
}
//main layout page
