import Posts from "./Posts";
import PropTypes from "prop-types";
import FormAddPosts from "./FormAddPosts";

export default function Main() {
  return (
    <main className="app-main">
      <FormAddPosts />
      <Posts />
    </main>
  );
}

Main.propTypes = {
  posts: PropTypes.any,
  setPosts: PropTypes.func,
};
