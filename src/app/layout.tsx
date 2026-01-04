import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ClerkProvider } from '@clerk/nextjs'
import "./globals.css";
import { LanguageProvider } from "@/lib/language-context";
import UserSync from "@/components/UserSync";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DentWise AI Powered Dental Assistant",
  description: "Get instant dental advice through voice calls with our AI assistant. Available 24/7 for your dental queries.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      appearance={{
        variables: {
          colorPrimary: "#e78a53",
          colorBackground: "#f3f4f6",
          colorText: "#111827",
          colorTextSecondary: "#6b7280",
          colorInputBackground: "#f3f4f6",
        },
      }}
    >
      <html lang="en">
        <body
          suppressHydrationWarning
          className={`${geistSans.variable} ${geistMono.variable} antialiased dark`}
        >
          <UserSync />
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
