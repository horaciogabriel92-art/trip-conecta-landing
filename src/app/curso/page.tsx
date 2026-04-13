"use client";

import { ArrowRight, MessageCircle, CheckCircle, Play, Phone, Clock, Bookmark, AlertCircle, TrendingUp, Briefcase, ShoppingBag, Globe, Calculator, Smartphone, Target, ShieldCheck, MapPin, Award, Plane, Check, ChevronDown, CreditCard, Calendar, Users, Video, HelpCircle } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CursoLanding() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const targetDate = new Date("June 20, 2026 00:00:00").getTime();
    
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
    { q: "¿Cuándo empieza exactamente el curso?", a: "La 5ta generación de la Academia Trip Conecta inicia el 20 de Junio de 2026. Al inscribirte recibes acceso inmediato a materiales preparatorios y el 20 de junio abrimos el acceso completo al campus virtual." },
    { q: "¿Cómo recibo la certificación Amadeus?", a: "Al finalizar el módulo técnico y aprobar el examen online, recibes tu certificación oficial Amadeus válida internacionalmente." },
    { q: "¿Tengo que vender los viajes obligatoriamente?", a: "No. Puedes usar la certificación para buscar empleo en agencias tradicionales. Nosotros solo te damos la opción de vender nuestro inventario si quieres trabajar independiente." },
    { q: "¿Qué pasa si no puedo asistir a las clases?", a: "Todas las clases quedan grabadas y disponibles 24/7 en nuestra plataforma. Puedes estudiar a tu propio ritmo." },
    { q: "¿El precio incluye todo?", a: "Sí. El precio incluye acceso completo a los 3 módulos, certificación Amadeus, grupo de WhatsApp, clases en vivo y acceso de por vida al contenido." }
  ];

  return (
    <main className="min-h-screen text-gray-900 relative">
      <link rel="preload" as="image" href="/assets/mama-y-su-hija-trabajo-desde-casa.jpg" />
      {/* Navbar - Logo más grande */}
      <nav className="fixed top-0 w-full z-40 bg-white/95 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-24">
          <Link href="/" className="flex items-center">
            <img src="/assets/logo-trip-conecta.png" alt="Trip Conecta" className="h-20 w-auto" />
          </Link>
          <Link href="/pagar" className="btn-primary px-6 py-3 text-sm flex items-center gap-2">
            <span>Quiero Inscribirme</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-36 pb-20 lg:pt-44 lg:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-700 text-xs font-bold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                5ta Generación - Inscripciones Abiertas
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-gray-900">
                Conviértete en <span className="text-gradient">Agente de Viajes</span> Profesional
              </h1>
              
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl">
                Certificación oficial Amadeus + Acceso a inventario exclusivo. 
                Adquiere una profesión de alta demanda y la oportunidad de generar comisiones por venta de viajes. 
              </p>

              {/* Countdown */}
              <div className="glass-card p-6 rounded-2xl inline-block bg-white">
                <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">5ta Generación - inicia en:</p>
                <div className="flex gap-4">
                  <CountdownUnit value={timeLeft.days} label="Días" />
                  <CountdownUnit value={timeLeft.hours} label="Horas" />
                  <CountdownUnit value={timeLeft.minutes} label="Mins" />
                  <CountdownUnit value={timeLeft.seconds} label="Segs" />
                </div>
                <p className="text-sm font-bold text-emerald-600 mt-4">20 de Junio de 2026</p>
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

              <div className="flex items-center gap-6 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                  <span>Sin experiencia previa</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
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
              <div className="relative rounded-3xl overflow-hidden border border-gray-200 shadow-2xl aspect-video bg-black group">
                <video 
                  controls
                  poster="/assets/mama-y-su-hija-trabajo-desde-casa.jpg"
                  className="w-full h-full object-cover"
                >
                  <source src="/assets/VSL-TRIP-CONECTA-mini.mp4" type="video/mp4" />
                </video>
              </div>
              <div className="absolute -bottom-6 -left-6 glass-card p-4 rounded-2xl flex items-center gap-4 max-w-xs shadow-xl border border-emerald-200 hidden lg:flex bg-white">
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

      {/* Pain Points / Objections */}
      <section className="py-20 relative bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black mb-4 text-gray-900">¿Te detienen estas dudas?</h2>
            <p className="text-gray-600">Eliminamos los obstáculos para tu nueva carrera</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <DoubtCard 
              icon={<AlertCircle className="w-7 h-7 text-red-500" />}
              title="No tengo experiencia"
              text="Diseñado desde cero. Nuestra metodología paso a paso garantiza que aprendas Amadeus sin conocimientos previos."
              color="red"
            />
            <DoubtCard 
              icon={<Clock className="w-7 h-7 text-orange-500" />}
              title="No tengo tiempo"
              text="Modalidad 100% flexible. Acceso 24/7 para que estudies a tu ritmo sin sacrificar tus actuales compromisos."
              color="orange"
            />
            <DoubtCard 
              icon={<HelpCircle className="w-7 h-7 text-yellow-500" />}
              title="¿Y si no consigo clientes?"
              text="Te damos acceso a nuestro inventario de paquetes listos para vender. Marketing digital incluido para atraer tu primer cliente."
              color="yellow"
            />
            <DoubtCard 
              icon={<ShieldCheck className="w-7 h-7 text-emerald-500" />}
              title="¿Es confiable?"
              text="Empresa registrada en Montevideo con oficinas físicas. Respaldo legal real y SAS registrada."
              color="green"
            />
          </div>
        </div>
      </section>

      {/* Transformation Section */}
      <section id="transformacion" className="py-24 overflow-hidden relative bg-gradient-to-b from-emerald-50 to-white border-y border-emerald-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-6">
              <TrendingUp className="w-4 h-4" />
              Tu Evolución Profesional
            </div>
            <h2 className="text-3xl md:text-5xl font-black mb-6 text-gray-900">De donde estás, a donde podés llegar</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">Esta certificación abre puertas. No te garantizamos un puesto mágico, pero te damos las herramientas concretas para construir tu propio camino.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="glass-card rounded-3xl p-8 md:p-10 bg-white">
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 text-gray-900">
                <Target className="w-8 h-8 text-emerald-600" />
                Tu camino posible
              </h3>
              
              <div className="space-y-6">
                <div className="border-l-4 border-gray-300 pl-6">
                  <h4 className="font-bold text-lg mb-2 text-gray-900">Antes del curso</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">Sin certificación reconocida, sin acceso a sistemas profesionales, sin conocimiento técnico de la industria.</p>
                </div>
                
                <div className="border-l-4 border-emerald-400 pl-6">
                  <h4 className="font-bold text-lg mb-2 text-emerald-600">Durante la formación</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">Dominás Amadeus, aprendés a cotizar, reservar y emitir. Desarrollás habilidades de venta digital. Construís tu perfil profesional.</p>
                </div>
                
                <div className="border-l-4 border-cyan-500 pl-6">
                  <h4 className="font-bold text-lg mb-2 text-cyan-600">Después de certificarte</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">Podés postularte a agencias de viajes que buscan agentes certificados, o comenzar a generar comisiones vendiendo nuestro inventario mayorista.</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <FeatureCard 
                icon={<Briefcase className="w-6 h-6 text-emerald-600" />}
                title="Acceso al mercado laboral"
                text="Las agencias de viajes buscan activamente agentes con certificación Amadeus. Tu credencial te diferencia de otros candidatos y acredita que podés operar desde el día uno."
                color="emerald"
              />
              <FeatureCard 
                icon={<ShoppingBag className="w-6 h-6 text-cyan-600" />}
                title="Ventas con respaldo"
                text="Accedés a nuestro inventario mayorista de paquetes armados. Vos enfocás en conseguir clientes, nosotros operamos todo. Comisión asegurada."
                color="cyan"
              />
              <FeatureCard 
                icon={<Globe className="w-6 h-6 text-purple-600" />}
                title="Profesión sin fronteras"
                text="La certificación Amadeus es válida globalmente. Podés trabajar para agencias de cualquier país, o atender clientes internacionales desde donde estés."
                color="purple"
              />
            </div>
          </div>

          <div className="mt-12 max-w-3xl mx-auto">
             <div className="glass-card rounded-2xl p-8 text-center border border-emerald-200 bg-white">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Calculator className="w-5 h-5 text-emerald-600" />
                  <span className="text-sm font-bold text-emerald-600 uppercase tracking-wider">Inversión que se amortigua</span>
                </div>
                <p className="text-lg text-gray-700">
                  Con solo <strong className="text-gray-900">2 o 3 ventas</strong> de nuestros paquetes estándar, recuperás lo invertido en el curso. Después, cada comisión es ganancia neta para vos.
                  <br /><br />
                  <span className="text-emerald-600 font-semibold">Tu esfuerzo determina tu techo.</span>
                </p>
             </div>
          </div>
        </div>
      </section>

      {/* Programa */}
      <section id="programa" className="py-24 relative">
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
              items={["Ventas por Instagram y Facebook", "WhatsApp Business profesional", "Psicología de ventas aplicada", "Scripts y objeciones"]}
              color="cyan"
            />
            <ModuleCard 
              icon={<Target className="w-8 h-8 text-purple-600" />}
              number="3"
              title="Marketing y Leads"
              description="Captación de leads, difusión de productos en redes propias y gestión profesional con herramientas CRM."
              items={["Embudos de captación de leads", "Difusión estratégica en redes", "Manejo de CRM profesional", "Automatización de procesos"]}
              color="purple"
            />
          </div>
        </div>
      </section>

      {/* Respaldo Operativo */}
      <section id="inventario" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <img src="/assets/mujer-50-trabajo-de-casa.jpg" 
                   alt="Trabajo profesional" 
                   className="rounded-3xl shadow-2xl w-full object-cover h-[500px]" />
            </div>
            
            <div className="order-1 lg:order-2 space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-700 text-xs font-bold uppercase tracking-wider">
                <Award className="w-4 h-4" />
                Ventaja Competitiva
              </div>
              
              <h2 className="text-3xl md:text-5xl font-black leading-tight text-gray-900">
                No solo aprendes: <br />
                <span className="text-gradient">Tenés la oportunidad de empezar a vender.</span>
              </h2>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Al graduarte, podés acceder a nuestro inventario mayorista exclusivo. 
                Vos traes el cliente, nosotros operamos todo. Comisión asegurada.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1 text-gray-900">Paquetes Listos para Vender</h4>
                    <p className="text-gray-600 text-sm">Itinerarios armados, precios competitivos y comisiones claras.</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center flex-shrink-0">
                    <ShieldCheck className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1 text-gray-900">Respaldo Legal Real</h4>
                    <p className="text-gray-600 text-sm">Operamos bajo SAS registrada en Uruguay. Facturación y soporte legal incluidos.</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1 text-gray-900">Soporte Operativo 24/7</h4>
                    <p className="text-gray-600 text-sm">Te ayudamos con emisiones complejas, cambios y emergencias de tus clientes.</p>
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
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-100/50 to-transparent"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="glass-card rounded-[40px] p-8 md:p-16 text-center border border-emerald-200 bg-white">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-100 border border-red-200 text-red-600 text-xs font-bold uppercase tracking-wider mb-6 animate-pulse">
              <AlertCircle className="w-4 h-4" />
              Cupos Limitados - 5ta Generación 20 Junio
            </div>

            <h2 className="text-3xl md:text-5xl font-black mb-6 text-gray-900">Inversión en tu Futuro</h2>
            
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-12">
              <div className="text-center">
                <p className="text-sm text-gray-500 mb-2">Inicio</p>
                <p className="text-2xl font-black text-gray-900">20 Junio 2026</p>
              </div>
              <div className="hidden md:block w-px h-12 bg-gray-200"></div>
              <div className="text-center">
                <p className="text-sm text-gray-500 mb-2">Modalidad</p>
                <p className="text-2xl font-black text-gray-900">100% Online</p>
              </div>
              <div className="hidden md:block w-px h-12 bg-gray-200"></div>
              <div className="text-center">
                <p className="text-sm text-gray-500 mb-2">Certificación</p>
                <p className="text-2xl font-black text-gray-900">Amadeus Oficial</p>
              </div>
            </div>

            <div className="mb-12">
              <p className="text-sm text-gray-500 mb-2">Inversión única</p>
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-5xl md:text-7xl font-black text-gradient">$13.700</span>
              </div>
              <p className="text-sm text-gray-500 mt-4">Acceso de por vida al contenido + Actualizaciones</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto">
              <Link href="/pagar" className="btn-primary px-8 py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-2">
                <CreditCard className="w-5 h-5" />
                <span>Quiero comprar el curso ahora</span>
              </Link>
              <button onClick={() => setIsModalOpen(true)} className="btn-secondary px-8 py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>Agendar Llamada</span>
              </button>
            </div>

            <div className="mt-8 flex justify-center gap-6 text-gray-500">
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
      <section id="faq" className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black mb-4 text-gray-900">Preguntas Frecuentes</h2>
            <p className="text-gray-600">Todo lo que necesitas saber antes de empezar</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className={`glass-card rounded-2xl overflow-hidden transition-all bg-white ${openFaq === i ? 'border-emerald-300' : ''}`}>
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full px-6 py-5 flex justify-between items-center text-left font-bold text-gray-900"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-emerald-600 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 text-gray-600 leading-relaxed">{faq.a}</p>
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
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white border border-gray-200 rounded-3xl p-8 max-w-md w-full shadow-2xl"
            >
              <h3 className="text-2xl font-black mb-4 text-gray-900">Agendar Llamada</h3>
              <p className="text-gray-600 mb-6">Déjanos tus datos y te contactamos para resolver todas tus dudas.</p>
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
                className="w-full mt-4 text-gray-500 text-sm hover:text-gray-900 transition-colors"
              >
                Cerrar
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Disclaimer Legal */}
      <section className="py-12 bg-gray-100 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-sm text-gray-600 leading-relaxed space-y-4">
            <p>
              <strong>Trip Conecta</strong> es una consultora estratégica especializada en la industria de viajes. Nuestros socios fundadores cuentan, individualmente, con más de 15 años de experiencia activa en agencias de viaje de primer nivel, desempeñando roles clave en Operativa GDS (Amadeus), Gestión Comercial y Marketing Digital.
            </p>
            <p className="text-xs text-gray-500">
              <strong>Aviso Legal:</strong> El programa «Academia Trip Conecta» es una formación profesional independiente. No constituye una oferta de empleo ni garantiza la obtención de un puesto de trabajo. Las salidas laborales mencionadas (empleo en agencias, postulación como comisionista o aplicación a nuestra red de socios) son oportunidades potenciales para las cuales el alumno adquiere calificación, pero el éxito y la selección final dependen exclusivamente del desempeño del alumno y de los procesos de selección de las empresas o de Trip Conecta.
            </p>
          </div>
        </div>
      </section>

      {/* Footer - Logo más grande */}
      <footer className="border-t border-gray-200 py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-6">
            <div>
              <img src="/assets/logo-trip-conecta.png" alt="Trip Conecta" className="h-24 w-auto" />
            </div>
            <p className="text-sm text-gray-500">© 2026 Trip Conecta SAS - Montevideo, Uruguay</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

