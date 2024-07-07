import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/common/Footer";
import ArchivePosts from "./components/ArchivePosts";
import Button from "./components/common/Button";
import { PostProvider } from "./context/PostContext";

function App() {
  const [isDark, setIsDark] = useState(true);

  function handleClick() {
    setIsDark((isDark) => !isDark);
    document.documentElement.classList.toggle("dark-mode");
  }

  return (
    <PostProvider>
      <div className="app-container">
        <Header />
        <Main />
        <ArchivePosts />
        <Footer />
        <Button customClass={"btn-dark-mode"} handleClick={handleClick}>
          {isDark ? "☀️" : "🌙"}
        </Button>
      </div>
    </PostProvider>
  );
}

export default App;
