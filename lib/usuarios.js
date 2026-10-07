export const usuariosMock = [
  { id: 1, nome: "Ana", email: "ana@email.com" },
  { id: 2, nome: "Carlos", email: "carlos@email.com" },
  { id: 3, nome: "Beatriz", email: "beatriz@email.com" },
  { id: 4, nome: "Diego", email: "diego@email.com" },
];

// Simula uma chamada assíncrona (como será com a API real).
export function listarUsuarios() {
  return new Promise((resolve) => setTimeout(() => resolve(usuariosMock), 300));
}

export function buscarUsuario(id) {
  return new Promise((resolve) =>
    setTimeout(() => resolve(usuariosMock.find((u) => u.id === Number(id)) ?? null), 300)
  );
}
