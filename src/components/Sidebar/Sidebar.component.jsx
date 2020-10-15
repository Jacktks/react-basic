import React, { useEffect, useState } from "react";

import ShowSidebar from "./ShowSidebar.component";
import ByType from "./RefineSidebar/ByType.component";
import ByBrand from "./RefineSidebar/ByBrand.component";
import ByRating from "./RefineSidebar/ByRating.component";
import ByPrices from "./RefineSidebar/ByPrices.component";

const Siderbar = (props) => {
  const {
    handleTitle,
    handleType,
    handleByType,
    handleByBrand,
    handleByRatings,
    handleByPrices,
    valueByBrand,
    valueByPricesEnd,
    valueByPricesStart,
    valueByRatings,
    valueByType,
    valueTitle,
    valueType,
    handleClearAllFilter,
    countProducts,
    handleSearchBrand,
  } = props;

  const [types, setTypes] = useState([]);

  const [valueIdTitle, setvalueIdTitle] = useState("");
  const [valueIdType, setvalueIdType] = useState("");

  useEffect(() => {
    let url = "http://localhost:5000/types";
    fetch(url)
      .then((res) => res.json())
      .then((result) => {
        setTypes(result);
      });
  }, [valueByRatings]);

  const handleIdTitle = (id) => {
    setvalueIdTitle(id);
  };

  const handleIdType = (id) => {
    setvalueIdType(id);
  };
  return (
    <div className="menu">
      <div className="menu__clear">
        {valueByBrand.length > 0 ||
        valueByPricesEnd ||
        valueByPricesStart ||
        valueByRatings ||
        valueByType.length > 0 ||
        valueTitle ||
        valueType ? (
          <button onClick={() => handleClearAllFilter()}>
            Clear all filter
          </button>
        ) : (
          ""
        )}
      </div>

      <div className="menu__result">
        <p className="menu__title-1">Show results for</p>
        <ShowSidebar
          types={types}
          handleIdTitle={handleIdTitle}
          handleIdType={handleIdType}
          handleTitle={handleTitle}
          handleType={handleType}
          valueIdType={valueIdType}
          valueTitle={valueTitle}
          valueType={valueType}
        />
      </div>
      <hr></hr>
      <div className="menu__refine">
        <p className="menu__title-1">Refine by</p>
        <p className="menu__title-2">Type</p>
        <ByType
          types={types}
          valueIdTitle={valueIdTitle}
          valueByType={valueByType}
          handleByType={handleByType}
          countProducts={countProducts}
        />
        <p className="menu__title-2">Brand</p>
        <ByBrand
          handleSearchBrand={handleSearchBrand}
          types={types}
          valueIdTitle={valueIdTitle}
          valueIdType={valueIdType}
          valueByBrand={valueByBrand}
          handleByBrand={handleByBrand}
          countProducts={countProducts}
        />
        <p className="menu__title-2">Ratings</p>
        <ByRating
          handleByRatings={handleByRatings}
          valueByRatings={valueByRatings}
          countProducts={countProducts}
        />
        <p className="menu__title-2">Prices</p>
        <ByPrices
          handleByPrices={handleByPrices}
          valueByPricesStart={valueByPricesStart}
          valueByPricesEnd={valueByPricesEnd}
        />
      </div>
      <hr></hr>
      <div className="menu__text">Data courtesy of Best Buy</div>
    </div>
  );
};

export default Siderbar;
