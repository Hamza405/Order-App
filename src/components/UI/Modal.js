import { createPortal } from "react-dom";
import { Fragment } from "react/cjs/react.production.min";
import style from "./Modal.module.css";

const Backdrop = (props) => {
  return <div className={style.backdrop} onClick={props.onClose} />;
};

const Overlay = (props) => {
  return (
    <div className={style.modal}>
      <div className={style.content}>{props.children}</div>
    </div>
  );
};
const Modal = (props) => {
  return (
    <Fragment>
      {createPortal(
        <Backdrop onClose={props.onClose} />,
        document.getElementById("modal")
      )}
      {createPortal(
        <Overlay>{props.children}</Overlay>,
        document.getElementById("modal")
      )}
    </Fragment>
  );
};
export default Modal;
