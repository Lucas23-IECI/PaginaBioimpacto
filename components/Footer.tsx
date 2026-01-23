import React from 'react';
import { SOCIAL_LINKS, LOGO_URL } from '../constants';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gold-400 border-t border-forest-900/10 dark:border-forest-900/10 pt-24 pb-12 relative z-10 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 mb-20">
                    <div className="col-span-1 md:col-span-2 lg:col-span-4">
                        <div className="flex items-center gap-3 mb-6">
                            <img src={LOGO_URL} alt="BioImpacto Logo" loading="lazy" decoding="async" className="w-12 h-12 rounded-full border border-forest-900/10 object-cover shadow-sm" />
                            <h2 className="text-4xl font-display text-forest-900">BioImpacto</h2>
                        </div>
                        <p className="text-forest-800 max-w-md font-light leading-relaxed mb-8 text-lg">
                            Transformando residuos orgánicos en oportunidades económicas y ecológicas. Expertos en Biotecnologia aplicada a la gestión de residuos orgánicos y líderes en Chile.
                        </p>
                        <div className="flex gap-4">
                            {SOCIAL_LINKS.map((link, index) => (
                                <a
                                    key={index}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={link.name}
                                    className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform duration-300 group hover:shadow-black/20"
                                >
                                    {link.isSvg ? (
                                        <svg className={`w-5 h-5 ${link.colorClass}`} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            {link.name === "Instagram" ? (
                                                <>
                                                    <defs>
                                                        <linearGradient id="ig-gradient-footer" x1="0%" x2="100%" y1="0%" y2="100%">
                                                            <stop offset="0%" style={{ stopColor: '#833AB4', stopOpacity: 1 }} />
                                                            <stop offset="50%" style={{ stopColor: '#FD1D1D', stopOpacity: 1 }} />
                                                            <stop offset="100%" style={{ stopColor: '#FCAF45', stopOpacity: 1 }} />
                                                        </linearGradient>
                                                    </defs>
                                                    <path d={link.svgPath} fill="url(#ig-gradient-footer)" />
                                                </>
                                            ) : (
                                                <path d={link.svgPath} />
                                            )}
                                        </svg>
                                    ) : (
                                        <span className={`material-icons ${link.colorClass} text-sm`}>{link.icon}</span>
                                    )}
                                </a>
                            ))}
                        </div>
                    </div>
                    
                    <div className="col-span-1 lg:col-span-2">
                        <h3 className="text-forest-900 uppercase tracking-widest text-xs font-bold mb-8">Soluciones</h3>
                        <ul className="space-y-4 text-sm text-forest-800">
                            <li><Link to="/productos#lombrices" className="hover:text-forest-900 font-medium transition-colors flex items-center gap-2 group"><span className="w-1 h-1 bg-forest-900 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span> Lombrices Californianas</Link></li>
                            <li><Link to="/productos#mosca" className="hover:text-forest-900 font-medium transition-colors flex items-center gap-2 group"><span className="w-1 h-1 bg-forest-900 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span> Mosca Soldado Negra</Link></li>
                            <li><Link to="/productos#consultoria" className="hover:text-forest-900 font-medium transition-colors flex items-center gap-2 group"><span className="w-1 h-1 bg-forest-900 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span> Consultoría Técnica</Link></li>
                            <li><Link to="/productos#consultoria" className="hover:text-forest-900 font-medium transition-colors flex items-center gap-2 group"><span className="w-1 h-1 bg-forest-900 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span> Diseño de Plantas</Link></li>
                        </ul>
                    </div>

                    <div className="col-span-1 lg:col-span-3">
                        <h3 className="text-forest-900 uppercase tracking-widest text-xs font-bold mb-8">Horario de Atención</h3>
                        <ul className="space-y-4 text-sm text-forest-800">
                            <li className="flex flex-col">
                                <span className="font-bold mb-1">Lunes a Viernes:</span>
                                <span>9:00 AM - 6:00 PM</span>
                            </li>
                            <li className="flex flex-col">
                                <span className="font-bold mb-1">Sábados:</span>
                                <span>9:00 AM - 1:00 PM</span>
                            </li>
                        </ul>
                    </div>

                    <div className="col-span-1 lg:col-span-3">
                        <h3 className="text-forest-900 uppercase tracking-widest text-xs font-bold mb-8">Contacto</h3>
                        <ul className="space-y-5 text-sm text-forest-800">
                            <li className="flex items-start gap-3">
                                <span className="material-icons text-sm text-forest-900 mt-1">location_on</span>
                                <span>Concepción, Chile</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="material-icons text-sm text-forest-900">phone</span>
                                <span>+56 9 9267 3011</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="material-icons text-sm text-forest-900">mail</span>
                                <span>contacto@bioimpacto.cl</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-forest-900/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-forest-800/80 uppercase tracking-wider">
                    <p>© 2026 BioImpacto. Todos los derechos reservados.</p>
                    <div className="flex gap-8 mt-4 md:mt-0">
                        <Link to="/privacidad" className="hover:text-forest-900 transition-colors">Privacidad</Link>
                        <Link to="/terminos" className="hover:text-forest-900 transition-colors">Términos</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;