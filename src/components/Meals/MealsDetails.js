import style from "./MealsDetails.module.css";

//https://tishreen-62882-default-rtdb.firebaseio.com

const MealsDetails = (props) => {
  return (
    <section className={style.summary}>
      <h2>Delicious Food, Delivered To You</h2>
      <p>
        Choose your favorite meal from our broad selection of available meals
        and enjoy a delicious lunch or dinner at home.
      </p>
      <p>
        All our meals are cooked with high-quality ingredients, just-in-time and
        of course by experienced chefs!
      </p>
    </section>
  );
};

export default MealsDetails;
