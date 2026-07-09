# Móveis à venda

Galeria simples para divulgar itens usados com link para fotos no Google Drive e contato via WhatsApp.

## Publicar no GitHub + Vercel

1. Crie um repositório no GitHub e envie este projeto.
2. Acesse [vercel.com](https://vercel.com), conecte o repositório e faça o deploy (sem configuração extra).
3. Edite `items.js` e troque `COLOQUE_O_LINK_AQUI` pelo link de cada pasta no Google Drive.
4. Para alterar preços, edite o campo `price` de cada item em `items.js`.

## Estrutura

- `index.html` — página principal
- `items.js` — lista de itens, preços e links
- `covers/` — fotos de capa (leves, para carregar rápido no celular)
- `Moveis/` — fotos originais (ficam só no seu computador, não vão pro Git)
