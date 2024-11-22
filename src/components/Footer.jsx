import React from "react";
import logo from "../assets/logo.png";
import { MdFacebook } from "react-icons/md";
import { FaGoogle } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="top">
        <div>
          <div>
            <img src={logo} alt="logo" />
          </div>
          <p>
            Generate outside the box thinking with the possiblity to target the
            low.
          </p>
        </div>
        <div>
          <h5>Resources</h5>
          <ul>
            <li>Community</li>
            <li>Events</li>
            <li>Help Center</li>
            <li>Partners</li>
          </ul>
        </div>
        <div>
          <h5>Products</h5>
          <ul>
            <li>Integrations</li>
            <li>Solutions</li>
            <li>Features</li>
            <li>Enterprise</li>
          </ul>
        </div>
        <div>
          <h5>Get Email Notifications</h5>
          <p>
            Generate outside the box thinking with the possiblity to target the
            low.
          </p>
          <div className="emailI">
            <input type="email" placeholder="Enter email...." />
            <button>Submit</button>
          </div>
        </div>
      </div>
      <div className="bottom">
        <p>&copy; 2024 Pawsome. All Rights Reserved.</p>
        <p className="svgs">
          <MdFacebook className="facebook" />
          <FaGoogle className="google" />
          <FaApple className="apple" />
          <IoLogoInstagram className="instagram" />
        </p>
      </div>
    </footer>
  );
};

export default Footer;
