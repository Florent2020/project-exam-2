import React from "react";
import { Link } from "react-router-dom";

function Pagination({
  accommodationsPerPage,
  totalAccommodations,
  paginate,
  pageIndex,
}) {
  const pageNumbers = [];
  for (
    let i = 1;
    i <= Math.ceil(totalAccommodations / accommodationsPerPage);
    i++
  ) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <Link
              to="#"
              onClick={() => paginate(number)}
              className={
                number !== pageIndex ? "page-link" : "page-link active"
              }
            >
              {number}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Pagination;

// =================================================

// import React, { useEffect, useMemo, useState } from "react";
// import { Pagination } from "react-bootstrap";

// function PaginationPage({
//   total = 0,
//   itemsPerPage = 6,
//   currentPage = 1,
//   onPageChange,
// }) {
//   const [totalPages, setTotalPages] = useState(0);

//   useEffect(() => {
//     if (total > 0 && itemsPerPage > 0)
//       setTotalPages(Math.ceil(total / itemsPerPage));
//   }, [total, itemsPerPage]);

//   const paginationItems = useMemo(() => {
//     const pages = [];

//     for (let i = 1; i <= totalPages; i++) {
//       pages.push(
//         <Pagination.Item
//           key={i}
//           active={i === currentPage}
//           onClick={() => onPageChange(i)}
//         >
//           {i}
//         </Pagination.Item>
//       );

//       return pages;
//     }
//   }, [totalPages, currentPage]);

//   return (
//     <Pagination>
//       <Pagination.Prev
//         onClick={() => onPageChange(currentPage - 1)}
//         disabled={currentPage === 1}
//       />
//       {paginationItems}
//       <Pagination.Next
//         onClick={() => onPageChange(currentPage + 1)}
//         disabled={currentPage === 1}
//       />
//     </Pagination>
//   );
// }

// export default PaginationPage;
