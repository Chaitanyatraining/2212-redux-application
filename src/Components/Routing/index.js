import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Products } from '../Products'

 const Routing = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<Products /> } />
            <Route path="products" element={<Products /> } />
            <Route path="/product/:id" element={<h2>product detail page</h2>} />
        </Routes>
    </>
  )
}

export default Routing