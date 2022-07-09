import style from "./Cart.module.css";
import Modal from "../UI/Modal";
import { useContext } from "react";
import CartContext from "../../store/cartContext";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartContext = useContext(CartContext);

  const cartItemRemoveHandler = (id) => {};
  const cartItemAddHandler = (item) => {};

  const totalAmount = `${cartContext.totalAmount.toFixed(2)} $`;
  const cartItems = (
    <ul className={style["cart-items"]}>
      {cartContext.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.hideCart}>
      {cartItems}
      <div className={style.total}>
        <span>Total Amoount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={style.actions}>
        <button className={style["button--alt"]} onClick={props.hideCart}>
          Close
        </button>
        {cartContext.items.length > 0 && (
          <button className={style.button}>Order</button>
        )}
      </div>
    </Modal>
  );
};
export default Cart;
