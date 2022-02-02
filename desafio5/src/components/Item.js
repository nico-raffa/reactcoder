import ItemCount from "./ItemCount";
import './Item.css'
export default function Item({ item }) {
  return (
    <div className="card">
      <img src={item.imgUrl} alt={item.title} />
      <h1>{item.title}</h1>
      <p className="price">${item.price}</p>
      <p>{item.detalles}</p>
      <ItemCount stock={5}/>
    </div>
  );
}
