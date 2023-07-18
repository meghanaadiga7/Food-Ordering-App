import React, { useRef } from "react";
import "./MealItemForm.css";
import "./MealInput.css";
const MealItemForm = (props) => {
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = +amountInputRef.current.value;
    if (enteredAmount < 1 || enteredAmount > 10) {
      return;
    }

    props.onAddToCart(enteredAmount);
  };

  return (
    <form className="form" onSubmit={submitHandler}>
      <div className="input">
        <label>Amount</label>
        <input
          ref={amountInputRef}
          type="number"
          min="0"
          defaultValue="0"
          step="1"
        ></input>
      </div>
      <button>+ Add</button>
    </form>
  );
};
export default MealItemForm;
