import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase";
export function getItems(category) {
  return new Promise(async (resolve, reject) => {
    const itemsCollection = collection(db, "items");

    getDocs(itemsCollection)
      .then((snapshot) => {
        const products = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        if (category) {
          resolve(products.filter((producto) => producto.category === category));
        } else {
          resolve(products);
        }
      })
      .catch((error) => {
        console.log(error);
        reject(error);
      });
  });
}
