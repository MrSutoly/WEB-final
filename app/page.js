import Link from "next/link";
import AlbumCard from "@/components/AlbumCard";
import { listarDestaques, buscarAlbum } from "@/lib/albuns";

export const metadata = { title: "Lado B Discos - Início" };

export default function Home() {
  const destaques = listarDestaques();
  const mini1 = buscarAlbum("1989-tv");
  const mini2 = buscarAlbum("life-of-a-showgirl");

  return (
    <>
      <section className="apresentacao">
        <div className="apresentacao-texto">
          <span className="tag-novidade">Chegou The Life of a Showgirl</span>
          <h2>Discos e CDs da Taylor Swift, sem enrolação</h2>
          <p>
            A Lado B Discos é uma lojinha online criada por uma fã pra vender os
            álbuns da Taylor Swift em CD e vinil. Do álbum de estreia até os
            lançamentos mais recentes, tudo em um lugar só, com preço justo e
            entrega para todo o Brasil.
          </p>
          <Link href="/albuns" className="btn">Ver catálogo completo</Link>
        </div>
        <div className="apresentacao-mini">
          <img src={mini1.capa} alt={`Capa do álbum ${mini1.nome}`} />
          <img src={mini2.capa} alt={`Capa do álbum ${mini2.nome}`} />
        </div>
      </section>

      <section className="secao-albuns">
        <h2>Álbuns em destaque</h2>
        <p className="subtitulo">Uma seleção com alguns dos discos mais pedidos aqui na loja.</p>
        <div className="album-list">
          {destaques.map((album) => (
            <AlbumCard key={album.slug} album={album} />
          ))}
        </div>
      </section>

      <section className="sobre" id="sobre">
        <div className="sobre-conteudo">
          <div className="sobre-texto">
            <h2>Sobre a loja</h2>
            <p>
              A ideia da Lado B Discos surgiu de um jeito bem simples: reunir em um
              único lugar os álbuns da Taylor Swift em formato físico, pra quem
              gosta de ter a capa, o encarte e ouvir o disco do jeito antigo. Cada
              exemplar é original e lacrado, e a loja trabalha só com os discos
              que a gente realmente curte ouvir.
            </p>
          </div>
          <div className="sobre-decoracao">
            <div className="vinil"></div>
            <div className="vinil"></div>
          </div>
        </div>
      </section>
    </>
  );
}
