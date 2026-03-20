"use client";

import { Check, ArrowRight, Bookmark, Clock, Flame, Shield, CreditCard, Sparkles, Calculator, HelpCircle, MessageCircle, AlertTriangle, Briefcase, TrendingUp, Globe, ChevronDown, Calendar, Users, Video, Award, BookOpen, Percent, ArrowDown, Plane, Smartphone, Target, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function PagarPage() {
  const [spotsLeft, setSpotsLeft] = useState(12);

  useEffect(() => {
    const interval = setInterval(() => {
      if (spotsLeft > 3 && Math.random() > 0.7) {
        setSpotsLeft(prev => prev - 1);
      }
    }, 15000);
    return () => clearInterval(interval);
  }, [spotsLeft]);

  return (
    <main className="min-h-screen text-gray-900 relative pb-20">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-40 bg-white/95 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-24">
          <Link href="/" className="flex items-center">
            <img src="/assets/logo-trip-conecta.png" alt="Trip Conecta" className="h-20 w-auto" />
          </Link>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-500 hidden sm:inline">¡Promoción especial!</span>
            <div className="bg-red-100 border border-red-200 rounded-xl px-4 py-2 flex items-center gap-2">
              <Clock className="w-4 h-4 text-red-500" />
              <span className="text-xs font-bold text-red-600 uppercase">Hasta el 31 de marzo</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Header */}
      <section className="pt-32 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="promo-badge mb-8"
            >
              <Flame className="w-4 h-4" />
              PROMO ESPECIAL - SOLO 20 CUPOS
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6 text-gray-900"
            >
              Asegura tu lugar en el <br />
              <span className="text-gradient">Grupo 06 de Abril</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8"
            >
              Aprovecha el precio promocional válido solo hasta el <strong className="text-gray-900">31 de marzo</strong>. 
              Después vuelve al precio regular.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="bg-red-50 border border-red-200 rounded-2xl p-4 inline-flex items-center gap-3 mb-8"
            >
              <AlertTriangle className="w-5 h-5 text-red-500" />
              <span className="text-sm font-bold text-red-600">Solo quedan <span className="text-red-700 text-lg">{spotsLeft}</span> cupos de 20 disponibles</span>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <div className="mercado-pago-badge">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                </svg>
                Mercado Pago
              </div>
              <div className="installment-badge">
                <CreditCard className="w-4 h-4" />
                12 cuotas sin recargo
              </div>
            </motion.div>
        </div>
      </section>

      {/* SECCIÓN TRANSFORMACIÓN */}
      <section className="py-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-gradient-to-br from-emerald-50 to-cyan-50 border-2 border-emerald-200 rounded-3xl p-8 md:p-12 overflow-hidden mb-12">
            <div className="text-center mb-8">
              <Sparkles className="w-10 h-10 text-emerald-600 mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-black text-gradient mb-4">LA TRANSFORMACIÓN</h2>
              <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Después de terminar este curso vas a comenzar a <strong className="text-gray-900">ganar comisiones vendiendo viajes</strong>, 
                ya sea contratado en una agencia de viajes o vendiendo nuestro inventario mayorista. 
                Esta inversión se paga sola.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white border border-gray-200 rounded-2xl p-6 text-center hover:border-emerald-300 transition-all hover:-translate-y-1">
                <div className="w-14 h-14 rounded-xl bg-emerald-100 flex items-center justify-center mx-auto mb-4">
                  <Briefcase className="w-7 h-7 text-emerald-600" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-gray-900">Empleo Inmediato</h3>
                <p className="text-sm text-gray-600">Accede a ofertas laborales en agencias de todo el mundo que buscan agentes certificados en Amadeus</p>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl p-6 text-center hover:border-cyan-300 transition-all hover:-translate-y-1">
                <div className="w-14 h-14 rounded-xl bg-cyan-100 flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-7 h-7 text-cyan-600" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-gray-900">Ingresos Propios</h3>
                <p className="text-sm text-gray-600">Vende nuestro inventario mayorista y gana comisiones desde el primer mes operando</p>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl p-6 text-center hover:border-purple-300 transition-all hover:-translate-y-1">
                <div className="w-14 h-14 rounded-xl bg-purple-100 flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-7 h-7 text-purple-600" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-gray-900">Libertad Total</h3>
                <p className="text-sm text-gray-600">Trabaja desde cualquier lugar del mundo con una profesión global y demandada</p>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl p-6 text-center hover:border-yellow-300 transition-all hover:-translate-y-1">
                <div className="w-14 h-14 rounded-xl bg-yellow-100 flex items-center justify-center mx-auto mb-4">
                  <Award className="w-7 h-7 text-yellow-600" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-gray-900">Sin Techo</h3>
                <p className="text-sm text-gray-600">Tus ingresos dependen de tu esfuerzo. Sin límites de crecimiento.</p>
              </div>
            </div>

            <div className="mt-8 bg-white border-2 border-yellow-300 rounded-2xl p-6 text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Calculator className="w-5 h-5 text-emerald-600" />
                <span className="text-sm font-bold text-emerald-600 uppercase tracking-wider">Retorno de Inversión</span>
              </div>
              <div className="text-4xl md:text-5xl font-black text-gradient">2-3 ventas</div>
              <p className="text-gray-600 mt-2">Es todo lo que necesitas para recuperar tu inversión del curso.<br />
              <span className="text-gray-900 font-semibold">Después, todo es ganancia neta.</span></p>
            </div>

            <div className="text-center mt-8">
              <ArrowDown className="w-10 h-10 text-emerald-500 mx-auto animate-bounce" />
              <p className="text-emerald-600 font-bold text-lg flex items-center justify-center gap-2 mt-4">
                <Check className="w-5 h-5" />
                Tu futuro como agente de viajes profesional comienza aquí
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Options */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Opción 1: Pago Completo */}
            <div className="relative bg-white rounded-3xl p-8 border-2 border-emerald-400 shadow-[0_0_50px_rgba(16,185,129,0.15)] overflow-hidden">
              <div className="absolute -top-1 -right-1 px-8 py-1 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white text-[10px] font-black uppercase tracking-widest shadow-lg rotate-12">
                MEJOR OPCIÓN
              </div>
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-100 flex items-center justify-center">
                    <Percent className="w-7 h-7 text-emerald-600" />
                  </div>
                  <div className="text-right">
                    <div className="text-gray-400 line-through text-lg font-bold">$22.000</div>
                    <div className="text-4xl md:text-5xl font-black text-gradient">$12.700</div>
                    <div className="text-sm text-gray-500 mt-1">Pesos Uruguayos ($UYU)</div>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-3 text-gray-900">Pago Único Promocional</h3>
                <p className="text-gray-600 mb-6">Ahorra $9.300 pagando ahora. Acceso inmediato a todos los materiales. Válido solo para los primeros 20 inscriptos.</p>
                
                <ul className="space-y-3 mb-8 text-sm text-gray-700">
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                    <span><strong className="text-gray-900">42% de descuento</strong> por tiempo limitado</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                    <span>Acceso completo inmediato</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                    <span>Certificación Amadeus incluida</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                    <span>Acceso de por vida + actualizaciones</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                    <span>Inventario mayorista exclusivo</span>
                  </li>
                </ul>

                <a href="https://mercadopago.com.uy/payment-link/v1/redirect?link-id=f14a4900-d778-4c19-b641-8c6de7cd1f0b&source=link" target="_blank" className="btn-primary w-full py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 urgency-pulse">
                  <span>Pagar $12.700 Ahora</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
                
                <p className="text-center text-xs text-gray-500 mt-4 flex items-center justify-center gap-1">
                  <Shield className="w-3 h-3" />
                  Pago seguro procesado por Mercado Pago
                </p>
              </div>
            </div>

            {/* Opción 2: Reservar Cupo */}
            <div className="bg-white rounded-3xl p-8 border-2 border-gray-200 hover:border-cyan-300 transition-all">
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-cyan-100 flex items-center justify-center">
                    <Bookmark className="w-7 h-7 text-cyan-600" />
                  </div>
                  <div className="text-right">
                    <div className="text-gray-400 line-through text-lg font-bold">$11.000</div>
                    <div className="text-3xl font-black text-gradient">$6.350</div>
                    <p className="text-xs text-gray-500">50% para reservar</p>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-3 text-gray-900">Reservar mi Cupo</h3>
                <p className="text-gray-600 mb-6">Separa tu lugar pagando la mitad del precio promocional. El resto ($6.350) lo pagas antes del 06 de abril.</p>
                
                <ul className="space-y-3 mb-8 text-sm text-gray-700">
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-cyan-500 flex-shrink-0" />
                    <span>Aseguras tu lugar inmediatamente</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-cyan-500 flex-shrink-0" />
                    <span>El saldo lo pagas hasta el 06/04</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-cyan-500 flex-shrink-0" />
                    <span>Mismo acceso completo al curso</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-cyan-500 flex-shrink-0" />
                    <span>Posibilidad de financiar el resto</span>
                  </li>
                </ul>

                <a href="https://mercadopago.com.uy/payment-link/v1/redirect?link-id=f14a4900-d778-4c19-b641-8c6de7cd1f0b&source=link" target="_blank" className="btn-secondary w-full py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-2">
                  <span>Reservar con $6.350</span>
                  <Bookmark className="w-5 h-5" />
                </a>
                
                <p className="text-center text-xs text-gray-500 mt-4">
                  Saldo restante: $6.350 antes del 06/04/2026
                </p>
              </div>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="glass-card rounded-2xl p-6 bg-white">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6 text-green-600" />
                </div>
                <span className="text-xs font-bold text-gray-700">Pago Seguro</span>
                <span className="text-[10px] text-gray-500">SSL Encriptado</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-blue-600" />
                </div>
                <span className="text-xs font-bold text-gray-700">Garantía 7 días</span>
                <span className="text-[10px] text-gray-500">Devolución sin preguntas</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-purple-600" />
                </div>
                <span className="text-xs font-bold text-gray-700">Acceso Inmediato</span>
                <span className="text-[10px] text-gray-500">Después del pago</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center">
                  <Award className="w-6 h-6 text-yellow-600" />
                </div>
                <span className="text-xs font-bold text-gray-700">Certificación</span>
                <span className="text-[10px] text-gray-500">Amadeus Oficial</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ¿Qué incluye? */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black mb-4 text-gray-900">¿Qué incluye tu inscripción?</h2>
            <p className="text-gray-600">Todo lo que necesitas para convertirte en agente profesional</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-card rounded-3xl p-8 bg-white">
              <div className="w-14 h-14 rounded-2xl bg-emerald-100 flex items-center justify-center mb-6">
                <Video className="w-7 h-7 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">4 Clases Semanales</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Contenido grabado en video y material escrito descargable. Avanza a tu ritmo con acceso 24/7.
              </p>
            </div>

            <div className="glass-card rounded-3xl p-8 bg-white">
              <div className="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center mb-6">
                <MessageCircle className="w-7 h-7 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Grupo de WhatsApp</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Comunidad exclusiva para dudas diarias. Soporte entre alumnos y equipo de Trip Conecta.
              </p>
            </div>

            <div className="glass-card rounded-3xl p-8 bg-white">
              <div className="w-14 h-14 rounded-2xl bg-cyan-100 flex items-center justify-center mb-6">
                <Users className="w-7 h-7 text-cyan-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Clases en Vivo</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Todos los viernes sesión en vivo para resolver dudas, hacer networking y prácticas grupales.
              </p>
            </div>
          </div>

          <div className="mt-12 glass-card rounded-2xl p-8 bg-white">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-yellow-100 flex items-center justify-center flex-shrink-0">
                <AlertTriangle className="w-6 h-6 text-yellow-600" />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2 text-gray-900">Grupos reducidos para mejor atención</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Limitamos el número de alumnos para garantizar que cada participante reciba atención personalizada 
                  durante las clases en vivo y en el grupo de WhatsApp. Por eso los cupos se agotan rápido.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Plan de Estudios Detallado */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-emerald-600 text-sm font-bold uppercase tracking-widest">12 Semanas de Formación</span>
            <h2 className="text-3xl md:text-5xl font-black mt-4 mb-6 text-gray-900">Plan de Estudios Completo</h2>
            <p className="text-gray-600">Currículo diseñado para que empieces a vender desde el día 1</p>
          </div>

          {/* Módulo 1 */}
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-emerald-100 border border-emerald-200 flex items-center justify-center">
                <Plane className="w-8 h-8 text-emerald-600" />
              </div>
              <div>
                <div className="text-xs font-bold text-emerald-600 uppercase tracking-widest">Módulo 1</div>
                <h3 className="text-2xl font-black text-gray-900">Amadeus - Dominio Técnico</h3>
              </div>
            </div>
            
            <div className="space-y-3">
              <ModuleWeek week="1" title="Introducción al GDS y Perfil del Pasajero (PNR)" desc="Qué es un Sistema de Distribución Global y por qué Amadeus domina el mercado. Creación y gestión de perfiles de clientes." color="emerald" />
              <ModuleWeek week="2" title="Aéreo: Consultas, Cotización y Pricing" desc="Ver disponibilidad, horarios y tarifas. Cotización de itinerarios simples o multidestino y lectura de reglas tarifarias." color="emerald" />
              <ModuleWeek week="3" title="Aéreo: Reservas y Emisión" desc="Creación de reservas, emisión de boletos, re-emisiones, reembolsos y gestión de colas." color="emerald" />
              <ModuleWeek week="4" title="Servicios Adicionales y Examen Final Amadeus" desc="Cotización y reserva de hoteles, autos, etc. Preparación y examen para obtener la Certificación de Amadeus." color="emerald" />
            </div>
          </div>

          {/* Módulo 2 */}
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-cyan-100 border border-cyan-200 flex items-center justify-center">
                <Smartphone className="w-8 h-8 text-cyan-600" />
              </div>
              <div>
                <div className="text-xs font-bold text-cyan-600 uppercase tracking-widest">Módulo 2</div>
                <h3 className="text-2xl font-black text-gray-900">El Oficio Comercial - Ventas Digitales</h3>
              </div>
            </div>
            
            <div className="space-y-3">
              <ModuleWeek week="5" title="Psicología del Cliente y Prospección" desc="Vender 'soluciones' y no destinos. Tomar control de la conversación y diagnosticar presupuestos reales." color="cyan" />
              <ModuleWeek week="6" title="Venta Consultiva y Propuestas High-Ticket" desc="Justificar precios y vender experiencias. Manejo avanzado de objeciones." color="cyan" />
              <ModuleWeek week="7" title="Técnicas de Cierre y Fidelización" desc="Cerrar ventas profesionalmente. Estrategias de post-venta para clientes recurrentes y referidos." color="cyan" />
              <ModuleWeek week="8" title="Clínica de Cierre - Examen Final" desc="Roleplay práctico: simulaciones de venta bajo presión contra los fundadores. Evaluación final del módulo." color="cyan" />
            </div>
          </div>

          {/* Módulo 3 */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-purple-100 border border-purple-200 flex items-center justify-center">
                <Target className="w-8 h-8 text-purple-600" />
              </div>
              <div>
                <div className="text-xs font-bold text-purple-600 uppercase tracking-widest">Módulo 3</div>
                <h3 className="text-2xl font-black text-gray-900">La Captación - Marketing y Leads</h3>
              </div>
            </div>
            
            <div className="space-y-3">
              <ModuleWeek week="9" title="Nicho, Marca Personal y Marketing de Contenidos" desc="Dejar de competir por precio. Generar autoridad educando e inspirando en redes sociales." color="purple" />
              <ModuleWeek week="10" title="Embudo de Captación y Email Marketing" desc="Landing pages e imanes de leads. Nutrición de leads mediante email marketing automatizado." color="purple" />
              <ModuleWeek week="11" title="CRM e Integración Marketing-Ventas" desc="Cómo llega un contacto desde un anuncio al vendedor. Transferencia profesional de leads al equipo de ventas." color="purple" />
              <ModuleWeek week="12" title="Proyecto Final: Tu Embudo Completo" desc="Diseña y presenta tu propio embudo de captación completo. Evaluación final y entrega de certificados." color="purple" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="promo-badge mb-6">
            <Clock className="w-4 h-4" />
            VÁLIDO HASTA EL 31 DE MARZO
          </div>
          
          <h2 className="text-3xl md:text-4xl font-black mb-6 text-gray-900">¿Listo para transformar tu futuro?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Únete a más de 500 agentes certificados que ya están generando ingresos con nuestra metodología probada.
            <br /><br />
            <span className="text-red-500 font-bold">¡Solo quedan {spotsLeft} cupos de 20 a precio promocional!</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto">
            <a href="https://mercadopago.com.uy/payment-link/v1/redirect?link-id=f14a4900-d778-4c19-b641-8c6de7cd1f0b&source=link" target="_blank" className="btn-primary py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 urgency-pulse">
              <span>Pagar Ahora $12.700</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            <a href="https://mercadopago.com.uy/payment-link/v1/redirect?link-id=f14a4900-d778-4c19-b641-8c6de7cd1f0b&source=link" target="_blank" className="btn-secondary py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-2">
              <span>Reservar con $6.350</span>
              <Bookmark className="w-5 h-5" />
            </a>
          </div>

          <div className="mt-8 flex justify-center gap-6 text-gray-500">
            <div className="flex items-center gap-2 text-xs font-medium">
              <ShieldCheck className="w-4 h-4" />
              <span>Pago Seguro MP</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-medium">
              <Clock className="w-4 h-4" />
              <span>Garantía 7 días</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-medium">
              <CreditCard className="w-4 h-4" />
              <span>12 cuotas sin recargo</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
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

      {/* Floating WhatsApp */}
      <a href="https://wa.me/59896343581" target="_blank" className="fixed bottom-6 right-6 bg-green-600 hover:bg-green-700 text-white px-6 py-4 rounded-full shadow-2xl z-50 transition-all hover:scale-110 flex items-center gap-3 group">
        <MessageCircle className="w-6 h-6" />
        <div className="text-left leading-tight hidden group-hover:block">
          <p className="text-[10px] uppercase font-black opacity-70">¿Tienes dudas?</p>
          <p className="text-sm font-bold">Escríbenos</p>
        </div>
      </a>
    </main>
  );
}

function ModuleWeek({ week, title, desc, color }: { week: string, title: string, desc: string, color: string }) {
  const colors: any = {
    emerald: "border-emerald-400",
    cyan: "border-cyan-400",
    purple: "border-purple-400"
  };
  const textColors: any = {
    emerald: "text-emerald-600",
    cyan: "text-cyan-600",
    purple: "text-purple-600"
  };
  const bgColors: any = {
    emerald: "bg-emerald-50",
    cyan: "bg-cyan-50",
    purple: "bg-purple-50"
  };
  return (
    <div className={`${bgColors[color]} border-l-4 ${colors[color]} rounded-r-xl p-4 hover:bg-white transition-colors`}>
      <div className="flex justify-between items-start mb-2">
        <span className={`font-bold ${textColors[color]} text-sm`}>Semana {week}</span>
        <Calendar className="w-4 h-4 text-gray-400" />
      </div>
      <h4 className="font-bold mb-1 text-gray-900">{title}</h4>
      <p className="text-sm text-gray-600">{desc}</p>
    </div>
  );
}