function ModuleCard({ icon, number, title, description, items, color }: any) {
  const colors: any = {
    emerald: "bg-emerald-100 border-emerald-200 text-emerald-600",
    cyan: "bg-cyan-100 border-cyan-200 text-cyan-600",
    purple: "bg-purple-100 border-purple-200 text-purple-600"
  };
  const textColors: any = {
    emerald: "text-emerald-600",
    cyan: "text-cyan-600",
    purple: "text-purple-600"
  };
  const checkColors: any = {
    emerald: "text-emerald-500",
    cyan: "text-cyan-500",
    purple: "text-purple-500"
  };
  const bgColors: any = {
    emerald: "bg-emerald-500",
    cyan: "bg-cyan-500",
    purple: "bg-purple-500"
  };
  return (
    <div className="glass-card rounded-3xl p-8 relative overflow-hidden group bg-white">
      <div className={`absolute -top-10 -right-10 w-40 h-40 rounded-full blur-[80px] opacity-10 group-hover:opacity-20 transition-opacity ${bgColors[color]}`} />
      <div className="relative">
        <div className={`w-16 h-16 rounded-2xl ${colors[color]} border flex items-center justify-center mb-6`}>
          {icon}
        </div>
        <div className={`text-xs font-bold ${textColors[color]} uppercase tracking-widest mb-2`}>Módulo {number}</div>
        <h3 className="text-2xl font-bold mb-4 text-gray-900">{title}</h3>
        <p className="text-gray-600 mb-6 leading-relaxed text-sm">{description}</p>
        <ul className="space-y-3 text-sm text-gray-700">
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
    <div className="bg-gray-100 border border-gray-200 rounded-xl p-3 min-w-[70px] text-center">
      <div className="text-2xl font-black text-gray-900">{value < 10 ? `0${value}` : value}</div>
      <div className="text-[10px] text-gray-500 uppercase font-bold">{label}</div>
    </div>
  );
}

