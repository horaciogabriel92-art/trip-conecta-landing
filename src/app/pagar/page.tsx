"use client";

import { Check, ArrowRight, Bookmark, Clock, Flame, Shield, CreditCard, Sparkles, Calculator, MessageCircle, AlertTriangle, Briefcase, TrendingUp, Globe } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function PagarPage() {
  const [spotsLeft, setSpotsLeft] = useState(12);

  return (
    <main className="min-h-screen text-gray-900 relative bg-white pb-20">
      <div className="gradient-bg" />
      
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-40 bg-white/95 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-20">
          <Link href="/curso" className="flex items-center">
            <img src="/trip conecta (2).png" alt="Trip Conecta" className="h-10 w-auto" />
          </Link>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-500 hidden sm:inline">¡Promoción especial!</span>
            <div className="bg-red-50 border border-red-200 rounded-full px-4 py-1 flex items-center gap-2">
              <Clock className="w-4 h-4 text-red-500" />
              <span className="text-xs font-bold text-red-500 uppercase">Hasta el 31 de marzo</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Header */}
      <section className="pt-32 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-red-100 border border-red-200 text-red-600 text-sm font-black uppercase tracking-wider mb-8 animate-pulse">
              <Flame className="w-4 h-4" />
              Solo 20 Cupos con Descuento
            </div>
            
            <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight text-gray-900">
              Asegura tu lugar en el <br />
              <span className="text-gradient">Grupo 06 de Abril</span>
            </h1>
            
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
              Aprovecha el precio promocional válido solo hasta el <strong className="text-gray-900">31 de marzo</strong>. 
              Después de esta fecha el curso vuelve a su valor regular de $22.000 UYU.
            </p>

            <div className="bg-red-50 border border-red-200 rounded-2xl p-4 inline-flex items-center gap-3">
              <AlertTriangle className="w-5 h-5 text-red-500" />
              <span className="text-sm font-bold text-red-600">Solo quedan <span className="text-red-700 text-lg">{spotsLeft}</span> cupos de 20 disponibles</span>
            </div>
        </div>
      </section>

      {/* Transformation Box */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-gradient-to-br from-emerald-50 to-cyan-50 border-2 border-emerald-200 rounded-[2.5rem] p-8 md:p-12 overflow-hidden">
            <div className="text-center mb-12">
              <Sparkles className="w-10 h-10 text-emerald-600 mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-black text-gradient mb-6">LA TRANSFORMACIÓN</h2>
              <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Después de terminar este curso vas a comenzar a <strong className="text-gray-900">ganar comisiones vendiendo viajes</strong>, ya sea contratado en una agencia o vendiendo nuestro inventario mayorista. Esta inversión se amortiza con tus primeras ventas.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <TransformationItem icon={<Briefcase className="text-emerald-600" />} title="Empleo Inmediato" text="Postula a agencias que buscan agentes certificados Amadeus." />
              <TransformationItem icon={<TrendingUp className="text-cyan-600" />} title="Ingresos Propios" text="Vende nuestro inventario y gana comisiones desde el mes 1." />
              <TransformationItem icon={<Globe className="text-purple-600" />} title="Libertad Total" text="Trabaja desde cualquier lugar con una profesión global." />
              <TransformationItem icon={<Flame className="text-orange-500" />} title="Sin Techo" text="Tus ingresos los determina cuántos viajes quieras vender." />
            </div>

            <div className="mt-12 bg-white border-2 border-yellow-300 rounded-3xl p-8 text-center shadow-lg">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Calculator className="w-5 h-5 text-yellow-600" />
                <span className="text-sm font-bold text-yellow-600 uppercase tracking-widest">Cálculo de Retorno</span>
              </div>
              <div className="text-4xl md:text-5xl font-black text-gradient mb-2">2-3 ventas</div>
              <p className="text-gray-600">Es todo lo que necesitas para recuperar el 100% de esta inversión.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Options */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Promo Full Price */}
            <div className="relative glass-card rounded-[2rem] p-10 border-2 border-emerald-300 shadow-xl">
              <div className="absolute top-6 right-6 px-4 py-1 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full text-[10px] font-black uppercase tracking-widest text-white shadow-lg rotate-3">
                MEJOR OPCIÓN
              </div>
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-100 flex items-center justify-center border border-emerald-200">
                    <Check className="w-8 h-8 text-emerald-600" />
                  </div>
                  <div>
                    <span className="text-gray-400 line-through text-lg font-bold">$22.000</span>
                    <div className="text-4xl md:text-5xl font-black text-gray-900">$12.700</div>
                    <span className="text-xs text-gray-500 font-bold uppercase">Pesos Uruguayos (UYU)</span>
                  </div>
                </div>

                <h3 className="text-2xl font-black text-gray-900">Plan Profesional Completo</h3>
                <p className="text-gray-600 text-sm leading-relaxed">Ahorra $9.300 pagando ahora. Acceso inmediato a todos los materiales y certificación Amadeus incluida.</p>

                <ul className="space-y-4">
                  <PaymentFeature text="42% de descuento por tiempo limitado" highlight />
                  <PaymentFeature text="Certificación Amadeus Oficial incluida" />
                  <PaymentFeature text="Acceso de por vida a las clases" />
                  <PaymentFeature text="Inventario mayorista exclusivo" />
                </ul>

                <a href="https://mercadopago.com.uy/payment-link/v1/redirect?link-id=f14a4900-d778-4c19-b641-8c6de7cd1f0b&source=link" target="_blank" className="btn-primary w-full py-5 rounded-2xl text-lg">
                  <span>Inscribirme ahora por $12.700</span>
                  <ArrowRight className="w-5 h-5" />
                </a>

                <div className="flex items-center justify-center gap-4 text-gray-400">
                   <div className="bg-gradient-to-r from-blue-400 to-cyan-400 text-white px-3 py-1 rounded-lg text-xs font-bold">
                     Mercado Pago
                   </div>
                   <div className="h-4 w-px bg-gray-300" />
                   <span className="text-[10px] font-bold uppercase tracking-widest flex items-center gap-1">
                      <Shield className="w-3 h-3" /> Pago Seguro
                   </span>
                </div>
              </div>
            </div>

            {/* Reserve Slot */}
            <div className="glass-card rounded-[2rem] p-10 border border-gray-200 hover:border-cyan-300 transition-all flex flex-col justify-between">
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-cyan-100 flex items-center justify-center border border-cyan-200">
                    <Bookmark className="w-8 h-8 text-cyan-600" />
                  </div>
                  <div>
                     <span className="text-gray-400 line-through text-lg font-bold">$11.000</span>
                     <div className="text-4xl font-black text-gray-900">$6.350</div>
                     <span className="text-xs text-gray-500 font-bold uppercase">Reserva (50%)</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-black text-gray-900">Reserva mi Cupo</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">Separa tu lugar con el 50% del valor promocional. El saldo restante ($6.350) puedes pagarlo hasta el 06 de abril.</p>
                </div>

                <ul className="space-y-4">
                  <PaymentFeature text="Aseguras tu lugar en el Grupo Abril" color="cyan" />
                  <PaymentFeature text="Saldo restante pagadero hasta el 06/04" color="cyan" />
                  <PaymentFeature text="Mismo acceso y beneficios completos" color="cyan" />
                </ul>
              </div>

              <div className="mt-10">
                <a href="https://mercadopago.com.uy/payment-link/v1/redirect?link-id=f14a4900-d778-4c19-b641-8c6de7cd1f0b&source=link" target="_blank" className="btn-secondary w-full py-5 rounded-2xl">
                  <span>Reservar con $6.350</span>
                  <Bookmark className="w-5 h-5 text-cyan-600" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card rounded-2xl p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <TrustBadge icon={<Shield className="w-6 h-6 text-emerald-600" />} title="Pago Seguro" subtitle="SSL Encriptado" />
              <TrustBadge icon={<CreditCard className="w-6 h-6 text-blue-600" />} title="12 Cuotas" subtitle="Sin recargo" />
              <TrustBadge icon={<Clock className="w-6 h-6 text-cyan-600" />} title="Acceso Inmediato" subtitle="Después del pago" />
              <TrustBadge icon={<Check className="w-6 h-6 text-purple-600" />} title="Certificación" subtitle="Amadeus Oficial" />
            </div>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp */}
      <a href="https://wa.me/59896343581" target="_blank" className="fixed bottom-6 right-6 bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-4 rounded-full shadow-2xl z-50 transition-all hover:scale-110 flex items-center gap-3 group">
        <MessageCircle className="w-6 h-6" />
        <div className="text-left leading-tight hidden group-hover:block transition-all duration-300">
          <p className="text-[10px] uppercase font-black opacity-70">¿Tienes dudas?</p>
          <p className="text-sm font-bold">Chat por WhatsApp</p>
        </div>
      </a>
    </main>
  );
}

