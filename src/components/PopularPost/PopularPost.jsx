import img from "./VR.png";
import "./PopularPost.css";

export const PopularPost = ({}) => {
  return (
    <section className="popularPost main__popularpopularPost">
      <div className="popularPost__container container">
        <div className="popularPost__img">
          <img src={img} alt="" />
        </div>

        <div className="popularPost__info info">
          <div className="popularPost__category category">
            <p className="category__type">Development</p>
            <p className="category__date">16 March 2023</p>
          </div>

          <h2 className="popularPost__title">
            How to make a Game look more attractive with New VR & AI Technology
          </h2>
          <p className="popularPost__description">
            Google has been investing in AI for many years and bringing its
            benefits to individuals, businesses and communities. Whether it’s
            publishing state-of-the`everyone.
          </p>
          <button className="popularPost__button">Read More</button>
        </div>
      </div>
    </section>
  );
};
