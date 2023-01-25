import Counter from "../Navbar/Counter/Counter";
const CartWidget = () => {

    return (
        // <div>
        //     <i className="btn btn-dark fa-solid fa-cart-shopping rounded"></i>          
        // </div>
        <>
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false"><i className="btn btn-dark fa-solid fa-cart-shopping rounded"></i>
                </a>
                <div class="dropdown-menu">
                    <Counter />
                </div>
            </li>
        </>
    );
}

export default CartWidget;
