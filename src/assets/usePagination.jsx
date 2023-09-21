import { useState } from "react";

export const usePagination = ( amount, itemsPerPage ) => {
  const [currentPage, setCurrentPage] = useState(1);
  const maxPage = Math.ceil(amount / itemsPerPage);
  
  if (currentPage > maxPage) {
    setCurrentPage(maxPage);
  }

  const next = () => {
    setCurrentPage((currentPage) => Math.min(currentPage + 1, maxPage));
  };

  const prev = () => {
    setCurrentPage((currentPage) => Math.max(currentPage - 1, 1));
  };

  const jump = (page) => {
    const pageNumber = Math.max(1, page);
    setCurrentPage(() => Math.min(pageNumber, maxPage));

  };

  return { next, prev, jump, currentPage, maxPage };
};