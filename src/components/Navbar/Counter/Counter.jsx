import { useState } from "react";

const Counter = () => {

    const [count , setCount] = useState(0)
    
    //Functions to increase and decrease

    const add = () => {
        setCount(count + 1)
    }

    const decrease = () => {
        setCount(count - 1)
    }




    return (
        <>
            <button onClick={() => add()}>+</button>
            <a className="bg-dark text-light p-1" href="x"> {count}</a>
            <button onClick={() => decrease()}>
        -
      </button>
        </>
    );
}

export default Counter;
