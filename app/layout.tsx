import type { Metadata } from "next";
import { Prompt } from "next/font/google";
import "./Styles/globals.css";

const prompt = Prompt({
  weight: '400',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "Portafolio Web",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={prompt.className}>{children}</body>
    </html>
  );
}
