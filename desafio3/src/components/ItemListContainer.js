import react from "react";
import "./ItemListContainer.css"

export default function ItemListContainer ({nombre}){
    return(
        <div>
            <h3 className="greeting">Hola {nombre} este es nuestro catálogo de productos</h3>
            
        </div>
    )
}