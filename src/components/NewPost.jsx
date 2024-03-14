import { useState } from "react";
import classes from "./NewPost.module.css";

function NewPost({ onCancel, onAddPost }) {
  const [enteredBody, setEnterredBody] = useState("");
  const [enteredAuthor, setEnterredAuthor] = useState("");

  function bodyChangeHandler(event) {
    setEnterredBody(event.target.value);
  }
  function authorChangeHandler(event) {
    setEnterredAuthor(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();
    const postData = {
      body: enteredBody,
      author: enteredAuthor,
    };
    onAddPost(postData);
    onCancel();
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={bodyChangeHandler} />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={authorChangeHandler} />
      </p>
      <p className={classes.actions}>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button>Submit</button>
      </p>
    </form>
  );
}

export default NewPost;
