"use client";

import { Check, ArrowRight, Bookmark, Clock, Flame, Shield, CreditCard, Sparkles, Calculator, HelpCircle, MessageCircle, AlertTriangle, Briefcase, TrendingUp, Globe } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function PagarPage() {
  const [spotsLeft, setSpotsLeft] = useState(12);

  return (
    <main className="min-h-screen text-slate-50 relative pb-20">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-40 bg-slate-900/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-20">
          <Link href="/" className="bg-white/10 px-4 py-2 rounded-xl border border-white/10">
            <img src="/assets/trip-conecta-1.png" alt="Trip Conecta" className="h-8 w-auto" />
          </Link>
          <div className="flex items-center gap-4">
            <span className="text-sm text-slate-400 hidden sm:inline">¡Promoción especial!</span>
            <div className="bg-red-500/10 border border-red-500/30 rounded-full px-4 py-1 flex items-center gap-2">
              <Clock className="w-4 h-4 text-red-500" />
              <span className="text-xs font-bold text-red-500 uppercase">Hasta el 31 de marzo</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Header */}
      <section className="pt-32 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-red-600/20 border border-red-500/40 text-red-400 text-sm font-black uppercase tracking-[0.2em] mb-8 animate-pulse shadow-[0_0_20px_rgba(239,68,68,0.2)]">
              <Flame className="w-4 h-4" />
              Solo 20 Cupos con Descuento
            </div>
            
            <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
              Asegura tu lugar en el <br />
              <span className="text-gradient">Grupo 06 de Abril</span>
            </h1>
            
            <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-10">
              Aprovecha el precio promocional válido solo hasta el <strong className="text-white">31 de marzo</strong>. 
              Después de esta fecha el curso vuelve a su valor regular de $22.000 UYU.
            </p>

            <div className="bg-red-500/[0.03] border border-red-500/20 rounded-2xl p-4 inline-flex items-center gap-3">
              <AlertTriangle className="w-5 h-5 text-red-500" />
              <span className="text-sm font-bold text-red-300">Solo quedan <span className="text-white text-lg">{spotsLeft}</span> cupos de 20 disponibles</span>
            </div>
        </div>
      </section>

      {/* Transformation Box - Re-design from source */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-gradient-to-br from-emerald-500/10 to-blue-500/10 border-2 border-emerald-500/20 rounded-[2.5rem] p-8 md:p-12 overflow-hidden overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/20 rounded-full blur-[100px] -z-10" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/20 rounded-full blur-[100px] -z-10" />
            
            <div className="text-center mb-12">
              <Sparkles className="w-10 h-10 text-emerald-400 mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400 mb-6">LA TRANSFORMACIÓN</h2>
              <p className="text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto">
                Después de terminar este curso vas a comenzar a <strong className="text-white">ganar comisiones vendiendo viajes</strong>, ya sea contratado en una agencia o vendiendo nuestro inventario mayorista. Esta inversión se amortiza con tus primeras ventas.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <TransformationItem icon={<Briefcase className="text-emerald-400" />} title="Empleo Inmediato" text="Postula a agencias que buscan agentes certificados Amadeus." />
              <TransformationItem icon={<TrendingUp className="text-blue-400" />} title="Ingresos Propios" text="Vende nuestro inventario y gana comisiones desde el mes 1." />
              <TransformationItem icon={<Globe className="text-purple-400" />} title="Libertad Total" text="Trabaja desde cualquier lugar con una profesión global." />
              <TransformationItem icon={<Flame className="text-yellow-400" />} title="Sin Techo" text="Tus ingresos los determina cuántos viajes quieras vender." />
            </div>

            <div className="mt-12 bg-yellow-400/10 border-2 border-yellow-400/30 rounded-3xl p-8 text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Calculator className="w-5 h-5 text-yellow-400" />
                <span className="text-sm font-bold text-yellow-400 uppercase tracking-widest">Cálculo de Retorno</span>
              </div>
              <div className="text-4xl md:text-5xl font-black text-white mb-2">2-3 ventas</div>
              <p className="text-slate-300">Es todo lo que necesitas para recuperar el 100% de esta inversión.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Options */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Promo Full Price */}
            <div className="relative glass-card rounded-[3rem] p-10 border-2 border-red-500/30 shadow-[0_0_50px_rgba(239,68,68,0.1)]">
              <div className="absolute top-8 right-8 px-4 py-1 bg-gradient-to-r from-red-600 to-red-500 rounded-full text-[10px] font-black uppercase tracking-widest text-white shadow-xl rotate-3">
                MEJOR OPCIÓN
              </div>
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-red-500/10 flex items-center justify-center border border-red-500/20">
                    <Check className="w-8 h-8 text-red-500" />
                  </div>
                  <div>
                    <span className="text-slate-500 line-through text-lg font-bold">$22.000</span>
                    <div className="text-4xl md:text-5xl font-black text-white">$12.700</div>
                    <span className="text-xs text-slate-400 font-bold uppercase">Pesos Uruguayos (UYU)</span>
                  </div>
                </div>

                <h3 className="text-2xl font-black">Plan Profesional Completo</h3>
                <p className="text-slate-400 text-sm leading-relaxed">Ahorra $9.300 pagando ahora. Acceso inmediato a todos los materiales y certificación Amadeus incluida.</p>

                <ul className="space-y-4">
                  <PaymentFeature text="42% de descuento por tiempo limitado" highlight />
                  <PaymentFeature text="Certificación Amadeus Oficial incluida" />
                  <PaymentFeature text="Acceso de por vida a las clases" />
                  <PaymentFeature text="Inventario mayorista exclusivo" />
                </ul>

                <a href="https://mercadopago.com.uy/payment-link/v1/redirect?link-id=f14a4900-d778-4c19-b641-8c6de7cd1f0b&source=link" target="_blank" className="btn-primary w-full py-5 rounded-2xl shadow-2xl shadow-blue-500/30">
                  <span className="text-lg">Inscribirme ahora por $12.700</span>
                  <ArrowRight className="w-5 h-5" />
                </a>

                <div className="flex items-center justify-center gap-4 opacity-40">
                   <img src="https://img.icons8.com/color/48/000000/mercadopago.png" className="h-6" alt="Mercado Pago" />
                   <div className="h-4 w-px bg-white/20" />
                   <span className="text-[10px] font-bold uppercase tracking-widest flex items-center gap-1">
                      <Shield className="w-3 h-3" /> Pago Seguro
                   </span>
                </div>
              </div>
            </div>

            {/* Reserve Slot */}
            <div className="glass-card rounded-[3rem] p-10 border border-white/10 hover:border-purple-500/30 transition-all flex flex-col justify-between">
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-purple-500/10 flex items-center justify-center border border-purple-500/20">
                    <Bookmark className="w-8 h-8 text-purple-400" />
                  </div>
                  <div>
                     <span className="text-slate-500 line-through text-lg font-bold">11.000</span>
                     <div className="text-4xl font-black text-white">$6.350</div>
                     <span className="text-xs text-slate-400 font-bold uppercase">Reserva (50%)</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-black">Reserva mi Cupo</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">Separa tu lugar con el 50% del valor promocional. El saldo restante ($6.350) puedes pagarlo hasta el 06 de abril.</p>
                </div>

                <ul className="space-y-4">
                  <PaymentFeature text="Aseguras tu lugar en el Grupo Abril" color="purple" />
                  <PaymentFeature text="Saldo restante pagadero hasta el 06/04" color="purple" />
                  <PaymentFeature text="Mismo acceso y beneficios completos" color="purple" />
                </ul>
              </div>

              <div className="mt-10">
                <a href="https://mercadopago.com.uy/payment-link/v1/redirect?link-id=f14a4900-d778-4c19-b641-8c6de7cd1f0b&source=link" target="_blank" className="btn-secondary w-full py-5 rounded-2xl bg-white/[0.05] hover:bg-white/[0.08]">
                  <span>Reservar con $6.350</span>
                  <Bookmark className="w-5 h-5 text-purple-400" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Need Help */}
      <a href="https://wa.me/59896343581" target="_blank" className="fixed bottom-6 right-6 bg-green-600 hover:bg-green-700 text-white px-6 py-4 rounded-full shadow-2xl z-50 transition-all hover:scale-110 flex items-center gap-3 group">
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
    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-colors">
      <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mx-auto mb-4 border border-white/10">
        {icon}
      </div>
      <h4 className="font-bold text-sm mb-2 text-white uppercase tracking-tight">{title}</h4>
      <p className="text-[11px] text-slate-400 leading-relaxed">{text}</p>
    </div>
  );
}

function PaymentFeature({ text, highlight = false, color = "blue" }: { text: string, highlight?: boolean, color?: string }) {
  const colorMap: any = {
    blue: "text-blue-500",
    purple: "text-purple-500",
    red: "text-red-500"
  };
  
  return (
    <li className="flex items-center gap-3">
      <div className={`w-5 h-5 rounded-full bg-${color}-500/10 flex items-center justify-center flex-shrink-0`}>
        <Check className={`w-3 h-3 ${colorMap[color]}`} />
      </div>
      <span className={`text-sm ${highlight ? "font-bold text-white italic" : "text-slate-400"}`}>{text}</span>
    </li>
  );
}
