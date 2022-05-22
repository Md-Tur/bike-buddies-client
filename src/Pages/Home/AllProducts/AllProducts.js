import React from 'react';
import useProducts from '../../../hooks/useProducts';
import Product from '../Product.js/Product';

const AllProducts = () => {

    const [products] = useProducts();

    return (
        <div>
            <h1 className='text-3xl text-center mt-2 mb-2 text-cyan-600'>Our All Parts</h1>
            <div className='px-12'>
                <div className='grid lg:grid-cols-3 sm:grid-cols-1 gap-3'>
                    {
                        products.map(product => <Product
                            key={product._id}
                            product={product}
                        ></Product>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AllProducts;