import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../context/CartContext"
export default function Cart (){
    const { cart, eraseCart, removeItem } = useContext(CartContext)

    return(     
        <>
        {cart.length === 0
        ? <Link to={"/"} ><h2>Aun no hay nada en el carrito, volve al home.</h2></Link>
        :(
            <>
            
        {cart.map((product)=>{
                return(
                    <div className="card" key={product.id}>
                    <h3>{product.title}</h3>
                    <h4>${product.price}</h4>
                    <h3>{product.quantity}</h3>
                    <button className="btn" onClick={()=>removeItem(product.id)}>X</button>
                </div>)
                
            })}
        <button className="btn-dark" onClick={eraseCart}>Vaciar carrito</button>
            </>
        )}
        </>
        
    )
}