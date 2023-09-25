import React from "react";
import { PaginatorProps } from "../../../types/common";
import "./Pagination.css";
const Paginator: React.FC<PaginatorProps> = ({
  totalUsers,
  query,
  setQuery
}) => {
  const totalPages = Math.ceil(totalUsers / query.limit);

  const handlePageChange = (page: number) => {
    const offset = (page - 1) * query.limit;
    setQuery({ ...query, offset });
  };

  const handleLimitChange = (limit: number) => {
    setQuery({ ...query, limit, offset: 0 });
  };

  const handlePrevPage = () => {
    if (query.offset > 0) {
      const newOffset = query.offset - query.limit;
      setQuery({ ...query, offset: newOffset });
    }
  };

  const handleNextPage = () => {
    if (query.offset + query.limit < totalUsers) {
      const newOffset = query.offset + query.limit;
      setQuery({ ...query, offset: newOffset });
    }
  };

  return (
    <div className="paginator">
      <div className="paginator-controls">
        <span>By page:</span>
        <input
          className="inputByPage"
          type="number"
          value={query.limit}
          min={1}
          onChange={(e) => handleLimitChange(Number(e.target.value))}
        />
        <button onClick={handlePrevPage}>prev</button>
        <span>Page {Math.ceil(query.offset / query.limit) + 1}</span>
        <button onClick={handleNextPage}>next</button>
      </div>
      <p>
        Showing {query.limit} users on page{" "}
        {Math.ceil(query.offset / query.limit) + 1} of {totalPages}
      </p>
    </div>
  );
};

export default Paginator;
