import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart } from '../redux/ProductActions/ProductActions'

export const Cart = () => {
    // we have a hook to access the redux store
    // const [totalPrice, setTotalPrice] = useState(0)
    const cart_Data = useSelector((state) => state.ProductsData.cartData)
    console.log(cart_Data)

    const dispatch = useDispatch()

    const totalPrice = cart_Data.reduce((prevsValue, currentValue) => {
        return prevsValue + currentValue.price
    }, 0)
    return (
        <>
            <h2 className='mt-2'>Cart Page</h2>

            {cart_Data && cart_Data.length && (
                <div>
                    <p>Total Price: {totalPrice}</p>
                </div>
            )}

            <div className='container'>
                {cart_Data && cart_Data.length ? (
                    cart_Data.map((product) => (
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
                                <button className='btn btn-danger mt-2'
                                    onClick={() => {
                                        dispatch(removeFromCart(product.id))
                                    }}
                                >Remove</button>
                            </div>
                        </div>
                    ))
                ) :
                    <div className='border p-3'>
                        <p>Please Add some Products</p>
                    </div>
                }

            </div>
        </>
    )
}
