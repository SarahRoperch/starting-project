import { useNavigate } from "react-router-dom";
import classes from "./Modal.module.css";

function Modal({ children }) {
  const navigate = useNavigate();

  function closeHandler() {
    navigate("..");
  }

  const stopPropagation = (event) => {
    event.stopPropagation();
  };

  return (
    <>
      <div className={classes.backdrop} onClick={closeHandler}>
        <dialog open className={classes.modal} onClick={stopPropagation}>
          {children}
        </dialog>
      </div>
    </>
  );
}

export default Modal;
