import React from "react";
const Pagination = (props) => {
  const { currentPage, totalProducts, handlePaginate } = props;

  const pageNumber = [];

  const totalsPages = Math.ceil(totalProducts / 8);

  for (let i = 1; i <= totalsPages; i++) {
    pageNumber.push(i);
  }
  return (
    <div className="paginations">
      <ul>
        <li>
          <button
            disabled={currentPage === 1}
            onClick={() => handlePaginate(currentPage - 1)}
          >
            <i className="fa fa-angle-left" />
            Previous Page
          </button>
        </li>
        {pageNumber.map((e, i) => (
          <li
            key={i}
            onClick={() => handlePaginate(e)}
            className={currentPage === e ? "active" : ""}
          >
            <span>{e}</span>
          </li>
        ))}
        <li>
          <button
            disabled={currentPage >= totalsPages}
            onClick={() => handlePaginate(currentPage + 1)}
          >
            Next page <i className="fa fa-angle-right"></i>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
