import Categories from "./Categories/Categories";
import CartWidget from "../CartWidget/CartWidget";
import Sections from "./Sections/Sections";
import Greeting from "./Greeting";
import { Link } from "react-router-dom";
import DarkModeButton from "./DarkModeButton/DarkModeButton";
const Navbar = () => {
  return <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <Link className="navbar-brand" to={"/"}>E-Commerce</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav me-auto">
            <Sections/>
            <Categories />
          </ul>
          <CartWidget/>
          <DarkModeButton/>
          <Greeting user = "Lautaro"/>
        </div>
      </div>
    </nav>
  </>

}

export default Navbar;
