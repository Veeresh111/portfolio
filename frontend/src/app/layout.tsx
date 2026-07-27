import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { clsx } from "clsx";
import AIChatbot from "@/components/AIChatbot";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Veeresh Mulge | Full Stack & AI Engineer",
  description: "Personal brand platform and portfolio of Veeresh Mulge, showcasing premium software engineering, AI, and full-stack development skills.",
  keywords: ["Veeresh Mulge", "Software Engineer", "AI", "Full Stack", "Portfolio"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark h-full antialiased selection:bg-primary selection:text-primary-foreground scroll-smooth">
      <body className={clsx("min-h-full flex flex-col bg-background text-foreground font-sans", inter.variable, outfit.variable)}>
        {children}
        <AIChatbot />
      </body>
    </html>
  );
}
