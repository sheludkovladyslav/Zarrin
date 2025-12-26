import "./styles/reset.css";
import "./styles/common.css";
import Header from "./components/Header/Header";
import Post from "./db/post.json";
import { Hero } from "./components/Hero/Hero";
import { PopularPost } from "./components/PopularPost/PopularPost";

function App() {
  return (
    <>
      <header>
        <Header></Header>
      </header>
      <main>
        <Hero post={Post}></Hero>
        <PopularPost></PopularPost>
      </main>
    </>
  );
}

export default App;
