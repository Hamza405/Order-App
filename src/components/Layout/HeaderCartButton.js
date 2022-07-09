import { useContext } from "react";
import style from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cartContext";

const HeaderCartButton = (props) => {
  const cartContext = useContext(CartContext);
  const items = cartContext.items.reduce((number, item) => {
    return number + item.amount;
  }, 0);
  return (
    <button className={style.button} onClick={props.showCart}>
      <span className={style.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={style.badge}>{items}</span>
    </button>
  );
};
export default HeaderCartButton;
