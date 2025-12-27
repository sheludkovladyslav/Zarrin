import React from "react";
import "./Posts.css";

export default function PostItem({ post }) {
  return (
    <li className="recentPosts__post post">
      <div className="post__img">
        <img src={post.img} alt="post picture" />
      </div>

      <div className="post__category">
        <p className="category__topic">{post.type}</p>
        <p className="category__date">{post.date}</p>
      </div>

      <h2 className="post__title">{post.title}</h2>
      <p className="post__description">{post.description}</p>
      <button className="post__button">Read More...</button>
    </li>
  );
}
