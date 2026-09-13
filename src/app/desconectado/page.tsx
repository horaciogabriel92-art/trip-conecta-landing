import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Servicio desconectado | Trip Conecta",
  description: "Este servicio se encuentra temporalmente desconectado.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function Desconectado() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-md mx-auto">
        <div className="flex justify-center mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="64"
            height="64"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#dc2626"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M18.36 6.64a9 9 0 1 1-12.73 0" />
            <line x1="12" y1="2" x2="12" y2="12" />
          </svg>
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
          Servicio desconectado
        </h1>
        <p className="text-lg text-gray-600">
          Abone para reconectar.
        </p>
      </div>
    </main>
  );
}
