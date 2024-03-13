import { useState } from "react";
import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./PostsList.module.css";

function PostsList() {
  const [enteredBody, setEnterredBody] = useState("");
  const [enteredAuthor, setEnterredAuthor] = useState("");

  function bodyChangeHandler(event) {
    setEnterredBody(event.target.value);
  }
  function authorChangeHandler(event) {
    setEnterredAuthor(event.target.value);
  }

  return (
    <>
      <NewPost
        onBodyChange={bodyChangeHandler}
        onAuthorChange={authorChangeHandler}
      />
      <ul className={classes.posts}>
        <Post author={enteredAuthor} body={enteredBody} />
        <Post author="Manuel" body="Ready for the course ! " />
      </ul>
    </>
  );
}

export default PostsList;
