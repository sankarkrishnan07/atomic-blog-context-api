import "./search.scss";
import Proptypes from "prop-types";
import { usePost } from "../context/PostContext";

export default function Search() {
  const { posts, seachQuery, setSearchQuery } = usePost();

  function handleChange(e) {
    setSearchQuery(e.target.value);
  }

  return (
    <div className="app-search">
      <p>🚀 {posts.length} atomic posts found</p>
      <input
        type="text"
        name="search-posts"
        placeholder="Search posts..."
        value={seachQuery}
        onChange={handleChange}
      />
    </div>
  );
}

Search.propTypes = {
  setSearchQuery: Proptypes.func,
  posts: Proptypes.any,
};
