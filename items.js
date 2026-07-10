const WHATSAPP = "5551993022314";

const ITEMS = [
  {
    id: "cozinha",
    name: "Cozinha (armários e pia)",
    details: "1,90 L",
    price: 500,
    cover: "/covers/cozinha.jpeg",
    driveUrl: "https://drive.google.com/drive/folders/1RXtLRrOJRiKtKUh987-InBSDQVoIsuwm",
  },
  {
    id: "fogao-venax-botijao",
    name: "Fogão Venax + botijão de gás",
    details: "Forno do fogão não está funcionando. Botijão com mais da metade do gás.",
    price: 350,
    covers: ["/covers/fogao-venax.jpeg", "/covers/botijao-gas.jpeg"],
    driveUrl: "https://drive.google.com/drive/folders/1_2AmGBy1wKoEIvsT-K7-QXAneDMuK1GG",
  },
  {
    id: "geladeira",
    name: "Geladeira Electrolux",
    details: "382 L · Frost Free",
    price: 1500,
    cover: "/covers/geladeira.jpeg",
    driveUrl: "https://drive.google.com/drive/folders/1Zcy7DMmvQWakag6nqkIPONKD7Wni0ckw",
  },
  {
    id: "vendido-sofa",
    name: "Sofá",
    sold: true,
    cover: "/covers/vendido-sofa.jpeg",
  },
  {
    id: "microondas",
    name: "Micro-ondas Panasonic",
    details: "20 L",
    price: 220,
    cover: "/covers/microondas.jpeg",
    driveUrl: "https://drive.google.com/drive/folders/1J5lMypuTsspYTbQM-mUn-WegbWlLTT5P",
  },
  {
    id: "air-fryer-nell",
    name: "Air Fryer Nell Smart",
    details: "2,4 L",
    price: 120,
    cover: "/covers/air-fryer-nell.jpeg",
    driveUrl: "https://drive.google.com/drive/folders/1Yw6lWROola1duVbAG0_Z1BJVH-uVw-rI",
  },
  {
    id: "estante-preta",
    name: "Estante preta / balcão",
    price: 200,
    cover: "/covers/estante-preta.jpeg",
    driveUrl: "https://drive.google.com/drive/folders/1OFUoyskBtCwRYy14tljh7lDfTg2Jyx0M",
  },
  {
    id: "vendido-armario-branco",
    name: "Armário branco",
    sold: true,
    cover: "/covers/vendido-armario-branco.jpeg",
  },
  {
    id: "guarda-roupa-marrom",
    name: "Guarda-roupa marrom",
    details: "1,60 L × 1,80 A × 50 P",
    price: 550,
    cover: "/covers/guarda-roupa-marrom.jpeg",
    driveUrl: "https://drive.google.com/drive/folders/1qKW2tbkC0ke7Ik83yEYlvV1i9fnNk6Lx",
  },
  {
    id: "guarda-roupa-branco",
    name: "Guarda-roupa branco",
    price: 250,
    cover: "/covers/guarda-roupa-branco.jpeg",
    driveUrl: "https://drive.google.com/drive/folders/1-Of--6apzRDsAMpa01noy7cyTD0hxd2K",
  },
  {
    id: "rack-tv",
    name: "Rack para TV",
    details: "1,60 L × 40 P",
    price: 120,
    cover: "/covers/rack-tv.jpeg",
    driveUrl: "https://drive.google.com/drive/folders/1wEn58ETMXmnKT-EOVxRUmjMb9mB6bPUm",
  },
  {
    id: "tv",
    name: "TV Philips Ambilight 50 polegadas",
    price: 1300,
    cover: "/covers/tv.jpeg",
    driveUrl: "https://drive.google.com/drive/folders/1iCQ_E2j6bPf2OZF20Hce75kzD6mW9xlX",
  },
  {
    id: "sapateira",
    name: "Sapateira / armário organizador",
    details: "1,70 A × 50 L × 40 P",
    price: 120,
    cover: "/covers/sapateira.jpeg",
    driveUrl: "https://drive.google.com/drive/folders/12seLcUt1LRmoAktNnl2bXiG7SpfNEZOR",
  },
  {
    id: "mi-band-7",
    name: "Mi Band 7",
    price: 60,
    cover: "/covers/mi-band-7.jpeg",
    driveUrl: "https://drive.google.com/drive/folders/1b03V2_I53MGld97CAJvFnakiQb8HtxVw",
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
