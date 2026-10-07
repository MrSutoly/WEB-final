import AlbumCard from "@/components/AlbumCard";
import { listarAlbuns } from "@/lib/albuns";

export const metadata = { title: "Lado B Discos - Álbuns" };

export default function Albuns() {
  const albuns = listarAlbuns();

  return (
    <>
      <div className="catalogo-header">
        <h2>Catálogo completo</h2>
        <p>Todos os álbuns da Taylor Swift disponíveis na loja, em CD e vinil.</p>
      </div>

      <section className="secao-albuns">
        <div className="album-list">
          {albuns.map((album) => (
            <AlbumCard key={album.slug} album={album} />
          ))}
        </div>
      </section>

      <section className="info-loja">
        <div className="info-loja-conteudo">
          <div className="info-bloco">
            <h3>Envio</h3>
            <ul>
              <li>Correios, 5 a 12 dias úteis</li>
              <li>Entrega para todo o Brasil</li>
            </ul>
          </div>
          <div className="info-bloco">
            <h3>Embalagem</h3>
            <ul>
              <li>Envelope reforçado com plástico bolha</li>
              <li>Discos originais e lacrados</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
