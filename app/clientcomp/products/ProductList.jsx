"use client"

import { useSearchParams } from 'next/navigation'
import React from 'react'

const ProductList = () => {

     const searchParams = useSearchParams()
     console.log("inside" , searchParams)
  return (
    <div>
      <h1>Hii from Product List too</h1>
    </div>
  )
}

export default ProductList
