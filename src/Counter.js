import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { decrement, increment } from "./redux/ducks/counter";
const Counter = (props) => {
  const [vote, setVote] = useState(0);
  const dispatch = useDispatch();
  const handleDecrement = () => {
    setVote(vote - 1);
    dispatch(decrement());
  };
  const handleIncrement = () => {
    setVote(vote + 1);
    dispatch(increment());
  };
  return (
    <div style={{ backgroundColor: "gray", margin: "10px" }}>
      <h3>{props.name}</h3>
      <h4>votes: {vote}</h4>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button onClick={handleIncrement}>Increment </button>
        <button onClick={handleDecrement}>Dcrement </button>
      </div>
    </div>
  );
};

export default Counter;
