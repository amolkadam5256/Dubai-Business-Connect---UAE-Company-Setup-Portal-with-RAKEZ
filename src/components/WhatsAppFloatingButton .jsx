// src/components/WhatsAppFloatingButton.jsx
import React from 'react';

const WhatsAppFloatingButton = () => {
    return (
        <a
            href="https://wa.me/971505761914"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-20 sm:bottom-20 right-4 sm:right-6 z-50 flex items-center bg-transparent  rounded-full  shadow-lg hover:scale-105 hover:shadow-xl transition border border-green-200"
        >
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-green-500 text-white text-lg">
                <i className="fab fa-whatsapp"></i>
            </div>
            <div className="hidden sm:block text-left">
            {/* /    <p className="text-sm font-semibold text-[#111111] leading-tight">Chat on WhatsApp</p> */}
            </div>
        </a>
    );
};

export default WhatsAppFloatingButton;