function DoubtCard({ icon, title, text, color }: { icon: any, title: string, text: string, color: string }) {
  const colors: any = {
    red: "bg-red-50",
    orange: "bg-orange-50",
    yellow: "-bg-yellow-50",
    green: "bg-emerald-50"
  };
  return (
    <div className="glass-card p-8 rounded-3xl group cursor-pointer hover:bg-gray-50 transition-colors bg-white">
      <div className={`w-14 h-14 rounded-2xl ${colors[color]} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
        {icon}
      </div>
      <h3 className="text-lg font-bold mb-3 text-gray-900">{title}</h3>
      <p className="text-sm text-gray-600 leading-relaxed">{text}</p>
    </div>
  );
}

function FeatureCard({ icon, title, text, color }: { icon: any, title: string, text: string, color: string }) {
  const colors: any = {
    emerald: "border-emerald-200 bg-emerald-50",
    cyan: "border-cyan-200 bg-cyan-50",
    purple: "border-purple-200 bg-purple-50"
  };
  const iconBgColors: any = {
    emerald: "bg-emerald-100",
    cyan: "bg-cyan-100",
    purple: "bg-purple-100"
  };
  const iconColors: any = {
    emerald: "text-emerald-600",
    cyan: "text-cyan-600",
    purple: "text-purple-600"
  };
  return (
    <div className={`glass-card p-6 rounded-2xl flex items-start gap-4 border ${colors[color]} hover:bg-white transition-all bg-white`}>
      <div className={`w-12 h-12 rounded-xl ${iconBgColors[color]} flex items-center justify-center flex-shrink-0`}>
        <div className={iconColors[color]}>{icon}</div>
      </div>
      <div>
        <h4 className="font-bold text-lg mb-2 text-gray-900">{title}</h4>
        <p className="text-sm text-gray-600 leading-relaxed">{text}</p>
      </div>
    </div>
  );
}
