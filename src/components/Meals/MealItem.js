import "./MealItem.css";
import React from "react";
import { useContext } from "react";
import CartContext from "../../store/cart-context";
import MealItemForm from "./MealItemForm";
const MealItem = (props) => {
  const cartctx = useContext(CartContext);
  const price = `Rs ${props.price.toFixed(2)}`;
  const addToCartHandler = (amount) => {
    cartctx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };
  return (
    <li className="meal">
      <div>
        <h3>{props.name}</h3>
        <div className="description">{props.description}</div>
        <div className="price">{price}</div>
      </div>
      <div>
        <MealItemForm onAddToCart={addToCartHandler}></MealItemForm>
      </div>
    </li>
  );
};
export default MealItem;
