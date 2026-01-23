import React, { useEffect, useState } from 'react';
import { SOCIAL_LINKS } from '../constants';

const SocialFloater: React.FC = () => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const footer = document.querySelector('footer');
            if (!footer) return;

            const footerRect = footer.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            // If footer enters the viewport, hide the floater
            if (footerRect.top < windowHeight + 50) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
        };

        window.addEventListener('scroll', handleScroll);
        // Trigger once on mount
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    if (!isVisible) return null;

    return (
        <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-4 transition-opacity duration-300">
            {SOCIAL_LINKS.map((link, index) => (
                <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.name}
                    className="w-12 h-12 bg-white dark:bg-forest-800 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 group hover:shadow-gold-400/20 border border-forest-100 dark:border-white/5"
                >
                    {link.isSvg ? (
                        <svg className={`w-6 h-6 ${link.colorClass || ''}`} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            {link.name === "Instagram" ? (
                                <>
                                    <defs>
                                        <linearGradient id="ig-gradient-float" x1="0%" x2="100%" y1="0%" y2="100%">
                                            <stop offset="0%" style={{ stopColor: '#833AB4', stopOpacity: 1 }} />
                                            <stop offset="50%" style={{ stopColor: '#FD1D1D', stopOpacity: 1 }} />
                                            <stop offset="100%" style={{ stopColor: '#FCAF45', stopOpacity: 1 }} />
                                        </linearGradient>
                                    </defs>
                                    <path d={link.svgPath} fill="url(#ig-gradient-float)" />
                                </>
                            ) : (
                                <path d={link.svgPath} />
                            )}
                        </svg>
                    ) : (
                        <span className={`material-icons text-forest-700 dark:text-white/80`}>{link.icon}</span>
                    )}
                </a>
            ))}
        </div>
    );
};

export default SocialFloater;