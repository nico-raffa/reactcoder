import ItemCount from "./ItemCount";
import "./Item.css";
import { Link } from "react-router-dom";
export default function Item({ item }) {
  return (
    <div>
      <Link to={`/product/${item.id}`} className="card">
        <img src={item.imgUrl} alt={item.title} />
        <h1>{item.title}</h1>
        <p className="price">${item.price}</p>
      </Link>
    </div>
  );
}
