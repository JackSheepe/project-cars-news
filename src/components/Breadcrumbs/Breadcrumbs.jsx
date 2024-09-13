import React from "react";
import "./Breadcrumbs.scss";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Breadcrumbs = () => {
  const location = useLocation();

  // Получение предыдущей страницы
  const prevLocation = location.state?.from || "/";

  return (
    <div className="breadcrumbs">
      <div className="breadcrumbs__links-container">
        <NavLink className="breadcrumbs__link" to={prevLocation}>
          {prevLocation === "/" && "Main Page"}
        </NavLink>
        <p className="breadcrumbs__title">{document.title}</p>
      </div>
      <div className="breadcrumbs__line"></div>
    </div>
  );
};

export default Breadcrumbs;
