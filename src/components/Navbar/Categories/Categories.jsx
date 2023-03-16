import React from "react";
import { Link } from "react-router-dom";


const Categories = React.memo(() => {
    return (
        <>
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="a" role="button" aria-haspopup="true" aria-expanded="false">Categories</a>
                <ul className="dropdown-menu">
                    <li><Link  className="dropdown-item" to={"/category/Career"}>Careers</Link></li>
                    <li><Link className="dropdown-item" to={"/category/Course"}>Courses</Link></li>
                </ul>
            </li>
        </>
    );
})

export default Categories;
