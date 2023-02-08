import { useState } from "react";


const ItemCount = ({initvalue,stock}) => {

    const [count , setCount] = useState(initvalue)

    const add = () => (count < stock) && setCount(count +1)
    const subtract = () => (count > initvalue) && setCount(count - 1)


    return (
        <>
            <button className="btn btn-success" onClick={() => add()}>+</button>
            <a className="btn" href=""> {count}</a>
            <button className="btn btn-danger" onClick={() => subtract()}>-</button>
        </>
    );
}

export default ItemCount;
