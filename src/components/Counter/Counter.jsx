import {useState} from "react";

const Counter = () => {
    const [count, setCount] = useState(0)

    let inc = () => {
        setCount(count + 1)
    }

    let dec = () => {
        setCount(count - 1)
    }
    return (
        <div>
            <p>{count}</p>
            <button onClick={inc}>+</button>
            <button onClick={dec}>-</button>
        </div>
    );
};

export default Counter;