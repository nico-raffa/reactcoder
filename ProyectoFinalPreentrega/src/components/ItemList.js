import Item from "./Item";

export default function ItemList({items}){
    return(
        <div style={{ display: "flex" }}>
            {items.map((item)=>(
                    <Item key={item.id} item={item}/>
                ))}
        </div>
    )
}