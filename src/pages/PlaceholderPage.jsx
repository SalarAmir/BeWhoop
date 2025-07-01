import React from 'react';

const PlaceholderPage = ({ title }) => (
    <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">{title}</h2>
        <div className="bg-white p-10 rounded-xl shadow-md text-center text-gray-500">
            <p>This is the {title} page. Content will be added here.</p>
        </div>
    </div>
);

export default PlaceholderPage;