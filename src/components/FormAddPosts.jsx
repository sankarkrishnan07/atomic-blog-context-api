import "./formaddposts.scss";
import Button from "./common/Button";
import { useState } from "react";
import { usePost } from "../context/PostContext";

export default function FormAddPosts() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const { handleAddPost } = usePost();

  function handleSubmit(e) {
    e.preventDefault();
    handleAddPost({ title, body });
  }

  return (
    <form className="app-form__add-posts" onSubmit={handleSubmit}>
      <input
        type="text"
        name="post-title"
        placeholder="Post Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        name="post-body"
        placeholder="Post Body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      ></textarea>
      <Button>Add Post</Button>
    </form>
  );
}
