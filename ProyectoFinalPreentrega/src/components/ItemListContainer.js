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
    useEffect(() => {
        setLoading(true);
        getItems(categoryName)
          .then((res) => setItems(res))
          .catch((error) => console.log(error))
          .finally(() => setLoading(false));
      }, [categoryName]);

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