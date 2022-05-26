import React from 'react';
import Swal from 'sweetalert2';
import useProducts from '../../hooks/useProducts';

const ManageProducts = () => {

    const [products] = useProducts();

    const handelDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You want to cancel this order",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes'
        }).then((result) => {
            if (result.isConfirmed) {
                const url = `https://polar-coast-87590.herokuapp.com/manageproduct/${id}`;
                fetch(url, {
                    method: "DELETE",
                })
                    .then((res) => res.json())
                    .then((data) => {

                    });
                Swal.fire(
                    'Cancelled!',
                    'Your order has been cancelled',
                    'success'
                )
            }
        })


    };
    return (
        <div>
            <h2>All Product</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product Name</th>
                            <th>Total Quantity</th>
                            <th>Price</th>
                            <th>Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product, index) => <tr className="hover">
                                <th>{index + 1}</th>
                                <td>{product.name}</td>
                                <td>{product.available}</td>
                                <td>{product.price}</td>
                                <td>
                                    <button className="btn btn-xs ml-2" onClick={() => handelDelete(product._id)}>Delete</button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageProducts;