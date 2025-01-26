import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { auth } from "../utils/auth";
import Navbar from "@/components/Navbar";
import TopBar from "@/components/TopBar";
import { Toaster } from "sonner";
import { SessionProvider } from "next-auth/react";

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
  title: "Finora",
  description: "Manage your expenses, income and budget easily",
  authors: [{ name: "Siddhant Jain" }],
  keywords: ["finance", "budget", "expense", "income", "budget tracker", "finance tracker", "manage expenses", "expenses tracker"],
  openGraph: {
    title: "Finora",
    description: "Manage your expenses, income and budget easily",
    url: "https://finora.vercel.app/",
    siteName: "Finora",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/finora-ss.png",
        width: 800,
        height: 600,
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Finora",
    description: "Manage your expenses, income and budget easily",
    images: ["/finora-ss.png"]
  },
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: dark)',
        url: '/finora-icon.png',
        href: '/finora-icon.png',
      }
    ],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased dark pb-20 lg:pb-0 lg:px-20 lg:pt-4`}
      >
        <SessionProvider session={session}>
          {session && <TopBar />}
          {children}
          {session && <Navbar />}
          <Toaster />
        </SessionProvider>
      </body>
    </html>
  );
}
