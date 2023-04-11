/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

const ProductItem = ({ product }) => {
  return (
    <div className="card">
      <Link href={`/product/${product.slug}`}>
        <img
          src={product.image}
          alt={product.name}
          className="rounded shadow object-cover h-64 w-full"
        />
      </Link>
      <div className="flex items-center flex-col justify-center p-5">
        <Link href={`/product/${product.slug}`} legacyBehavior>
          <a>
            <h2 className="text-lg font-weight:800">{product.name}</h2>
          </a>
        </Link>
        <p>{product.brand}</p>
        <p className="mb-2">{product.price}</p>
        <button
          className="primary-button"
          type="button"
         
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
