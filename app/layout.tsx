import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Dr. Akshay S | AI Research Scientist",
  description:
    "Official portfolio of Dr. Akshay S | Artificial Intelligence | Computer Vision | Healthcare AI | Explainable AI | Eye Tracking",
  keywords: [
    "Artificial Intelligence",
    "Computer Vision",
    "Healthcare AI",
    "Eye Tracking",
    "Explainable AI",
    "Deep Learning",
    "Research Scientist",
    "Machine Learning",
  ],
  authors: [
    {
      name: "Dr. Akshay S",
    },
  ],
  creator: "Dr. Akshay S",
  openGraph: {
    title: "Dr. Akshay S",
    description:
      "AI Research Scientist | Computer Vision | Healthcare AI",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}