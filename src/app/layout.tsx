import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "Yahav Ler | Software Engineer",
  description: "Java • Spring Boot • Microservices • Android • SQL",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen bg-[radial-gradient(900px_circle_at_15%_0%,rgba(244,114,182,0.14),transparent_40%),radial-gradient(900px_circle_at_100%_10%,rgba(168,85,247,0.12),transparent_35%)] text-slate-900 antialiased">
        {children}
      </body>
    </html>
  );
}
