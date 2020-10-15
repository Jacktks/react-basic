import React from 'react';
import Item from "./Item.component";

const Product = (props) => {
     const { currentProducts } = props
     return (
          <div className="products">
               {currentProducts.map((product, i) => (
                    <Item product={product} key={i} />
               ))}
          </div>
     );
}

export default Product;