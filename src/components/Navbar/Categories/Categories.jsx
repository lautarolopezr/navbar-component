import { Link } from "react-router-dom";


const Categories = () => {
    return (
        <>
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Categories</a>
                <ul className="dropdown-menu">
                    <li><Link  className="dropdown-item" to={"/category/1"}>Notebooks</Link></li>
                    <li><Link className="dropdown-item" to={"/category/2"}>Cellphones</Link></li>
                    <li><Link className="dropdown-item" to={"/category/3"}>TV</Link></li>
                    <li><Link className="dropdown-item" to={"/category/4"}>Electronic</Link></li>
                </ul>
            </li>
        </>
    );
}

export default Categories;
