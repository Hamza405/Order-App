import style from "./Input.module.css";
import react from "react";
const Input = react.forwardRef((props, ref) => {
  return (
    <div className={style.input}>
      <h3 htmlFor={props.input.id}>{props.title}</h3>
      <input ref={ref} {...props.input} />
    </div>
  );
});
export default Input;
