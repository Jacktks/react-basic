import React from "react";
import logo from "../images/logo-is.png";
const Header = (props) => {
  const { handleSearchItem } = props;

  return (
    <header>
      <a href="./" className="header__logo">
        <img src={logo} alt="" />
      </a>
      <a href="./" className="header__text">
        amazing
      </a>
      <div className="header__input">
        <input placeholder="Search a product" onChange={handleSearchItem} />
        <button>
          <i className="fa fa-search"></i>
        </button>
      </div>
    </header>
  );
};

export default Header;
