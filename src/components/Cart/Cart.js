import style from "./Card.module.css";

const Cart = (props) => {
  const cartItems = (
    <ul className={style["cart-item"]}>
      {[{ id: "1", name: "aa", amount: 2, price: 12.99 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <div>
      Cart Items
      <div className={style.total}>
        <span>Total Amoount</span>
        <span>32.5</span>
      </div>
      <div className={style.action}>
        <button className={style["button--alt"]}>Close</button>
        <button className={style.button}>Order</button>{" "}
      </div>
    </div>
  );
};
export default Cart;
