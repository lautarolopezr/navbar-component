const CartWidget = () => {

    return (
        <>
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="a" role="button" aria-haspopup="true" aria-expanded="false"><i className="btn btn-dark fa-solid fa-cart-shopping rounded"></i>
                </a>
                <div className ="dropdown-menu">
                    <p>Products</p>
                </div>
            </li>
        </>
    );
}

export default CartWidget;
