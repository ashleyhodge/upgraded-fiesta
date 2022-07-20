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
    <Card>
      <Link to={`products/${_id}`}>
        <img src={`/images/${image}`} alt={name} />
      </Link>
      <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
        {name}
      </h5>
      <div className="flex items-center justify-between">
        <span className="text-2xl content-center font-bold text-gray-900 dark:text-white ">
          ${price}
        </span>
      </div>
      <button className="rounded-lg bg-purple-200 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Add to cart
      </button>
    </Card>
  )
}

export default ProductItem;