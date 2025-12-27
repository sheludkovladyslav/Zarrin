import "./styles/reset.css";
import "./styles/common.css";
import Header from "./components/Header/Header";
import Post from "./db/post.json";
import { Hero } from "./components/Hero/Hero";
import { PopularPost } from "./components/PopularPost/PopularPost";
import { Posts } from "./components/RecentPost/Posts";
import recentPosts from "./db/RecentPosts.json";
import popularPosts from "./db/PopularPosts.json";
import Subscription from "./components/Subscription/Subscription";
function App() {
  return (
    <>
      <header>
        <Header></Header>
      </header>
      <main>
        <Hero post={Post}></Hero>
        <PopularPost></PopularPost>
        <Posts title={"Our Recent Post"} posts={recentPosts}></Posts>
        <Posts title={"Popular Post"} posts={popularPosts}></Posts>
        <Subscription></Subscription>
      </main>
    </>
  );
}

export default App;
