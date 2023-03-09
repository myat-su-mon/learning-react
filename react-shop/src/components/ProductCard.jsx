import React from "react";

const ProductCard = ({product}) => {
  return (
    <div className="card border-dark mb3">
      <div className="card-body">
        <img src="{product.image}" height={90} alt="" />
        <p className="text-truncate">{product.title}</p>
        <div className="">
            <p className="fw-bold small mb-0"> $ {product.price}</p>
            <button className="btn btn-sm btn-outline-dark">
                <i className="bi bi-cart-plus"></i>
                Add Cart
            </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
