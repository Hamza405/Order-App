import style from "./Header.module.css";
import mealsImage from "../../assets/index.jpeg";

const Header = (props) => {
  return (
    <>
      <header className={style.header}>
        <h1>Order Meals</h1>
        <button>Cart</button>
      </header>
      <div className={style["main-image"]}>
        <img src={mealsImage} alt="Foooood" />
      </div>
    </>
  );
};

export default Header;
