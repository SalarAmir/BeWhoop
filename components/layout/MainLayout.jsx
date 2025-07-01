import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';

const MainLayout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <div className="bg-gray-50 min-h-screen font-sans">
            <div className="flex">
                <Sidebar 
                    isSidebarOpen={isSidebarOpen} 
                    setIsSidebarOpen={setIsSidebarOpen} 
                />
                <div className="flex-1 flex flex-col lg:ml-64">
                    <Header onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} />
                    <main className="flex-1 p-4 sm:p-6 lg:p-8">
                        <Outlet /> {/* Child routes will render here */}
                    </main>
                </div>
            </div>
        </div>
    );
};

export default MainLayout;