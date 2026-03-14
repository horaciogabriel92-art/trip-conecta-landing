"use client";

import { ArrowRight, MessageCircle, CheckCircle, Play, Phone, Clock, Bookmark, AlertCircle, TrendingUp, Briefcase, ShoppingBag, Globe, Calculator, Smartphone, Target, ShieldCheck, MapPin, Award, Plane, Check, ChevronDown, CreditCard, Calendar, Users, Video, AlertTriangle, Flame, Zap, Package, Building2, Headphones, HelpCircle } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CursoLanding() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

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

  const faqs = [
    { q: "¿Necesito experiencia previa en turismo?", a: "No. El curso está diseñado desde cero para personas sin experiencia. Nuestra metodología paso a paso te lleva desde lo básico hasta la operativa profesional completa." },
    { q: "¿Cuándo empieza exactamente el curso?", a: "El próximo grupo inicia el 06 de Abril de 2026. Al inscribirte recibes acceso inmediato a materiales preparatorios y el 06 de abril abrimos el acceso completo al campus virtual." },
    { q: "¿Cómo recibo la certificación Amadeus?", a: "Al finalizar el módulo técnico y aprobar el examen online, recibes tu certificación oficial Amadeus válida internacionalmente." },
    { q: "¿Tengo que vender los viajes obligatoriamente?", a: "No. Puedes usar la certificación para buscar empleo en agencias tradicionales. Nosotros solo te damos la opción de vender nuestro inventario si quieres trabajar independiente." },
    { q: "¿Qué pasa si no puedo asistir a las clases?", a: "Todas las clases quedan grabadas y disponibles 24/7 en nuestra plataforma. Puedes estudiar a tu propio ritmo." },
    { q: "¿El precio incluye todo?", a: "Sí. El precio incluye acceso completo a los 3 módulos, certificación Amadeus, grupo de WhatsApp, clases en vivo y acceso de por vida al contenido." }
  ];

  return (
    <main className="min-h-screen text-slate-50 relative">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-40 bg-slate-900/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-20">
          <Link href="/" className="bg-white/10 px-4 py-2 rounded-xl border border-white/10">
            <img src="/assets/trip-conecta-1.png" alt="Trip Conecta" className="h-8 md:h-10 w-auto" />
          </Link>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#programa" className="hover:text-white transition-colors">Programa</a>
            <a href="#transformacion" className="hover:text-white transition-colors">Transformación</a>
            <a href="#inventario" className="hover:text-white transition-colors">Respaldo</a>
            <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
          </div>
          <button onClick={() => setIsModalOpen(true)} className="btn-primary px-6 py-3 text-sm flex items-center gap-2">
            <span>Agendar Llamada</span>
            <Phone className="w-4 h-4" />
          </button>
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
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
                Certificación Oficial 2026
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-black leading-tight tracking-tight">
                Conviértete en <span className="text-gradient">Agente de Viajes</span> Profesional
              </h1>
              
              <p className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-xl">
                Certificación oficial Amadeus + Acceso a inventario exclusivo. 
                Adquiere una profesión de alta demanda y la oportunidad de generar comisiones por venta de viajes. 
              </p>

              {/* Countdown */}
              <div className="glass-card p-6 rounded-2xl inline-block">
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">Próximo grupo inicia en:</p>
                <div className="flex gap-4">
                  <CountdownUnit value={timeLeft.days} label="Días" />
                  <CountdownUnit value={timeLeft.hours} label="Horas" />
                  <CountdownUnit value={timeLeft.minutes} label="Mins" />
                  <CountdownUnit value={timeLeft.seconds} label="Segs" />
                </div>
                <p className="text-sm font-bold text-blue-400 mt-4">06 de Abril de 2026</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/pagar" className="btn-primary px-8 py-4 rounded-2xl font-bold text-base group">
                  <span>Quiero Empezar Ahora</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a href="https://wa.me/59896343581" target="_blank" className="btn-whatsapp px-8 py-4 rounded-2xl font-bold text-base flex items-center justify-center gap-2">
                  <MessageCircle className="w-5 h-5" />
                  <span>Consultar por WhatsApp</span>
                </a>
              </div>

              <div className="flex items-center gap-6 text-sm text-slate-500">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-500" />
                  <span>Sin experiencia previa</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-500" />
                  <span>100% Online</span>
                </div>
              </div>
            </motion.div>

            {/* Video Container */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl aspect-video bg-black group">
                <video 
                  controls
                  poster="/assets/mama-y-su-hija-trabajo-desde-casa.jpg"
                  className="w-full h-full object-cover"
                >
                  <source src="/assets/VSL-TRIP-CONECTA-mini.mp4" type="video/mp4" />
                </video>
              </div>
              <div className="absolute -bottom-6 -left-6 glass-card p-4 rounded-2xl flex items-center gap-4 max-w-xs shadow-xl border border-blue-500/30 hidden lg:flex">
                <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <Play className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <p className="text-xs text-slate-400">Mira el video</p>
                  <p className="text-sm font-bold text-white">Descubre cómo funciona</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pain Points / Objections */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black mb-4">¿Te detienen estas dudas?</h2>
            <p className="text-slate-400">Eliminamos los obstáculos para tu nueva carrera</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <DoubtCard 
              icon={<AlertCircle className="w-7 h-7 text-red-400" />}
              title="No tengo experiencia"
              text="Diseñado desde cero. Nuestra metodología paso a paso garantiza que aprendas Amadeus sin conocimientos previos."
              color="red"
            />
            <DoubtCard 
              icon={<Clock className="w-7 h-7 text-orange-400" />}
              title="No tengo tiempo"
              text="Modalidad 100% flexible. Acceso 24/7 para que estudies a tu ritmo sin sacrificar tus actuales compromisos."
              color="orange"
            />
            <DoubtCard 
              icon={<HelpCircle className="w-7 h-7 text-yellow-400" />}
              title="¿Y si no consigo clientes?"
              text="Te damos acceso a nuestro inventario de paquetes listos para vender. Marketing digital incluido para atraer tu primer cliente."
              color="yellow"
            />
            <DoubtCard 
              icon={<ShieldCheck className="w-7 h-7 text-green-400" />}
              title="¿Es confiable?"
              text="Empresa registrada en Montevideo con oficinas físicas. Respaldo legal real y SAS registrada."
              color="green"
            />
          </div>
        </div>
      </section>

      {/* Transformation Section */}
      <section id="transformacion" className="py-24 overflow-hidden relative bg-gradient-to-b from-emerald-500/5 to-transparent border-y border-emerald-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-6">
              <TrendingUp className="w-4 h-4" />
              Tu Evolución Profesional
            </div>
            <h2 className="text-3xl md:text-5xl font-black mb-6">De donde estás, a donde podés llegar</h2>
            <p className="text-slate-400 max-w-3xl mx-auto text-lg">Esta certificación abre puertas. No te garantizamos un puesto mágico, pero te damos las herramientas concretas para construir tu propio camino.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="glass-card rounded-3xl p-8 md:p-10">
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <Target className="w-8 h-8 text-emerald-400" />
                Tu camino posible
              </h3>
              
              <div className="path-timeline">
                <div className="path-item">
                  <h4 className="font-bold text-lg mb-2 text-white">Antes del curso</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">Sin certificación reconocida, sin acceso a sistemas profesionales, sin conocimiento técnico de la industria.</p>
                </div>
                
                <div className="path-item">
                  <h4 className="font-bold text-lg mb-2 text-emerald-400">Durante la formación</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">Dominás Amadeus, aprendés a cotizar, reservar y emitir. Desarrollás habilidades de venta digital. Construís tu perfil profesional.</p>
                </div>
                
                <div className="path-item last">
                  <h4 className="font-bold text-lg mb-2 text-blue-400">Después de certificarte</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">Podés postularte a agencias de viajes que buscan agentes certificados, o comenzar a generar comisiones vendiendo nuestro inventario mayorista.</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <FeatureCard 
                icon={<Briefcase className="w-6 h-6 text-emerald-400" />}
                title="Acceso al mercado laboral"
                text="Las agencias de viajes buscan activamente agentes con certificación Amadeus. Tu credencial te diferencia de otros candidatos y acredita que podés operar desde el día uno."
                color="emerald"
              />
              <FeatureCard 
                icon={<ShoppingBag className="w-6 h-6 text-blue-400" />}
                title="Ventas con respaldo"
                text="Accedés a nuestro inventario mayorista de paquetes armados. Vos enfocás en conseguir clientes, nosotros operamos todo. Comisión asegurada."
                color="blue"
              />
              <FeatureCard 
                icon={<Globe className="w-6 h-6 text-purple-400" />}
                title="Profesión sin fronteras"
                text="La certificación Amadeus es válida globalmente. Podés trabajar para agencias de cualquier país, o atender clientes internacionales desde donde estés."
                color="purple"
              />
            </div>
          </div>

          <div className="mt-12 max-w-3xl mx-auto">
             <div className="glass-card rounded-2xl p-8 text-center border border-emerald-500/20">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Calculator className="w-5 h-5 text-emerald-400" />
                  <span className="text-sm font-bold text-emerald-400 uppercase tracking-wider">Inversión que se amortigua</span>
                </div>
                <p className="text-lg text-slate-300">
                  Con solo <strong className="text-white">2 o 3 ventas</strong> de nuestros paquetes estándar, recuperás lo invertido en el curso. Después, cada comisión es ganancia neta para vos.
                  <br /><br />
                  <span className="text-emerald-400 font-semibold">Tu esfuerzo determina tu techo.</span>
                </p>
             </div>
          </div>
        </div>
      </section>

      {/* Programa */}
      <section id="programa" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="text-blue-400 text-sm font-bold uppercase tracking-widest">Currículo Profesional</span>
            <h2 className="text-3xl md:text-5xl font-black mt-4 mb-6">Tres Pilares para tu Éxito</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Formación integral que combina técnica, ventas y marketing.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <ModuleCard 
              icon={<Plane className="w-8 h-8 text-blue-400" />}
              number="1"
              title="Dominio Amadeus"
              description="Certificación oficial en el sistema GDS más utilizado mundialmente. Reservas, emisiones, cambios y cancelaciones."
              items={["Certificación oficial incluida", "Práctica en sistema real", "Válido internacionalmente"]}
              color="blue"
            />
            <ModuleCard 
              icon={<Smartphone className="w-8 h-8 text-purple-400" />}
              number="2"
              title="Ventas Digitales"
              description="Ventas por redes sociales y WhatsApp Business. Psicología del consumidor para cerrar más ventas."
              items={["Ventas por Instagram y Facebook", "WhatsApp Business profesional", "Psicología de ventas aplicada", "Scripts y objeciones"]}
              color="purple"
            />
            <ModuleCard 
              icon={<Target className="w-8 h-8 text-pink-400" />}
              number="3"
              title="Marketing y Leads"
              description="Captación de leads, difusión de productos en redes propias y gestión profesional con herramientas CRM."
              items={["Embudos de captación de leads", "Difusión estratégica en redes", "Manejo de CRM profesional", "Automatización de procesos"]}
              color="pink"
            />
          </div>
        </div>
      </section>

      {/* Respaldo Operativo */}
      <section id="inventario" className="py-24 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <img src="/assets/mujer-50-trabajo-de-casa.jpg" 
                   alt="Trabajo profesional" 
                   className="rounded-3xl shadow-2xl w-full object-cover h-[500px]" />
            </div>
            
            <div className="order-1 lg:order-2 space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-bold uppercase tracking-wider">
                <Zap className="w-4 h-4" />
                Ventaja Competitiva
              </div>
              
              <h2 className="text-3xl md:text-5xl font-black leading-tight">
                No solo aprendes: <br />
                <span className="text-gradient">Tenés la oportunidad de empezar a vender.</span>
              </h2>
              
              <p className="text-lg text-slate-400 leading-relaxed">
                Al graduarte, podés acceder a nuestro inventario mayorista exclusivo. 
                Vos traes el cliente, nosotros operamos todo. Comisión asegurada.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                    <Package className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Paquetes Listos para Vender</h4>
                    <p className="text-slate-400 text-sm">Itinerarios armados, precios competitivos y comisiones claras.</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                    <Building2 className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Respaldo Legal Real</h4>
                    <p className="text-slate-400 text-sm">Operamos bajo SAS registrada en Uruguay. Facturación y soporte legal incluidos.</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                    <Headphones className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Soporte Operativo 24/7</h4>
                    <p className="text-slate-400 text-sm">Te ayudamos con emisiones complejas, cambios y emergencias de tus clientes.</p>
                  </div>
                </div>
              </div>

              <Link href="/pagar" className="btn-primary px-8 py-4 rounded-2xl font-bold text-white inline-flex items-center gap-2 mt-4">
                <span>Quiero este respaldo</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Inversión */}
      <section id="inscripcion" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-600/5 to-transparent"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="glass-card rounded-[40px] p-8 md:p-16 text-center border border-blue-500/20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-bold uppercase tracking-wider mb-6 animate-pulse">
              <AlertTriangle className="w-4 h-4" />
              Cupos Limitados - Grupo 06 Abril
            </div>

            <h2 className="text-3xl md:text-5xl font-black mb-6">Inversión en tu Futuro</h2>
            
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-12">
              <div className="text-center">
                <p className="text-sm text-slate-500 mb-2">Inicio</p>
                <p className="text-2xl font-black">06 Abril 2026</p>
              </div>
              <div className="hidden md:block w-px h-12 bg-white/10"></div>
              <div className="text-center">
                <p className="text-sm text-slate-500 mb-2">Modalidad</p>
                <p className="text-2xl font-black">100% Online</p>
              </div>
              <div className="hidden md:block w-px h-12 bg-white/10"></div>
              <div className="text-center">
                <p className="text-sm text-slate-500 mb-2">Certificación</p>
                <p className="text-2xl font-black">Amadeus Oficial</p>
              </div>
            </div>

            <div className="mb-12">
              <p className="text-sm text-slate-400 mb-2">Inversión única</p>
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-5xl md:text-7xl font-black text-gradient">$12.700</span>
              </div>
              <p className="text-sm text-slate-500 mt-4">Acceso de por vida al contenido + Actualizaciones</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto">
              <button onClick={() => setIsModalOpen(true)} className="btn-primary px-8 py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>Agendar Llamada</span>
              </button>
              <Link href="/pagar" className="btn-secondary px-8 py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-2">
                <CreditCard className="w-5 h-5" />
                <span>Quiero comprar el curso ahora</span>
              </Link>
            </div>

            <div className="mt-8 flex justify-center gap-6 opacity-50">
              <div className="flex items-center gap-2 text-xs font-medium">
                <ShieldCheck className="w-4 h-4" />
                <span>Pago Seguro</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium">
                <Clock className="w-4 h-4" />
                <span>Garantía 7 días</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black mb-4">Preguntas Frecuentes</h2>
            <p className="text-slate-400">Todo lo que necesitas saber antes de empezar</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className={`glass-card rounded-2xl overflow-hidden transition-all ${openFaq === i ? 'border-blue-500/30' : ''}`}>
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full px-6 py-5 flex justify-between items-center text-left font-bold"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-blue-400 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 text-slate-400 leading-relaxed">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsModalOpen(false)}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-gradient-to-br from-slate-900 to-slate-950 border border-white/10 rounded-3xl p-8 max-w-md w-full"
            >
              <h3 className="text-2xl font-black mb-4">Agendar Llamada</h3>
              <p className="text-slate-400 mb-6">Déjanos tus datos y te contactamos para resolver todas tus dudas.</p>
              <a 
                href="https://wa.me/59896343581" 
                target="_blank"
                className="btn-whatsapp w-full py-4 rounded-2xl font-bold text-center flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Contactar por WhatsApp
              </a>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="w-full mt-4 text-slate-500 text-sm hover:text-white transition-colors"
              >
                Cerrar
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="bg-white/10 px-4 py-2 rounded-xl border border-white/10">
              <img src="/assets/trip-conecta-1.png" alt="Trip Conecta" className="h-8 md:h-10 w-auto" />
            </div>
            <div className="text-center md:text-right">
              <p className="text-sm text-slate-400">Trip Conecta SAS</p>
              <p className="text-xs text-slate-600">Montevideo, Uruguay</p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

