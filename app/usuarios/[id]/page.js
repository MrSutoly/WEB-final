"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { buscarUsuario } from "@/lib/usuarios";

export default function UsuarioDetalhe() {
  const { id } = useParams();
  const [usuario, setUsuario] = useState(null);
  const [carregando, setCarregando] = useState(true);

  // reage a mudanças no ID da URL
  useEffect(() => {
    let ativo = true;
    setCarregando(true);
    buscarUsuario(id).then((dados) => {
      if (ativo) {
        setUsuario(dados);
        setCarregando(false);
      }
    });
    return () => {
      ativo = false;
    };
  }, [id]);

  // cleanup simples ao sair da página
  useEffect(() => {
    return () => console.log("Saindo dos detalhes do usuário");
  }, []);

  return (
    <section className="pagina">
      <h2>Detalhes do usuário</h2>

      {carregando ? (
        <p>Carregando...</p>
      ) : usuario ? (
        <div className="usuario-item" style={{ marginBottom: "20px" }}>
          <div>
            <strong>{usuario.nome}</strong>
            <br />
            <span>{usuario.email}</span>
          </div>
        </div>
      ) : (
        <p className="erro" style={{ marginBottom: "20px" }}>Usuário não encontrado.</p>
      )}

      <Link href="/usuarios" className="btn">Voltar para a lista</Link>
    </section>
  );
}
