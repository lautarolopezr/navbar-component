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
            <button className="btn btn-dark" onClick={() => addCart()} >Add to cart</button>
            <button className="btn btn-warning">Stock : {stock}</button>
            <hr />
            <button className="btn btn-dark">See Cart</button>
        </>
    );
}

export default ItemCount;
