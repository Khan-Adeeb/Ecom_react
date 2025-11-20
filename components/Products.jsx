import React, { useContext } from 'react'
import ProductCard from "./ProductCard";
import { ProductContext } from '../utils/Context';

function Products() {
  
  const {products} =  useContext(ProductContext)

  return (
    <div className="w-full flex flex-wrap gap-8 overflow-x-auto h-full">
      {products.map((e,i) => (
        <ProductCard key={i} data={e}/>
      ))}
    </div>
  )
}

export default Products