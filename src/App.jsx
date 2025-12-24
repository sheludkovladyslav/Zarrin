import "./styles/reset.css";
import "./styles/common.css";
import Header from "./components/Header/Header";
import Post from "./db/post.json";
import { Hero } from "./components/Hero/Hero";

function App() {
  return (
    <>
      <header>
        <Header></Header>
      </header>
      <main>
        <Hero post={Post}></Hero>
      </main>
    </>
  );
}

export default App;
