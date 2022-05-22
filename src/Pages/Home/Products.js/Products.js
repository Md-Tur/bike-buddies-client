import React from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../../../hooks/useProducts';
import Product from '../Product.js/Product';

const Products = () => {

    const [products] = useProducts();

    return (
        <div>
            <h1 className='text-3xl text-center text-primary mt-2 mb-2'>Our Parts</h1>
            <div className='px-12'>
                <div className='grid lg:grid-cols-3 sm:grid-cols-1 gap-3'>
                    {
                        products.slice(0, 6).map(product => <Product
                            key={product._id}
                            product={product}
                        ></Product>)
                    }
                </div>
                <div className='mt-3 mb-3 flex justify-center'>
                    <Link to="/manageitems">
                        <button class="btn btn-outline btn-info">Explore More</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Products;