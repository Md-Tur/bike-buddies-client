import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const Purchase = () => {
    const [product, setProduct] = useState('');
    const { id } = useParams();
    const [user] = useAuthState(auth);

    useEffect(() => {
        fetch(`http://localhost:5000/product/${id}`)
            .then((res) => res.json())
            .then((data) => setProduct(data));
    }, [id]);

    const [quantity, setQuantity] = useState(150);
    const [disable, setDisable] = useState(false);

    const handleIncrease = (event) => {
        event.preventDefault();
        setQuantity(quantity + 1)
    };
    const handleDecrease = (event) => {
        event.preventDefault();
        setQuantity(quantity - 1)
    };

    let price = quantity * parseInt(product.price);

    useEffect(() => {
        if (quantity >= 150)
            setDisable(false);
        else
            setDisable(true);
    }, [quantity]);


    const handlePurchase = (event) => {

        event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const product = document.getElementById('product').value;
        const quantity = document.getElementById('quantity').value;
        const price = document.getElementById('price').value;
        const address = document.getElementById('address').value;
        const mobile = document.getElementById('phone').value;

        const user = {
            name,
            email,
            product,
            quantity,
            price,
            address,
            mobile
        }

        fetch("http://localhost:5000/product", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    toast.success("Your Purchase Successfull");
                    document.getElementsByTagName("input").value = "";
                }
            })
    };

    return (
        <div className="grid lg:grid-cols-2 sm:grid-cols-1 lg:px-40 my-16">
            <div>
                <div className="card lg:max-w-lg bg-base-100">
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
                    <div className='flex justify-center '>
                        <form>
                            <label className='block' htmlFor="">Name:</label>
                            <input type="text" id='name' value={user.displayName} className="input input-bordered w-full max-w-xs" disabled readOnly />
                            <label className='block mt-2' htmlFor="">Email:</label>
                            <input type="email" id='email' value={user.email} disabled readOnly className="input input-bordered w-full max-w-xs mb-2" />
                            <label className='block mt-2' htmlFor="">Product Name:</label>
                            <input type="text" id='product' value={product.name} disabled readOnly className="input input-bordered w-full max-w-xs mb-2" />
                            <label className='block mt-2' htmlFor="">Quantity:</label>
                            <input type="text" id='quantity' placeholder="Quantity" className="input input-bordered w-full max-w-xs mb-2" value={quantity} />
                            <div className='flex gap-5 justify-center'>
                                <button onClick={handleDecrease} className="btn btn-error">Decrease</button>
                                <button onClick={handleIncrease} className="btn btn-success">Increase</button>
                            </div>
                            <label className='block mt-2' htmlFor="">Price:</label>
                            <input type="text" id='price' placeholder="Price" className="input input-bordered w-full max-w-xs" value={price} />
                            <input type="text" id='address' placeholder="Address" className="input input-bordered w-full max-w-xs mt-2 mb-2" required />
                            <input type="text" id='phone' placeholder="Phone" className="input input-bordered w-full max-w-xs mb-2" required />
                            <div className='flex justify-center'>
                                <input disabled={disable} onClick={handlePurchase} className="btn btn-outline btn-success " type="submit" value="Confirm Purchase" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Purchase;