import { albuns, slugsDestaque } from "@/data/albuns";

// Hoje os dados vêm do arquivo local. Na etapa do back-end,
// estas funções passam a chamar a API (fetch) sem mudar as páginas.
export function listarAlbuns() {
  return albuns;
}

export function listarDestaques() {
  return slugsDestaque.map((slug) => albuns.find((a) => a.slug === slug));
}

export function buscarAlbum(slug) {
  return albuns.find((a) => a.slug === slug) ?? null;
}

export function formatarPreco(valor) {
  return "R$ " + valor.toFixed(2).replace(".", ",");
}
