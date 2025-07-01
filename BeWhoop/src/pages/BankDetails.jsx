import React from 'react';

const BankDetails = () => (
    <div className="max-w-4xl mx-auto">
        <div className="bg-white p-8 rounded-xl shadow-md">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Bank details</h3>
            <div className="space-y-4">
                <select className="w-full px-4 py-3 bg-gray-100 border-gray-200 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400 appearance-none">
                    <option>Select Bank Account</option>
                </select>
                <input type="text" placeholder="Account number" className="w-full px-4 py-3 bg-gray-100 border-gray-200 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400" />
                <input type="text" placeholder="Account name" className="w-full px-4 py-3 bg-gray-100 border-gray-200 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400" />
                <button className="w-full bg-gray-400 text-white py-3 rounded-lg font-semibold hover:bg-gray-500 transition-colors">Add Account</button>
            </div>
        </div>
        <div className="flex items-center my-6">
            <input id="admit" type="checkbox" className="h-4 w-4 text-red-600 border-gray-300 rounded focus:ring-red-500" />
            <label htmlFor="admit" className="ml-2 block text-sm text-gray-900">Admit that it is in review and will be published in 1 month of time</label>
        </div>
        <div className="mt-8 flex justify-end"><button className="bg-red-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-600 transition-colors shadow-lg">Publish an event</button></div>
    </div>
);

export default BankDetails;