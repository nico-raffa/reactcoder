import { useEffect, useState } from "react";
import "./ItemListContainer.css"
import ItemList from "./ItemList";
import { getItems } from '../api/api'
import Loader from "./Loader";
import { useParams } from "react-router-dom";

export default function ItemListContainer ({greeting}){
    const { categoryName } = useParams()

    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        getItems.then((res)=>{
            if(!categoryName){
                setItems(res)
            }else{                
                const itemsFiltrados = res.filter((producto)=>{
                    return producto.category === categoryName
                })
                setItems(itemsFiltrados)
            }
        }).catch((error)=>{
            console.log(error)
        }).finally(()=>{
            setLoading(false)
        })
    },[categoryName])

    return(
        <div>
            <h3 className="greeting">{greeting}</h3>
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