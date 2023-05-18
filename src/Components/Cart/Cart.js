import React, { useState } from 'react'
import { useSelector } from 'react-redux'

export const Cart = () => {
    // we have a hook to access the redux store
    const [totalPrice, setTotalPrice] = useState(0)
    const cart_Data = useSelector((state) => state.ProductsData.cartData)
    console.log(cart_Data)
  return (
    <>
    <h2 className='mt-2'>Cart Page</h2>
    <div className='container'>
        {cart_Data && cart_Data.length ? (
            cart_Data.map((product) =>(
                <div className='row'>
                <div className='col-md-4'>
                    <img src={product.image} className='img-fluid' />
                </div>
                <div className='col-md-6'>
                    <h4 className='pt-3'>{product.title}</h4>
                    <h4 className='mt-2 '>{product.category}</h4>
                    <p className='mt-2 '>{product.description}</p>
                </div>
                <div className='col-md-2'>
                    <div>Price: ${product.price}</div>
                    <button className='btn btn-danger mt-2'>Remove</button>
                </div>
            </div>
            ))
        ) : <p>loading</p>} 
        
    </div>
    </>
  )
}
