import type { Metadata } from "next";
import CursoClient from "./CursoClient";

export const metadata: Metadata = {
  title: "Curso Agente de Viajes | Certificación Amadeus - Trip Conecta",
  description: "Conviértete en agente de viajes profesional. Certificación oficial Amadeus + acceso a inventario exclusivo. 5ta generación inicia 20 de Junio de 2026. 100% online.",
  alternates: {
    canonical: "/curso",
  },
};

export default function CursoPage() {
  return <CursoClient />;
}
