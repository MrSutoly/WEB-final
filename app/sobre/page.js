export const metadata = { title: "Lado B Discos - Sobre" };

export default function Sobre() {
  return (
    <section className="sobre">
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
  );
}
