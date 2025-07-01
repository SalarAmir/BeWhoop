import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Layout Component
import MainLayout from './components/layout/MainLayout';

// Page Components
import SignUp from './pages/SignUp';
import Onboarding from './pages/Onboarding';
import Dashboard from './pages/Dashboard';
import CreateEvent from './pages/CreateEvent';
import EventTickets from './pages/EventTickets';
import BankDetails from './pages/BankDetails';
import VendorMarketplace from './pages/VendorMarketplace';
import VendorProfile from './pages/VendorProfile';
import PlaceholderPage from './pages/PlaceholderPage';

const App = () => {
    return (
        <Routes>
            {/* Routes without the main layout */}
            <Route path="/signup" element={<SignUp />} />
            <Route path="/onboarding" element={<Onboarding />} />

            {/* Routes with the main layout */}
            <Route path="/" element={<MainLayout />}>
                <Route index element={<Dashboard />} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="create-event" element={<CreateEvent />} />
                <Route path="event-tickets" element={<EventTickets />} />
                <Route path="bank-details" element={<BankDetails />} />
                <Route path="vendor-marketplace" element={<VendorMarketplace />} />
                <Route path="vendor-profile" element={<VendorProfile />} />
                <Route path="profile" element={<PlaceholderPage title="Profile" />} />
                <Route path="messages" element={<PlaceholderPage title="Messages" />} />
                <Route path="settings" element={<PlaceholderPage title="Settings" />} />
            </Route>
        </Routes>
    );
};

export default App;
