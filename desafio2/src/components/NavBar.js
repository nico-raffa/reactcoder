import react from "react";
import "./NavBar.css";
export default function navBar() {
  return (
    <div>
      <div className="topnav">
        <a href="#about">Acerca de nosotros</a>
        <a href="#contact">Contacto</a>
        <a href="#news">Noticias</a>
        <a className="active" href="#home">Inicio</a>
        <a className="logo" href="#">
        <img height="40px" src="https://cdn1.iconfinder.com/data/icons/provincial-electricity-authority-2/64/equipment_maintenance_screwdriver_tools_wrench-64.png"/>
        </a>
      </div>
    </div>
  );
}
