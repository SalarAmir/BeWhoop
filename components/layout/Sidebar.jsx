import React from 'react';
import { useLocation } from 'react-router-dom';
import { LayoutDashboard, User, CalendarPlus, Building, MessageSquare, Settings, LogOut, X } from 'lucide-react';
import NavItem from './NavItem';

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }) => {
    const location = useLocation();

    const navItems = [
        { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
        { icon: User, label: 'Profile', path: '/profile' },
        { icon: CalendarPlus, label: 'Create an Event', path: '/create-event' },
        { icon: Building, label: 'Vendor Marketplace', path: '/vendor-marketplace' },
        { icon: MessageSquare, label: 'Messages', path: '/messages' },
    ];

    const bottomNavItems = [
        { icon: Settings, label: 'Settings', path: '/settings' },
        { icon: LogOut, label: 'Logout', path: '/signup' }, // Example path
    ];

    return (
        <>
            {isSidebarOpen && <div className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden" onClick={() => setIsSidebarOpen(false)}></div>}
            <aside className={`fixed top-0 left-0 h-full bg-white text-gray-700 w-64 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 transition-transform duration-300 ease-in-out z-30 flex flex-col border-r border-gray-200`}>
                <div className="flex items-center justify-between p-6">
                    <h1 className="text-2xl font-bold text-red-600">Bewhoop</h1>
                    <button onClick={() => setIsSidebarOpen(false)} className="lg:hidden text-gray-500"><X size={24} /></button>
                </div>
                <nav className="flex-1 px-4">
                    <ul>{navItems.map((item) => <NavItem key={item.label} {...item} active={location.pathname === item.path} />)}</ul>
                </nav>
                <div className="px-4 pb-4">
                    <ul>{bottomNavItems.map((item) => <NavItem key={item.label} {...item} active={location.pathname === item.path} />)}</ul>
                </div>
            </aside>
        </>
    );
};

export default Sidebar;