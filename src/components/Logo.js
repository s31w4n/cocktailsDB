import React from "react";
import { FaGlassCheers } from "react-icons/fa";

const Logo = () => {
  return (
    <div className="logo">
      <span className="icon">
        <FaGlassCheers />
      </span>
      <h1 className="logo-title">Cocktails DB</h1>
    </div>
  );
};

export default Logo;
