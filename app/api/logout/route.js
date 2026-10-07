import { NextResponse } from "next/server";
import { COOKIE_AUTH } from "@/lib/auth";

export async function POST(request) {
  const resposta = NextResponse.redirect(new URL("/", request.url), 303);
  resposta.cookies.delete(COOKIE_AUTH);
  return resposta;
}
