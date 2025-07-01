import React from 'react';

const VendorProfile = () => (
    <div className="max-w-4xl mx-auto text-center">
        <img src="https://placehold.co/150x50/333/fff?text=Reign" alt="Reign Logo" className="mx-auto mb-4" />
        <h2 className="text-3xl font-bold text-gray-800 flex items-center justify-center">
            Reign Organizer
            <span className="ml-2 w-5 h-5 bg-orange-500 rounded-full text-white flex items-center justify-center text-sm">✓</span>
        </h2>
        <p className="text-gray-500 mb-6">Event Organizer</p>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.
            Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <img src="https://placehold.co/400x400/718096/ffffff?text=Event+Photo+1" className="rounded-xl w-full h-auto object-cover" />
            <img src="https://placehold.co/400x400/a0aec0/ffffff?text=Event+Photo+2" className="rounded-xl w-full h-auto object-cover" />
            <img src="https://placehold.co/400x400/cbd5e0/ffffff?text=Event+Photo+3" className="rounded-xl w-full h-auto object-cover" />
        </div>
    </div>
);

export default VendorProfile;