import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { IoMdArrowRoundBack } from 'react-icons/io'
import { BsFacebook, BsInstagram, BsPinterest } from "react-icons/bs"

import { QUERY_PRODUCTS } from '../utils/queries';


function OrderDetail() {
  const { id } = useParams();

  const [currentProduct, setCurrentProduct] = useState({});

  const { loading, data } = useQuery(QUERY_PRODUCTS);


  const products = data?.products || [];

  useEffect(() => {
    if (products.length) {
      setCurrentProduct(products.find(product => product._id === id));
    }
  }, [products, id]);


  return (
    <>
    {currentProduct ? (
    <section class="text-gray-700 body-font overflow-hidden bg-white">
        <Link to="/shop"><IoMdArrowRoundBack className='w-16 h-6 mt-6'/></Link>
    <div class="container px-5 py-24 mx-auto">
    <div class="lg:w-4/5 mx-auto flex flex-wrap">
      <img alt={currentProduct.name} class="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200" src={`/images/${currentProduct.image}`}/>
      <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        
        <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">{currentProduct.name}</h1>
        <div class="flex mb-4">
          <span class="flex items-center">
            <span class="text-gray-600 ml-3">Reviews</span>
          </span>
          <span class="flex ml-3 pl-3 py-2 border-l-2 border-gray-200">
            <a class="text-gray-500">
              <BsFacebook />
            </a>
            <a class="ml-2 text-gray-500">
              <BsInstagram />
            </a>
            <a class="ml-2 text-gray-500">
              <BsPinterest />
            </a>
          </span>
        </div>
        <p class="leading-relaxed">{currentProduct.description}</p>
        <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
        
        </div>
        <div class="flex">
          <span class="title-font font-medium text-2xl text-gray-900">${currentProduct.price}</span>
          <button class="flex ml-auto text-white bg-purple-200 border-0 py-2 px-6 focus:outline-none hover:bg-purple-100 rounded">Add to cart</button>
        </div>
      </div>
    </div>
  </div>
</section>
    ) : null}
    
</>
  )
}

export default OrderDetail;