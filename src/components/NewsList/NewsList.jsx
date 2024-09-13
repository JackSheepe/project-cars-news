import React, { useState } from "react";
import "./NewsList.scss";
import NewsItem from "../NewsItem/NewsItem";

const NewsList = ({ newsData }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(Math.ceil(newsData.length / 8));
  const startIndex = (currentPage - 1) * 8;
  const endIndex = Math.min(currentPage * 8, newsData.length);

  const paginatedNews = newsData.slice(startIndex, endIndex);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const [isEllipsisDialogOpen, setIsEllipsisDialogOpen] = useState(false);
  const [selectedPage, setSelectedPage] = useState(null);

  const handleEllipsisClick = () => {
    setIsEllipsisDialogOpen(true);
  };

  const handleCloseEllipsisDialog = () => {
    setIsEllipsisDialogOpen(false);
    setSelectedPage(null);
  };

  const handleSelectPage = (page) => {
    setSelectedPage(page);
    handleCloseEllipsisDialog();
    setCurrentPage(page);
  };

  return (
    <div className="news-list">
      <h1 className="news-list__heading">Новости и анонсы</h1>
      <ul className="news-list__list">
        {paginatedNews.map((news) => (
          <NewsItem
            key={news.id}
            title={news.title}
            img={news.img}
            content={news.content}
            author={news.author}
            date={news.date}
          />
        ))}
      </ul>

      <div className="news-list__pagination">
        {[...Array(4)].map((_, i) => (
          <span
            key={i}
            className={`news-list__page ${
              i + 1 === currentPage ? "news-list__page_active" : ""
            }`}
            onClick={() => handlePageChange(i + 1)}
          >
            {i + 1}
          </span>
        ))}
        <span className="news-list__ellipsis" onClick={handleEllipsisClick}>
          ...
          {isEllipsisDialogOpen && (
            <div className="news-list__dialog-overlay">
              <div className="news-list__dialog-content">
                <select
                  value={selectedPage || ""}
                  onChange={(e) => handleSelectPage(e.target.value)}
                >
                  <option value="">{currentPage}</option>
                  {[
                    ...Array.from(
                      { length: totalPages },
                      (_, i) => i + 1
                    ).filter((p) => p >= 5 && p <= totalPages - 1),
                  ].map((page) => (
                    <option key={page} value={page}>
                      {page}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          )}
        </span>

        <span
          key={totalPages}
          className={`news-list__page ${
            totalPages === currentPage ? "news-list__page_active" : ""
          }`}
          onClick={() => handlePageChange(totalPages)}
        >
          {totalPages}
        </span>
      </div>
    </div>
  );
};

export default NewsList;
