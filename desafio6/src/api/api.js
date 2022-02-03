import LlaveInglesa from '../img/llaveinglesa.png'
import Combinada from '../img/combinada.png'
import DestPlano from '../img/plano.png'
import Torx from '../img/torx.png'
export const items = [
  {
    id: 1,
    title: "Llave inglesa",
    description: "Llave ajustable a diferentes medidas",
    price: 500,
    imgUrl: LlaveInglesa,
  },
  {
    id: 2,
    title: "Llave combinada 4",
    description: "Llave combinada de 4mm",
    price: 300,
    imgUrl: Combinada,
  },
  {
    id: 3,
    title: "Destornillador torx nº5",
    description: "Destornillador tipo torx tamaño 5mm",
    price: 300,
    imgUrl: Torx,
  },
  {
    id: 4,
    title: "Destornillador plano nº5",
    description: "Destornillador plano tamaño 5mm",
    price: 350,
    imgUrl: DestPlano,
  },
];

export const getItems = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(items);
  }, 4000);
});
