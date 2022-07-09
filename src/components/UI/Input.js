import style from "./Input.module.css";
const Input = (props) => {
  return (
    <div className={style.input}>
      <h3 htmlFor={props.input.id}>{props.title}</h3>
      <input {...props.input} />
    </div>
  );
};
export default Input;
