import "./ItemDetail.css";
import ItemCount from './ItemCount'
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

export default function ItemDetail({ item }) {
  const [contador, setContador] = useState();
  const { addToCart } = useContext(CartContext)

  function onAddItem(itemAmount){
    addToCart(itemAmount, item)
    setContador(itemAmount)
  }
  return (
    <div className="wrapper">
      <div className="product-img">
        <img src={item.imgUrl} alt={item.title}  />
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
        <ItemCount initial={0} stock={item.stock} onAdd={onAddItem}/>:
        <Link to="/cart" className="goToCart">Ir al carrito</Link>
      }
      </div>
    </div>
  );
}
