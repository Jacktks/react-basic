import React from 'react';

const Item = (props) => {
     const { product } = props;

     const RateProduct = (ratings) => {
          let stars = [];
          for (let i = 0; i < ratings; i++) {
               stars.push(<span className="fa fa-star" key={i} />);
          }
          for (let i = 0; i < 5 - ratings; i++) {
               stars.push(<span className="fa fa-star-o" key={5 - i} />);
          }
          return stars;
     };
     return (
          <div className="product">
               <div className="product__img">
                    <img src={product.image} alt="" />
               </div>
               <div className="product__desc">
                    <div className="product__desc__name">{product.name}</div>
                    <div className="product__desc__type">{product.type}</div>
                    <div className="product__desc__price">${product.price}</div>
                    <div className="product__desc__rating">
                         {RateProduct(product.ratings)}
                    </div>
               </div>
          </div>
     );
}

export default Item;