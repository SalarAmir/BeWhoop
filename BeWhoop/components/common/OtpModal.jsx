import React from 'react';

const OtpModal = ({ onClose, onValidate }) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={onClose}>
        <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-10 text-center w-full max-w-md m-4" onClick={e => e.stopPropagation()}>
            <h2 className="text-2xl font-bold text-gray-800">Please enter OTP password to verify your account</h2>
            <p className="text-gray-500 mt-2 mb-6">A one-Time Password sent to your Email</p>
            <input type="text" placeholder="• • • • • •" className="w-full tracking-[1em] text-center bg-gray-100 border-gray-200 border rounded-lg py-3 mb-6 focus:outline-none focus:ring-2 focus:ring-red-400"/>
            <button onClick={onValidate} className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors">Validate</button>
        </div>
    </div>
);

export default OtpModal;
