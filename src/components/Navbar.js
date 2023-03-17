import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import Theme from "./Theme";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <Link to="/">
          <Logo />
        </Link>
        <Theme />
      </div>
    </nav>
  );
};

export default Navbar;
