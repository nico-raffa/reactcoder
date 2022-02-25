import CartWidget from "./CartWidget";
import "./NavBar.css";
import Logo from '../tools.png'
import { NavLink, Link } from 'react-router-dom'
export default function NavBar() {
  return (
      <div className="topnav">
        <NavLink to={"/cart"}><CartWidget/></NavLink>
        <NavLink to={"/category/destornilladores"}>Destornilladores</NavLink>
        <NavLink to={"/category/llaves"}>Llaves</NavLink>
        <NavLink to={"/"}>Inicio</NavLink>
        <div className="brand">
        <Link to={'/'}>
        <img className="logo" src={Logo} alt="logo"/>
        <span>Raffa tools</span>
        </Link>
        </div>
      </div>
      
  );
}
