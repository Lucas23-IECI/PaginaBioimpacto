import React from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';

const CaseVina: React.FC = () => {
    return (
        <div className="bg-forest-900 min-h-screen transition-colors duration-300">
            {/* Hero Section */}
            <header className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/Fotos/Testimonio/segundo del segundo.png"
                        alt="Agroindustria y Frutas"
                        className="w-full h-full object-cover"
                        loading="lazy"
                        decoding="async"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-forest-900/60 via-forest-900/40 to-forest-900"></div>
                    <div className="absolute inset-0 bg-[url('/patterns/noise.svg')] opacity-5 mix-blend-overlay"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center h-full pt-20">
                    <ScrollReveal>
                        <div className="inline-flex items-center gap-2 px-6 py-2 border border-gold-400/30 rounded-full bg-forest-900/40 backdrop-blur-md mb-8 shadow-[0_0_15px_rgba(234,179,8,0.2)]">
                            <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse"></span>
                            <span className="text-gold-100 uppercase tracking-[0.2em] text-xs font-bold">Caso de Éxito: Agroindustria</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display text-white mb-8 leading-tight drop-shadow-lg">
                            De Residuos a <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-500 to-gold-300 italic">Biomasa</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-200 font-light max-w-3xl mx-auto leading-relaxed mb-12 text-shadow-sm">
                            Sistema de bioconversión circular para el tratamiento de descartes frutícolas.
                        </p>
                    </ScrollReveal>

                    {/* Floating Glass Stats */}
                    <ScrollReveal className="w-full max-w-5xl mt-8">
                        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-10 grid grid-cols-1 md:grid-cols-3 gap-8 shadow-2xl relative overflow-hidden group hover:border-gold-500/30 transition-colors duration-500">
                            <div className="absolute top-0 left-0 -ml-20 -mt-20 w-64 h-64 bg-green-500/10 rounded-full blur-3xl group-hover:bg-green-500/20 transition-all duration-700"></div>

                            <div className="text-center relative z-10">
                                <span className="block text-5xl md:text-6xl font-display text-transparent bg-clip-text bg-gradient-to-b from-gold-300 to-gold-600 mb-2">70%</span>
                                <span className="text-xs uppercase tracking-widest text-gray-300 font-bold border-t border-white/10 pt-4 block w-32 mx-auto">Reducción Volumen</span>
                            </div>
                            <div className="text-center relative z-10 border-t md:border-t-0 md:border-l border-white/10 pt-8 md:pt-0">
                                <span className="block text-5xl md:text-6xl font-display text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 mb-2"><span className="text-3xl align-middle mr-2">♻</span>Circular</span>
                                <span className="text-xs uppercase tracking-widest text-gray-300 font-bold border-t border-white/10 pt-4 block w-32 mx-auto">Modelo</span>
                            </div>
                            <div className="text-center relative z-10 border-t md:border-t-0 md:border-l border-white/10 pt-8 md:pt-0">
                                <span className="block text-5xl md:text-6xl font-display text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 mb-2">BSF</span>
                                <span className="text-xs uppercase tracking-widest text-gray-300 font-bold border-t border-white/10 pt-4 block w-32 mx-auto">Tecnología</span>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </header>

            {/* The Challenge Section */}
            <section className="py-32 relative">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/[0.02] to-transparent pointer-events-none"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
                        {/* Sticky Content */}
                        <div className="lg:col-span-5">
                            <div className="sticky top-32">
                                <ScrollReveal>
                                    <span className="text-gold-500 uppercase tracking-[0.2em] text-sm font-bold mb-6 block flex items-center gap-3">
                                        <span className="w-8 h-[1px] bg-gold-500"></span> El Desafío
                                    </span>
                                    <h2 className="text-4xl md:text-5xl font-display text-white mb-8 leading-tight">
                                        Descartes de <br /><span className="text-forest-400">Packing</span>
                                    </h2>
                                    <p className="text-gray-300 text-lg mb-8 leading-relaxed font-light">
                                        Grandes volúmenes de fermentación rápida. Costo logístico elevado. Pérdida de nutrientes valiosos. Un problema lineal en un mundo que exige circularidad.
                                    </p>

                                    <div className="p-8 bg-white/5 backdrop-blur-sm border-l-4 border-gold-500 rounded-r-xl shadow-lg">
                                        <p className="italic text-gray-200 text-lg">
                                            "El sistema permitió reducir significativamente los volúmenes enviados a disposición final y transformar los residuos en biomasa rica en proteína."
                                        </p>
                                    </div>
                                </ScrollReveal>
                            </div>
                        </div>

                        {/* Process Steps Checklist */}
                        <div className="lg:col-span-7 space-y-20">
                            {/* Step 1 */}
                            <ScrollReveal className="relative group">
                                <div className="absolute -left-4 top-0 bottom-0 w-[1px] bg-gradient-to-b from-gold-500 to-transparent opacity-30"></div>
                                <div className="pl-12 relative">
                                    <span className="absolute -left-8 top-0 flex items-center justify-center w-8 h-8 rounded-full bg-forest-900 border border-gold-500 text-gold-500 font-bold shadow-lg shadow-gold-500/20 group-hover:scale-110 transition-transform">1</span>

                                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-gold-400 transition-colors">Recepción de Descartes</h3>
                                    <p className="text-gray-400 mb-6">Acopio y trituración de frutas de descarte provenientes de la línea de packing.</p>

                                    <div className="h-80 rounded-2xl overflow-hidden shadow-2xl border border-white/10 relative">
                                        <div className="absolute inset-0 bg-forest-900/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                                        <img src="/Fotos/Testimonio/primero del segundo.png" alt="Residuos Frutícolas" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" loading="lazy" decoding="async" />
                                    </div>
                                </div>
                            </ScrollReveal>

                            {/* Step 2 */}
                            <ScrollReveal className="relative group">
                                <div className="absolute -left-4 top-0 bottom-0 w-[1px] bg-gradient-to-b from-gold-500/30 to-gold-500 opacity-30"></div>
                                <div className="pl-12 relative">
                                    <span className="absolute -left-8 top-0 flex items-center justify-center w-8 h-8 rounded-full bg-forest-900 border border-gold-500 text-gold-500 font-bold shadow-lg shadow-gold-500/20 group-hover:scale-110 transition-transform">2</span>

                                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-gold-400 transition-colors">Bioconversión Acelerada</h3>
                                    <p className="text-gray-400 mb-6">Larvas de BSF consumen la materia orgánica, reduciendo el volumen drásticamente en días.</p>

                                    <div className="h-80 rounded-2xl overflow-hidden shadow-2xl border border-white/10 relative">
                                        <div className="absolute inset-0 bg-forest-900/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                                        <img src="/Fotos/Testimonio/segundo del segundo.png" alt="Larvas BSF" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 grayscale hover:grayscale-0" loading="lazy" decoding="async" />
                                    </div>
                                </div>
                            </ScrollReveal>

                            {/* Step 3 */}
                            <ScrollReveal className="relative group">
                                <div className="absolute -left-4 top-0 bottom-0 w-[1px] bg-gradient-to-b from-gold-500 to-transparent opacity-0"></div>
                                <div className="pl-12 relative">
                                    <span className="absolute -left-8 top-0 flex items-center justify-center w-8 h-8 rounded-full bg-forest-900 border border-gold-500 text-gold-500 font-bold shadow-lg shadow-gold-500/20 group-hover:scale-110 transition-transform">3</span>

                                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-gold-400 transition-colors">Cosecha de Valor</h3>
                                    <p className="text-gray-400 mb-6">Obtención de proteína para alimentación animal y biofertilizante de alta calidad.</p>

                                    <div className="h-80 rounded-2xl overflow-hidden shadow-2xl border border-white/10 relative">
                                        <div className="absolute inset-0 bg-forest-900/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                                        <img src="/Fotos/Testimonio/tercero del segundo.png" alt="Producto Final" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" loading="lazy" decoding="async" />
                                    </div>
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </div>
            </section>

            {/* Results Grid - Glass Design */}
            <section className="py-24 bg-forest-950 text-white relative border-t border-white/5">
                <div className="absolute inset-0 bg-[url('/patterns/topography.svg')] opacity-[0.03]"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <ScrollReveal>
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-display mb-6">Ventajas del Modelo</h2>
                            <p className="text-lg text-gray-400 font-light max-w-3xl mx-auto">
                                Más que gestión de residuos, es una estrategia de valorización.
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Box 1 */}
                        <div className="p-8 bg-forest-900/50 border border-white/5 rounded-2xl hover:bg-forest-800/50 hover:border-gold-500/20 transition-all duration-300 group">
                            <div className="w-14 h-14 bg-forest-800 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <span className="material-icons text-gold-500 text-3xl">delete_forever</span>
                            </div>
                            <h4 className="font-bold text-xl mb-3 text-white">Reducción Masiva</h4>
                            <p className="text-sm text-gray-400 leading-relaxed">70% menos de residuos enviados a vertederos, disminuyendo drásticamente costos y huella de carbono.</p>
                        </div>
                        {/* Box 2 */}
                        <div className="p-8 bg-forest-900/50 border border-white/5 rounded-2xl hover:bg-forest-800/50 hover:border-gold-500/20 transition-all duration-300 group">
                            <div className="w-14 h-14 bg-forest-800 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <span className="material-icons text-gold-500 text-3xl">pets</span>
                            </div>
                            <h4 className="font-bold text-xl mb-3 text-white">Proteína Animal</h4>
                            <p className="text-sm text-gray-400 leading-relaxed">Producción de larvas con alto perfil proteico, ideales para suplementación en dietas animales.</p>
                        </div>
                        {/* Box 3 */}
                        <div className="p-8 bg-forest-900/50 border border-white/5 rounded-2xl hover:bg-forest-800/50 hover:border-gold-500/20 transition-all duration-300 group">
                            <div className="w-14 h-14 bg-forest-800 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <span className="material-icons text-gold-500 text-3xl">recycling</span>
                            </div>
                            <h4 className="font-bold text-xl mb-3 text-white">Economía Circular</h4>
                            <p className="text-sm text-gray-400 leading-relaxed">Cierra el ciclo de nutrientes dentro de la misma cadena productiva o agrícola.</p>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    );
};

export default CaseVina;