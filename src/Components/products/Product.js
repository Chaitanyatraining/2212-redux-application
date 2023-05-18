import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { addToCart } from '../redux/ProductActions/ProductActions'
import { useDispatch } from 'react-redux'

const Product = () => {
    const [product, setProduct] = useState({})
    const { id } = useParams();

    const dispatch = useDispatch();

    useEffect(() => {
        getProductData();
    }, [])

    const getProductData = async () => {
        const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`);
        setProduct(data)
    }

    return (
        <>
            <h2>Product</h2>
            {
                Object.keys(product).length ? (
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-6 mt-2 border'>
                                <img src={product.image} className='img-fluid' />
                            </div>
                            <div className='col-md-6 mt-2 border'>
                                <h2 className='pt-3'>{product.title}</h2>
                                <div className='product_price mt-3'>
                                    <span className='bg-info text-light p-2'>price: ${product.price}</span>
                                </div>
                                <div className='product_category mt-3'>
                                    <span className='bg-secondary text-white p-1'>Category : {product.category}</span>
                                </div>
                                <div className='product_description mt-3'>
                                    <p className='p-2'>{product.description}</p>
                                </div>
                                <div className='product_addToCart mt-3'>
                                    <button className='btn btn-info px-3 py-2'
                                    onClick={()=>{dispatch(addToCart(product))}}
                                    >Add To Cart</button>
                                </div>
                            </div>

                        </div>
                    </div>
                ) : <p>Loading</p>
            }
        </>
    )
}

export default Product