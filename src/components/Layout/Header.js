import "./Header.css";
import mealsImage from "../../assests/meals.jpg";
import React from "react";
import HeaderButton from "./HeaderButton";
const Header = (props) => {
  return (
    <React.Fragment>
      <header className="header">
        <h1>Meals&Deals</h1>
        <HeaderButton onClick={props.onCartClick} title="Cart"></HeaderButton>
      </header>
      <div className="main-image">
        <img src={mealsImage} alt="Food"></img>
      </div>
    </React.Fragment>
  );
};
export default Header;
