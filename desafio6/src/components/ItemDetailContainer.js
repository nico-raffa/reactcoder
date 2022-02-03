import { useEffect, useState } from "react";
import { getItems } from "../api/api";
import ItemDetail from "./ItemDetail";

export default function ItemListContainer(){
    const [itemDetail, setItemDetail] = useState([])
    useEffect(()=>{
        getItems.then((items)=>{
            const item = items.find((i)=> i.id ===1)
            setItemDetail(item)
        })
    },[])
    return(
        <div>
            <ItemDetail item={itemDetail}/>
        </div>
    )
}