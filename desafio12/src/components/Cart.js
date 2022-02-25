import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretSquareLeft } from "@fortawesome/free-solid-svg-icons";
import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import "./Cart.css";
import { db } from "../firebase";
import { addDoc, collection } from "firebase/firestore";
export default function Cart() {
  const { cart, eraseCart, removeItem, getCartQuantity, getCartTotalPrice } =
    useContext(CartContext);
  const [formValues, setFormValues] = useState({});
  const handleInputChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };
  const ordersCollection = collection(db, "orders");
  const newOrder = {
    buyer: {
      name: formValues.name,
      phone: formValues.phone,
      email: formValues.email,
    },
    items: cart,
    total: getCartTotalPrice(),
  };
  const checkOut = (event) => {
      event.preventDefault();
    if (getCartQuantity() === 0) {
        alert('El carrito está vacío, agregá algo y volvé al carrito')
    } else {
      addDoc(ordersCollection, newOrder)
        .then((doc) => console.log(doc))
        .catch((error) => {
          console.log(error);
        });
      eraseCart();
    }
  };
  return (
    <div className="rows">
      <div className="col-md-8 cart">
        <div className="title">
          <h4>
            <b>Carrito de compras</b>
          </h4>
        </div>
        {cart.length === 0 ? (
          <Link to={"/"}>
            <h2>Carrito vacío, click acá para volver al home</h2>
          </Link>
        ) : (
          <>
            {cart.map((product) => {
              return (
                <div className="border-top border-bottom" key={product.id}>
                  <div className="rows main align-items-center">
                    <div className="col-2">
                      <img
                        className="img-fluid"
                        src={product.imgUrl}
                        alt={product.title}
                      />
                    </div>
                    <div className="col">
                      <div className="rows text-muted">{product.title}</div>
                      <div className="rows">{product.description}</div>
                    </div>
                    <div className="col">
                      <span className="border">
                        Cantidad: {product.quantity}
                      </span>{" "}
                    </div>
                    <div className="col">
                      C/U ${product.price}{" "}
                      <button
                        className="btn-dark"
                        onClick={() => removeItem(product.id)}
                      >
                        &#10005;
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
            <button className="btn" onClick={eraseCart}>
              Vaciar carrito
            </button>
          </>
        )}

        <div className="back-to-shop">
          <Link to={"/"}>
            <FontAwesomeIcon icon={faCaretSquareLeft} size="lg" />
            <span className="text-muted">Back to shop</span>
          </Link>
        </div>
      </div>
      <div className="col-md-3 summary">
        <h5>Resumen</h5>
        <hr />
        <form onSubmit={checkOut} className="data">
          <p>Nombre</p>
          <input
            onChange={handleInputChange}
            name="name"
            type="text"
            required
          />
          <p>Correo</p>
          <input
            onChange={handleInputChange}
            name="email"
            type="email"
            required
          />
          <p>Teléfono</p>
          <input
            onChange={handleInputChange}
            name="phone"
            type="tel"
            required
          />
          <button className="btn" onSubmit={checkOut}>
            CHECKOUT
          </button>
        </form>
        <hr />

        <div className="rows">
          <div className="col">Cantidad de items: </div>
          <div className="col text-right">{getCartQuantity()}</div>
        </div>
        <div className="rows">
          <div className="col">Precio total</div>
          <div className="col text-right">${getCartTotalPrice()}</div>
        </div>
      </div>
    </div>
  );
}
