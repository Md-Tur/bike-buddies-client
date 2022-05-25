import React from 'react';
import { toast } from 'react-toastify';

const UsersRow = ({ user, refetch }) => {

    const { displayName, email, role, index } = user;

    const makeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                refetch();
                toast.success('Made Admin Successfully');
            })
    }

    return (
        <tr className="hover">
            <th>{index + 1}</th>
            <td>{displayName}</td>
            <td>{email}</td>
            <td>{
                role !== 'admin' && <button onClick={makeAdmin} className="btn btn-xs">Make Admin</button>
            }</td>
            <td><button className="btn btn-xs">Remove User</button></td>
        </tr>
    );
};

export default UsersRow;