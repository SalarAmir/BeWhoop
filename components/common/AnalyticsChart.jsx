import React from 'react';

const AnalyticsChart = () => (
    <div className="bg-white p-4 rounded-xl shadow-md h-80 flex flex-col">
        <div className="flex-grow">
            <svg width="100%" height="100%" viewBox="0 0 500 250" preserveAspectRatio="none">
                <path d="M0,180 C50,100 80,120 120,150 S180,200 220,160 S280,50 320,80 S380,150 420,120 S480,100 500,130" fill="none" stroke="#f87171" strokeWidth="2"/>
                <line x1="0" y1="240" x2="500" y2="240" stroke="#e5e7eb" strokeWidth="1"/>
                <text x="0" y="250" fill="#9ca3af" fontSize="10">2015</text>
                <text x="75" y="250" fill="#9ca3af" fontSize="10">2016</text>
                <text x="150" y="250" fill="#9ca3af" fontSize="10">2017</text>
                <text x="225" y="250" fill="#9ca3af" fontSize="10">2018</text>
                <text x="300" y="250" fill="#9ca3af" fontSize="10">2019</text>
                <text x="375" y="250" fill="#9ca3af" fontSize="10">2020</text>
                <text x="450" y="250" fill="#9ca3af" fontSize="10">2021</text>
            </svg>
        </div>
    </div>
);

export default AnalyticsChart;