import React from 'react';
import { Menu } from 'lucide-react';

const Header = ({ onMenuClick }) => {
    return (
        <header className="bg-white shadow-sm border-b border-gray-200 px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <button
                        onClick={onMenuClick}
                        className="lg:hidden p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500"
                    >
                        <Menu size={24} />
                    </button>
                    <h1 className="ml-4 lg:ml-0 text-xl font-semibold text-gray-900">
                        BeWhoop Dashboard
                    </h1>
                </div>
                
                <div className="flex items-center space-x-4">
                    <div className="hidden md:block">
                        <span className="text-sm text-gray-500">Welcome back!</span>
                    </div>
                    <div className="h-8 w-8 rounded-full bg-red-500 flex items-center justify-center">
                        <span className="text-white text-sm font-medium">U</span>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
