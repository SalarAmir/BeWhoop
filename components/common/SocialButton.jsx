import React from 'react';

const SocialButton = ({ type, color }) => {
    const icons = {
        facebook: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v2.385z"/></svg>,
        google: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M7 11v2.4h3.97c-.16 1.02-1.2 3.02-3.97 3.02-2.38 0-4.32-1.98-4.32-4.42s1.94-4.42 4.32-4.42c1.36 0 2.27.58 2.79 1.08l1.9-1.83C11.47 5.69 9.42 5 7 5c-3.87 0-7 3.13-7 7s3.13 7 7 7c4.17 0 6.69-2.91 6.69-6.89 0-.45-.04-.89-.11-1.31H7z"/></svg>,
        whatsapp: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99 0-3.903-.52-5.687-1.475L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.886-.001 2.267.655 4.398 1.803 6.243l.494.892-1.196 4.354 4.409-1.176.849.482z"/></svg>
    };

    return (
        <button className={`w-12 h-12 rounded-lg text-white font-bold text-xl flex items-center justify-center ${color}`}>
            {icons[type]}
        </button>
    );
};

export default SocialButton;
