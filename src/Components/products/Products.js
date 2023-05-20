import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { fetchProducts } from '../redux/ProductActions/ProductActions';
import { useDispatch, useSelector } from 'react-redux';

export const Products = () => {
    // const [products, setProducts] = useState([]);
    const products = useSelector((state) => state.ProductsData.products)    
    console.log(products)
    const dispatch = useDispatch()
    
    useEffect(() => {
        // getProducts();
        dispatch(fetchProducts())
    }, [])

    // const getProducts = async () => {
    //     const response = await fetch("https://fakestoreapi.com/products");
    //     const data = await response.json();
    //     setProducts(data);
    // }

    return (
        <>
            <div className='container mt-2'>
                <h2>Products</h2>
                <div className='row'>
                    {
                        products.length > 0 ? (
                            products.map((product)=>(
                                <div key={product.id} className='col-md-3'>
                                    <Link to={`/product/${product.id}`}>
                                    <div className='card my-2'>
                                       <img src={product.image} alt={product.title} />
                                       <div className='card-body'>
                                            <h5 className='card-title'>{product.category}</h5>
                                       </div>
                                    </div>
                                    </Link>
                                </div>
                            ))
                        ) : <p>Loading...</p>
                    }
                </div>
            </div>
        </>
    )
}
