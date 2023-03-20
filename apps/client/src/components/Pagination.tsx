import React from 'react';

interface Props {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

function Pagination({ currentPage, totalPages, onPageChange }: Props) {
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  const renderPaginationItems = () => {
    const paginationItems = [];

    // Render the "Previous" button
    if (currentPage > 1) {
      paginationItems.push(
        <li key="previous" className={`page-item`}>
          <button className="page-link" onClick={() => handlePageChange(currentPage - 1)}>
            Previous
          </button>
        </li>,
      );
    }

    // Render page numbers
    for (let i = Math.max(1, currentPage - 2); i <= Math.min(totalPages, currentPage + 2); i++) {
      paginationItems.push(
        <li key={i} className={`page-item ${i === currentPage ? 'active' : ''}`}>
          <button className="page-link" onClick={() => handlePageChange(i)}>
            {i}
          </button>
        </li>,
      );
    }

    // Render the "Next" button
    if (currentPage < totalPages) {
      paginationItems.push(
        <li key="next" className={`page-item`}>
          <button className="page-link" onClick={() => handlePageChange(currentPage + 1)}>
            Next
          </button>
        </li>,
      );
    }

    return paginationItems;
  };

  return (
    <nav aria-label="Page navigation">
      <ul className="pagination">
        {renderPaginationItems()}
      </ul>
    </nav>
  );
}

export default Pagination;
