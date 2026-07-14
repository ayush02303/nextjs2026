import React from 'react'
import ProductList from './ProductList';

const Product = async ( props ) => {

    const params = await props.searchParams;

  console.log(params);
//   console.log("working")


  return (
    <div>
        <h1>Search Params </h1>
        <ProductList/>
      
    </div>
  )
}

export default Product
