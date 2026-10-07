import Link from "next/link";
import Contador from "@/components/Contador";

export const metadata = { title: "Lado B Discos - Painel" };

export default function Painel() {
  return (
    <section className="pagina">
      <h2>Painel da loja</h2>
      <p>Área restrita. Aqui ficam as ferramentas internas da Lado B Discos.</p>

      <h3 style={{ marginBottom: "10px" }}>Controle de estoque (simulação)</h3>
      <Contador inicial={0} minimoInicial={0} maximoInicial={50} stepInicial={1} />

      <p style={{ marginTop: "24px" }}>
        <Link href="/usuarios" className="btn">Ver usuários cadastrados</Link>
      </p>
    </section>
  );
}
