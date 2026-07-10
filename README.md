# Brick do Edu

Galeria simples para divulgar móveis e itens usados, com link para fotos no Google Drive e contato via WhatsApp.

## Publicar no GitHub + Vercel

1. Crie um repositório no GitHub e envie este projeto.
2. Acesse [vercel.com](https://vercel.com), conecte o repositório e faça o deploy (sem configuração extra).
3. Edite `items.js` e troque `COLOQUE_O_LINK_AQUI` pelo link de cada pasta no Google Drive.
4. Para alterar preços, edite o campo `price` de cada item em `items.js`.
5. Medidas e detalhes extras vão no campo `details` (aparecem abaixo do nome).

## Estrutura

- `index.html` — página principal
- `items.js` — lista de itens, preços e links
- `covers/` — fotos de capa (leves, para carregar rápido no celular)
- `Moveis/` — fotos originais (ficam só no seu computador, não vão pro Git)
