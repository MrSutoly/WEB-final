import { NextResponse } from "next/server";

const COOKIE_AUTH = "ladob_token";

export function middleware(request) {
  const autenticado = Boolean(request.cookies.get(COOKIE_AUTH)?.value);
  const { pathname } = request.nextUrl;

  // Já logado não precisa ver a tela de login
  if (pathname === "/login") {
    if (autenticado) {
      return NextResponse.redirect(new URL("/painel", request.url));
    }
    return NextResponse.next();
  }

  // Rotas privadas: sem token, vai para o login
  if (!autenticado) {
    const url = request.nextUrl.clone();
    url.pathname = "/login";
    url.search = "";
    url.searchParams.set("from", pathname);
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/login", "/painel/:path*", "/usuarios/:path*"],
};
