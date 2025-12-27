import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { TbMenu2 } from "react-icons/tb";

import { IoCloseSharp } from "react-icons/io5";
import { Button } from "../Button/Button";
import { Logo } from "../Logo/Logo";
import "./Header.css";

export default function Nav() {
  const [isOpened, setOpened] = useState(false);

  const menu = useRef(null);

  const toggleModal = () => {
    menu.current.classList.toggle("menu__wrapper--active");

    setOpened((prevState) => !prevState);
  };

  return (
    <nav className="nav">
      <div className="nav__container container">
        <Logo></Logo>
        <div className="nav__menu menu">
          <div className="menu__wrapper" ref={menu}>
            <ul className="menu__list menu">
              <li className="menu__item">
                <a href="">Blog</a>
              </li>
              <li className="menu__item">
                <a href="">About</a>
              </li>
              <li className="menu__item menu__item--search">
                <a href="">
                  <CiSearch />
                </a>
              </li>
              <li className="menu__item menu__item--contact">
                <Button padding={"15px 35px"}>Contact Us</Button>
              </li>
            </ul>
          </div>
          <div className="menu__open open">
            <button className="open__btn" onClick={toggleModal}>
              {isOpened ? <IoCloseSharp /> : <TbMenu2 />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
