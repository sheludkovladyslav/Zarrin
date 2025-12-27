import React from "react";
import "./Footer.css";
import { Logo } from "../Logo/Logo";

export default function Footer() {
  return (
    <>
      <div className="footer__main">
        <div className="footer__container container">
          <Logo style="footer__logo"></Logo>
          <ul className="footer__nav">
            <li className="footerNav__item">
              <a href="" className="footerNav__link">
                Home
              </a>
            </li>
            <li className="footerNav__item">
              <a href="" className="footerNav__link">
                Blog
              </a>
            </li>
            <li className="footerNav__item">
              <a href="" className="footerNav__link">
                About
              </a>
            </li>
            <li className="footerNav__item">
              <a href="" className="footerNav__link">
                Contact Us
              </a>
            </li>
          </ul>

          <ul className="footer__socials socials">
            <li className="socials__item">
              <a href="" className="socials__link">
                FB
              </a>
            </li>
            <li className="socials__item">
              <a href="" className="socials__link">
                IG
              </a>
            </li>
            <li className="socials__item">
              <a href="" className="socials__link">
                LN
              </a>
            </li>
            <li className="socials__item">
              <a href="" className="socials__link">
                YT
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer__copyright">
        <p className="copyright">
          Copyright Ideapeel Inc © 2023. All Right Reserved
        </p>
      </div>
    </>
  );
}
