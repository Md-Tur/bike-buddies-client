import React, { useEffect, useState } from 'react';

const ManageAllOrders = () => {

    const [orders, setOrders] = useState([]);
    const [delivered, setDelivered] = useState(false);
    const handelDelivered = () => {
        setDelivered(true)
    }
    useEffect(() => {
        fetch('https://polar-coast-87590.herokuapp.com/order')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
    return (
        <div>
            <h2>All Product</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product Name</th>
                            <th>Custome Name</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) => <tr className="hover">
                                <th>{index + 1}</th>
                                <td>{order.product}</td>
                                <td>{order.name}</td>
                                <td>{order.price}</td>
                                <td>{!delivered ? 'Pending' : 'Delivered'}</td>
                                <td>
                                    <button className="btn btn-xs ml-2" onClick={handelDelivered}>Accept</button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageAllOrders;