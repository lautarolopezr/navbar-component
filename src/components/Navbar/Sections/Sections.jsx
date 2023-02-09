import { Link } from "react-router-dom";

const Sections = () => {
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
                <Link className="nav-link" to={"/history"}>History</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to={"/about-us"}>About Us</Link>
            </li>
        </>
    );
}

export default Sections;