function ModuleCard({ icon, number, title, description, items, color }: any) {
  const colors: any = {
    blue: "bg-blue-500/10 border-blue-500/20 text-blue-400",
    purple: "bg-purple-500/10 border-purple-500/20 text-purple-400",
    pink: "bg-pink-500/10 border-pink-500/20 text-pink-400"
  };
  const textColors: any = {
    blue: "text-blue-400",
    purple: "text-purple-400",
    pink: "text-pink-400"
  };
  const checkColors: any = {
    blue: "text-blue-500",
    purple: "text-purple-500",
    pink: "text-pink-500"
  };
  return (
    <div className="glass-card rounded-3xl p-8 relative overflow-hidden group">
      <div className={`absolute -top-10 -right-10 w-40 h-40 rounded-full blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity ${color === 'blue' ? 'bg-blue-500' : color === 'purple' ? 'bg-purple-500' : 'bg-pink-500'}`} />
      <div className="relative">
        <div className={`w-16 h-16 rounded-2xl ${colors[color]} border flex items-center justify-center mb-6`}>
          {icon}
        </div>
        <div className={`text-xs font-bold ${textColors[color]} uppercase tracking-widest mb-2`}>Módulo {number}</div>
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <p className="text-slate-400 mb-6 leading-relaxed text-sm">{description}</p>
        <ul className="space-y-3 text-sm text-slate-300">
          {items.map((item: string, i: number) => (
            <li key={i} className="flex items-center gap-2">
              <Check className={`w-4 h-4 ${checkColors[color]}`} />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function CountdownUnit({ value, label }: { value: number, label: string }) {
  return (
    <div className="bg-black/30 border border-white/10 rounded-xl p-3 min-w-[70px] text-center">
      <div className="text-2xl font-black text-white">{value < 10 ? `0${value}` : value}</div>
      <div className="text-[10px] text-slate-400 uppercase font-bold">{label}</div>
    </div>
  );
}

function DoubtCard({ icon, title, text, color }: { icon: any, title: string, text: string, color: string }) {
  const colors: any = {
    red: "bg-red-500/10",
    orange: "bg-orange-500/10",
    yellow: "bg-yellow-500/10",
    green: "bg-green-500/10"
  };
  return (
    <div className="glass-card p-8 rounded-3xl group cursor-pointer hover:bg-white/5 transition-colors">
      <div className={`w-14 h-14 rounded-2xl ${colors[color]} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
        {icon}
      </div>
      <h3 className="text-lg font-bold mb-3">{title}</h3>
      <p className="text-sm text-slate-400 leading-relaxed">{text}</p>
    </div>
  );
}

function FeatureCard({ icon, title, text, color }: { icon: any, title: string, text: string, color: string }) {
  const colors: any = {
    emerald: "border-emerald-500/30",
    blue: "border-blue-500/30",
    purple: "border-purple-500/30"
  };
  const bgColors: any = {
    emerald: "bg-emerald-500/10",
    blue: "bg-blue-500/10",
    purple: "bg-purple-500/10"
  };
  return (
    <div className={`glass-card p-6 rounded-2xl flex items-start gap-4 border ${colors[color]} hover:bg-white/[0.07] transition-all`}>
      <div className={`w-12 h-12 rounded-xl ${bgColors[color]} flex items-center justify-center flex-shrink-0`}>
        {icon}
      </div>
      <div>
        <h4 className="font-bold text-lg mb-2 text-white">{title}</h4>
        <p className="text-sm text-slate-400 leading-relaxed">{text}</p>
      </div>
    </div>
  );
}
