import React, { useState } from "react";
import "./ItemCount.css";
export default function ItemCount({ stock }) {
  const [contador, setContador] = useState(1);
  function onAdd(){
    console.log('Producto agregado')
  }
  function agregar() {
    if (contador < stock) {
      setContador(contador + 1);
    }
  }
  function quitar() {
    if (contador !== 0) {
      setContador(contador - 1);
    } 
  }
  return (
    <div>
    <p>Stock disponible: {stock}</p>
      <div className="buttons">
      
        <button onClick={quitar} className="less">
          -
        </button>
        <p className="contador">{contador}</p>
        <button onClick={agregar} className="more">
          +
        </button>
      </div>
      <p>
        <button onClick={onAdd} disabled={contador===0} className= {contador===0 ? "disabled" : "buttonAdd"}>
          
          Agregar al carrito
        </button>
      </p>
    </div>
  );
}
