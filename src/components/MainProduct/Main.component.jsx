import React, { useEffect, useState } from "react";
import Product from "./Product.component";
import Pagination from "./Pagination.component";
import SortProduct from "./SortProduct.component";
import SpinnerPage from "../waiting.component";
// import queryString from "query-string";
const Main = (props) => {
  const {
    valueTitle,
    valueType,
    valueByType,
    valueByBrand,
    valueByRatings,
    valueByPricesStart,
    valueByPricesEnd,
    handleProducts,
    valueSearch,
  } = props;

  const [sort, setSort] = useState("");
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    let url = `http://localhost:5000/products?`;
    if (valueTitle) {
      url += `&title=${valueTitle}`;
    }

    if (valueType) {
      url += `&type=${valueType}`;
    }

    if (valueByType.length > 0) {
      for (let i = 0; i < valueByType.length; i++) {
        url += `&byType=${valueByType[i]}`;
      }
    }

    if (valueByBrand.length > 0) {
      for (let i = 0; i < valueByBrand.length; i++) {
        url += `&brand=${valueByBrand[i]}`;
      }
    }

    if (valueByRatings) {
      url += `&ratings=${valueByRatings}`;
    }

    if (valueByPricesStart) {
      url += `&price_gte=${valueByPricesStart}`;
    }

    if (valueByPricesEnd) {
      url += `&price_lte=${valueByPricesEnd}`;
    }

    if (sort) {
      url += `&_sort=price&_order=${sort}`;
    }

    if (valueSearch) {
      url += `&q=${valueSearch}`;
    }
    fetch(url)
      .then((res) => res.json())
      .then((result) => {
        setProducts(result);
        setLoading(false);
      });
  }, [
    valueTitle,
    valueType,
    valueByType,
    valueByBrand,
    valueByRatings,
    valueByPricesStart,
    valueByPricesEnd,
    sort,
    valueSearch,
    loading,
  ]);

  useEffect(() => {
    handleProducts(products);
  }, [products]);

  const LastProduct = currentPage * 8;
  const FirstProduct = LastProduct - 8;
  const currentProducts = products.slice(FirstProduct, LastProduct);

  const handlePaginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleSort = (value) => {
    setSort(value);
  };
  const Result = () => {
    console.log(products);
    if (loading === true) {
      return <SpinnerPage />;
    } else {
      return <Product currentProducts={currentProducts} />;
    }
  };

  return (
    <div className="main">
      <SortProduct products={products} handleSort={handleSort} />
      {Result()}
      <Pagination
        currentPage={currentPage}
        totalProducts={products.length}
        handlePaginate={handlePaginate}
      />
    </div>
  );
};

export default Main;
