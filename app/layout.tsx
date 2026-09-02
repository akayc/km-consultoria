import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KM Consultoria em Serviços Médicos e de Saúde",
  description:
    "Consultoria especializada em gestão, coordenação e execução de serviços de saúde para municípios e unidades públicas e privadas.",
  icons: {
    icon: "/favicon.ico",
    apple: "/icon-512.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${inter.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}