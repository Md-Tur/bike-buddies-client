import React from 'react';

const Product = ({ product }) => {

    const { name, img, description, minimum, available, price, _id } = product;

    return (
        <div class="card w-96 bg-base-100 shadow-xl">
            <figure class="px-10 pt-10">
                <img className="rounded-xl" style={{ height: "200px", width: "350px" }} src={img} alt="" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">{name}</h2>
                <p><small> {description} </small></p>
                <p><small>Minimum Order: {minimum} </small></p>
                <p><small> Available: {available} </small></p>
                <p>Price: {price} </p>
                <div class="card-actions">
                    {/* <button class="btn btn-primary">Buy Now</button> */}
                    <button class="btn btn-outline btn-success">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Product;