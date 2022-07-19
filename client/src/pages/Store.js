import React, { useState } from 'react';

import ProductList from '../components/productList';

const Store = () => {
  const [currentCategory, setCategory] = useState("");
  
  return (
    <div className="bg-purple-50">
      
      <ProductList currentCategory={currentCategory} />
    </div>
  )
}

export default Store;