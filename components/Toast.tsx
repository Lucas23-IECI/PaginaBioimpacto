import React, { useEffect } from 'react';

interface ToastProps {
    message: string;
    isVisible: boolean;
    onClose: () => void;
}

const Toast: React.FC<ToastProps> = ({ message, isVisible, onClose }) => {
    useEffect(() => {
        if (isVisible) {
            const timer = setTimeout(() => {
                onClose();
            }, 4000);
            return () => clearTimeout(timer);
        }
    }, [isVisible, onClose]);

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] w-full max-w-sm px-4 pointer-events-none">
            <div className="bg-white dark:bg-forest-800 border-l-4 border-gold-400 shadow-2xl rounded-r-sm p-4 flex items-center gap-4 pointer-events-auto transform transition-all duration-300 animate-[slideUp_0.3s_ease-out]">
                <div className="bg-forest-50 dark:bg-forest-900 rounded-full p-2 flex-shrink-0 shadow-inner">
                    <span className="material-icons text-gold-500 text-xl">check</span>
                </div>
                <div className="flex-1">
                    <p className="text-forest-900 dark:text-white font-medium text-sm leading-snug">
                        {message}
                    </p>
                </div>
                <button 
                    onClick={onClose}
                    className="text-forest-400 hover:text-forest-600 dark:hover:text-white transition-colors p-1"
                    aria-label="Cerrar notificación"
                >
                    <span className="material-icons text-sm">close</span>
                </button>
            </div>
             <style>{`
                @keyframes slideUp {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `}</style>
        </div>
    );
};

export default Toast;