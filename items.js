// Edite os links do Google Drive conforme for subindo as pastas de cada item.
// Substitua "COLOQUE_O_LINK_AQUI" pelo link compartilhável da pasta.

const WHATSAPP = "5551993022314";

const ITEMS = [
  {
    id: "cozinha",
    name: "Cozinha (armários e pia)",
    price: 500,
    cover: "/covers/cozinha.jpeg",
    driveUrl: "COLOQUE_O_LINK_AQUI",
  },
  {
    id: "fogao-venax-botijao",
    name: "Fogão Venax + botijão de gás",
    price: 350,
    covers: ["/covers/fogao-venax.jpeg", "/covers/botijao-gas.jpeg"],
    driveUrl: "COLOQUE_O_LINK_AQUI",
  },
  {
    id: "geladeira",
    name: "Geladeira",
    price: 1700,
    cover: "/covers/geladeira.jpeg",
    driveUrl: "COLOQUE_O_LINK_AQUI",
  },
  {
    id: "estante-preta",
    name: "Estante preta / balcão",
    price: 200,
    cover: "/covers/estante-preta.jpeg",
    driveUrl: "COLOQUE_O_LINK_AQUI",
  },
  {
    id: "guarda-roupa-madeira",
    name: "Guarda-roupa marrom",
    price: null,
    cover: "/covers/guarda-roupa-madeira.jpeg",
    driveUrl: "COLOQUE_O_LINK_AQUI",
  },
  {
    id: "guarda-roupa-branco",
    name: "Guarda-roupa branco",
    price: null,
    cover: "/covers/guarda-roupa-branco.jpeg",
    driveUrl: "COLOQUE_O_LINK_AQUI",
  },
  {
    id: "painel-tv-branco",
    name: "Rack para TV",
    details: "1,60 L × 40 P",
    price: 100,
    cover: "/covers/painel-tv-branco.jpeg",
    driveUrl: "COLOQUE_O_LINK_AQUI",
  },
  {
    id: "tv",
    name: "TV Philips Ambilight 50 polegadas",
    price: 1500,
    cover: "/covers/tv.jpeg",
    driveUrl: "COLOQUE_O_LINK_AQUI",
  },
  {
    id: "armario-branco-organizador",
    name: "Sapateira / armário organizador",
    details: "1,70 A × 50 L × 40 P",
    price: 120,
    cover: "/covers/armario-branco-organizador.jpeg",
    driveUrl: "COLOQUE_O_LINK_AQUI",
  },
  {
    id: "xiaomi-smart-band-7",
    name: "Mi Band 7",
    price: 60,
    cover: "/covers/xiaomi-smart-band-7.jpeg",
    driveUrl: "COLOQUE_O_LINK_AQUI",
  },
];

function whatsappUrl(itemName) {
  const text = encodeURIComponent(
    `Olá! Tenho interesse no item: ${itemName}. Vi no Brick do Edu.`
  );
  return `https://wa.me/${WHATSAPP}?text=${text}`;
}

function formatPrice(value) {
  if (value == null) return "A combinar";
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}
