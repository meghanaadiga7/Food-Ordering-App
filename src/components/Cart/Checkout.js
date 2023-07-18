import React from "react";
import { useRef, useState } from "react";
import classes from "./Checkout.module.css";

const isEmpty = (value) => value.trim() === "";
const isFiveChars = (value) => value.trim().length >= 5;

const Checkout = (props) => {
  const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    street: true,
    city: true,
    postalCode: true,
  });

  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalInputRef = useRef();
  const cityInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const streetName = streetInputRef.current.value;
    const postalName = postalInputRef.current.value;
    const cityName = cityInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredCityIsValid = !isEmpty(cityName);
    const enteredStreetIsValid = !isEmpty(streetName);
    const enteredPostalIsValid = isFiveChars(postalName);

    setFormInputsValidity({
      name: enteredNameIsValid,
      street: enteredStreetIsValid,
      city: enteredCityIsValid,
      postalCode: enteredPostalIsValid,
    });

    const formIsValid =
      enteredNameIsValid &&
      enteredCityIsValid &&
      enteredStreetIsValid &&
      enteredPostalIsValid;

    if (!formIsValid) {
      return;
    }

    props.onConfirm({
      name: enteredName,
      street: streetName,
      city: cityName,
      postal: postalName,
    });
  };

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div
        className={`${classes.control} ${
          formInputsValidity.name ? "" : classes.invalid
        } `}
      >
        <label htmlFor="name">Your Name </label>
        <input autoComplete="off" type="text" ref={nameInputRef} id="name"></input>
        {!formInputsValidity.name && <p>Entered Name is Invalid!</p>}
      </div>
      <div
        className={`${classes.control} ${
          formInputsValidity.street ? "" : classes.invalid
        } `}
      >
        <label htmlFor="street">Street </label>
        <input autoComplete="off" ref={streetInputRef} type="text" id="street"></input>
        {!formInputsValidity.street && <p>Entered street is Invalid!</p>}
      </div>
      <div
        className={`${classes.control} ${
          formInputsValidity.postalCode ? "" : classes.invalid
        } `}
      >
        <label htmlFor="postal">Postal Code </label>
        <input autoComplete="off"  ref={postalInputRef} type="text" id="name"></input>
        {!formInputsValidity.postalCode && (
          <p>
            Entered postal code is Invalid!(Should be atleast 5 characters long)
          </p>
        )}
      </div>
      <div
        className={`${classes.control} ${
          formInputsValidity.city ? "" : classes.invalid
        } `}
      >
        <label htmlFor="city">City</label>
        <input autoComplete="off"  ref={cityInputRef} type="text" id="name"></input>
        {!formInputsValidity.city && <p>Entered city is Invalid!</p>}
      </div>
      <div className={classes.actions}>
        <button onClick={props.onClick} type="button">
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};
export default Checkout;
