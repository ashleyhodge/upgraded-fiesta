import React from 'react';
import { useQuery } from '@apollo/client';
import { Card } from 'flowbite-react'
import ProductItem from '../ProductItem';
import { QUERY_PRODUCTS } from '../../utils/queries';


function ProductList({ currentCategory }) {
  const { loading, data } = useQuery(QUERY_PRODUCTS);

  const products = data?.products || [];

  function filterProducts() {
    if (!currentCategory) {
      return products;
    }

    return products.filter(
      (product) => product.category._id === currentCategory
    );
  }

  return (
    
    <div className="my-5 ">
      {products.length ? (
        <Card>
        <div className="grid grid-cols-1 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-4  md:grid-cols-3  sm:grid-cols-2 gap-8">
          {filterProducts().map((product) => (
            <ProductItem
              key={product._id}
              _id={product._id}
              image={product.image}
              name={product.name}
              price={product.price}
              quantity={product.quantity}
            />
          ))}
        </div>
        </Card>
      ) : (
        <h3>You haven't added any products yet!</h3>
      )}
    </div>

  );
}

export default ProductList;
