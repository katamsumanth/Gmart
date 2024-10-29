// SignIn.jsx
import React from 'react';

const SignIn = () => {
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission
        // Handle sign-in logic here (e.g., API call)
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-lg rounded-lg p-6 w-96">
                <h2 className="text-2xl font-bold text-center mb-6">Sign In to Gmart</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
                        <input
                            type="email"
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-200 focus:border-blue-500 p-2"
                            id="email"
                            placeholder="Enter email"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-200 focus:border-blue-500 p-2"
                            id="password"
                            placeholder="Password"
                            required
                        />
                    </div>
                    <div className="flex items-center mb-4">
                        <input
                            type="checkbox"
                            className="mr-2 leading-tight"
                            id="rememberMe"
                        />
                        <label className="text-sm text-gray-600" htmlFor="rememberMe">Remember me</label>
                    </div>
                    <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition">Sign In</button>
                    <div className="text-center mt-3">
                        <a href="#" className="text-blue-500 hover:text-blue-700">Forgot password?</a>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignIn;
