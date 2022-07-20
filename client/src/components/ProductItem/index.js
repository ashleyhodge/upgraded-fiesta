import React from "react";
import { Link } from 'react-router-dom';
import { Card } from 'flowbite-react';

function ProductItem(item) {
  const {
    image,
    name,
    _id,
    price,
    quantity
  } = item;
  return(
    <div class="card flex flex-col max-w-sm bg-white rounded-lg border border-gray-200 shadow-md"> 
      <Link to={`products/${_id}`}>
        <img className="rounded-t-lg pb-3" src={`/images/${image}`} alt={name} />
      </Link>
      <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white pb-3 px-2 text-center">
        {name}
      </h5>
      <div className="flex items-center justify-center">
        <span className="text-2xl content-center font-bold text-gray-900 dark:text-white pb-3 ">
          ${price}
        </span>
      </div>
      <div className="mt-auto flex items-center justify-center pb-2">
      <button className="text-white bg-purple-200 hover:bg-purple-100 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
          Add to cart
      </button>
      </div>
  </div>
  )
}

export default ProductItem;