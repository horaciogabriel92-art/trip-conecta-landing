import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Trip Conecta | 20 Años Asesorando Agencias de Viajes",
  description: "Consultora especializada en agencias de viajes. Certificación Amadeus, desarrollo comercial y tecnología para el sector turístico desde 2006.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <div className="gradient-bg"></div>
        <div className="grid-overlay"></div>
        {children}
      </body>
    </html>
  );
}
