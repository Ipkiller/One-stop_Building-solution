import React from "react";
import { useRef } from "react";
import "./Navbar.css";
import "./Responsive_navbar.css";
import Menu_bar from "./Menu_bar";

const Navbar = () => {
const menu_windowref = useRef(null);
const menu_click = () => {
  menu_windowref.current.classList.toggle("transition");
}

  return (
    <nav>
<div className="menu_btn" onClick={menu_click} >
  <i className="fa-solid fa-bars"></i>
</div>
<ul className="menu_window" ref={menu_windowref}>
  <Menu_bar />
</ul>
      <div className="logo">
        <img src="src/assets/Logo.jpeg" alt="Logo" />
      </div>
      <ul className="menu_bar">
        <Menu_bar />
      </ul>
      <ul className="menu_icons">
        <li><i className="fa-solid fa-user"></i></li>
        <li><i className="fa-solid fa-magnifying-glass"></i></li>
        <li><i className="fa-regular fa-heart"></i></li>
        <li><i className="fa-solid fa-cart-shopping"></i></li>
      </ul>
    </nav>
  );
};

export default Navbar;
