import style from "./Input.module.css";
const Input = (props) => {
  return (
    <div className={style.input}>
      <lable htmlFor={props.input.id}>{props.title}</lable>
      <input {...props.input} />
    </div>
  );
};
export default Input;
