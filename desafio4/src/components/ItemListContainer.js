import react from "react";
import "./ItemListContainer.css"
import ItemCount from "./ItemCount";
import LlaveInglesa from '../img/llaveinglesa.png'

export default function ItemListContainer ({nombre}){
    return(
        <div>
            <h3 className="greeting">Hola {nombre} este es nuestro catálogo de productos</h3>
            <ItemCount img={LlaveInglesa} precio={"$19.99"} nombre="Llave Inglesa" detalles="Detalles del producto" stock={6}/>
        </div>
    )
}