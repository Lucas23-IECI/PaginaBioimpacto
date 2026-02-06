import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import SocialFloater from './SocialFloater';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const { pathname, hash } = useLocation();

    const isSticky = pathname === '/';

    useEffect(() => {
        const html = document.documentElement;

        // 1. Disable smooth scrolling globally to prevent "drifting" between pages
        html.style.scrollBehavior = 'auto';

        if (hash) {
            // 2a. If there is a hash (e.g. #lombrices), verify element exists
            // We use a small timeout to allow React to render the new page content first
            setTimeout(() => {
                const id = hash.replace('#', '');
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }, 100);
        } else {
            // 2b. If no hash, force instant scroll to top
            window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
        }

        // 3. Re-enable smooth scrolling for local interaction after the transition settles
        const timer = setTimeout(() => {
            html.style.scrollBehavior = 'smooth';
        }, 500);

        return () => clearTimeout(timer);
    }, [pathname, hash]);

    // Dynamic Title & Favicon handlers
    useEffect(() => {
        const originalTitle = document.title;

        // Array of fun messages when user leaves the tab
        const awayMessages = [
            "     ¡Te extrañamos! 🌿     ",
            "     ¡Vuelve pronto! 🪱     ",
            "  Las lombrices te esperan 🐛  ",
            "      ¡No te vayas! 🌱      ",
            "  Transformando residuos... 🔄  ",
            "    ¡Hola de nuevo! 🌿    ",
            "       ¿Ya te vas? 😢       ",
            "  ¡El compost te necesita! 🍂  ",
            "    Bio-extrañándote 💚    ",
            "   ¡Regresa al verde! 🌿   ",
            "    ¿Volverás pronto? 🪴    ",
            "  ¡La naturaleza te llama! 🌍  ",
        ];

        const handleVisibilityChange = () => {
            if (document.hidden) {
                // Pick a random message
                const randomMessage = awayMessages[Math.floor(Math.random() * awayMessages.length)];
                document.title = randomMessage;
            } else {
                document.title = originalTitle;
            }
        };

        document.addEventListener('visibilitychange', handleVisibilityChange);
        return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
    }, []);

    return (
        <div className="flex flex-col min-h-screen bg-forest-50 dark:bg-forest-900 transition-colors duration-300">
            <Navbar isSticky={isSticky} />
            <SocialFloater />
            <main className="flex-grow">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;