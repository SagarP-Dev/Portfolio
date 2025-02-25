import { Mona_Sans } from "next/font/google";
import type { Metadata } from "next";
import "@/app/globals.css";
import Header from "@/components/Header"; // ✅ Import the Header component

const monaSans = Mona_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sagar Trushna Panigrahi | Full Stack Developer",
  description: "Welcome to my portfolio website showcasing my projects and skills.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={monaSans.className}>
        <Header /> {/* ✅ Ensure Header is inside the layout */}
        {children}
      </body>
    </html>
  );
}
