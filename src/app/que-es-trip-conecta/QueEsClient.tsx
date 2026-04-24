"use client";

import {
  ArrowRight,
  Building2,
  GraduationCap,
  ShieldCheck,
  Globe,
  Eye,
  Store,
  Plane,
  CreditCard,
  Scale,
  FileLock,
  XCircle,
  UserCheck,
  MessageCircle,
  Search,
  Award,
  CheckCircle2,
  ArrowDown,
  Link2,
  Landmark,
  Users,
  TrendingUp,
  Briefcase,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, ease: "easeOut" },
};

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.12 } },
  viewport: { once: true, margin: "-60px" },
};

const fadeInItem = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" },
};

export default function QueEsClient() {
  return (
    <main className="min-h-screen text-gray-900 relative overflow-hidden">
      {/* Hero */}
      <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-8">
              <CompassIcon className="w-4 h-4" />
              Conocé nuestra esencia
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black leading-tight tracking-tight mb-8 max-w-5xl mx-auto text-gray-900">
              ¿Qué es <span className="text-gradient">Trip Conecta?</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-6 leading-relaxed">
              Consultoría Estratégica y Comunidad de Agentes de Viajes
            </p>

            <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-12">
              Operamos como una firma de consultoría B2B dedicada a la optimización, digitalización y escalabilidad de agencias de viajes, y como un ecosistema de formación y respaldo para agentes independientes.
            </p>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="inline-flex"
            >
              <ArrowDown className="w-8 h-8 text-emerald-500" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Modelo de Negocio */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-white to-emerald-50/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <span className="text-emerald-600 text-sm font-bold uppercase tracking-widest">Nuestro Modelo</span>
            <h2 className="text-3xl md:text-5xl font-black mt-4 mb-6 text-gray-900">
              Dos pilares, un solo objetivo
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Asesoramiento corporativo y distribución tecnológica para transformar el sector turístico.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-8"
            {...staggerContainer}
          >
            <motion.div className="glass-card rounded-[32px] p-8 md:p-10 bg-white border border-emerald-100 hover:border-emerald-300 transition-all hover:-translate-y-1" {...fadeInItem}>
              <div className="w-16 h-16 rounded-2xl bg-emerald-100 border border-emerald-200 flex items-center justify-center mb-6">
                <Building2 className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Consultoría Estratégica B2B</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Optimización, digitalización y escalabilidad de agencias de viajes establecidas. Actuamos como puente directo entre agencias operadoras de primer nivel y el consumidor final.
              </p>
              <ul className="space-y-3">
                {["Diagnóstico operativo completo", "Implementación tecnológica", "Estrategia de escalabilidad"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div className="glass-card rounded-[32px] p-8 md:p-10 bg-white border border-cyan-100 hover:border-cyan-300 transition-all hover:-translate-y-1" {...fadeInItem}>
              <div className="w-16 h-16 rounded-2xl bg-cyan-100 border border-cyan-200 flex items-center justify-center mb-6">
                <GraduationCap className="w-8 h-8 text-cyan-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Ecosistema de Formación</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Capacitación, certificación Amadeus y respaldo operativo para agentes de viajes independientes que quieren construir su propia carrera.
              </p>
              <ul className="space-y-3">
                {["Certificación Amadeus oficial", "Acceso a inventario exclusivo", "Comunidad y soporte continuo"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-cyan-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Distribución y AUDAVI */}
      <section className="py-20 lg:py-28 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <span className="text-emerald-600 text-sm font-bold uppercase tracking-widest">Distribución</span>
            <h2 className="text-3xl md:text-5xl font-black mt-4 mb-6 text-gray-900">
              Ecosistema de Distribución y Respaldo AUDAVI
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Funcionamos como un escaparate dinámico que visibiliza, promociona y conecta ofertas turísticas a través de nuestra red de agentes certificados.
            </p>
          </motion.div>

          <motion.div className="grid md:grid-cols-3 gap-6 mb-12" {...staggerContainer}>
            {[
              { icon: <Eye className="w-7 h-7 text-emerald-600" />, title: "Visibilizamos", desc: "Damos exposición estratégica a paquetes, rutas e itinerarios de agencias operadoras de primer nivel." },
              { icon: <TrendingUp className="w-7 h-7 text-cyan-600" />, title: "Promocionamos", desc: "Marketing digital dirigido para conectar las mejores ofertas con el público adecuado." },
              { icon: <Link2 className="w-7 h-7 text-purple-600" />, title: "Conectamos", desc: "Puente directo entre agencias certificadas y consumidores finales, con total transparencia." },
            ].map((card, i) => (
              <motion.div key={i} className="glass-card rounded-3xl p-8 bg-white text-center hover:-translate-y-1 transition-all" {...fadeInItem}>
                <div className="w-14 h-14 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center mx-auto mb-5">
                  {card.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{card.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* AUDAVI Badge */}
          <motion.div
            className="glass-card rounded-[32px] p-8 md:p-12 bg-gradient-to-br from-emerald-50 to-cyan-50 border border-emerald-200 max-w-4xl mx-auto"
            {...fadeInUp}
          >
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-20 h-20 rounded-full bg-white border-2 border-emerald-200 flex items-center justify-center flex-shrink-0 shadow-sm">
                <Award className="w-10 h-10 text-emerald-600" />
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold mb-3 text-gray-900">Estándar AUDAVI</h3>
                <p className="text-gray-700 leading-relaxed">
                  Únicamente establecemos convenios de distribución y consultoría con agencias debidamente constituidas y certificadas por la{" "}
                  <strong className="text-emerald-700">AUDAVI</strong>{" "}
                  (Asociación Uruguaya de Agencias de Viajes). Este modelo nos permite auditar el mercado mes a mes y seleccionar las mejores propuestas respaldadas por entidades reguladas.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Delimitación de Responsabilidades */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <span className="text-emerald-600 text-sm font-bold uppercase tracking-widest">Transparencia Total</span>
            <h2 className="text-3xl md:text-5xl font-black mt-4 mb-6 text-gray-900">
              Delimitación de Responsabilidades
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Establecemos de forma explícita la naturaleza de nuestras operaciones para garantizar la máxima claridad con nuestra comunidad.
            </p>
          </motion.div>

          <motion.div className="grid md:grid-cols-2 gap-6" {...staggerContainer}>
            <motion.div className="glass-card rounded-3xl p-8 bg-white" {...fadeInItem}>
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center flex-shrink-0">
                  <XCircle className="w-6 h-6 text-red-500" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2 text-gray-900">Naturaleza Operativa</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Trip Conecta <strong>no es una agencia de viajes</strong> minorista ni mayorista. No operamos vuelos, no coordinamos logística en destino y no tenemos inventario turístico propio.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div className="glass-card rounded-3xl p-8 bg-white" {...fadeInItem}>
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center flex-shrink-0">
                  <CreditCard className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2 text-gray-900">Pagos y Facturación</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Trip Conecta <strong>no percibe ni procesa fondos</strong> de clientes finales. Todo pago se realiza directamente a la agencia operadora certificada por AUDAVI, que es la única responsable de emitir la facturación fiscal.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div className="glass-card rounded-3xl p-8 bg-white" {...fadeInItem}>
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-xl bg-purple-50 border border-purple-100 flex items-center justify-center flex-shrink-0">
                  <Scale className="w-6 h-6 text-purple-500" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2 text-gray-900">Responsabilidad Legal</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    La emisión de vouchers, gestión de reservas en GDS, cumplimiento normativo tarifario y responsabilidad civil ante imprevistos, cancelaciones o reprogramaciones recaen en su totalidad sobre la <strong>agencia operadora</strong>.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div className="glass-card rounded-3xl p-8 bg-white" {...fadeInItem}>
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center flex-shrink-0">
                  <FileLock className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2 text-gray-900">Confidencialidad (NDA)</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Mantenemos estricta reserva sobre la identidad de las agencias de nuestra cartera de consultoría general. La identidad, RUT y registro de la agencia operadora específica se revelan de forma clara al cliente final, previo a la cotización y pago.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Rol del Agente */}
      <section className="py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-50/60 to-white pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <span className="text-emerald-600 text-sm font-bold uppercase tracking-widest">Tu Aliado de Viajes</span>
            <h2 className="text-3xl md:text-5xl font-black mt-4 mb-6 text-gray-900">
              El Rol de tu Agente Trip Conecta
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Tu Auditor de Confianza y Asesor Personal de Viajes
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div className="space-y-8" {...fadeInUp}>
              <div className="glass-card rounded-3xl p-8 bg-white border border-emerald-100">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center">
                    <Search className="w-6 h-6 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Auditoría de Opciones</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  El agente audita las opciones disponibles dentro de nuestra red de agencias certificadas por AUDAVI para encontrar la tarifa y el itinerario que mejor se adapte a tus necesidades.
                </p>
              </div>

              <div className="glass-card rounded-3xl p-8 bg-white border border-cyan-100">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-cyan-100 flex items-center justify-center">
                    <ShieldCheck className="w-6 h-6 text-cyan-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Filtrado y Seguridad</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Filtra la información técnica compleja y garantiza que tu inversión se realice únicamente en empresas reguladas, seguras y operativas.
                </p>
              </div>

              <div className="glass-card rounded-3xl p-8 bg-white border border-purple-100">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Acompañamiento Directo</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Te acompaña de forma directa por WhatsApp durante todo tu viaje. Asesoramiento imparcial, cualificado y humano.
                </p>
              </div>
            </motion.div>

            <motion.div className="glass-card rounded-[40px] p-8 md:p-12 bg-gradient-to-br from-emerald-50 to-cyan-50 border border-emerald-200" {...fadeInUp}>
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-white border-2 border-emerald-200 flex items-center justify-center mx-auto mb-6 shadow-sm">
                  <UserCheck className="w-10 h-10 text-emerald-600" />
                </div>
                <h3 className="text-2xl md:text-3xl font-black mb-4 text-gray-900">
                  ¿Qué significa comprar con un agente Trip Conecta?
                </h3>
                <p className="text-gray-700 leading-relaxed mb-8 text-lg">
                  Significa contar con un <strong>"Broker" o Asesor Personal de Viajes</strong> que te conecta con la agencia segura que tiene la oferta, ahorrándote horas de búsqueda y garantizando tranquilidad.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="https://wa.me/59896343581" target="_blank" className="btn-primary text-lg px-8 py-4 inline-flex items-center justify-center gap-2">
                    <MessageCircle className="w-5 h-5" />
                    <span>Hablar con un Agente</span>
                  </a>
                  <Link href="/curso" className="btn-secondary text-lg px-8 py-4 inline-flex items-center justify-center gap-2">
                    <GraduationCap className="w-5 h-5" />
                    <span>Quiero ser Agente</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            className="glass-card rounded-[40px] p-8 md:p-16 border border-emerald-200 bg-white"
            {...fadeInUp}
          >
            <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-6">
              <Briefcase className="w-8 h-8 text-emerald-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-black mb-6 text-gray-900">
              ¿Tenés una agencia y querés escalar?
            </h2>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              Descubrí cómo nuestra consultoría estratégica puede digitalizar y potenciar tu operativa turística.
            </p>
            <a href="https://wa.me/59896343581" target="_blank" className="btn-primary text-lg px-8 py-4 inline-flex items-center justify-center gap-2">
              <MessageCircle className="w-5 h-5" />
              <span>Consultar por WhatsApp</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <img src="/assets/logo-trip-conecta.png" alt="Trip Conecta" className="h-20 w-auto object-contain" />
          </div>
          <div className="text-center md:text-right">
            <p className="text-sm text-gray-600">Trip Conecta SAS</p>
            <p className="text-xs text-gray-400">Montevideo, Uruguay</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

function CompassIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
    </svg>
  );
}
