import React, { useState } from "react";

const Counter = () => {
    const [number, setNumber] = useState(0);
    const [numberDouble, setNumberDouble] = useState(0);

    const handleUp = () => {
        setNumber(number + 1);
    };

    const handleUpDouble = () => {
        setNumberDouble(numberDouble + 2);
    };

    return (
        <div className="container">
            <p>Count: {number}</p>
            <button className="btn btn-success" onClick={handleUp}>
                Add 1
            </button>
            <br />
            <p>Count: {numberDouble}</p>
            <button className="btn btn-warning" onClick={handleUpDouble}>
                Add 2
            </button>
        </div>
    );
};

export default Counter;
