import PropTypes from "prop-types";
import "./posts.scss";
import { usePost } from "../context/PostContext";

export default function Posts() {
  const { posts } = usePost();

  return (
    <ul className="posts">
      {posts.map((post, i) => (
        <Post title={post.title} body={post.body} key={`post${i}`} />
      ))}
    </ul>
  );
}

function Post({ title, body }) {
  return (
    <li className="post">
      <h4 className="post-title">{title}</h4>
      <p className="post-body">{body}</p>
    </li>
  );
}

Post.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
};
