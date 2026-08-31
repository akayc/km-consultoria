import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KM Consultoria em Serviços Médicos e de Saúde",
  description: "Preview build.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className="antialiased">
      <body>{children}</body>
    </html>
  );
}
