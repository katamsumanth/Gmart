// Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

const Navbar = () => {
    return (
        <nav className="bg-blue-800 text-white flex items-center justify-between p-4">
            <Link className="flex items-center" to="/">
                <img src="galaxy_mart_logo.png" alt="Galaxy Mart Logo" width="30" height="30" className="mr-2" />
                <span className="text-2xl font-bold">Gmart</span>
            </Link>
            <div className="flex items-center">
                <form className="flex mx-auto">
                    <input className="form-input mr-2 px-3 py-2 border border-gray-300 rounded" type="search" placeholder="Search for products" aria-label="Search" />
                    <button className="bg-transparent border border-white text-white px-4 py-2 rounded hover:bg-white hover:text-blue-800 transition">Search</button>
                </form>
                <Link to="/cart" className="ml-2">
                    <FaShoppingCart className="text-white text-2xl" />
                </Link>
                <Link to="/Signin" className="ml-2 bg-transparent border border-white text-white px-4 py-2 rounded hover:bg-white hover:text-blue-800 transition">Sign In</Link>
            </div>
        </nav>
    );
}

export default Navbar;
