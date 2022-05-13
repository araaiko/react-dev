import React, { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);
    const countUp = () => {
        setCount(prevState => prevState + 1);
    }
    const countDown = () => {
        if (count === 0) {
            return;
        }
        setCount(prevState => prevState - 1);
        console.log(count);
    }

    return (
        <div>
            <p>現在のカウント：{count}</p>
            <button onClick={countUp}>up</button>
            <button onClick={countDown}>down</button>
        </div>
    );
    
}

export default Counter;