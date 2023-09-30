import React, { useState } from "react";
import "./index.css";
const Count = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      alert(`count is ${count}`);
    }
  };

  return (
    <div className="count">
      <h1>{count}</h1>
      <button className="btn" onClick={increment}>
        Increment
      </button>
      <br />
      <button className="btn" onClick={decrement}>
        Decrement
      </button>
    </div>
  );
};

export default Count;
