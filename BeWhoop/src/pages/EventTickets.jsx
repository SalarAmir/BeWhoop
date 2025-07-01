import React, { useState } from 'react';
import { Ticket, Edit, Trash2, Plus } from 'lucide-react';

const EventTickets = () => {
    const [tickets, setTickets] = useState([
        { tier: 'Tickets', price: 'PKR 1500-5000', quantity: '256 tickets' },
        { tier: 'Tickets', price: 'PKR 1500-5000', quantity: '256 tickets' },
        { tier: 'Tickets', price: 'PKR 1500-5000', quantity: '256 tickets' },
    ]);

    return (
        <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-md">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Event Tickets</h3>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                        <input type="text" placeholder="Ticket Tier" className="md:col-span-1 bg-gray-100 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-400" />
                        <input type="text" placeholder="Quantity" className="md:col-span-1 bg-gray-100 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-400" />
                        <input type="text" placeholder="Price" className="md:col-span-1 bg-gray-100 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-400" />
                        <button className="md:col-span-1 bg-red-500 text-white py-3 rounded-lg font-semibold hover:bg-red-600 transition-colors">Add</button>
                    </div>
                    <div className="space-y-3">
                        {tickets.map((ticket, i) => (
                            <div key={i} className="bg-red-50 border border-red-200 p-4 rounded-lg flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <Ticket className="text-red-500" size={24} />
                                    <span className="font-semibold text-gray-700">{ticket.tier}</span>
                                    <span className="text-gray-500">{ticket.price}</span>
                                    <span className="text-gray-500">{ticket.quantity}</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <button className="text-gray-500 hover:text-red-500"><Edit size={20} /></button>
                                    <button className="text-gray-500 hover:text-red-500"><Trash2 size={20} /></button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md flex justify-between items-center">
                    <div><h3 className="text-xl font-semibold text-gray-800">Event Description</h3></div>
                    <button className="bg-red-100 text-red-500 rounded-full p-3 hover:bg-red-200 transition-colors"><Plus size={24} /></button>
                </div>
            </div>
            <div className="mt-8 flex justify-end"><button className="bg-red-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-600 transition-colors shadow-lg">Next</button></div>
        </div>
    );
};

export default EventTickets;