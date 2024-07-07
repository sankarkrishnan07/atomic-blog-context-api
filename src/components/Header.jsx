import { usePost } from "../context/PostContext";
import Logo from "./Logo";
import Search from "./Search";
import Button from "./common/Button";
import "./header.scss";

export default function Header() {
  const { handleClearPosts } = usePost();

  return (
    <header className="app-header">
      <Logo />
      <div className="app-header__actions">
        <Search />
        <Button handleClick={handleClearPosts}>Clear Posts</Button>
      </div>
    </header>
  );
}
