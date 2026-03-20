"use client";

import { ArrowRight, MessageCircle, CheckCircle, Play, Phone, Clock, AlertCircle, TrendingUp, Briefcase, ShoppingBag, Globe, Calculator, Smartphone, Target, ShieldCheck, Plane } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CursoLanding() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date("April 6, 2026 00:00:00").getTime();
    
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;
      
      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen text-gray-900 relative bg-white">
      <div className="gradient-bg" />
      
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-40 bg-white/95 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-20">
          <Link href="/" className="flex items-center">
            <img src="/trip conecta (2).png" alt="Trip Conecta" className="h-10 w-auto" />
          </Link>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
            <a href="#programa" className="hover:text-emerald-600 transition-colors">Programa</a>
            <a href="#transformacion" className="hover:text-emerald-600 transition-colors">Transformación</a>
            <a href="#faq" className="hover:text-emerald-600 transition-colors">FAQ</a>
          </div>
          <Link href="/pagar" className="btn-primary text-sm">
            <span>Quiero Inscribirme</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Certificación Oficial 2026
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-gray-900">
                Conviértete en <span className="text-gradient">Agente de Viajes</span> Profesional
              </h1>
              
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl">
                Certificación oficial Amadeus + Acceso a inventario exclusivo. 
                Adquiere una profesión de alta demanda y genera comisiones por venta de viajes.
              </p>

              {/* Countdown */}
              <div className="glass-card p-6 rounded-2xl inline-block">
                <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">Próximo grupo inicia en:</p>
                <div className="flex gap-3">
                  <CountdownUnit value={timeLeft.days} label="Días" />
                  <CountdownUnit value={timeLeft.hours} label="Horas" />
                  <CountdownUnit value={timeLeft.minutes} label="Mins" />
                  <CountdownUnit value={timeLeft.seconds} label="Segs" />
                </div>
                <p className="text-sm font-bold text-emerald-600 mt-3">06 de Abril de 2026</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/pagar" className="btn-primary group">
                  <span>Quiero Empezar Ahora</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a href="https://wa.me/59896343581" target="_blank" className="btn-secondary">
                  <MessageCircle className="w-5 h-5 text-emerald-600" />
                  <span>Consultar por WhatsApp</span>
                </a>
              </div>
            </motion.div>

            {/* Video Container */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden border border-gray-200 shadow-2xl aspect-video bg-black">
                <video 
                  controls
                  poster="/assets/mama-y-su-hija-trabajo-desde-casa.jpg"
                  className="w-full h-full object-cover"
                >
                  <source src="/assets/VSL-TRIP-CONECTA-mini.mp4" type="video/mp4" />
                </video>
              </div>
              <div className="absolute -bottom-6 -left-6 glass-card p-4 rounded-2xl flex items-center gap-4 max-w-xs">
                <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center">
                  <Play className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Mira el video</p>
                  <p className="text-sm font-bold text-gray-900">Descubre cómo funciona</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Doubts Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black mb-4 text-gray-900">¿Te detienen estas dudas?</h2>
            <p className="text-gray-600">Eliminamos los obstáculos para tu nueva carrera</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <DoubtCard icon={<AlertCircle className="text-red-500" />} title="No tengo experiencia" text="Diseñado desde cero. Nuestra metodología paso a paso garantiza que aprendas Amadeus sin conocimientos previos." />
            <DoubtCard icon={<Clock className="text-orange-500" />} title="No tengo tiempo" text="Modalidad 100% flexible. Acceso 24/7 para que estudies a tu ritmo sin sacrificar tus actuales compromisos." />
            <DoubtCard icon={<Smartphone className="text-yellow-600" />} title="¿Conseguiré clientes?" text="Te damos acceso a nuestro inventario de paquetes listos para vender. Marketing digital incluido." />
            <DoubtCard icon={<ShieldCheck className="text-emerald-600" />} title="¿Es confiable?" text="20 años de trayectoria. Empresa registrada en Montevideo con oficinas físicas. Respaldo legal real." />
          </div>
        </div>
      </section>

      {/* Transformation Section */}
      <section id="transformacion" className="py-24 bg-gradient-to-b from-emerald-50/50 to-cyan-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-6">
              <TrendingUp className="w-4 h-4" />
              Tu Evolución Profesional
            </div>
            <h2 className="text-3xl md:text-5xl font-black mb-6 text-gray-900">De donde estás, a donde podés llegar</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">Esta certificación abre puertas. Te damos las herramientas concretas para construir tu propio camino en la industria.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="glass-card rounded-3xl p-8 md:p-10">
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 text-gray-900">
                <Target className="w-8 h-8 text-emerald-600" />
                Tu camino posible
              </h3>
              <div className="space-y-8">
                <TimelineItem stage="Antes del curso" text="Sin certificación reconocida, sin acceso a sistemas profesionales, sin conocimiento técnico de la industria." />
                <TimelineItem stage="Durante la formación" text="Dominás Amadeus, aprendés a cotizar, reservar y emitir. Desarrollás habilidades de venta digital." color="text-emerald-600" />
                <TimelineItem stage="Después de certificarte" text="Podés postularte a agencias de viajes que buscan agentes certificados, o comenzar a generar comisiones." color="text-cyan-600" isLast />
              </div>
            </div>

            <div className="space-y-6">
              <FeatureCard icon={<Briefcase className="w-6 h-6 text-emerald-600" />} title="Acceso al mercado laboral" text="Las agencias buscan activamente agentes con certificación Amadeus. Tu credencial te diferencia de otros candidatos." />
              <FeatureCard icon={<ShoppingBag className="w-6 h-6 text-cyan-600" />} title="Ventas con respaldo" text="Accedés a nuestro inventario mayorista. Vos enfocás en vender, nosotros operamos de fondo. Sin riesgos." />
              <FeatureCard icon={<Globe className="w-6 h-6 text-purple-600" />} title="Profesión sin fronteras" text="La certificación Amadeus es válida globalmente. Podés trabajar remoto para agencias de cualquier país." />
            </div>
          </div>

          <div className="mt-16 max-w-3xl mx-auto">
             <div className="bg-white border-2 border-emerald-200 rounded-3xl p-8 text-center shadow-lg">
                <Calculator className="w-10 h-10 text-emerald-600 mx-auto mb-4" />
                <p className="text-xl text-gray-700">
                  Con solo <strong className="text-gray-900">2 o 3 ventas</strong> de nuestros paquetes estándar, recuperás lo invertido en el curso.
                  <span className="block mt-4 text-emerald-600 font-bold uppercase text-sm tracking-widest">Tu esfuerzo determina tu techo</span>
                </p>
             </div>
          </div>
        </div>
      </section>

      <ModulesSection />
      
      <FAQSection />

      {/* CTA Final */}
      <section className="py-24 relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-50/50 to-transparent" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-4xl md:text-5xl font-black mb-8 text-gray-900">El próximo grupo empieza el <span className="text-emerald-600">06 de Abril</span></h2>
          <p className="text-xl text-gray-600 mb-12">No dejes pasar otro año con las mismas ganas. El momento es ahora.</p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/pagar" className="btn-primary px-12 py-5 rounded-2xl text-xl font-bold shadow-2xl shadow-emerald-500/30">
              ¡Inscribirme Hoy!
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid md:grid-cols-4 gap-12 mb-12">
              <div className="col-span-2">
                <img src="/trip conecta (2).png" alt="Trip Conecta" className="h-10 mb-6" />
                <p className="text-gray-600 max-w-sm">
                  Consultora líder en el desarrollo de agencias de viajes. 
                  Desde 2006 transformando el sector turístico en el Cono Sur.
                </p>
              </div>
              <div>
                <h4 className="font-bold mb-4 text-gray-900">Contacto</h4>
                <p className="text-sm text-gray-500">Montevideo, Uruguay</p>
                <p className="text-sm text-gray-500">+598 96 343 581</p>
              </div>
              <div>
                <h4 className="font-bold mb-4 text-gray-900">Legales</h4>
                <p className="text-sm text-gray-500">Trip Conecta SAS</p>
                <p className="text-sm text-gray-500">Certificación Amadeus Oficial</p>
              </div>
           </div>
           <div className="pt-8 border-t border-gray-200 text-center text-xs text-gray-400 uppercase tracking-widest font-bold">
              © 2026 Trip Conecta. Todos los derechos reservados.
           </div>
        </div>
      </footer>
    </main>
  );
}

