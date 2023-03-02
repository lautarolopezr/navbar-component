import React from "react";
import { Link } from "react-router-dom";
import ItemCart from "../ItemCart/ItemCart";
import ItemList from "../ItemLIst/ItemList";


const Cart = () => {
    
    const cart = [
        {id : 1 , name : "Rice" , price : 400 , img: "apple-tv.jpg", ammount : 4 },
        {id : 2 , name : "Noodles" , price : 200 , img: "apple-tv.jpg" , ammount : 5 },
        {id : 3 , name : "Soap" , price : 100 , img : "apple-tv.jpg" ,ammount : 6 }

    ]

    
    
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

                <ItemList products={cart} template={"itemCart"}/>    
            
            <div className="divButtons">
                <p>Sumamry of purchase</p>
                <button className="btn btn-dark" onClick={()=> "Vaciar"}>Empty Cart</button>
                <Link to={"/"}><button className="btn btn-dark">Continue buying</button></Link>
                <Link to={"/checkout"}><button className="btn btn-dark">Finalize Purchase</button></Link>

            </div>


            </div>

        }
        </>
    )

}

export default Cart;
