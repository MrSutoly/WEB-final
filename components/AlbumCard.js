import Link from "next/link";
import { formatarPreco } from "@/lib/albuns";

export default function AlbumCard({ album }) {
  return (
    <div className="album-card">
      <img src={album.capa} alt={`Capa do álbum ${album.nome}`} />
      <div className="album-card-info">
        <h3>{album.nome}</h3>
        <span className="album-ano">{album.ano}</span>
        <span className="album-formato">{album.formato}</span>
        <span className="price">{formatarPreco(album.preco)}</span>
        <Link href={`/albuns/${album.slug}`} className="btn">Ver detalhes</Link>
      </div>
    </div>
  );
}
