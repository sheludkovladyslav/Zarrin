import "./Hero.css";
import img from "./heroImg.jpg";

export const Hero = ({ post }) => {
  return (
    <>
      <section className="main__hero hero">
        <div className="hero__container container">
          <div className="hero__post post">
            <p className="post__info">Featured Post</p>
            <h1 className="post__title">{post.title}</h1>
            <p className="post__description">{post.description}</p>
            <button className="post__button">Read More</button>
          </div>
          <div className="hero__picture picture ">
            <img src={img} alt="Image from the Post" className="picture__img" />
          </div>
        </div>
      </section>
    </>
  );
};
