import React from 'react';
import { Link } from 'react-router-dom';

const NavItem = ({ icon: Icon, label, path, active = false }) => (
    <li className="mb-2">
        <Link to={path} className={`w-full flex items-center p-3 rounded-lg transition-colors text-left ${active ? 'bg-red-500 text-white shadow-md' : 'hover:bg-gray-100'}`}>
            <Icon size={20} className="mr-3" />
            <span>{label}</span>
        </Link>
    </li>
);

export default NavItem;