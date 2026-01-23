import React, { useState, useRef, useEffect } from 'react';
import { NavLink as RouterNavLink, useLocation, useNavigate } from 'react-router-dom';
import { NAV_LINKS, LOGO_URL, SEARCH_INDEX } from '../constants';
import { useTheme } from '../context/ThemeContext';
import { SearchItem } from '../types';

interface NavbarProps {
    isSticky: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isSticky }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState<SearchItem[]>([]);
    
    const searchRef = useRef<HTMLDivElement>(null);
    const location = useLocation();
    const navigate = useNavigate();
    const { theme, toggleTheme } = useTheme();

    const positionClass = isSticky ? 'fixed' : 'absolute';
    const bgClass = 'bg-white/90 dark:bg-forest-900/95 backdrop-blur-lg border-b border-forest-100 dark:border-white/5 shadow-sm';
    const textColorClass = 'text-forest-900 dark:text-white';
    const navLinkBaseClass = 'text-forest-700 dark:text-white/70 hover:text-gold-500 dark:hover:text-gold-500';

    const isActive = (path: string) => location.pathname === path;

    // Helper to get icon based on category
    const getCategoryIcon = (category: string) => {
        switch(category) {
            case 'Producto': return 'inventory_2';
            case 'Servicio': return 'engineering';
            case 'FAQ': return 'help_outline';
            case 'Testimonio': return 'format_quote';
            default: return 'link';
        }
    };

    // Handle Click Outside to close search
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            // Critical Fix: Do not reset search query if mobile menu is open. 
            // This prevents "mousedown" on mobile results from clearing the query 
            // (via this handler) before the "click" event can fire on the button.
            if (isMenuOpen) return;

            if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
                // Only close if it was actually open to avoid unnecessary state updates
                setIsSearchOpen(prev => {
                    if (prev) return false;
                    return prev;
                });
                
                // Only clear query if we are effectively closing the desktop search
                // For desktop, we clear. For mobile, we rely on the menu close.
                 if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
                    setSearchQuery('');
                 }
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isMenuOpen]);

    // Search Logic
    useEffect(() => {
        if (searchQuery.length > 1) {
            const results = SEARCH_INDEX.filter(item => 
                item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
            );
            setSearchResults(results);
        } else {
            setSearchResults([]);
        }
    }, [searchQuery]);

    const handleSearchNav = (path: string) => {
        navigate(path);
        // Reset all states to ensure clean navigation and menu closing
        setIsSearchOpen(false);
        setSearchQuery('');
        setSearchResults([]);
        setIsMenuOpen(false); // Explicitly close mobile menu
    };

    return (
        <nav className={`${positionClass} top-0 w-full z-[60] ${bgClass} transition-all duration-300`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <div className="flex-shrink-0 flex items-center gap-3 group cursor-pointer" onClick={() => navigate('/')}>
                        <img 
                            src={LOGO_URL} 
                            alt="BioImpacto Logo" 
                            loading="eager"
                            decoding="async"
                            fetchPriority="high"
                            className="h-11 w-11 rounded-full object-cover border-2 border-gold-400 shadow-md group-hover:scale-105 transition-transform duration-300" 
                        />
                        <span className={`text-2xl font-display tracking-tight transition-colors duration-300 ${textColorClass}`}>
                            Bio<span className="text-gold-500">Impacto</span>
                        </span>
                    </div>
                    
                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-6">
                        {NAV_LINKS.map((link) => (
                            <RouterNavLink
                                key={link.name}
                                to={link.path}
                                className={`text-xs uppercase tracking-widest font-bold transition-all duration-300 pb-1 border-b-2 
                                    ${isActive(link.path) 
                                        ? 'text-gold-500 border-gold-500' 
                                        : `${navLinkBaseClass} border-transparent hover:border-gold-500/50`
                                    }`}
                            >
                                {link.name}
                            </RouterNavLink>
                        ))}
                        
                        <div className="h-6 w-px bg-forest-200 dark:bg-white/10 mx-2"></div>

                        {/* Search Bar Desktop */}
                        <div ref={searchRef} className="relative">
                            <div className={`flex items-center transition-all duration-300 ${isSearchOpen ? 'w-64 bg-forest-50 dark:bg-forest-800 rounded-full px-3 py-1 border border-gold-400/50' : 'w-8 cursor-pointer hover:text-gold-500'}`}>
                                <button onClick={() => setIsSearchOpen(true)} className={`${textColorClass} flex items-center justify-center`}>
                                    <span className="material-icons text-xl">search</span>
                                </button>
                                <input 
                                    type="text"
                                    placeholder="Buscar..."
                                    className={`ml-2 bg-transparent outline-none text-sm w-full text-forest-900 dark:text-white placeholder-forest-400 ${isSearchOpen ? 'block' : 'hidden'}`}
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    autoFocus={isSearchOpen}
                                />
                                {isSearchOpen && searchQuery && (
                                    <button onClick={() => setSearchQuery('')} className="text-forest-400 hover:text-forest-600 dark:hover:text-white">
                                        <span className="material-icons text-base">close</span>
                                    </button>
                                )}
                            </div>

                            {/* Search Results Dropdown Desktop */}
                            {isSearchOpen && searchQuery.length > 1 && (
                                <div className="absolute top-full right-0 mt-3 w-80 bg-white dark:bg-forest-900 rounded-sm shadow-2xl border border-forest-100 dark:border-forest-700 overflow-hidden max-h-96 overflow-y-auto z-50 animate-fade-in ring-1 ring-black/5">
                                    {searchResults.length > 0 ? (
                                        <>
                                            <div className="px-4 py-2 bg-forest-50 dark:bg-forest-800/50 text-[10px] font-bold uppercase tracking-widest text-forest-500 dark:text-forest-400 border-b border-forest-100 dark:border-forest-700">
                                                Resultados ({searchResults.length})
                                            </div>
                                            {searchResults.map((result) => (
                                                <button 
                                                    key={result.id}
                                                    onClick={() => handleSearchNav(result.path)}
                                                    className="w-full text-left px-4 py-3 hover:bg-forest-50 dark:hover:bg-forest-800 border-b border-forest-50 dark:border-forest-700/50 last:border-0 flex items-center gap-3 group transition-colors"
                                                >
                                                    <div className="w-8 h-8 rounded-full bg-forest-100 dark:bg-forest-800 flex items-center justify-center flex-shrink-0 text-gold-600 dark:text-gold-400 group-hover:bg-gold-400 group-hover:text-forest-900 transition-colors">
                                                        <span className="material-icons text-sm">{getCategoryIcon(result.category)}</span>
                                                    </div>
                                                    <div className="flex-1">
                                                        <span className="block text-xs text-gold-600 dark:text-gold-400 font-bold uppercase tracking-wide mb-0.5">{result.category}</span>
                                                        <span className="block text-sm font-medium text-forest-900 dark:text-white group-hover:text-gold-600 dark:group-hover:text-gold-400 transition-colors">{result.title}</span>
                                                    </div>
                                                    <span className="material-icons text-forest-300 dark:text-forest-600 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all text-sm">arrow_forward</span>
                                                </button>
                                            ))}
                                        </>
                                    ) : (
                                        <div className="px-6 py-8 text-center flex flex-col items-center">
                                            <span className="material-icons text-forest-300 dark:text-forest-600 text-3xl mb-2">search_off</span>
                                            <p className="text-sm text-forest-500 dark:text-forest-400 italic">No se encontraron resultados para "{searchQuery}"</p>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>

                        <button 
                            onClick={toggleTheme}
                            className={`transition-colors p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5 ${textColorClass}`} 
                            type="button"
                            aria-label="Toggle Theme"
                        >
                            <span className="material-symbols-outlined text-xl align-middle">
                                {theme === 'dark' ? 'light_mode' : 'dark_mode'}
                            </span>
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center gap-4">
                        <button 
                            onClick={toggleTheme}
                            className={`transition-colors p-1 ${textColorClass}`} 
                            type="button"
                        >
                            <span className="material-symbols-outlined text-xl align-middle">
                                {theme === 'dark' ? 'light_mode' : 'dark_mode'}
                            </span>
                        </button>
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={textColorClass}>
                            <span className="material-icons">{isMenuOpen ? 'close' : 'menu'}</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMenuOpen && (
                <div className="md:hidden bg-white dark:bg-forest-900 border-t border-forest-100 dark:border-white/5 shadow-xl transition-colors duration-300 h-[calc(100vh-80px)] overflow-y-auto">
                    <div className="px-4 pt-6 pb-2">
                        {/* Mobile Search */}
                        <div className="relative mb-6">
                            <input 
                                type="text"
                                placeholder="Buscar en BioImpacto..."
                                className="w-full bg-forest-50 dark:bg-forest-800 text-forest-900 dark:text-white px-4 py-3 pr-10 rounded border border-forest-200 dark:border-forest-700 focus:border-gold-400 focus:ring-1 focus:ring-gold-400 outline-none text-sm transition-all"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            {/* Search Icon on the RIGHT */}
                            <span className="material-icons absolute right-3 top-1/2 -translate-y-1/2 text-forest-400 dark:text-forest-500 text-xl pointer-events-none">search</span>
                            
                            {/* Mobile Search Results */}
                            {searchQuery.length > 1 && (
                                <div className="mt-3 bg-white dark:bg-forest-800 rounded border border-forest-200 dark:border-forest-700 shadow-lg max-h-64 overflow-y-auto animate-fade-in z-50">
                                     {searchResults.length > 0 ? (
                                        <>
                                            <div className="px-4 py-2 bg-forest-50 dark:bg-forest-900/50 text-[10px] font-bold uppercase tracking-widest text-forest-500 dark:text-forest-400 border-b border-forest-100 dark:border-forest-700 sticky top-0 backdrop-blur-sm">
                                                Resultados
                                            </div>
                                            {searchResults.map((result) => (
                                                <button 
                                                    key={result.id}
                                                    onClick={(e) => {
                                                        e.stopPropagation(); // Ensure event isn't caught by parents erroneously
                                                        handleSearchNav(result.path);
                                                    }}
                                                    className="w-full text-left px-4 py-3 border-b border-forest-50 dark:border-forest-700/50 last:border-0 hover:bg-forest-50 dark:hover:bg-forest-700 active:bg-forest-100 dark:active:bg-forest-600 transition-colors"
                                                >
                                                    <div className="flex items-center gap-3">
                                                         <div className="w-8 h-8 rounded-full bg-forest-100 dark:bg-forest-900 flex items-center justify-center flex-shrink-0 text-gold-600 dark:text-gold-400">
                                                            <span className="material-icons text-sm">{getCategoryIcon(result.category)}</span>
                                                        </div>
                                                        <div className="flex-1 min-w-0">
                                                            <span className="block text-[10px] text-gold-500 uppercase font-bold mb-0.5">{result.category}</span>
                                                            <span className="block text-sm font-medium text-forest-900 dark:text-white truncate">{result.title}</span>
                                                        </div>
                                                        <span className="material-icons text-forest-300 dark:text-forest-600 text-sm">chevron_right</span>
                                                    </div>
                                                </button>
                                            ))}
                                        </>
                                    ) : (
                                        <div className="px-4 py-6 text-center flex flex-col items-center justify-center text-forest-500 dark:text-forest-400">
                                            <span className="material-icons text-2xl mb-1">search_off</span>
                                            <span className="text-sm italic">Sin resultados</span>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                    
                    <div className="px-2 pb-6 space-y-2 sm:px-3">
                        {NAV_LINKS.map((link) => (
                            <RouterNavLink
                                key={link.name}
                                to={link.path}
                                onClick={() => setIsMenuOpen(false)}
                                className={`block px-4 py-3 rounded-md text-base font-medium transition-all duration-300 border-l-4 
                                    ${isActive(link.path)
                                        ? 'border-gold-500 text-gold-600 dark:text-gold-400 bg-forest-50 dark:bg-white/5'
                                        : 'border-transparent text-forest-700 dark:text-white/70 hover:text-gold-500 hover:bg-forest-50 dark:hover:bg-white/5 hover:border-gold-400/50'
                                    }`}
                            >
                                {link.name}
                            </RouterNavLink>
                        ))}
                    </div>
                    
                    {/* Mobile Footer Info */}
                    <div className="mt-4 px-6 pt-6 border-t border-forest-100 dark:border-white/5 pb-8">
                         <div className="flex flex-col gap-4 text-sm text-forest-600 dark:text-white/50">
                            <p className="flex items-center gap-2">
                                <span className="material-icons text-gold-400 text-base">phone</span> +56 9 9267 3011
                            </p>
                            <p className="flex items-center gap-2">
                                <span className="material-icons text-gold-400 text-base">mail</span> contacto@bioimpacto.cl
                            </p>
                         </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;