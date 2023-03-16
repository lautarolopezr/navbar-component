import React from "react";
import { Link } from "react-router-dom";
import ItemCart from "../ItemCart/ItemCart";
import ItemList from "../ItemLIst/ItemList";
import { useCartContext } from "../../context/CartContext";

const Cart = () => {

    const {cart, totalPrice , emptyCart} = useCartContext()



    return (
        <>
            {
                cart.length === 0
                    ?
                    <>
                        <p>Cart is empty</p>
                        <Link><button className="btn btn-dark">Back to Home</button></Link>
                    </>

                    :

                    <div className="container cartContainer">

                        <ItemList products={cart} template={"itemCart"} />

                        <div className="divButtons">
                            <p>Sumamry of purchase : {new Intl.NumberFormat("de-DE").format(totalPrice())}`</p>
                            <button className="btn btn-danger" onClick={() => emptyCart()}>Empty Cart</button>
                            <Link to={"/"}><button className="btn btn-warning">Continue buying</button></Link>
                            <Link to={"/checkout"}><button className="btn btn-success">Finalize Purchase</button></Link>

                        </div>
                    </div>

            }
        </>
    )

}

export default Cart;
