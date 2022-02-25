import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebase";
import ItemDetail from "./ItemDetail";
import Loader from "./Loader";
export default function ItemListContainer(){
    const [itemDetail, setItemDetail] = useState([])
    const [loading, setLoading] = useState(true);
    const { itemId } = useParams()
    useEffect(() => {

        const itemRef = doc(db, "items", itemId);
    
        getDoc(itemRef)
        .then((snapshot) => {
          
          if(snapshot.exists()) {
            setItemDetail({ id: snapshot.id, ...snapshot.data()})
          }
    
        })
        .catch(error => {
          console.log(error)
        }).finally(()=>{
            setLoading(false)
        })
    
      }, [itemId]);
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