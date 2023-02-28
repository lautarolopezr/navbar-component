import { useState } from "react";
import { toast } from "react-toastify";

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
            <button className="btn btn-success" onClick={() => add()}>+</button>
            <a className="btn" href="$"> {count}</a>
            <button className="btn btn-danger" onClick={() => subtract()}>-</button>
            <button className="btn btn-dark" onClick={() => addCart()} >Add to cart</button>
        </>
    );
}

export default ItemCount;
