import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InputField from '../../components/common/InputField';
import SocialButton from '../../components/common/SocialButton';
import OtpModal from '../../components/common/OtpModal';

const SignUp = () => {
    const [showOtpModal, setShowOtpModal] = useState(false);
    const navigate = useNavigate();

    const handleSignUp = (e) => {
        e.preventDefault();
        setShowOtpModal(true);
    };
    
    const handleValidateOtp = () => {
        setShowOtpModal(false);
        navigate('/onboarding');
    };

    return (
        <div className="flex min-h-screen">
            <div className="w-1/2 bg-red-600 text-white p-12 flex-col justify-center items-center hidden lg:flex" style={{backgroundImage: 'url(https://placehold.co/800x1200/c53030/ffffff?text=Event+Images)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                {/* Left side content can be added here if needed */}
            </div>
            <div className="w-full lg:w-1/2 bg-white flex items-center justify-center p-8 sm:p-12">
                <div className="w-full max-w-md">
                    <h2 className="text-3xl font-bold text-gray-800">Join as an Event Host</h2>
                    <p className="text-gray-500 mt-2 mb-8">Create a account to join as an host</p>
                    <form onSubmit={handleSignUp}>
                        <div className="space-y-4">
                            <InputField label="First Name" type="text" placeholder="Example: Henna" />
                            <InputField label="Last Name" type="text" placeholder="Example: Adum" />
                            <InputField label="Email" type="email" placeholder="Henna_Adum@gmail.com" />
                            <InputField label="Password" type="password" placeholder="••••••••" forgotPassword />
                        </div>
                        <div className="flex items-center my-6">
                            <input id="terms" type="checkbox" className="h-4 w-4 text-red-600 border-gray-300 rounded focus:ring-red-500" />
                            <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">I accept terms and conditions</label>
                        </div>
                        <button type="submit" className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors">Sign Up</button>
                    </form>
                    <p className="text-center text-sm text-gray-500 my-6">Already have an account? <a href="#" onClick={(e) => { e.preventDefault(); navigate('/signup'); }} className="font-semibold text-red-600 hover:underline">Signup</a></p>
                    <div className="flex items-center my-6"><div className="flex-grow border-t border-gray-300"></div><span className="mx-4 text-gray-400 text-sm">or</span><div className="flex-grow border-t border-gray-300"></div></div>
                    <p className="text-center text-sm text-gray-500 mb-4">Login with Social Apps</p>
                    <div className="flex justify-center space-x-4">
                        <SocialButton type="facebook" color="bg-blue-800" />
                        <SocialButton type="google" color="bg-red-500" />
                        <SocialButton type="whatsapp" color="bg-green-500" />
                    </div>
                </div>
            </div>
            {showOtpModal && <OtpModal onValidate={handleValidateOtp} onClose={() => setShowOtpModal(false)} />}
        </div>
    );
};

export default SignUp;