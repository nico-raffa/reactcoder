import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretSquareLeft } from "@fortawesome/free-solid-svg-icons"
import React, { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { Link } from "react-router-dom"
import './Cart.css'
export default function Cart (){
    const { cart, eraseCart, removeItem, getCartQuantity, getCartTotalPrice } = useContext(CartContext)

    return(     
       
        
    <div className="row">
        <div className="col-md-8 cart">
            <div className="title">
                <div className="row">
                    <div className="col">
                        <h4><b>Carrito de compras</b></h4>
                    </div>
                </div>
            </div>
            {cart.length === 0
         ? <Link to={"/"} ><h2>Carrito vacío, click acá para volver al home</h2></Link>
         :(
             <>
            {cart.map((product)=>{
                 return(
                     <div className="row border-top border-bottom" key={product.id}>
                         <div className="row main align-items-center">  
                         <div className="col-2"><img className="img-fluid" src={product.imgUrl} alt={product.title}/></div>
                         <div className="col">
                        <div className="row text-muted">{product.title}</div>
                        <div className="row">{product.description}</div>
                    </div>
                        <div className="col"> <span className="border">Cantidad: {product.quantity}</span> </div>
                        <div className="col">C/U ${product.price} <button className="btn-dark" onClick={()=>removeItem(product.id)}>&#10005;</button></div>
                    
                     </div>
                 </div>)                
             })}
             <button className="btn" onClick={eraseCart}>Vaciar carrito</button>
             </>
            )}
            
            
            <div className="back-to-shop"><Link to={"/"} ><FontAwesomeIcon icon={faCaretSquareLeft} size="lg"/><span className="text-muted">Back to shop</span></Link></div>
        </div>
        <div className="col-md-4 summary">
            <div>
                <h5><b>Resumen</b></h5>
            </div>
            <hr/>
            <div className="row">
                <div className="col">Cantidad de items: </div>
                <div className="col text-right">{getCartQuantity()}</div>
            </div>
            
            <div className="row">
                <div className="col">Precio total</div>
                <div className="col text-right">${getCartTotalPrice()}</div>
            </div> <button className="btn">CHECKOUT</button>
        </div>
    </div>

        
    )
}
