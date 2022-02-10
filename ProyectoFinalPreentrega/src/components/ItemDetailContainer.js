import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getItems } from "../api/api";
import ItemDetail from "./ItemDetail";
import Loader from "./Loader";
export default function ItemListContainer(){
    const [itemDetail, setItemDetail] = useState([])
    const [loading, setLoading] = useState(true);
    const { itemId } = useParams()
    useEffect(()=>{
        getItems().then((items)=>{
            const item = items.find((i)=> i.id === Number(itemId))
            setItemDetail(item)
        }).catch((error)=>{
            console.log(error)
        }).finally(()=>{
            setLoading(false)
        })
    },[itemId])
    return(
        <div>
            {loading ? (
                <Loader/>
            ) : (
                <>
                    <ItemDetail item={itemDetail}/>
                </>
            )}
            
        </div>
    )
}