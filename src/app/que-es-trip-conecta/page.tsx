import type { Metadata } from "next";
import QueEsClient from "./QueEsClient";

export const metadata: Metadata = {
  title: "¿Qué es Trip Conecta? | Consultoría Estratégica y Comunidad de Agentes",
  description: "Trip Conecta es una firma de consultoría B2B para agencias de viajes y un ecosistema de formación para agentes independientes. Conocé nuestro modelo, respaldo AUDAVI y delimitación de responsabilidades.",
  alternates: {
    canonical: "/que-es-trip-conecta",
  },
};

export default function QueEsPage() {
  return <QueEsClient />;
}
