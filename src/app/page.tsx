import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "Trip Conecta | Comunidad consultora para agentes y agencias de viajes",
  description: "Transformamos el conocimiento técnico en resultados comerciales reales. Certificación Amadeus, desarrollo comercial y tecnología para el sector turístico desde 2006.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return <HomeClient />;
}
