# Trip Conecta Landing

Landing page principal de Trip Conecta. Sitio de marketing para promocionar servicios de certificación de agentes de viajes y consultoría para agencias.

URL: `https://tripconecta.com`

## 🚀 Tecnologías

- **Framework**: Next.js 16.x (App Router)
- **Lenguaje**: TypeScript 5.x
- **Estilos**: Tailwind CSS v3
- **UI**: Lucide React (iconos)
- **Animaciones**: Framer Motion
- **Deployment**: Vercel

## 📁 Estructura

```
trip-conecta-landing/
├── src/
│   └── app/
│       ├── layout.tsx        # Root layout
│       ├── page.tsx          # Home page
│       ├── globals.css       # Tailwind v3 + estilos
│       ├── curso/
│       │   └── page.tsx      # Página del curso
│       └── pagar/
│           └── page.tsx      # Página de pago
├── public/
│   └── assets/
│       ├── trip-conecta-1.png
│       ├── VSL-TRIP-CONECTA-mini.mp4
│       ├── agente-de-viajes-online.jpg
│       └── ... (imágenes)
├── .env.local
├── next.config.ts
├── tailwind.config.ts
└── vercel.json
```

## 🛠️ Instalación Local

```bash
# 1. Navegar al directorio
cd trip-conecta-landing

# 2. Instalar dependencias
npm install

# 3. Configurar variables de entorno (si es necesario)
cp .env.example .env.local

# 4. Iniciar servidor de desarrollo
npm run dev
```

Disponible en: `http://localhost:3000`

## 🔧 Variables de Entorno

```env
# Supabase (para futuras integraciones)
NEXT_PUBLIC_SUPABASE_URL=https://tu-proyecto.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=tu-anon-key
```

## 📄 Páginas

| Ruta | Descripción |
|------|-------------|
| `/` | Home - Servicios y CTA principal |
| `/curso` | Página de inscripción al curso de agentes |
| `/pagar` | Página de procesamiento de pagos |

## 🎨 Sistema de Diseño

### Paleta de Colores
- **Fondo**: Slate 900 (#0f172a)
- **Primario**: Blue 500 (#3b82f6)
- **Texto**: Slate 50 (#f8fafc)
- **Acento**: Gradient blue a violet

### Tipografía
- Sans-serif system font stack

## 📝 Scripts

```bash
npm run dev      # Desarrollo
npm run build    # Producción
npm run lint     # ESLint
```

## 🚀 Deployment

Este proyecto ya está configurado en Vercel.

Para actualizar:
```bash
# Push a master (si está conectado a git)
git push origin master

# O deploy manual
vercel --prod
```

## 📋 Contenido Actual

### Home (`/`)
- Hero section con estadísticas
- Servicios (Certificación, Consultoría, Operación)
- CTA final
- Footer

### Curso (`/curso`)
- Countdown timer (6 de abril 2026)
- Programa del curso
- Beneficios
- Testimonios
- FAQ
- CTA inscripción

### Pagar (`/pagar`)
- Formulario de pago
- Resumen de compra
- Medios de pago

---

**Estado**: ✅ En producción
**Última actualización**: Marzo 2026
