// Dropdowns.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Dropdowns = () => {
    return (
        <div className="bg-gray-100 py-2">
            <div className="container mx-auto">
                <div className="grid grid-cols-5 text-center">
                    <div><Link to="/groceries" className="text-gray-700 hover:text-blue-500">Groceries</Link></div>
                    <div><Link to="/home-lifestyle" className="text-gray-700 hover:text-blue-500">Home & Lifestyle</Link></div>
                    <div><Link to="/electronics" className="text-gray-700 hover:text-blue-500">Electronics</Link></div>
                    <div><Link to="/fashion" className="text-gray-700 hover:text-blue-500">Fashion</Link></div>
                    <div><Link to="/all-categories" className="text-gray-700 hover:text-blue-500">All Categories</Link></div>
                </div>
            </div>
        </div>
    );
}

export default Dropdowns;
