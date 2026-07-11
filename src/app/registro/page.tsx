"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowRight, ArrowLeft, Loader2, CheckCircle, AlertCircle, Building2, User, Mail, Lock } from "lucide-react";

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api';
const PANEL_URL = process.env.NEXT_PUBLIC_PANEL_URL || 'http://localhost:3000';

interface FormData {
  nombre_agencia: string;
  slug: string;
  email: string;
  password: string;
  confirmPassword: string;
  nombre: string;
  apellido: string;
}

function RegisterForm() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const planSlug = searchParams.get("plan") || "free";

  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    nombre_agencia: "",
    slug: "",
    email: "",
    password: "",
    confirmPassword: "",
    nombre: "",
    apellido: "",
  });

  useEffect(() => {
    if (formData.nombre_agencia && !formData.slug) {
      const generatedSlug = formData.nombre_agencia
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");
      setFormData((prev) => ({ ...prev, slug: generatedSlug }));
    }
  }, [formData.nombre_agencia]);

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setError(null);
  };

  const validateStep1 = () => {
    if (formData.nombre_agencia.length < 2) {
      setError("El nombre de la agencia debe tener al menos 2 caracteres");
      return false;
    }
    if (!/^[a-z0-9-]+$/.test(formData.slug)) {
      setError("El slug solo puede contener letras minúsculas, números y guiones");
      return false;
    }
    return true;
  };

  const validateStep2 = () => {
    if (formData.nombre.length < 2 || formData.apellido.length < 2) {
      setError("Nombre y apellido son requeridos");
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setError("Ingresá un email válido");
      return false;
    }
    if (formData.password.length < 8) {
      setError("La contraseña debe tener al menos 8 caracteres");
      return false;
    }
    if (formData.password !== formData.confirmPassword) {
      setError("Las contraseñas no coinciden");
      return false;
    }
    return true;
  };

  const handleNext = () => {
    if (step === 1 && validateStep1()) {
      setStep(2);
    }
  };

  const handleBack = () => {
    setStep(1);
    setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep2()) return;

    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(`${API_URL}/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nombre_agencia: formData.nombre_agencia,
          slug: formData.slug,
          email: formData.email,
          password: formData.password,
          nombre: formData.nombre,
          apellido: formData.apellido,
          plan_slug: planSlug,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Error al crear la cuenta");
      }

      // Guardar sesión y redirigir al panel
      if (typeof window !== "undefined") {
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
      }

      setSuccess(true);
      setTimeout(() => {
        window.location.href = `${PANEL_URL}/dashboard`;
      }, 1500);
    } catch (err: any) {
      setError(err.message || "Error al crear la cuenta");
    } finally {
      setIsLoading(false);
    }
  };

  if (success) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="max-w-md w-full glass-card rounded-3xl p-8 text-center">
          <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8 text-emerald-600" />
          </div>
          <h2 className="text-2xl font-black text-gray-900 mb-2">¡Cuenta creada!</h2>
          <p className="text-gray-600">Te estamos redirigiendo al panel...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-emerald-50/50 to-cyan-50/50">
      <div className="max-w-xl mx-auto">
        <div className="text-center mb-8">
          <Link href="/">
            <img
              src="/assets/logo-trip-conecta.png"
              alt="Trip Conecta"
              className="h-20 w-auto object-contain mx-auto mb-4"
            />
          </Link>
          <h1 className="text-3xl font-black text-gray-900">Creá tu cuenta</h1>
          <p className="text-gray-600 mt-2">
            Plan seleccionado: <span className="font-bold text-emerald-600 capitalize">{planSlug.replace(/-/g, " ")}</span>
          </p>
        </div>

        <div className="glass-card rounded-3xl p-8 bg-white">
          {/* Progress */}
          <div className="flex items-center gap-2 mb-8">
            <div className={`flex-1 h-2 rounded-full ${step >= 1 ? "bg-emerald-500" : "bg-gray-200"}`} />
            <div className={`flex-1 h-2 rounded-full ${step >= 2 ? "bg-emerald-500" : "bg-gray-200"}`} />
          </div>

          {error && (
            <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-600 flex items-start gap-2">
              <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit}>
            {step === 1 && (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Building2 className="w-4 h-4 inline mr-1" />
                    Nombre de tu agencia
                  </label>
                  <input
                    type="text"
                    value={formData.nombre_agencia}
                    onChange={(e) => handleChange("nombre_agencia", e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all"
                    placeholder="Ej: Viajes del Sur"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Slug de tu agencia
                  </label>
                  <div className="flex items-center">
                    <input
                      type="text"
                      value={formData.slug}
                      onChange={(e) => handleChange("slug", e.target.value.toLowerCase())}
                      className="flex-1 px-4 py-3 rounded-l-xl border border-r-0 border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all"
                      placeholder="viajes-del-sur"
                      required
                      pattern="[a-z0-9-]+"
                    />
                    <span className="px-4 py-3 rounded-r-xl border border-l-0 border-gray-200 bg-gray-50 text-gray-500 text-sm">
                      .travel.quotixos.com
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    Solo letras minúsculas, números y guiones.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={handleNext}
                  className="w-full btn-primary justify-center"
                >
                  Continuar
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <User className="w-4 h-4 inline mr-1" />
                      Nombre
                    </label>
                    <input
                      type="text"
                      value={formData.nombre}
                      onChange={(e) => handleChange("nombre", e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Apellido
                    </label>
                    <input
                      type="text"
                      value={formData.apellido}
                      onChange={(e) => handleChange("apellido", e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Mail className="w-4 h-4 inline mr-1" />
                    Email
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all"
                    placeholder="tu@email.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Lock className="w-4 h-4 inline mr-1" />
                    Contraseña
                  </label>
                  <input
                    type="password"
                    value={formData.password}
                    onChange={(e) => handleChange("password", e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all"
                    placeholder="Mínimo 8 caracteres"
                    minLength={8}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Confirmar contraseña
                  </label>
                  <input
                    type="password"
                    value={formData.confirmPassword}
                    onChange={(e) => handleChange("confirmPassword", e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all"
                    required
                  />
                </div>

                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={handleBack}
                    className="flex-1 px-6 py-3 rounded-xl border border-gray-200 text-gray-700 font-medium hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Volver
                  </button>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="flex-[2] btn-primary justify-center disabled:opacity-70"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Creando cuenta...
                      </>
                    ) : (
                      <>
                        Crear cuenta
                        <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </div>
              </div>
            )}
          </form>

          <p className="text-xs text-gray-500 text-center mt-6">
            Al crear tu cuenta aceptás nuestros{" "}
            <Link href="#" className="text-emerald-600 hover:underline">
              términos y condiciones
            </Link>{" "}
            y{" "}
            <Link href="#" className="text-emerald-600 hover:underline">
              política de privacidad
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}

export default function RegistroPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-emerald-600" />
      </div>
    }>
      <RegisterForm />
    </Suspense>
  );
}
