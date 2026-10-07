"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { listarUsuarios } from "@/lib/usuarios";

export default function Usuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const [carregando, setCarregando] = useState(true);

  // carrega os dados ao abrir a página
  useEffect(() => {
    let ativo = true;
    listarUsuarios().then((dados) => {
      if (ativo) {
        setUsuarios(dados);
        setCarregando(false);
      }
    });

    // cleanup: roda ao sair da página
    return () => {
      ativo = false;
      console.log("Saindo da lista de usuários");
    };
  }, []);

  return (
    <section className="pagina">
      <h2>Usuários</h2>
      <p>Clientes cadastrados na loja (dados de exemplo).</p>

      {carregando ? (
        <p>Carregando...</p>
      ) : (
        <ul className="lista-usuarios">
          {usuarios.map((u) => (
            <li key={u.id} className="usuario-item">
              <div>
                <strong>{u.nome}</strong>
                <br />
                <span>{u.email}</span>
              </div>
              <Link href={`/usuarios/${u.id}`} className="btn">Ver detalhes</Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
