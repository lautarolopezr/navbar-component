
const Categories = () => {
    return (
        <>
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Categories</a>
                <div class="dropdown-menu">
                    <a className="dropdown-item" href="#">Tecnologies</a>
                    <a className="dropdown-item" href="#">Vehicles</a>
                    <a className="dropdown-item" href="#">Clothes</a>
                    <a className="dropdown-item" href="#">Art & Craft</a>
                </div>
            </li>
        </>
    );
}

export default Categories;
