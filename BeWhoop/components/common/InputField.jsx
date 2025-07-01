import React from 'react';

const InputField = ({ label, type, placeholder, forgotPassword = false }) => (
    <div>
        <div className="flex justify-between items-center">
            <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
            {forgotPassword && <a href="#" className="text-sm text-red-600 hover:underline">Forget Password?</a>}
        </div>
        <input type={type} placeholder={placeholder} className="w-full px-4 py-3 bg-gray-100 border-gray-200 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400" />
    </div>
);

export default InputField;
