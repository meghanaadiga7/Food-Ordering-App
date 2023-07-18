import "./AvailableMeals.css";
import React from "react";
import Card from "../UI/Card/Card";
import MealItem from "./MealItem";
import { useEffect, useState } from "react";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        "https://food-application-c1ed5-default-rtdb.firebaseio.com//meals.json"
      );

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const responseData = await response.json();

      const loadedMeals = [];
      for (const [key, value] of Object.entries(responseData)) {
        loadedMeals.push({
          id: key,
          name: value.name,
          description: value.description,
          price: value.price,
        });
      }
      setMeals(loadedMeals);
      setIsLoading(false);
    };

    fetchMeals().catch((error) => {
      setIsLoading(false);
      setError(error.message);
    });
  }, []);

  if (isLoading) {
    return (
      <Card className="meals">
        <p className="loading">Loading...</p>
      </Card>
    );
  }

  if (error) {
    return (
      <Card className="meals">
        <p className="loading">{error}</p>
      </Card>
    );
  }
  return (
    <Card className="meals">
      <ul>
        {meals.map((meal) => (
          <MealItem
            key={meal.id}
            id={meal.id}
            name={meal.name}
            description={meal.description}
            price={meal.price}
          ></MealItem>
        ))}
      </ul>
    </Card>
  );
};
export default AvailableMeals;
