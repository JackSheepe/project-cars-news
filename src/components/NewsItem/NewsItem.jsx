import React from "react";
import "./NewsItem.scss";

const NewsItem = ({ title, content, img, author, date }) => {
  return (
    <li className="news-item">
      <img className="news-item__img" src={img} alt={title} />
      <div className="news-item__text-container">
        <h3 className="news-item__title">{title}</h3>
        <p className="news-item__content">{content}</p>
        <div className="news-item__author-date">
          <p className="news-item__author">{author}</p>
          <p className="news-item__date">{date}</p>
        </div>
      </div>
    </li>
  );
};

export default NewsItem;
