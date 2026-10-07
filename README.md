# Lado B Discos (Next.js)

Loja fictícia de álbuns da Taylor Swift. Estilos originais mantidos em `app/globals.css`.

## Rodar
```
npm install
npm run dev
```
Abra http://localhost:3000

## Rotas
- Públicas: `/`, `/albuns`, `/albuns/[slug]`, `/sobre`, `/login`
- Privadas (protegidas por `middleware.js`): `/painel` (componente Contador), `/usuarios`, `/usuarios/[id]`

## Login de teste
`admin@ladob.com` / `123456`

## Preparado para o back-end
- `lib/albuns.js` e `lib/usuarios.js` concentram o acesso aos dados: trocar por `fetch` na API.
- `app/api/login` e `app/api/logout` simulam a autenticação com cookie httpOnly.
