import { Mona_Sans } from "next/font/google";
import type { Metadata } from "next";
import "@/app/globals.css";


const monaSans = Mona_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sagar Trushna Panigrahi | Full Stack Developer",
  description: "Welcome to my portfolio website showcasing my projects and skills.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={monaSans.className}>{children}</body>
    </html>
  );
}
