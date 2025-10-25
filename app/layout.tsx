import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "IFFA Awards",
  description:
    "Celebrate cinema excellence with the IFFA Awards. Discover the latest winners, nominations, and festival highlights.",
  // This enables standalone experience when saved to Home Screen on iOS
  appleWebApp: {
    capable: true,
    title: "IFFA Awards",
    statusBarStyle: "black-translucent", 
  },
  icons: {
    apple: "/apple-icon.png", 
  },
  
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased dark`}
      >
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
