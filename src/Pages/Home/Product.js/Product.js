import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {

    const { name, img, description, minimum, available, price } = product;

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img className="rounded-xl" style={{ height: "200px", width: "350px" }} src={img} alt="" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p><small> {description} </small></p>
                <p><small>Minimum Order: {minimum} </small></p>
                <p><small> Available: {available} </small></p>
                <p>Price: {price} </p>
                <div className="card-actions">
                    <Link to='/purchase' className="btn btn-outline btn-success">Buy Now</Link>
                </div>
            </div>
        </div>
    );
};

export default Product;