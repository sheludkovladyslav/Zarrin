import "./Posts.css";
import PostItem from "./PostItem";

export const Posts = ({ title, posts }) => {
  return (
    <section className="main__recentPosts recentPosts">
      <div className="recentPosts__container container">
        <div className="recentPosts__nav">
          <h2 className="recentPosts__title">{title}</h2>
          <button className="recentPosts__button button">View All</button>
        </div>

        <ul className="recentPosts__list">
          {posts.map((post) => {
            return <PostItem post={post} key={post.id}></PostItem>;
          })}
        </ul>
      </div>
    </section>
  );
};
