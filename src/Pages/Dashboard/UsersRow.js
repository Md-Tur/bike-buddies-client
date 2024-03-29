import React from 'react';
import { toast } from 'react-toastify';

const UsersRow = ({ user, index, refetch }) => {

    const { email, role } = user;

    const makeAdmin = () => {
        fetch(`https://polar-coast-87590.herokuapp.com/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('Unable to make admin');
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success('Made Admin Successfully');
                }
            })
    }

    return (
        <tr className="hover">
            <th>{index + 1}</th>
            <td>{email}</td>
            <td>{
                role !== 'admin' && <button onClick={makeAdmin} className="btn btn-xs">Make Admin</button>
            }</td>
            <td><button className="btn btn-xs">Remove User</button></td>
        </tr>
    );
};

export default UsersRow;