import style from "./Cart.module.css";
import Modal from "../UI/Modal";

const Cart = (props) => {
  const cartItems = (
    <ul className={style["cart-items"]}>
      {[{ id: "1", name: "aa", amount: 2, price: 12.99 }].map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <Modal onClose={props.hideCart}>
      Cart Items
      <div className={style.total}>
        <span>Total Amoount</span>
        <span>32.5</span>
      </div>
      <div className={style.actions}>
        <button className={style["button--alt"]} onClick={props.hideCart}>
          Close
        </button>
        <button className={style.button}>Order</button>{" "}
      </div>
    </Modal>
  );
};
export default Cart;
