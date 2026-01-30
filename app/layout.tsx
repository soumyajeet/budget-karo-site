import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Budget Karo - Smart Personal Finance & Budgeting App",
    template: "%s | Budget Karo",
  },
  description:
    "Budget Karo helps you track expenses, manage budgets, and achieve financial goals with smart money management tools.",
  keywords: [
    "budget app",
    "personal finance",
    "money management",
    "expense tracker",
    "budgeting tools",
    "financial planning",
    "save money",
    "income management",
  ],
  applicationName: "Budget Karo",
  authors: [{ name: "Budget Karo" }],
  creator: "Budget Karo",
  publisher: "Budget Karo",
  metadataBase: new URL("https://www.budgetkaro.app"),
  openGraph: {
    title: "Budget Karo - Smart Personal Finance & Budgeting App",
    description:
      "Master your finances with Budget Karo. Track expenses, create budgets, and achieve financial goals with ease.",
    url: "https://www.budgetkaro.app",
    siteName: "Budget Karo",
    type: "website",
    images: [
      {
        url: "/icon.png",
        width: 1024,
        height: 1024,
        alt: "Budget Karo app icon",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Budget Karo - Smart Personal Finance & Budgeting App",
    description:
      "Master your finances with Budget Karo. Track expenses, create budgets, and achieve financial goals with ease.",
    images: ["/icon.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
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
        {children}
      </body>
    </html>
  );
}
