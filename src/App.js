import React, { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
function App() {
  const [cartState, setCartState] = useState(false);

  const showCartHandler = () => {
    setCartState(true);
  };

  const hideChartHandler = () => {
    setCartState(false);
  };

  const cartModel = cartState && <Cart onClose={hideChartHandler}></Cart>;

  return (
    <CartProvider>
      {cartModel}
      <Header onCartClick={showCartHandler}></Header>
      <Meals></Meals>
    </CartProvider>
  );
}

export default App;
