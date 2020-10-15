import React, { useState } from "react";
import Header from "./components/Header.component";
import Siderbar from "./components/Sidebar/Sidebar.component";
import Main from "./components/MainProduct/Main.component";
import "./scss/styles.scss";

function App() {
  const [valueTitle, setValueTitle] = useState("");
  const [valueType, setValueType] = useState("");
  const [valueByType, setValueByType] = useState([]);
  const [valueByBrand, setValueByBrand] = useState([]);
  const [valueByRatings, setValueByRatings] = useState("");
  const [valueByPricesStart, setValueByPricesStart] = useState("");
  const [valueByPricesEnd, setValueByPricesEnd] = useState("");
  const [countProducts, setCountProducts] = useState([]);
  const [valueSearch, setValueSearch] = useState("");

  const handleTitle = (title) => {
    setValueTitle(title);
  };

  const handleType = (type) => {
    setValueType(type);
  };

  const handleByType = (byType) => {
    setValueByType(byType);
  };

  const handleByBrand = (byBrand) => {
    setValueByBrand(byBrand);
  };

  const handleByRatings = (byRating) => {
    setValueByRatings(byRating);
  };

  const handleByPrices = (start, end) => {
    setValueByPricesStart(start);
    setValueByPricesEnd(end);
  };

  const handleClearAllFilter = () => {
    setValueTitle("");
    setValueType("");
    setValueByType([]);
    setValueByBrand([]);
    setValueByRatings("");
    setValueByPricesStart("");
    setValueByPricesEnd("");
  };

  const handleProducts = (products) => {
    setCountProducts(products);
  };

  const handleSearchItem = (event) => {
    const value = event.target.value;
    setValueSearch(value);
  };
  const handleSearchBrand = (event) => {
    const value = event.target.value;
    setValueByBrand(value);
  };
  return (
    <div>
      <Header handleSearchItem={handleSearchItem} />
      <div>
        <Siderbar
          handleTitle={handleTitle}
          handleType={handleType}
          handleByType={handleByType}
          handleByBrand={handleByBrand}
          handleByRatings={handleByRatings}
          handleByPrices={handleByPrices}
          handleClearAllFilter={handleClearAllFilter}
          handleSearchBrand={handleSearchBrand}
          valueByBrand={valueByBrand}
          valueByPricesEnd={valueByPricesEnd}
          valueByPricesStart={valueByPricesStart}
          valueByRatings={valueByRatings}
          valueByType={valueByType}
          valueTitle={valueTitle}
          valueType={valueType}
          countProducts={countProducts}
        />
        <Main
          valueTitle={valueTitle}
          valueType={valueType}
          valueByType={valueByType}
          valueByBrand={valueByBrand}
          valueByRatings={valueByRatings}
          valueByPricesStart={valueByPricesStart}
          valueByPricesEnd={valueByPricesEnd}
          handleProducts={handleProducts}
          valueSearch={valueSearch}
        />
      </div>
    </div>
  );
}

export default App;
