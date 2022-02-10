export const items = [
  {
    id: 1,
    title: "Llave inglesa",
    description: "Llave ajustable a diferentes medidas",
    price: 500,
    imgUrl: 'https://res.cloudinary.com/dgvs3qrxg/image/upload/v1644502378/llaveinglesa_xfe5f6.png',
    category: 'llaves'
  },
  {
    id: 2,
    title: "Llave combinada 4",
    description: "Llave combinada de 4mm",
    price: 300,
    imgUrl: 'https://res.cloudinary.com/dgvs3qrxg/image/upload/v1644502378/combinada_lxwpo9.webp',
    category: 'llaves'
  },
  {
    id: 3,
    title: "Destornillador torx nº5",
    description: "Destornillador tipo torx tamaño 5mm",
    price: 300,
    imgUrl: 'https://res.cloudinary.com/dgvs3qrxg/image/upload/v1644502378/torx_pya6ok.jpg',
    category: 'destornilladores'
  },
  {
    id: 4,
    title: "Destornillador plano nº5",
    description: "Destornillador plano tamaño 5mm",
    price: 350,
    imgUrl: 'https://res.cloudinary.com/dgvs3qrxg/image/upload/v1644502378/plano_zc9wsk.png',
    category: 'destornilladores'
  },
];

export const getItems = (category) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (category) {
        resolve(items.filter((producto) => producto.category === category));
      } else {
        resolve(items);
      }
    }, 2000);
  });