function TransformationItem({ icon, title, text }: { icon: any, title: string, text: string }) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 text-center hover:border-emerald-300 hover:shadow-lg transition-all">
      <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center mx-auto mb-4 border border-gray-200">
        {icon}
      </div>
      <h4 className="font-bold text-sm mb-2 text-gray-900 uppercase tracking-tight">{title}</h4>
      <p className="text-[11px] text-gray-600 leading-relaxed">{text}</p>
    </div>
  );
}

function PaymentFeature({ text, highlight = false, color = "emerald" }: { text: string, highlight?: boolean, color?: string }) {
  const colorMap: any = {
    emerald: "text-emerald-600",
    cyan: "text-cyan-600",
    red: "text-red-600"
  };
  
  return (
    <li className="flex items-center gap-3">
      <div className={`w-5 h-5 rounded-full bg-${color}-100 flex items-center justify-center flex-shrink-0`}>
        <Check className={`w-3 h-3 ${colorMap[color]}`} />
      </div>
      <span className={`text-sm ${highlight ? "font-bold text-gray-900" : "text-gray-600"}`}>{text}</span>
    </li>
  );
}

function TrustBadge({ icon, title, subtitle }: { icon: any, title: string, subtitle: string }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
        {icon}
      </div>
      <span className="text-xs font-bold text-gray-900">{title}</span>
      <span className="text-[10px] text-gray-500">{subtitle}</span>
    </div>
  );
}
