import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.png';

const Footer = () => {
    return (
        <footer className="mt-5 p-10 bg-white text-base-content">
            <div className="footer">
                <div>
                    <span className="normal-case text-xl"><img src={logo} alt="" className="h-24 w-45" />Bike Buddies</span>
                </div>
                <div>
                    <span className="footer-title">Services</span>
                    <Link to="/" className="link link-hover">Branding</Link>
                    <Link to="/" className="link link-hover">Design</Link>
                    <Link to="/" className="link link-hover">Marketing</Link>
                    <Link to="/" className="link link-hover">Advertisement</Link>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <Link to="/" className="link link-hover">About us</Link>
                    <Link to="/" className="link link-hover">Contact</Link>
                    <Link to="/" className="link link-hover">Jobs</Link>
                    <Link to="/" className="link link-hover">Press kit</Link>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <Link to="/" className="link link-hover">Terms of use</Link>
                    <Link to="/" className="link link-hover">Privacy policy</Link>
                    <Link to="/" className="link link-hover">Cookie policy</Link>
                </div>
            </div>
            <p class="text-center text-xs mt-10">
                &copy;2022 Bike Buddies. All rights reserved.
            </p>
        </footer>
    );
};

export default Footer;