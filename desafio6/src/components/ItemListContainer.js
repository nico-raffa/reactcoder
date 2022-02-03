import react, { useEffect, useState } from "react";
import "./ItemListContainer.css"
import ItemList from "./ItemList";
import { getItems } from '../api/api'
import Loader from "./Loader";

export default function ItemListContainer ({nombre}){
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        getItems.then((res)=>{
            setItems(res)
        }).catch((error)=>{
            console.log(error)
        }).finally(()=>{
            setLoading(false)
        })
    },[])

    return(
        <div>
            <h3 className="greeting">Hola {nombre} este es nuestro catálogo de productos</h3>
            {loading ? (
                <Loader/>
            ) : (
                <>
                    <ItemList items={items} />
                </>
            )}
        </div>
    )
}