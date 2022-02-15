import "./ItemDetail.css";
import ItemCount from './ItemCount'
import { useState } from "react";
import { Link } from "react-router-dom";
export default function ItemDetail({ item }) {
  const [contador, setContador] = useState();
  function onAddItem(newItemCount){
    setContador(newItemCount)
  }
  return (
    <div className="wrapper">
      <div className="product-img">
        <img src={item.imgUrl}  />
      </div>
      <div className="product-info">
        <div className="product-text">
          <h1>{item.title}</h1>
          <h2>{item.mark}</h2>
          <p>{item.description}</p>        
          <span>${item.price}</span>
        </div>
      {
        !contador ?
        <ItemCount initial={0} stock={5} onAdd={onAddItem}/>:
        <Link to="/cart" className="goToCart">Ir al carrito</Link>
      }
      </div>
    </div>
  );
}
