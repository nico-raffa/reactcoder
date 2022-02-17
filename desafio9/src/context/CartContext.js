import { createContext, useState } from 'react';

export const CartContext = createContext();

export default function CartContextProvider ({children}){
    const [cart, setCart] = useState([])
    const addToCart = (quantity, item) =>{

        if(isInCart(item.id)){
            setCart(cart.filter(cartItem => cartItem.quantity += quantity))
        }else{
            setCart([...cart,{...item, quantity}])
        }
    }
    const isInCart = (id)=>{
        const response = cart.find(cartItem => cartItem.id === id)
        return response
    }
    const eraseCart =() => {
        setCart([])
    }
    return(
        <>
        <CartContext.Provider value={{cart, addToCart, eraseCart}}>
        {children}
        </CartContext.Provider>
        </>
    )
}