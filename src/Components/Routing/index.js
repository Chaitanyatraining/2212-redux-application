import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Products } from '../products/Products'
import Product from '../products/Product'
import { Cart } from '../Cart/Cart'

 const Routing = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<Products /> } />
            <Route path="products" element={<Products /> } />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/cartpage" element={<Cart />} />
        </Routes>
    </>
  )
}

export default Routing