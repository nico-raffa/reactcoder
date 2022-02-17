import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../context/CartContext"
export default function Cart (){
    const { cart, eraseCart } = useContext(CartContext)

    return(     
        <>
        {cart.length === 0
        ? <Link to={"/"} ><h2>Aun no hay nada en el carrito, volve al home.</h2></Link>
        :(
            <>
            
        {cart.map((product)=>{
                return(
                    <div key={product.id}>
                    <h3>{product.title}</h3>
                    <h4>${product.price}</h4>
                    <h3>{product.quantity}</h3>
                    <button>X</button>
                </div>)
                
            })}
        <button onClick={eraseCart}>Vaciar carrito</button>
            </>
        )}
        </>
        
    )
}