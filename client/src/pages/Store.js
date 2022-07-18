import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_ALL_PRODUCTS } from '../utils/queries';
import ProductList from '../components/productList';

const Store = () => {
    // use useQuery hook to make query request
  const {loading, data } = useQuery(QUERY_ALL_PRODUCTS);
  const products = data?.products || [];
  console.log(products)
  
  return (
<main>
  <div className="flex-row justify-space-between">
    <div className="col-12 mb-3">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <ProductList products={products}  />
      )}
    </div>
  </div>
</main>
  )
}

export default Store;