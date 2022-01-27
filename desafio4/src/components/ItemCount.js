import React, { useState } from "react";
import "./ItemCount.css";
export default function ItemCount({ img, precio, nombre, detalles, stock }) {
  const [contador, setContador] = useState(0);

  function agregar() {
    if(contador < stock){
    setContador(contador + 1);
  }}

  function quitar() {
    if(contador === 0){
    }else{
      setContador(contador-1)
    }
  }
  return (
    <div className="card">
      <img src={img} alt="Llave inglesa" />
      <h1>{nombre}</h1>
      <p className="price">{precio}</p>
      <p>{detalles}</p>
      <p>Stock disponible: {stock}</p>
      <div style={{ display: "grid" }}>
        <button onClick={quitar} className="less">
          -
        </button>
        <p className="contador">{contador}</p>
        <button onClick={agregar} className="more">
          +
        </button>
      </div>
      <p>
        <button className="buttonAdd">Agregar al carrito</button>
      </p>
    </div>
  );
}
