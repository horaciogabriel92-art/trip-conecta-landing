"use client";

import { ArrowRight, MessageCircle, Check, GraduationCap, Briefcase, Plane, Rocket, ShieldCheck, MapPin } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function HomeClient() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <main className="min-h-screen text-gray-900 relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-16 pb-20 lg:pt-24 lg:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            {/* Logo más grande sin bordes restrictivos */}
            <div className="mb-8">
              <img 
                src="/assets/logo-trip-conecta.png" 
                alt="Trip Conecta" 
                className="h-28 w-auto object-contain"
              />
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight mb-6 max-w-4xl mx-auto text-gray-900">
              Comunidad consultora para <span className="text-gradient">agentes y agencias de viajes</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto mb-12 leading-relaxed">
              Transformamos el conocimiento técnico en resultados comerciales reales.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/curso" className="btn-primary text-lg">
                <span>Certificarme como Agente</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a href="https://wa.me/59896343581" target="_blank" className="btn-secondary text-lg">
                <MessageCircle className="w-5 h-5" />
                <span>Asesoría para Agencias</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-emerald-600 text-sm font-bold uppercase tracking-widest">Nuestros Servicios</span>
            <h2 className="text-3xl md:text-5xl font-black mt-4 mb-6 text-gray-900">Soluciones integrales para el sector</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Combinamos tecnología, formación y operativa para potenciar tu agencia</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard 
              icon={<GraduationCap className="w-8 h-8 text-emerald-600" />}
              title="Certificación Profesional"
              description="Formación completa en Amadeus, ventas digitales y marketing turístico. Certificación oficial y acceso a inventario mayorista."
              features={["Certificación Amadeus oficial", "Ventas por redes y WhatsApp", "Acceso a inventario exclusivo"]}
              link="/curso"
            />
            <ServiceCard 
              icon={<Briefcase className="w-8 h-8 text-cyan-600" />}
              title="Consultoría para Agencias"
              description="Asesoría estratégica para agencias establecidas. Optimización de procesos, tecnología y desarrollo comercial."
              features={["Diagnóstico operativo completo", "Implementación de tecnología", "Capacitación de equipos"]}
              link="https://wa.me/59896343581"
            />
            <ServiceCard 
              icon={<Plane className="w-8 h-8 text-purple-600" />}
              title="Operación de Viajes"
              description="Respaldo operativo para agentes independientes. Emisiones, cambios, cancelaciones y soporte 24/7."
              features={["Emisiones y reemisiones", "Gestión de emergencias", "Comisiones garantizadas"]}
              link="https://wa.me/59896343581"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass-card rounded-[40px] p-8 md:p-16 border border-emerald-200 bg-gradient-to-br from-emerald-50/50 to-cyan-50/50">
            <div className="w-20 h-20 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-6">
              <Rocket className="w-10 h-10 text-emerald-600" />
            </div>
            
            <h2 className="text-3xl md:text-5xl font-black mb-6 text-gray-900">¿Listo para potenciar tu agencia?</h2>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              Ya sea que busques certificarte como agente profesional o necesites asesoría 
              estratégica para tu agencia establecida, tenemos la solución.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/curso" className="btn-primary text-lg px-8 py-4">
                <span>Quiero Certificarme</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a href="https://wa.me/59896343581" target="_blank" className="btn-secondary text-lg px-8 py-4">
                <MessageCircle className="w-5 h-5" />
                <span>Hablar con un Asesor</span>
              </a>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-6 text-gray-500">
              <div className="flex items-center gap-2 text-xs font-medium">
                <ShieldCheck className="w-4 h-4" />
                <span>SAS Registrada</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium">
                <MapPin className="w-4 h-4" />
                <span>Montevideo, Uruguay</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Logo más grande */}
      <footer className="border-t border-gray-200 py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <img 
              src="/assets/logo-trip-conecta.png" 
              alt="Trip Conecta" 
              className="h-24 w-auto object-contain"
            />
          </div>
          <div className="text-center md:text-right">
            <p className="text-sm text-gray-600">Trip Conecta SAS</p>
            <p className="text-xs text-gray-400">Montevideo, Uruguay</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Float */}
      <a href="https://wa.me/59896343581" target="_blank" className="fixed bottom-6 right-6 bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-lg z-50 transition-all hover:scale-110 flex items-center gap-2 group">
        <MessageCircle className="w-6 h-6" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 whitespace-nowrap font-bold">¿Consultas? Escríbenos</span>
      </a>
    </main>
  );
}

function ServiceCard({ icon, title, description, features, link }: { icon: any, title: string, description: string, features: string[], link: string }) {
  return (
    <div className="glass-card rounded-3xl p-8 hover:-translate-y-2 transition-transform bg-white">
      <div className="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center mb-6 border border-gray-100">
        {icon}
      </div>
      <h3 className="text-2xl font-bold mb-4 text-gray-900">{title}</h3>
      <p className="text-gray-600 mb-6 leading-relaxed text-sm">{description}</p>
      <ul className="space-y-2 text-sm text-gray-700 mb-8">
        {features.map((f, i) => (
          <li key={i} className="flex items-center gap-2">
            <Check className="w-4 h-4 text-emerald-500" />
            {f}
          </li>
        ))}
      </ul>
      <Link href={link} className="text-emerald-600 font-bold text-sm hover:text-emerald-700 transition-colors flex items-center gap-2">
        Saber más <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  );
}
