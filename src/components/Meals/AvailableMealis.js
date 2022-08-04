import style from "./AvailableMealis.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import { useEffect, useState } from "react";

const AvailableMeals = () => {
  const [meailsData, setMeailsData] = useState([]);
  const [loading, setloading] = useState(false);
  const [error, setError] = useState(null);
  const fetchMeails = async () => {
    try {
      setloading(true);
      const response = await fetch(
        "https://tishreen-62882-default-rtdb.firebaseio.com/meals.json"
      );
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
    } catch (e) {
      setError(e);
    }
    setloading(false);
  };
  useEffect(() => {
    fetchMeails();
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

  return (
    <section className={style.meals}>
      <Card>{loading ? <p>Loading ....</p> : <ul>{meailsList}</ul>}</Card>
    </section>
  );
};

export default AvailableMeals;
