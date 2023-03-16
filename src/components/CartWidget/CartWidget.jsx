import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";

const CartWidget = () => {
    const {getItemQuantity} = useCartContext()

    return (
        <>
        <Link to={"/cart"}><button className="btn btn-dark rounded-pill me-4"><i className="btn btn-dark fa-solid fa-cart-shopping rounded rounded-start"></i></button></Link>
        {getItemQuantity() > 0 && <span className="cantCart">{getItemQuantity()}</span>}
        </>
    );
}

export default CartWidget;
