import { addDoc, collection } from "firebase/firestore";
import React from "react";
import { useState } from "react";
import { db } from "../firebase";
import "./AddItem.css";
export default function AddItemContainer() {
  const [formValues, setFormValues] = useState({});
  const handleInputChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (
      !formValues.title ||
      !formValues.description ||
      !formValues.price ||
      !formValues.imgUrl ||
      !formValues.stock ||
      !formValues.category
    ) {
      console.log("Hay valores vacíos");
    } else {
      console.log(formValues);
      const itemCollection = collection(db, "items");
      const newItem = {
        title: formValues.title,
        description: formValues.title,
        price: formValues.price,
        imgUrl: formValues.imgUrl,
        category: formValues.category,
        stock: formValues.stock,
      };
      addDoc(itemCollection, newItem)
        .then((doc) => {
          console.log("se guardo el producto", doc.id);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit} className="form-products">
        <h4>Formulario para agregar productos</h4>
        <p>Nombre</p>
        <input
          onChange={handleInputChange}
          className="controls"
          name="title"
          type="text"
          placeholder="Nombre del producto"
          required
        />
        <p>Precio</p>
        <input
          onChange={handleInputChange}
          className="controls"
          name="price"
          type="number"
          placeholder="Precio del producto"
          required
        />
        <p>Descripción</p>
        <textarea
          onChange={handleInputChange}
          className="controls"
          name="description"
          type="text"
          placeholder="Descripción del producto"
          required
        />
        <p>Imagen(URL)</p>
        <input
          onChange={handleInputChange}
          className="controls"
          name="imgUrl"
          type="text"
          placeholder="Imagen(URL)"
          required
        />
        <p>Categoría</p>
        <input
          onChange={handleInputChange}
          className="controls"
          name="category"
          type="text"
          placeholder="Categoría del producto"
          required
        />
        <p>Stock</p>
        <input
          onChange={handleInputChange}
          className="controls"
          name="stock"
          type="number"
          placeholder="Stock del producto"
          required
        />
        <input className="buttons" type="submit" value="Agregar" />
      </form>
    </div>
  );
}
