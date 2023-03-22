import { useState } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
const ItemCount = ({initvalue,stock , onAdd}) => {
    const [count , setCount] = useState(initvalue)

    const add = () => (count < stock) && setCount(count +1)
    const subtract = () => (count > initvalue) && setCount(count - 1)
    const addCart = () => {
        onAdd(count)
        toast.success(`Added ${count} products`)
    }

    return (
        <>
            <button className="btn btn-danger" onClick={() => subtract()}>-</button>
            <a className="btn" href="$"> {count}</a>
            <button className="btn btn-success" onClick={() => add()}>+</button>
            
            <div className="my-1">
            <button className="btn btn-dark" onClick={() => addCart()} >Add to cart</button>
            <button className="btn btn-warning">Stock : {stock}</button>
            </div>
            
            <hr />
            <Link to={"/cart"}><button className="btn btn-dark cardCourse__cart">See Cart</button></Link>
        </>
    );
}

export default ItemCount;
