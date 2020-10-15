import React from "react";

const SortProduct = (props) => {
  const { handleSort, products } = props;
  return (
    <div className="result-top">
      <div className="result-top__left">{products.length}</div>
      <div className="result-top__right">
        <label>Sort by</label>
        <select onChange={(value) => handleSort(value.target.value)}>
          <option value="">Featured</option>
          <option value="asc.">Price asc.</option>
          <option value="desc">Desc desc.</option>
        </select>
      </div>
    </div>
  );
};

export default SortProduct;
