import style from "./MealItemForm.module.css";
import Input from "../../UI/Input";
import { useRef, useState } from "react";
const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(false);
  const amountInputRef = useRef();
  const submitForm = (event) => {
    event.preventDefault();
    const amount = amountInputRef.current.value;

    const amountNumber = +amount;
    if (amount.trim().length === 0 || amountNumber < 1) {
      setAmountIsValid(true);
      return;
    }
    props.onAddToCard(amountNumber);
  };

  return (
    <form className={style.form} onSubmit={submitForm}>
      <Input
        ref={amountInputRef}
        lable={"Ammount"}
        input={{
          id: "Ammount",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && <p>Please enter valid amount</p>}
    </form>
  );
};
export default MealItemForm;
