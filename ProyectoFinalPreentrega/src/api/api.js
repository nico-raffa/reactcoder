
export const items = [
  {
    id: 1,
    title: "Llave inglesa",
    description: "Llave ajustable a diferentes medidas",
    price: 500,
    imgUrl: './img/llaveinglesa.png',
    category: 'llaves'
  },
  {
    id: 2,
    title: "Llave combinada 4",
    description: "Llave combinada de 4mm",
    price: 300,
    imgUrl: './img/combinada.png',
    category: 'llaves'
  },
  {
    id: 3,
    title: "Destornillador torx nº5",
    description: "Destornillador tipo torx tamaño 5mm",
    price: 300,
    imgUrl: './img/torx.png',
    category: 'destornilladores'
  },
  {
    id: 4,
    title: "Destornillador plano nº5",
    description: "Destornillador plano tamaño 5mm",
    price: 350,
    imgUrl: './img/plano.png',
    category: 'destornilladores'

  },
];

export const getItems = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(items);
  }, 2000);
});
