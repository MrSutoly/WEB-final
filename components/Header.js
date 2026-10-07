import Link from "next/link";
import { cookies } from "next/headers";
import { COOKIE_AUTH } from "@/lib/auth";

export default function Header() {
  const logado = cookies().has(COOKIE_AUTH);

  return (
    <header className="header">
      <div className="header-top">
        <Link href="/" className="logo" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="logo-disco"></div>
          <h1>Lado B Discos</h1>
        </Link>
        <ul className="menu">
          <li><Link href="/">Início</Link></li>
          <li><Link href="/albuns">Álbuns</Link></li>
          <li><Link href="/sobre">Sobre</Link></li>
          {logado ? (
            <>
              <li><Link href="/usuarios">Usuários</Link></li>
              <li><Link href="/painel">Painel</Link></li>
              <li>
                <form action="/api/logout" method="post">
                  <button type="submit">Sair</button>
                </form>
              </li>
            </>
          ) : (
            <li><Link href="/login">Entrar</Link></li>
          )}
        </ul>
      </div>
    </header>
  );
}
