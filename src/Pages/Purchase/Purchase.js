import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Purchase = () => {
    const [product, setProduct] = useState('');
    const { id } = useParams();

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
                    </div>
                </div>
            </div>

            <div>
                <div className="card lg:max-w-lg bg-base-100 lg:pl-12">
                    <div className='flex justify-center items-center'>
                        <form>
                            <input type="text" placeholder="Name" className="input input-bordered w-full max-w-xs" />
                            <input type="email" placeholder="Email" className="input input-bordered w-full max-w-xs mb-2 mt-2" />
                            <div className='flex gap-2'>
                                <button className="btn btn-error">-</button>
                                <input type="text" placeholder="Quantity" className="input input-bordered w-60 max-w-xs" />
                                <button className="btn btn-success">+</button>
                            </div>
                            <input type="text" placeholder="Price" className="input input-bordered w-full max-w-xs mb-2 mt-2" />
                            <input type="text" placeholder="Address" className="input input-bordered w-full max-w-xs" />
                            <input type="text" placeholder="Phone" className="input input-bordered w-full max-w-xs mb-2 mt-2" />
                            <div className='flex justify-center'>
                                <input className="btn btn-outline btn-success " type="submit" value="Confirm Purchase" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Purchase;