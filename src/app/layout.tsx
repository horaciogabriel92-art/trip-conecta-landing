import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Trip Conecta | Comunidad consultora para agentes y agencias de viajes",
  description: "Transformamos el conocimiento técnico en resultados comerciales reales. Certificación Amadeus, desarrollo comercial y tecnología para el sector turístico desde 2006.",
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
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
