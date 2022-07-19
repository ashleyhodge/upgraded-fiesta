import React from "react";

import { Card } from 'flowbite-react'

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
      <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
        {name}
      </h5>
      <div className="flex items-center justify-between">
        <span className="text-3xl font-bold text-gray-900 dark:text-white">
          ${price}
        </span>
        <button className="rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Add to cart
        </button>
      </div>
    </Card>
  )
}

export default ProductItem;