import React from "react";


import { Card } from 'flowbite-react'

function ProductList({ products }) {
  return(

    <div className="container pt-10 2xl:mx-8 bg-purple-50">
      <div className=" mx-5 ">
        <div className=" grid grid-cols-1 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-4  md:grid-cols-3  sm:grid-cols-2 gap-8 ">
          <div className="max-w-sm">
            
              {products &&
                products.map(product => (
                  <Card key={product._id}>
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                      {product.name}
                    </h5>
                    <div className="flex items-center justify-between">
                      <span className="text-3xl font-bold text-gray-900 dark:text-white">
                        ${product.price}
                      </span>
                      <button className="rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Add to cart
                      </button>
                    </div>
                  </Card>
                ))
              }
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductList;