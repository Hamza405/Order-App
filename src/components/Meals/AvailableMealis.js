import style from "./AvailableMealis.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import { useEffect, useState, useCallback } from "react";

const AvailableMeals = () => {
  const [meailsData, setMeailsData] = useState([]);
  const [loading, setloading] = useState(false);
  const [error, setError] = useState();

  const fetchMeails = useCallback(async () => {
    setloading(true);
    const response = await fetch(
      "https://tishreen-62882-default-rtdb.firebaseio.com/meals.json"
    );
    if (!response.ok) {
      setloading(false);
      throw new Error("Some thing wrong bebe!!");
    }
    const data = await response.json();
    console.log(data);
    const loadedData = [];
    for (var key in data) {
      loadedData.push({
        id: key,
        ...data[key],
      });
    }
    setMeailsData(loadedData);
    setloading(false);
  }, []);
  useEffect(() => {
    fetchMeails().catch((error) => {
      setloading(false);
      setError(error);
    });
  }, []);

  const meailsList = meailsData.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  const content = loading ? (
    <p>Loading ....</p>
  ) : error != null ? (
    <p>{error.message}</p>
  ) : (
    <ul>{meailsList}</ul>
  );

  return (
    <section className={style.meals}>
      <Card>{content}</Card>
    </section>
  );
};

export default AvailableMeals;
