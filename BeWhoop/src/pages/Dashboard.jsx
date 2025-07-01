import React from 'react';
import { Search, Filter, RefreshCw } from 'lucide-react';
// CORRECTED PATHS
import AnalyticsChart from '../components/common/AnalyticsChart';
import StatCard from '../components/common/StatCard';
import { dashboardEvents } from '../data/mockData';

const Dashboard = () => (
    <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-4">
                <select className="bg-white border border-gray-300 rounded-lg px-4 py-2 font-semibold">
                    <option>Carnival Festival</option>
                </select>
            </div>
            <div className="flex items-center gap-4">
                 <button className="flex items-center gap-2 bg-white border border-gray-300 rounded-lg px-4 py-2"><Filter size={16}/> Today</button>
                 <select className="bg-white border border-gray-300 rounded-lg px-4 py-2"><option>14 Feb 2019</option></select>
                 <button className="flex items-center gap-2 text-red-500 font-semibold"><RefreshCw size={16}/> Reset Filter</button>
            </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
                <AnalyticsChart />
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center justify-center text-center">
                <p className="text-gray-500">Total Event views</p>
                <p className="text-5xl font-bold text-gray-800 my-4">10,000</p>
            </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6">
            <StatCard label="Click through rate" value="45%" />
            <StatCard label="Conversion rate" value="10%" />
            <StatCard label="Attendees" value="10,000" />
            <StatCard label="Ticket Sold" value="456" />
        </div>

        <div className="mt-8 bg-white p-6 rounded-xl shadow-md">
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-gray-800">Events</h3>
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                    <input type="text" placeholder="Search Events" className="bg-gray-100 rounded-lg pl-10 pr-4 py-2 w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-red-400" />
                </div>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full text-left">
                    <thead>
                        <tr className="text-sm text-gray-500 border-b">
                            <th className="py-3 px-2">EVENT NAME</th>
                            <th className="py-3 px-2">EVENT LOCATION</th>
                            <th className="py-3 px-2">ATTENDEES</th>
                            <th className="py-3 px-2">DATE</th>
                            <th className="py-3 px-2">ANALYTICS</th>
                            <th className="py-3 px-2">STATUS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dashboardEvents.map((event, i) => (
                            <tr key={i} className="border-b last:border-0">
                                <td className="py-4 px-2 font-semibold">{event.name}</td>
                                <td className="py-4 px-2">{event.location}</td>
                                <td className="py-4 px-2">{event.attendees}</td>
                                <td className="py-4 px-2">{event.date}</td>
                                <td className="py-4 px-2"><a href="#" className="text-red-500 font-semibold hover:underline">view Analytics</a></td>
                                <td className="py-4 px-2">
                                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${event.status === 'Published' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'}`}>
                                        {event.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="flex justify-between items-center mt-4 text-sm">
                <button className="font-semibold hover:text-red-500">&lt; Prev.</button>
                <button className="font-semibold hover:text-red-500">Next &gt;</button>
            </div>
        </div>
    </div>
);

export default Dashboard;