function ModulesSection() {
  return (
    <section id="programa" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="text-emerald-600 text-sm font-bold uppercase tracking-widest">Currículo Profesional</span>
          <h2 className="text-3xl md:text-5xl font-black mt-4 mb-6 text-gray-900">Tres Pilares para tu Éxito</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Formación integral que combina técnica, ventas y marketing.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <ModuleCard 
            icon={<Plane className="w-8 h-8 text-emerald-600" />}
            number="1"
            title="Dominio Amadeus"
            description="Certificación oficial en el sistema GDS más utilizado mundialmente. Reservas, emisiones, cambios y cancelaciones."
            items={["Certificación oficial incluida", "Práctica en sistema real", "Válido internacionalmente"]}
            color="emerald"
          />
          <ModuleCard 
            icon={<Smartphone className="w-8 h-8 text-cyan-600" />}
            number="2"
            title="Ventas Digitales"
            description="Ventas por redes sociales y WhatsApp Business. Psicología del consumidor para cerrar más ventas."
            items={["Ventas por Instagram/FB", "WhatsApp Business Pro", "Scripts y objeciones"]}
            color="cyan"
          />
          <ModuleCard 
            icon={<Target className="w-8 h-8 text-purple-600" />}
            number="3"
            title="Marketing Turístico"
            description="Cómo atraer clientes calificados. Gestión de marca personal y captación de leads en automático."
            items={["Anuncios efectivos", "Marca personal de agente", "Fidelización de clientes"]}
            color="purple"
          />
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  const faqs = [
    { q: "¿Necesito conocimientos previos?", a: "No. El curso está diseñado para llevarte de cero a profesional. No importa si nunca trabajaste en turismo." },
    { q: "¿Cómo recibo la certificación Amadeus?", a: "Al finalizar el módulo técnico y aprobar el examen online, recibes tu certificación oficial Amadeus válida internacionalmente." },
    { q: "¿Tengo que vender los viajes obligatoriamente?", a: "No. Puedes usar la certificación para buscar empleo en agencias tradicionales. Nosotros solo te damos la opción de vender nuestro inventario si quieres trabajar independiente." },
    { q: "¿Qué pasa si no puedo asistir a las clases?", a: "Todas las clases quedan grabadas y disponibles 24/7 en nuestra plataforma. Puedes estudiar a tu propio ritmo." }
  ];

  return (
    <section id="faq" className="py-24 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-black mb-4 text-gray-900">Preguntas Frecuentes</h2>
          <p className="text-gray-600">Todo lo que necesitas saber antes de empezar</p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="glass-card rounded-2xl p-6">
              <h4 className="font-bold text-lg mb-2 text-gray-900">{faq.q}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CountdownUnit({ value, label }: { value: number, label: string }) {
  return (
    <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-3 min-w-[70px] text-center">
      <div className="text-2xl font-black text-emerald-600">{value < 10 ? `0${value}` : value}</div>
      <div className="text-[10px] text-gray-500 uppercase font-bold">{label}</div>
    </div>
  );
}

function DoubtCard({ icon, title, text }: { icon: any, title: string, text: string }) {
  return (
    <div className="glass-card p-8 rounded-3xl text-center flex flex-col items-center gap-4 hover:border-emerald-300 transition-colors">
      <div className="w-14 h-14 rounded-2xl bg-gray-100 flex items-center justify-center">
        {icon}
      </div>
      <h3 className="text-lg font-bold text-gray-900">{title}</h3>
      <p className="text-sm text-gray-600 leading-relaxed">{text}</p>
    </div>
  );
}

function TimelineItem({ stage, text, color = "text-gray-700", isLast = false }: { stage: string, text: string, color?: string, isLast?: boolean }) {
  return (
    <div className="relative pl-8">
      {!isLast && <div className="absolute left-[7px] top-6 bottom-[-24px] w-[2px] bg-emerald-200" />}
      <div className="absolute left-0 top-1 w-4 h-4 rounded-full bg-emerald-500 border-4 border-white shadow-md" />
      <h4 className={`font-bold text-lg mb-2 ${color}`}>{stage}</h4>
      <p className="text-gray-600 text-sm leading-relaxed">{text}</p>
    </div>
  );
}

function FeatureCard({ icon, title, text }: { icon: any, title: string, text: string }) {
  return (
    <div className="glass-card p-6 rounded-2xl flex items-start gap-4 hover:border-emerald-300 transition-all">
      <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center flex-shrink-0">
        {icon}
      </div>
      <div>
        <h4 className="font-bold text-lg mb-2 text-gray-900">{title}</h4>
        <p className="text-sm text-gray-600 leading-relaxed">{text}</p>
      </div>
    </div>
  );
}

function ModuleCard({ icon, number, title, description, items, color }: any) {
  const colors: any = {
    emerald: "bg-emerald-100 border-emerald-200 text-emerald-600",
    cyan: "bg-cyan-100 border-cyan-200 text-cyan-600",
    purple: "bg-purple-100 border-purple-200 text-purple-600"
  };
  return (
    <div className="glass-card rounded-3xl p-8 relative overflow-hidden group hover:border-emerald-300">
      <div className="relative">
        <div className={`w-16 h-16 rounded-2xl ${colors[color]} border flex items-center justify-center mb-6`}>
          {icon}
        </div>
        <div className={`text-xs font-bold ${color === 'emerald' ? 'text-emerald-600' : color === 'cyan' ? 'text-cyan-600' : 'text-purple-600'} uppercase tracking-widest mb-2`}>Módulo {number}</div>
        <h3 className="text-2xl font-bold mb-4 text-gray-900">{title}</h3>
        <p className="text-gray-600 mb-6 leading-relaxed text-sm">{description}</p>
        <ul className="space-y-3 text-sm text-gray-700">
          {items.map((item: string, i: number) => (
            <li key={i} className="flex items-center gap-2">
              <CheckCircle className={`w-4 h-4 ${color === 'emerald' ? 'text-emerald-500' : color === 'cyan' ? 'text-cyan-500' : 'text-purple-500'}`} />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
