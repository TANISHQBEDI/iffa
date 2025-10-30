import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

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
        className={`font-suese-mono antialiased dark`}
      >
        <Header/>
        <div className="w-full h-full container mx-auto my-5">
          {children}
        </div>
        
        <Footer/>
      </body>
    </html>
  );
}
