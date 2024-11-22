import React from "react";
import logo from "../assets/logo.png";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="navbarContent">
        <ul>
          <li>Home</li>
          <li>
            Shop <IoIosArrowDown />
          </li>
          <li>
            Veterinary <IoIosArrowDown />
          </li>
          <li>Community</li>
        </ul>
        <div className="buttons">
          <button className="login">Log in</button>
          <button className="signup">Sign up</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
