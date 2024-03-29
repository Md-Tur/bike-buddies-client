import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../images/logo.png';
import Loading from '../Loading/Loading';

const Navbar = () => {

    const [user, loading] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
        localStorage.removeItem('accessToken');
    };

    const menuItems =
        <>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/purchase">Purchase</Link></li>
            {
                user && <li><Link to="/dashboard">Dashboard</Link></li>
            }
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/aboutUs">About US</Link></li>
            <li><Link to="/contactUs">Contact US</Link></li>
            <li><Link to="/carrier">Carrier</Link></li>
            <li><Link to="/premium">Premium</Link></li>
            <li>
                {user ? <button className="btn btn-ghost" onClick={logout}>Sign Out</button> : <Link to="/login">Login</Link>}
            </li>
        </>

    if (loading) {
        return <Loading></Loading>
    }

    return (
        <div className="mt-3 mb-3 navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>

                <Link to="/" className="btn btn-ghost normal-case text-xl">
                    <img className="h-12 w-25" src={logo} alt="" /> Bike Buddies
                </Link>

            </div>

            <div className="navbar-center hidden lg:flex navbar-end">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>

            <div className="navbar-end">
                <label tabIndex="1" htmlFor="dashboard-sidebar" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
            </div>
        </div>
    );
};

export default Navbar;