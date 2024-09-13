import React from "react";
import "./Header.scss";
import { NavLink } from "react-router-dom";
import logo from "../../img/Logo.svg";
import acc from "../../img/acc.svg";
import gaz from "../../img/gaz.svg";
import compare from "../../img/compare.svg";
import menu from "../../img/side-menu.svg";
import search from "../../img/search-btn.svg";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  return (
    <header className="header">
      <NavLink to="/">
        <img className="header__logo" src={logo} alt="Logo логотип" />
      </NavLink>

      {location.pathname !== "/register" && (
        <div className="header__search">
          <input
            className="header__search-input"
            type="text"
            placeholder="Найдите ваш электромобиль"
          />
        </div>
      )}

      <nav className="header__nav">
        {location.pathname !== "/register" && (
          <button className="header__nav-btn header__search-btn">
            <img
              className="header__nav-link-img"
              src={search}
              alt="иконка поиска"
            />
          </button>
        )}
        <NavLink to="/register" className="header__nav-link">
          <img
            className="header__nav-link-img"
            src={acc}
            alt="иконка личного кабинета"
          />
        </NavLink>
        <NavLink to="/register" className="header__nav-link">
          <img
            className="header__nav-link-img"
            src={gaz}
            alt="иконка калькулятор зарядки"
          />
        </NavLink>
        <NavLink to="/register" className="header__nav-link">
          <img
            className="header__nav-link-img"
            src={compare}
            alt="иконка сравнения"
          />
        </NavLink>
        <button className="header__nav-btn">
          <img
            className="header__nav-link-img"
            src={menu}
            alt="иконка бокового меню"
          />
        </button>
      </nav>
    </header>
  );
};

export default Header;
