import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

export default function CartWidget() {
  return (
    <div className="cartWidget">
      <FontAwesomeIcon icon={faShoppingCart}/> 3
    </div>
  );
}
