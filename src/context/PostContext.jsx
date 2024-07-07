import PropTypes from "prop-types";
import { createContext, useContext, useMemo, useState } from "react";
import { faker } from "@faker-js/faker";

function createRandomPost() {
  return {
    title: `${faker.hacker.adjective()} ${faker.hacker.noun()}`,
    body: `${faker.hacker.phrase()}`,
  };
}

const PostContext = createContext();

function PostProvider({ children }) {
  const [posts, setPosts] = useState(
    Array.from({ length: 30 }, createRandomPost)
  );
  const [searchQuery, setSearchQuery] = useState("");

  const searchedPosts =
    searchQuery.length > 0
      ? posts.filter((post) =>
          `${post.title} ${post.body}`
            .toLowerCase()
            .includes(searchQuery.toLowerCase())
        )
      : posts;

  function handleAddPost(newPost) {
    setPosts((posts) => [newPost, ...posts]);
  }

  function handleClearPosts() {
    setPosts([]);
  }

  const value = useMemo(() => {
    return {
      posts: searchedPosts,
      handleAddPost,
      handleClearPosts,
      searchQuery,
      setSearchQuery,
    };
  }, [searchedPosts, searchQuery]);

  return <PostContext.Provider value={value}>{children}</PostContext.Provider>;
}

function usePost() {
  const context = useContext(PostContext);
  if (context === undefined)
    throw new Error("Context accessed outside Provider");
  return context;
}

PostProvider.propTypes = {
  children: PropTypes.any,
};

export { PostProvider, usePost };
