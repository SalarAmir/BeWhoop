import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { X, Plus } from 'lucide-react';

const Onboarding = () => {
    const [tags, setTags] = useState(['Art Event', 'Wedding', 'Exhibition']);
    const navigate = useNavigate();
    
    return (
        <div className="flex min-h-screen">
            <div className="w-1/2 bg-red-600 text-white p-12 flex-col justify-center items-center hidden lg:flex" style={{backgroundImage: 'url(https://placehold.co/800x1200/c53030/ffffff?text=Marketplace)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                <div className="text-center">
                    <h2 className="text-4xl font-bold mb-4">MarketPlace</h2>
                    <p className="max-w-md">Reference site about Lorem Ipsum, giving information on its origins, as well as a random</p>
                </div>
            </div>
            <div className="w-full lg:w-1/2 bg-white flex items-center justify-center p-8 sm:p-12">
                <div className="w-full max-w-lg">
                    <h2 className="text-3xl font-bold text-gray-800">Let's set things up for you.</h2>
                    <p className="text-gray-500 mt-2 mb-8">Share your vision, and we'll help make it real.</p>
                    <div className="space-y-6">
                        {/* Form elements remain the same */}
                        <div>
                            <label className="block text-lg font-semibold text-gray-700 mb-2">Your events frequency</label>
                            <input type="text" placeholder="Enter here" className="w-full px-4 py-3 bg-gray-100 border-gray-200 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400" />
                        </div>
                        <div>
                            <label className="block text-lg font-semibold text-gray-700 mb-2">Average Size of event</label>
                            <select className="w-full px-4 py-3 bg-gray-100 border-gray-200 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400 appearance-none">
                                <option>100</option>
                                <option>200</option>
                                <option>500+</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-lg font-semibold text-gray-700 mb-2">Type of Event</label>
                            <div className="w-full px-4 py-3 bg-gray-100 border-gray-200 border rounded-lg">
                                <p className="text-gray-400 mb-2">Type and press [,] to add events</p>
                                <div className="flex flex-wrap gap-2">
                                    {tags.map(tag => (
                                        <span key={tag} className="bg-red-500 text-white text-sm font-medium px-3 py-1 rounded-md flex items-center">
                                            {tag}
                                            <button className="ml-2 text-white opacity-75 hover:opacity-100"><X size={14} /></button>
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                         <div>
                            <div className="flex flex-wrap gap-2">
                                {['Lifestyle', 'Cultural', 'Comedy'].map(tag => (
                                    <button key={tag} className="bg-gray-200 text-gray-700 text-sm font-medium px-3 py-1 rounded-full flex items-center hover:bg-gray-300">
                                        {tag}
                                        <Plus size={14} className="ml-1" />
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="mt-10 flex justify-end">
                        <button onClick={() => navigate('/dashboard')} className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors">Next</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Onboarding;