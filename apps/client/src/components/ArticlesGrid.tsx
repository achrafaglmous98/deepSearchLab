import { Types } from "mongoose";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Pagination from "./Pagination";
import { Row, Col, Container } from 'react-bootstrap';
import Filter from './Filter';

export interface Article {
  _id: Types.ObjectId;
  title: string;
  date: Date;
  category: string;
  subcategory: string;
  topic: string;
  authors: string[];
  text: string;
  images: string;
}

function ArticlesGrid() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [filters, setFilters] = useState<{ category?: string; sort?: string }>({});

  useEffect(() => {
    const query = new URLSearchParams(filters);
    query.set("page", currentPage.toString());
    fetch(`/api/articles?${query.toString()}`)
      .then((response) => response.json())
      .then((data) => {
        const articlesWithDateObjects = data.articles.map((article: Article) => {
            return {
              ...article,
              date: new Date(article.date)
            }
          });
          setArticles(articlesWithDateObjects);
        setTotalPages(data.totalPages);
      })
      .catch((error) => console.error(error));
  }, [currentPage, filters]);

  function handlePageChange(newPage: number) {
    setCurrentPage(newPage);
  }

  function handleFiltersChange(newFilters: { category?: string; sort?: string }) {
    setCurrentPage(1);
    setFilters(newFilters);
  }

  return (
    <>
      <div className="container-fluid bg-dark text-white p-3">
        <h1 className="mb-4">Articles</h1>
      </div>
      <div className="container mt-4">
        <Filter onFilterChange={handleFiltersChange} />
        <div className="row mt-4">
          {articles.map((article) => (
            <div key={article._id.toString()} className="col-md-4 mb-4">
              <div className="card h-100">
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{article.title}</h5>
                  <div className="mb-2">
                    <span className="card-category">{article.category}</span>
                  </div>
                  <div className="mb-2">
                    <span className="card-author">By {article.authors[0]}</span>
                    {article.authors[1] && (
                      <span className="card-author">, {article.authors[1]}</span>
                    )}
                  </div>
                </div>
                <div className="card-footer d-flex justify-content-between align-items-center">
                  <span className="card-date">{new Date(article.date).toLocaleDateString()}</span>
                  <Link to={`/library/${article._id}`} className="card-link">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          ))}
          <div className="col-12 d-flex justify-content-center">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange} />
          </div>
        </div>
      </div></>
  );
}

export default ArticlesGrid;
