import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
function App() {
  return (    
      <div className="App">
        <NavBar/>
        <Routes>
          <Route path="/" element={<ItemListContainer greeting={"Hola, este es nuestro catálogo de productos"} />} />
          <Route path="/product/:itemId" element={<ItemDetailContainer />} />
          <Route path="/category/:categoryName" element={<ItemListContainer greeting={`Categoría en específico`}/>}/>
          <Route path="*" element={
            <div>
              <h1>Página no encontrada</h1>
            </div>
          }/>
        </Routes>
      </div>
  );
}

export default App;
