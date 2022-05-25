import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyOrders = () => {

    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);

    useEffect(() => {
        if (user) {
            const getOrders = async () => {
                const email = user.email;
                const url = `http://localhost:5000/order?email=${email}`;
                const { data } = await axios.get(url);
                setOrders(data);
            }
            getOrders();
        }
    }, [user])

    return (
        <div>
            <h2 className='mt-2 mb-2'>Your orders here</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) => <tr className="hover">
                                <th>{index + 1}</th>
                                <td>{user.displayName}</td>
                                <td>{order.name}</td>
                                <td>Purple</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;