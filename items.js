// Edite os links do Google Drive conforme for subindo as pastas de cada item.
// Substitua "COLOQUE_O_LINK_AQUI" pelo link compartilhável da pasta.

const WHATSAPP = "5551993022314";

const ITEMS = [
  {
    id: "cozinha",
    name: "Cozinha (armários e pia)",
    price: 100,
    cover: "/covers/cozinha.jpeg",
    driveUrl: "COLOQUE_O_LINK_AQUI",
  },
  {
    id: "fogao-venax",
    name: "Fogão Venax",
    price: 100,
    cover: "/covers/fogao-venax.jpeg",
    driveUrl: "COLOQUE_O_LINK_AQUI",
  },
  {
    id: "geladeira",
    name: "Geladeira",
    price: 100,
    cover: "/covers/geladeira.jpeg",
    driveUrl: "COLOQUE_O_LINK_AQUI",
  },
  {
    id: "botijao-gas",
    name: "Botijão de gás",
    price: 100,
    cover: "/covers/botijao-gas.jpeg",
    driveUrl: "COLOQUE_O_LINK_AQUI",
  },
  {
    id: "estante-preta",
    name: "Estante preta",
    price: 100,
    cover: "/covers/estante-preta.jpeg",
    driveUrl: "COLOQUE_O_LINK_AQUI",
  },
  {
    id: "guarda-roupa-madeira",
    name: "Guarda-roupa madeira",
    price: 100,
    cover: "/covers/guarda-roupa-madeira.jpeg",
    driveUrl: "COLOQUE_O_LINK_AQUI",
  },
  {
    id: "guarda-roupa-branco",
    name: "Guarda-roupa branco",
    price: 100,
    cover: "/covers/guarda-roupa-branco.jpeg",
    driveUrl: "COLOQUE_O_LINK_AQUI",
  },
  {
    id: "painel-tv-branco",
    name: "Painel de TV branco",
    price: 100,
    cover: "/covers/painel-tv-branco.jpeg",
    driveUrl: "COLOQUE_O_LINK_AQUI",
  },
  {
    id: "tv",
    name: "TV",
    price: 100,
    cover: "/covers/tv.jpeg",
    driveUrl: "COLOQUE_O_LINK_AQUI",
  },
  {
    id: "armario-branco-organizador",
    name: "Armário branco organizador",
    price: 100,
    cover: "/covers/armario-branco-organizador.jpeg",
    driveUrl: "COLOQUE_O_LINK_AQUI",
  },
  {
    id: "xiaomi-smart-band-7",
    name: "Xiaomi Smart Band 7",
    price: 100,
    cover: "/covers/xiaomi-smart-band-7.jpeg",
    driveUrl: "COLOQUE_O_LINK_AQUI",
  },
];

function whatsappUrl(itemName) {
  const text = encodeURIComponent(
    `Olá! Tenho interesse no item: ${itemName}. Vi no site de venda de móveis.`
  );
  return `https://wa.me/${WHATSAPP}?text=${text}`;
}

function formatPrice(value) {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}
