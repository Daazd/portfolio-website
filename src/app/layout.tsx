import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: "Taylor Allen | Full-Stack Developer & Cloud Engineer",
  description: "Portfolio of Taylor Allen — Full-Stack Developer & Cloud Engineer specializing in cloud architecture, machine learning, and web development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#0a0a0f] text-slate-200">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
