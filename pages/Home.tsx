import React from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';

const Home: React.FC = () => {
    return (
        <div className="relative">
            <header className="relative min-h-screen flex items-center justify-center pt-20" style={{
                backgroundImage: `url('/Fotos/Background/BackgroundHero.webp')`,
                backgroundAttachment: 'fixed',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
            }}>
                {/* Overlay: Lighter for Light Mode, Darker for Dark Mode */}
                <div className="absolute inset-0 bg-forest-100/40 dark:bg-forest-900/60 backdrop-blur-[1px] transition-colors duration-300"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-forest-50 via-forest-50/20 to-transparent dark:from-forest-900 dark:via-forest-900/40 dark:to-transparent transition-colors duration-300"></div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <ScrollReveal>
                        <div className="glass-panel p-10 md:p-16 rounded-sm max-w-4xl mx-auto">
                            <span className="block text-gold-600 dark:text-gold-500 uppercase tracking-[0.3em] text-xs font-bold mb-6">BioImpacto Solutions</span>
                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display text-forest-900 dark:text-white leading-[0.95] mb-8 drop-shadow-sm transition-colors duration-300">
                                Residuos orgánicos<br />en valor <span className="italic text-gold-500 text-shadow-gold">real</span>
                            </h1>
                            <p className="text-lg md:text-xl text-forest-800 dark:text-white/90 mb-10 max-w-2xl mx-auto font-light leading-relaxed transition-colors duration-300">
                                Ingeniería de la naturaleza aplicada. Núcleos de lombrices californianas, mosca soldado negra y consultoría experta para transformar sistemas productivos en Concepción, Chile.
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center gap-6">
                                <Link to="/contacto" className="bg-gold-400 hover:bg-gold-500 text-forest-900 font-bold py-4 px-10 rounded-sm border border-gold-400 transition-all hover:tracking-wider uppercase text-xs tracking-widest flex items-center justify-center gap-2 shadow-lg hover:shadow-gold-400/20">
                                    Iniciar Proyecto
                                    <span className="material-icons text-sm">arrow_forward</span>
                                </Link>
                                <Link to="/productos" className="bg-white/40 hover:bg-white/60 dark:bg-white/5 dark:hover:bg-white/10 text-forest-900 dark:text-white font-medium py-4 px-10 rounded-sm border border-forest-900/10 dark:border-white/20 transition-all uppercase text-xs tracking-widest flex items-center justify-center gap-2 backdrop-blur-sm">
                                    Explorar Soluciones
                                </Link>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </header>

            <section className="lazy-section bg-forest-50 dark:bg-forest-900 pt-32 pb-0 relative overflow-hidden transition-colors duration-300" id="soluciones">
                <ScrollReveal className="relative z-10 container mx-auto px-4 mb-24 text-center">
                    <span className="text-gold-600 dark:text-gold-500 uppercase tracking-[0.2em] text-xs font-bold mb-4 block">Nuestras Capacidades</span>
                    <h2 className="text-4xl md:text-6xl font-display text-forest-900 dark:text-white mb-8 transition-colors duration-300">Soluciones de Bioconversión</h2>
                    <div className="w-24 h-1 bg-gold-400 mx-auto"></div>
                </ScrollReveal>

                {/* Worms Section */}
                <div className="container mx-auto px-0 lg:px-4 mb-32 max-w-7xl">
                    <ScrollReveal>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 shadow-xl rounded-sm overflow-hidden border border-forest-200 dark:border-white/5">
                            <div className="relative min-h-[500px] lg:h-auto overflow-hidden group">
                                <img
                                    src="/Fotos/Home/NucleoLombriz.webp"
                                    alt="Lombrices Californianas en sustrato"
                                    loading="lazy"
                                    decoding="async"
                                    width="800"
                                    height="875"
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                                />
                                <div className="absolute inset-0 bg-black/10 dark:bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
                            </div>
                            <div className="bg-white dark:bg-forest-800 p-12 md:p-20 flex flex-col justify-center border-t lg:border-t-0 border-l-0 lg:border-l-4 border-gold-400 transition-colors duration-300">
                                <span className="text-gold-600 dark:text-gold-500 text-xs uppercase tracking-[0.25em] mb-4 font-bold">VERMICOMPOSTAJE</span>
                                <h3 className="text-3xl md:text-4xl lg:text-5xl font-display text-forest-900 dark:text-white mb-8 leading-tight transition-colors duration-300">Núcleos de Lombriz Californiana para Vermicompostaje</h3>
                                <p className="text-forest-700 dark:text-white/80 mb-10 font-light leading-relaxed text-lg transition-colors duration-300">
                                    Núcleos vivos de lombriz roja californiana (Eisenia fetida), ideales para compostaje domiciliario, huertos, agricultores y proyectos de reciclaje orgánico.
                                </p>
                                <ul className="space-y-6 mb-12 text-sm text-forest-600 dark:text-white/70">
                                    <li className="flex items-center gap-4 group/item">
                                        <span className="w-2 h-2 rotate-45 bg-gold-500 group-hover/item:scale-125 transition-transform"></span>
                                        <span className="font-medium tracking-wide uppercase text-xs">Núcleos certificados de lombriz californiana listos para reproducirse</span>
                                    </li>
                                    <li className="flex items-center gap-4 group/item">
                                        <span className="w-2 h-2 rotate-45 bg-gold-500 group-hover/item:scale-125 transition-transform"></span>
                                        <span className="font-medium tracking-wide uppercase text-xs">Alta tasa reproductiva y rápida producción de humus</span>
                                    </li>
                                    <li className="flex items-center gap-4 group/item">
                                        <span className="w-2 h-2 rotate-45 bg-gold-500 group-hover/item:scale-125 transition-transform"></span>
                                        <span className="font-medium tracking-wide uppercase text-xs">Aptos para hogares, huertos urbanos, parcelas y empresas</span>
                                    </li>
                                    <li className="flex items-center gap-4 group/item">
                                        <span className="w-2 h-2 rotate-45 bg-gold-500 group-hover/item:scale-125 transition-transform"></span>
                                        <span className="font-medium tracking-wide uppercase text-xs">Envíos seguros a todo Chile</span>
                                    </li>
                                </ul>
                                <Link to="/productos#lombrices" className="bg-gold-400 hover:bg-gold-500 text-forest-900 font-bold py-4 px-8 rounded-sm inline-flex items-center gap-2 uppercase text-xs tracking-widest transition-all duration-300 w-fit group/link">
                                    ADQUIRIR NUCLEO <span className="material-icons text-sm group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
                                </Link>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>

                {/* Soldier Fly Section */}
                <div className="container mx-auto px-0 lg:px-4 mb-32 max-w-7xl">
                    <ScrollReveal>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 shadow-xl rounded-sm overflow-hidden border border-forest-200 dark:border-white/5">
                            <div className="bg-white dark:bg-forest-800 p-12 md:p-20 flex flex-col justify-center border-b lg:border-b-0 border-r-0 lg:border-r-4 border-gold-400 order-2 lg:order-1 transition-colors duration-300">
                                <span className="text-gold-600 dark:text-gold-500 text-xs uppercase tracking-[0.25em] mb-4 font-bold">Bioconversión Avanzada</span>
                                <h3 className="text-4xl md:text-5xl font-display text-forest-900 dark:text-white mb-8 leading-tight transition-colors duration-300">Núcleos de Larvas de Mosca Soldado Negra</h3>
                                <p className="text-forest-700 dark:text-white/80 mb-10 font-light leading-relaxed text-lg transition-colors duration-300">
                                    Núcleos vivos de larvas de Mosca Soldado Negra (BSF) para reducción acelerada de residuos orgánicos y producción de proteína sostenible, orientados a empresas, agricultores y proyectos de economía circular.
                                </p>
                                <ul className="space-y-6 mb-12 text-sm text-forest-600 dark:text-white/70">
                                    <li className="flex items-center gap-4 group/item">
                                        <span className="w-2 h-2 rotate-45 bg-gold-500 group-hover/item:scale-125 transition-transform"></span>
                                        <span className="font-medium tracking-wide uppercase text-xs">Larvas vivas con alta tasa de consumo</span>
                                    </li>
                                    <li className="flex items-center gap-4 group/item">
                                        <span className="w-2 h-2 rotate-45 bg-gold-500 group-hover/item:scale-125 transition-transform"></span>
                                        <span className="font-medium tracking-wide uppercase text-xs">Reducción de residuos orgánicos hasta 5x más rápida que compost tradicional</span>
                                    </li>
                                    <li className="flex items-center gap-4 group/item">
                                        <span className="w-2 h-2 rotate-45 bg-gold-500 group-hover/item:scale-125 transition-transform"></span>
                                        <span className="font-medium tracking-wide uppercase text-xs">Ideal para empresas, agroindustria y proyectos piloto</span>
                                    </li>
                                    <li className="flex items-center gap-4 group/item">
                                        <span className="w-2 h-2 rotate-45 bg-gold-500 group-hover/item:scale-125 transition-transform"></span>
                                        <span className="font-medium tracking-wide uppercase text-xs">Subproducto rico en proteínas</span>
                                    </li>
                                    <li className="flex items-center gap-4 group/item">
                                        <span className="w-2 h-2 rotate-45 bg-gold-500 group-hover/item:scale-125 transition-transform"></span>
                                        <span className="font-medium tracking-wide uppercase text-xs">Envíos a Todo Chile</span>
                                    </li>
                                </ul>
                                <Link to="/productos#mosca" className="bg-gold-400 hover:bg-gold-500 text-forest-900 font-bold py-4 px-8 rounded-sm inline-flex items-center gap-2 uppercase text-xs tracking-widest transition-all duration-300 w-fit group/link">
                                    ADQUIERE TU NUCLEO <span className="material-icons text-sm group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
                                </Link>
                            </div>
                            <div className="relative min-h-[500px] lg:h-auto overflow-hidden group order-1 lg:order-2">
                                <img
                                    src="/Fotos/Home/NucleosLarvas.webp"
                                    alt="Larvas de Mosca Soldado Negra"
                                    loading="lazy"
                                    decoding="async"
                                    width="800"
                                    height="875"
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 filter hover:contrast-110 opacity-90 group-hover:opacity-100"
                                />
                                <div className="absolute inset-0 bg-black/10 dark:bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Consulting Section - Matching Card Design */}
            <div className="container mx-auto px-0 lg:px-4 mb-32 max-w-7xl">
                <ScrollReveal>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 shadow-xl rounded-sm overflow-hidden border border-forest-200 dark:border-white/5">
                        <div className="relative min-h-[500px] lg:h-auto overflow-hidden group">
                            <img
                                src="/Fotos/Home/AsesoriaFoto.webp"
                                alt="Invernadero y estructura verde"
                                loading="lazy"
                                decoding="async"
                                width="800"
                                height="875"
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                            />
                            <div className="absolute inset-0 bg-black/10 dark:bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
                        </div>
                        <div className="bg-white dark:bg-forest-800 p-12 md:p-20 flex flex-col justify-center border-t lg:border-t-0 border-l-0 lg:border-l-4 border-gold-400 transition-colors duration-300">
                            <span className="text-gold-600 dark:text-gold-500 text-xs uppercase tracking-[0.25em] mb-4 font-bold">INGENIERÍA & DISEÑO</span>
                            <h3 className="text-3xl md:text-4xl lg:text-5xl font-display text-forest-900 dark:text-white mb-8 leading-tight transition-colors duration-300">Asesoría Técnica Especializada</h3>
                            <p className="text-forest-700 dark:text-white/80 mb-10 font-light leading-relaxed text-lg transition-colors duration-300">
                                Asesoramos a empresas, agricultores y proyectos de economía circular en el diseño e implementación de sistemas de bioconversión (lombrices, BSF y compostaje industrial).
                            </p>
                            <ul className="space-y-6 mb-12 text-sm text-forest-600 dark:text-white/70">
                                <li className="flex items-center gap-4 group/item">
                                    <span className="w-2 h-2 rotate-45 bg-gold-500 group-hover/item:scale-125 transition-transform"></span>
                                    <span className="font-medium tracking-wide uppercase text-xs">Diagnóstico de residuos y volumen</span>
                                </li>
                                <li className="flex items-center gap-4 group/item">
                                    <span className="w-2 h-2 rotate-45 bg-gold-500 group-hover/item:scale-125 transition-transform"></span>
                                    <span className="font-medium tracking-wide uppercase text-xs">Selección de tecnología (lombriz / BSF / híbrido)</span>
                                </li>
                                <li className="flex items-center gap-4 group/item">
                                    <span className="w-2 h-2 rotate-45 bg-gold-500 group-hover/item:scale-125 transition-transform"></span>
                                    <span className="font-medium tracking-wide uppercase text-xs">Diseño del sistema y acompañamiento</span>
                                </li>
                                <li className="flex items-center gap-4 group/item">
                                    <span className="w-2 h-2 rotate-45 bg-gold-500 group-hover/item:scale-125 transition-transform"></span>
                                    <span className="font-medium tracking-wide uppercase text-xs">Ideal para empresas, agroindustria y municipios</span>
                                </li>
                            </ul>
                            <Link to="/contacto" className="bg-gold-400 hover:bg-gold-500 text-forest-900 font-bold py-4 px-8 rounded-sm inline-flex items-center gap-2 uppercase text-xs tracking-widest transition-all duration-300 w-fit group/link">
                                EVALUAR MI PROYECTO <span className="material-icons text-sm group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
                            </Link>
                        </div>
                    </div>
                </ScrollReveal>
            </div>

            <section className="lazy-section relative py-40" style={{
                backgroundImage: `url('/Fotos/Background/BackgroundOrigen.webp')`,
                backgroundAttachment: 'fixed',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
            }}>
                <div className="absolute inset-0 bg-forest-50/80 dark:bg-forest-900/90 backdrop-blur-[2px] transition-colors duration-300"></div>
                <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
                    <ScrollReveal>
                        <div className="glass-panel p-10 md:p-20 rounded-sm border border-gold-400/20 text-center relative overflow-hidden bg-white/40 dark:bg-forest-900/40">
                            <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-gold-400/30"></div>
                            <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-gold-400/30"></div>
                            <span className="uppercase tracking-[0.3em] text-xs font-bold text-gold-600 dark:text-gold-500 mb-8 block">El Origen</span>
                            <h2 className="text-3xl md:text-5xl font-display text-forest-900 dark:text-white mb-6 leading-tight transition-colors duration-300">
                                Soluciones reales para gestionar residuos orgánicos, probadas en terreno
                            </h2>
                            <p className="text-lg md:text-xl text-forest-700 dark:text-gold-400 font-medium mb-10 max-w-3xl mx-auto italic">
                                Diseñamos e implementamos sistemas de vermicompostaje y bioconversión operables, escalables y rentables.
                            </p>
                            <div className="prose prose-lg mx-auto mb-12 font-light text-forest-800 dark:text-white/80 leading-loose transition-colors duration-300">
                                <p className="mb-8">
                                    Empezamos compostando residuos orgánicos, equivocándonos, ajustando y probando sistemas bajo sol, lluvia y uso real.
                                </p>
                                <div className="py-8 relative">
                                    <span className="absolute top-0 left-1/2 -translate-x-1/2 text-gold-400/20 text-6xl font-serif">"</span>
                                    <p className="text-3xl md:text-4xl text-forest-900 dark:text-white font-display italic relative z-10 transition-colors duration-300">
                                        Lo que transforma un hobby en una solución real es el sistema completo.
                                    </p>
                                </div>
                                <p className="mt-6">
                                    Hoy acompañamos a productores, agricultores y empresas en Chile a implementar soluciones reales de gestión de residuos orgánicos, diseñadas para operar, escalar y generar impacto medible.
                                </p>
                            </div>
                            <div className="flex justify-center">
                                <Link to="/contacto" className="bg-gold-400 hover:bg-gold-500 text-forest-900 font-bold py-5 px-12 rounded-sm shadow-xl transition transform hover:-translate-y-1 flex items-center gap-3 uppercase text-xs tracking-widest border border-gold-400">
                                    Agenda una conversación sobre tu proyecto
                                    <span className="material-icons text-sm">phone</span>
                                </Link>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </div>
    );
};

export default Home;