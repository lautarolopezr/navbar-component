import React from "react";
import { Link } from "react-router-dom";

const Sections = React.memo(() => {
    return (
        <>
            <li className="nav-item">
                <Link className="nav-link active" to={"/"}>Home
                    <span className="visually-hidden">(current)</span>
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to={"/products"}>Products</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to={"/contact"}>Contact</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to={"/about-us"}>About Us</Link>
            </li>
        </>
    );
})

export default Sections;
