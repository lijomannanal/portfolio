import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Provider } from "./provider";
import { GoogleAnalytics } from '@next/third-parties/google';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lijo Thomas - Full Stack Developer",
  description:
    "Welcome to my portfolio! I'm Lijo Thomas, a passionate Full Stack Developer with expertise in React, Next.js, Node.js, and more. Explore my projects, skills, and experience in web development. Let's build something amazing together!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`}
      >
        <Provider>{children}</Provider>
      </body>
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID as string} />
    </html>
  );
}
