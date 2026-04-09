import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://tripconecta.com"),
  title: "Trip Conecta | Comunidad consultora para agentes y agencias de viajes",
  description: "Transformamos el conocimiento técnico en resultados comerciales reales. Certificación Amadeus, desarrollo comercial y tecnología para el sector turístico desde 2006.",
  keywords: ["curso agente de viajes", "aprender amadeus", "certificación amadeus", "turismo uruguay", "agencia de viajes", "capacitación turismo", "trip conecta"],
  openGraph: {
    title: "Trip Conecta | Comunidad consultora para agentes de viajes",
    description: "Certificación Amadeus, desarrollo comercial y tecnología para el sector turístico.",
    url: "https://tripconecta.com",
    siteName: "Trip Conecta",
    locale: "es_UY",
    type: "website",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-UY">
      <body className={inter.className}>
        <div className="gradient-bg"></div>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
