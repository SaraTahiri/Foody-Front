import React from 'react';
import { Link } from 'react-router-dom';

const Explore = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-4xl font-bold text-gray-800 mb-8">Welcome to Explore Page</h1>
            <ul className="space-y-4">
                <li>
                    <Link to="/dashboard" className="text-lg text-blue-500 hover:text-blue-700">Go to Dashboard</Link>
                </li>
                <li>
                    <Link to="/restaurantprofile" className="text-lg text-blue-500 hover:text-blue-700">Go to Restaurant Profile</Link>
                </li>
            </ul>
        </div>
    );
};

export default Explore;