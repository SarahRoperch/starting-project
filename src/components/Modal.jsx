import classes from "./Modal.module.css";

function Modal({ children, onClose }) {
  const stopPropagation = (event) => {
    event.stopPropagation();
  };

  return (
    <>
      <div className={classes.backdrop} onClick={onClose}>
        <dialog open className={classes.modal} onClick={stopPropagation}>
          {children}
        </dialog>
      </div>
    </>
  );
}

export default Modal;
