import { useContext, useEffect, useState } from "react";
import style from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cartContext";

const HeaderCartButton = (props) => {
  const cartContext = useContext(CartContext);
  const [animatedButton, setAnimatedButton] = useState(false);

  const items = Array.isArray(cartContext.items)
    ? cartContext.items.reduce((number, item) => {
        return number + item.amount;
      }, 0)
    : 0;

  const buttonStyle = `${style.button} ${animatedButton && style.bump}`;

  useEffect(() => {
    if (cartContext.items.length === 0) return;
    setAnimatedButton(true);

    const timer = setTimeout(() => {
      setAnimatedButton(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [cartContext.items]);

  return (
    <button className={buttonStyle} onClick={props.showCart}>
      <span className={style.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={style.badge}>{items}</span>
    </button>
  );
};
export default HeaderCartButton;
