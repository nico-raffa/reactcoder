import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react"
import { CartContext } from "../context/CartContext"

export default function CartWidget() {
  const { cart, getCartQuantity } = useContext(CartContext)
  return (
    <div className="cartWidget">
      <FontAwesomeIcon icon={faShoppingCart}/> {
        cart.length === 0 ? "" : getCartQuantity()
      }
    </div>
  );
}
