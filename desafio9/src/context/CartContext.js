import { createContext, useState } from 'react';

export const CartContext = createContext();

export default function CartContextProvider ({children}){
    const [cart, setCart] = useState([])
    const addToCart = (quantity, item) =>{

        if(isInCart(item.id)){
            const data = [...cart]
            data.forEach(x => {
                if(x.id === item.id) {
                    x.quantity += quantity
                }
            })
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
    const removeItem = (id) =>{ 
        setCart(cart.filter(cartItem => cartItem.id !== id))
    }
    return(
        <>
        <CartContext.Provider value={{cart, addToCart, eraseCart, removeItem}}>
        {children}
        </CartContext.Provider>
        </>
    )
}