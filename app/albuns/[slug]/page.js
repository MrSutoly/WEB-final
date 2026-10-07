import { notFound } from "next/navigation";
import { listarAlbuns, buscarAlbum, formatarPreco } from "@/lib/albuns";

export function generateStaticParams() {
  return listarAlbuns().map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }) {
  const album = buscarAlbum(params.slug);
  return { title: album ? `Lado B Discos - ${album.nome}` : "Álbum não encontrado" };
}

export default function AlbumDetalhe({ params }) {
  const album = buscarAlbum(params.slug);
  if (!album) notFound();

  return (
    <>
      <section className="album-detalhe">
        <div className="album-detalhe-capa">
          <img id="album-capa" src={album.capa} alt={`Capa do álbum ${album.nome}`} />
        </div>
        <div className="album-detalhe-info">
          <h2 id="album-nome">{album.nome}</h2>
          <p className="artista">Taylor Swift</p>

          <div className="album-detalhe-tags">
            <span className="etiqueta">{album.ano}</span>
            <span className="etiqueta">{album.formato}</span>
          </div>

          <p id="album-descricao">{album.descricao}</p>

          <span className="price" id="album-preco">{formatarPreco(album.preco)}</span>
          <a href="#" className="btn">Comprar</a>
        </div>
      </section>

      <section className="album-extra">
        <div className="album-extra-conteudo">
          <div className="faixas">
            <h3>Faixas</h3>
            <ol id="album-faixas">
              {album.faixas.map((faixa) => (
                <li key={faixa}>{faixa}</li>
              ))}
            </ol>
          </div>
          <div className="caracteristicas">
            <h3>Características do produto</h3>
            <table>
              <tbody>
                <tr><td>Gravadora</td><td id="album-gravadora">{album.gravadora}</td></tr>
                <tr><td>Origem</td><td id="album-pais">{album.origem}</td></tr>
                <tr><td>Envio</td><td>Correios, 5 a 12 dias úteis</td></tr>
                <tr><td>Embalagem</td><td>Envelope reforçado com plástico bolha</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
