import React from "react";
const ByRating = (props) => {
  const { handleByRatings, valueByRatings } = props;

  const ratings = [4, 3, 2, 1];

  const productRaitngs = (rating) => {
    let stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<span className="fa fa-star" key={i} />);
    }
    for (let i = 0; i < 5 - rating; i++) {
      stars.push(<span className="fa fa-star-o" key={5 - i} />);
    }

    return stars;
  };

  const onClick = (rating) => {
    handleByRatings(rating);
    console.log(rating);
  };

  return (
    <div className="refine-by-ratings">
      <ul>
        {ratings.map((e, i) => (
          <li
            key={i}
            onClick={() => onClick(e)}
            className={valueByRatings === e ? "active" : ""}
          >
            {productRaitngs(e)}
            {/* & Ups (
            {
              countProducts.filter((product) => product.brand === e.brand)
                .length
            }
            ) */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ByRating;
