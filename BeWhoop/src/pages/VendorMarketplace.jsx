import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';
// CORRECTED PATH: Using the '@' alias for a robust path.
import { vendors } from '@/data/mockData';
const VendorMarketplace = () => {
    const navigate = useNavigate();

    return (
        <div className="max-w-7xl mx-auto">
            <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 sm:mb-0">Vendor Marketplace</h2>
                <div className="relative w-full sm:w-auto">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                    <input type="text" placeholder="Search by vendor name" className="bg-white rounded-full pl-12 pr-4 py-3 w-full sm:w-80 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-400" />
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {vendors.map((vendor, i) => (
                    <div key={i} className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-xl transition-shadow cursor-pointer" onClick={() => navigate('/vendor-profile')}>
                        <img src={vendor.avatar} alt={vendor.name} className="w-24 h-24 rounded-full mx-auto mb-4" />
                        <h4 className="text-xl font-bold text-gray-800 flex items-center justify-center">
                            {vendor.name} 
                            <span className="ml-2 w-4 h-4 bg-orange-500 rounded-full text-white flex items-center justify-center text-xs">✓</span>
                        </h4>
                        <p className="text-gray-500">{vendor.role}</p>
                        <p className="font-semibold my-2">{vendor.location}</p>
                        <p className="text-red-500 font-bold text-lg">Price Range : {vendor.priceRange}</p>
                        <div className="flex flex-wrap justify-center gap-2 mt-4">
                            {vendor.tags.map(tag => (
                                <span key={tag} className="bg-orange-100 text-orange-700 text-sm font-medium px-3 py-1 rounded-full">{tag}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default VendorMarketplace;