import React from 'react';
import { toast } from 'react-toastify';

const AddProduct = () => {

    const handleAddProduct = event => {
        event.preventDefault();
        const addProduct = {
            img: event.target.img.value,
            name: event.target.name.value,
            description: event.target.description.value,
            minimum: event.target.minimum.value,
            available: event.target.available.value,
            price: event.target.price.value
        }

        fetch('https://polar-coast-87590.herokuapp.com/addproduct', {
            method: "POST",
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(addProduct)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    toast.success('Product added successfully');
                    event.target.reset();
                }

                else
                    toast.error('Did something wrong');
            })


    }

    return (
        <div>
            <h2>Add a new product</h2>
            <div className='flex justify-center items-center mt-3'>
                <form onSubmit={handleAddProduct}>
                    <input type="text" id='img' placeholder="Product Image Url" className="block input input-bordered input-sm w-full max-w-xs" required />
                    <input type="text" id='name' placeholder="Product Name" className="block input input-bordered input-sm w-full max-w-xs mb-2 mt-2" required />
                    <input type="text" id='description' placeholder="Product Description" className="block input input-bordered input-sm w-full max-w-xs" required />
                    <input id='minimum' type="number" placeholder="Minimum Order" className="block input input-bordered input-sm w-full max-w-xs mb-2 mt-2" required />
                    <input id='available' type="number" placeholder="Available Quantity" className="block input input-bordered input-sm w-full max-w-xs mb-2 mt-2" required />
                    <input id='price' type="number" placeholder="Price" className="block input input-bordered input-sm w-full max-w-xs mb-2 mt-2" required />
                    <input type="submit" value="Add Product" className="btn btn-outline btn-success" />
                </form>
            </div>
        </div>
    );
};

export default AddProduct;