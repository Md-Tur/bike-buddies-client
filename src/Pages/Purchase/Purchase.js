import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Purchase = () => {
    const [product, setProduct] = useState('');
    const { id } = useParams();
    console.log(id);

    useEffect(() => {
        fetch(`http://localhost:5000/product/${id}`)
            .then((res) => res.json())
            .then((data) => setProduct(data));
    }, [id]);

    return (
        <div className="grid lg:grid-cols-2 sm:grid-cols-1 lg:px-40 my-16">
            <div>
                <div className="card lg:max-w-lg bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img className="rounded-xl" style={{ height: "200px", width: "350px" }} src={product.img} alt="" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{product.name}</h2>
                        <p><small> {product.description} </small></p>
                        <p><small>Minimum Order: {product.minimum} </small></p>
                        <p><small> Available: {product.available} </small></p>
                        <p>Price: {product.price} </p>
                        <div className="card-actions">

                        </div>
                    </div>
                </div>
            </div>

            <div>
                dasdas
            </div>

        </div>
    );
};

export default Purchase;