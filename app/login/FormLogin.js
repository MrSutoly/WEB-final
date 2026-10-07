"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function FormLogin() {
  const router = useRouter();
  const params = useSearchParams();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const [enviando, setEnviando] = useState(false);

  async function entrar(e) {
    e.preventDefault();
    setErro("");
    setEnviando(true);

    const resposta = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, senha }),
    });

    if (!resposta.ok) {
      const dados = await resposta.json();
      setErro(dados.erro);
      setEnviando(false);
      return;
    }

    // só aceita redirecionamento interno
    const from = params.get("from");
    const destino = from && from.startsWith("/") && !from.startsWith("//") ? from : "/painel";
    router.push(destino);
    router.refresh();
  }

  return (
    <form className="form-card" onSubmit={entrar}>
      <h2>Entrar</h2>
      <p className="dica">Acesso à área restrita. Use admin@ladob.com / 123456</p>

      <label className="campo">
        E-mail
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </label>
      <label className="campo">
        Senha
        <input type="password" value={senha} onChange={(e) => setSenha(e.target.value)} required />
      </label>

      {erro && <p className="erro">{erro}</p>}

      <button className="btn" type="submit" disabled={enviando}>
        {enviando ? "Entrando..." : "Entrar"}
      </button>
    </form>
  );
}
