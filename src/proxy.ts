import { NextRequest, NextResponse } from "next/server";

/**
 * Corte de servicio por falta de pago.
 * Reescribe cualquier ruta a /desconectado, que muestra el aviso
 * "Servicio desconectado, abone para reconectar".
 *
 * Para reactivar el sitio: borrar este archivo (y src/app/desconectado)
 * y volver a deployar.
 */
export function proxy(request: NextRequest) {
  const url = request.nextUrl.clone();
  url.pathname = "/desconectado";
  url.search = "";
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|robots.txt|desconectado).*)",
  ],
};
