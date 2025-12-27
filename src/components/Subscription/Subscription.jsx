import React from "react";
import "./Subscription.css";

export default function Subscription() {
  return (
    <section className="main__subscription subscription">
      <div className="subscription__container container">
        <h2 className="subscription__title">
          Get our stories delivered From us to your inbox weekly.
        </h2>
        <form action="" className="subscription__form form">
          <input
            type="email"
            required
            className="subscription__input"
            placeholder="Your Email"
          />
          <button type="submit" className="subscription__button button">
            Get Started
          </button>
        </form>
        <p className="subscription__description">
          Get a response tomorrow if you submit by 9pm today. If we received
          after 9pm will get a reponse the following day.
        </p>
      </div>
    </section>
  );
}
