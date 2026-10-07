import { NextResponse } from "next/server";
import { COOKIE_AUTH, USUARIO_DEMO } from "@/lib/auth";

export async function POST(request) {
  const { email, senha } = await request.json();

  if (email !== USUARIO_DEMO.email || senha !== USUARIO_DEMO.senha) {
    return NextResponse.json({ erro: "E-mail ou senha incorretos." }, { status: 401 });
  }

  const resposta = NextResponse.json({ ok: true });
  resposta.cookies.set(COOKIE_AUTH, "token-demo-ladob", {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 8,
  });
  return resposta;
}
