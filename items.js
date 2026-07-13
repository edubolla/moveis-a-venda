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
    id: "fogao-venax",
    name: "Fogão Venax",
    details: "Forno não está funcionando.",
    price: 120,
    cover: "/covers/fogao-venax.jpeg",
    driveUrl: "https://drive.google.com/drive/folders/1_2AmGBy1wKoEIvsT-K7-QXAneDMuK1GG",
  },
  {
    id: "botijao-gas",
    name: "Botijão de gás + válvula e suporte",
    details: "Botijão pela metade.",
    price: 180,
    cover: "/covers/botijao-gas.jpeg",
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
    id: "vendido-mi-band-7",
    name: "Mi Band 7",
    sold: true,
    cover: "/covers/vendido-mi-band-7.jpeg",
  },
  {
    id: "estante-preta",
    name: "Estante preta / balcão",
    details: "2,35 L · formato irregular",
    price: 400,
    cover: "/covers/estante-preta.jpeg",
    driveUrl: "https://drive.google.com/drive/folders/1OFUoyskBtCwRYy14tljh7lDfTg2Jyx0M",
  },
  {
    id: "mesa-centro",
    name: "Mesa de centro",
    price: 200,
    cover: "/covers/mesa-centro.jpeg",
    driveUrl: "https://drive.google.com/drive/folders/1_83Vhif7zfL39gm9iMTQfDTougW9Z2ve",
  },
  {
    id: "mesa-jantar",
    name: "Mesa de jantar com 6 cadeiras",
    details: "1,60 L × 0,90 P × 80 A",
    price: 500,
    cover: "/covers/mesa-jantar.jpeg",
    driveUrl: "https://drive.google.com/drive/folders/10pPZEcoVqE_--xJC84gqcAw1Td1zIPBF",
  },
  {
    id: "prateleira",
    name: "Prateleira",
    details: "2,00 L × 35 P",
    price: 100,
    cover: "/covers/prateleira.jpeg",
  },
  {
    id: "vendido-tv",
    name: "TV Philips Ambilight 50 polegadas",
    sold: true,
    cover: "/covers/vendido-tv.jpeg",
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
    details: "1,60 L × 2,00 A × 45 P",
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
    id: "vendido-sapateira",
    name: "Sapateira / armário organizador",
    sold: true,
    cover: "/covers/vendido-sapateira.jpeg",
  },
  {
    id: "rack-tv",
    name: "Rack para TV",
    details: "1,60 L × 40 P",
    price: 120,
    cover: "/covers/rack-tv.jpeg",
    driveUrl: "https://drive.google.com/drive/folders/1wEn58ETMXmnKT-EOVxRUmjMb9mB6bPUm",
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
