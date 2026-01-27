import React from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';

const CaseAvicola: React.FC = () => {
    return (
        <div className="bg-forest-900 min-h-screen transition-colors duration-300">
            {/* Hero Section */}
            <header className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/Fotos/Testimonio/22.png"
                        alt="Instalaciones Avícola"
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
                            <span className="text-gold-100 uppercase tracking-[0.2em] text-xs font-bold">Caso de Éxito: Avícola</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display text-white mb-8 leading-tight drop-shadow-lg">
                            De residuo a <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-500 to-gold-300 italic">Proteína</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-200 font-light max-w-3xl mx-auto leading-relaxed mb-12 text-shadow-sm">
                            Transformación biotecnológica de 2 toneladas mensuales de guano avícola en activos de alto valor.
                        </p>
                    </ScrollReveal>

                    {/* Floating Glass Stats */}
                    <ScrollReveal className="w-full max-w-5xl mt-8">
                        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-10 grid grid-cols-1 md:grid-cols-3 gap-8 shadow-2xl relative overflow-hidden group hover:border-gold-500/30 transition-colors duration-500">
                            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl group-hover:bg-gold-500/20 transition-all duration-700"></div>

                            <div className="text-center relative z-10">
                                <span className="block text-5xl md:text-6xl font-display text-transparent bg-clip-text bg-gradient-to-b from-gold-300 to-gold-600 mb-2">95%</span>
                                <span className="text-xs uppercase tracking-widest text-gray-300 font-bold border-t border-white/10 pt-4 block w-32 mx-auto">Reducción Olores</span>
                            </div>
                            <div className="text-center relative z-10 border-t md:border-t-0 md:border-l border-white/10 pt-8 md:pt-0">
                                <span className="block text-5xl md:text-6xl font-display text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 mb-2">300<span className="text-2xl align-top text-gold-500 ml-1">kg</span></span>
                                <span className="text-xs uppercase tracking-widest text-gray-300 font-bold border-t border-white/10 pt-4 block w-32 mx-auto">Larva / Mes</span>
                            </div>
                            <div className="text-center relative z-10 border-t md:border-t-0 md:border-l border-white/10 pt-8 md:pt-0">
                                <span className="block text-5xl md:text-6xl font-display text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 mb-2">2<span className="text-2xl align-top text-gold-500 ml-1">Ton</span></span>
                                <span className="text-xs uppercase tracking-widest text-gray-300 font-bold border-t border-white/10 pt-4 block w-32 mx-auto">Residuo / Mes</span>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </header>

            {/* The Challenge Section */}
            <section className="py-32 relative overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute top-40 left-0 w-full h-full bg-[url('/patterns/grid.svg')] opacity-[0.03]"></div>
                <div className="absolute top-1/4 -left-20 w-96 h-96 bg-forest-500/20 rounded-full blur-[100px]"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <ScrollReveal>
                            <div className="relative">
                                <span className="absolute -top-10 -left-10 text-[12rem] font-display text-white/[0.02] select-none pointer-events-none">01</span>
                                <span className="text-gold-500 uppercase tracking-[0.2em] text-sm font-bold mb-4 block flex items-center gap-3">
                                    <span className="w-8 h-[1px] bg-gold-500"></span> El Desafío
                                </span>
                                <h2 className="text-4xl md:text-5xl font-display text-white mb-8 leading-tight">
                                    Gestión Crítica de <br /><span className="text-forest-400">Guano Avícola</span>
                                </h2>
                                <div className="prose prose-lg prose-invert text-gray-300 font-light leading-relaxed">
                                    <p className="mb-8">
                                        El manejo de residuos avícolas presentaba desafíos operativos y ambientales significativos. La acumulación generaba focos de olores, vectores sanitarios y costos crecientes de disposición final.
                                    </p>
                                    <p className="text-white text-xl font-display italic pl-6 border-l-2 border-gold-500/50">
                                        "El objetivo no era solo eliminar el residuo, sino valorizarlo."
                                    </p>

                                    <div className="mt-10 p-6 rounded-xl bg-gradient-to-r from-forest-800 to-forest-900 border border-forest-700/50 shadow-lg">
                                        <div className="flex items-start gap-4">
                                            <span className="material-icons text-gold-400 p-2 bg-gold-400/10 rounded-lg">lightbulb</span>
                                            <div>
                                                <h4 className="text-white font-bold mb-1">Resultado Final</h4>
                                                <p className="text-gray-400 text-sm">Problema resuelto + nuevo activo productivo.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>

                        <div className="relative group">
                            <div className="absolute -inset-4 bg-gradient-to-r from-gold-600 to-forest-600 rounded-2xl opacity-30 blur-lg group-hover:opacity-50 transition duration-700"></div>
                            <div className="relative h-[600px] rounded-xl overflow-hidden shadow-2xl border border-white/10">
                                <img
                                    src="/Fotos/Testimonio/1.png"
                                    alt="Planta de tratamiento con BSF"
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                    loading="lazy"
                                    decoding="async"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-forest-900/90 via-transparent to-transparent opacity-80"></div>
                                <div className="absolute bottom-10 left-10 right-10">
                                    <span className="px-4 py-2 bg-black/40 backdrop-blur-md border border-white/10 rounded-lg text-xs text-white uppercase tracking-widest">
                                        Infraestructura
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Solution Details */}
            <section className="py-32 bg-forest-950 relative border-y border-white/5">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-forest-800/40 via-forest-950 to-forest-950"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <ScrollReveal>
                        <div className="text-center mb-20">
                            <span className="text-gold-500 uppercase tracking-[0.2em] text-sm font-bold mb-4 block">Tecnología Aplicada</span>
                            <h2 className="text-4xl md:text-6xl font-display text-white mb-6">Sistema BSF <span className="text-gold-500">Premium</span></h2>
                            <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light">
                                Ingeniería biotecnológica de precisión para la transformación eficiente de residuos.
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Card 1 */}
                        <ScrollReveal className="group">
                            <div className="h-full bg-white/[0.03] backdrop-blur-sm border border-white/10 p-10 rounded-2xl hover:bg-white/[0.05] hover:border-gold-500/30 transition-all duration-500 cursor-default relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                                    <span className="material-icons text-8xl text-gold-500">delete_outline</span>
                                </div>
                                <span className="material-icons text-4xl text-gold-400 mb-8 bg-gold-400/10 p-4 rounded-xl group-hover:scale-110 transition-transform duration-500">delete_outline</span>
                                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-gold-200 transition-colors">Reducción de Olores</h3>
                                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300">
                                    El procesamiento rápido de las larvas evita la fermentación anaeróbica del guano, logrando una reducción de olores del <strong className="text-white">95%</strong>.
                                </p>
                            </div>
                        </ScrollReveal>

                        {/* Card 2 */}
                        <ScrollReveal className="group delay-100">
                            <div className="h-full bg-white/[0.03] backdrop-blur-sm border border-white/10 p-10 rounded-2xl hover:bg-white/[0.05] hover:border-gold-500/30 transition-all duration-500 cursor-default relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                                    <span className="material-icons text-8xl text-gold-500">bug_report</span>
                                </div>
                                <span className="material-icons text-4xl text-gold-400 mb-8 bg-gold-400/10 p-4 rounded-xl group-hover:scale-110 transition-transform duration-500">bug_report</span>
                                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-gold-200 transition-colors">Proteína de Alta Calidad</h3>
                                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300">
                                    Generación de <strong className="text-white">300 kg</strong> de larva fresca por mes, convirtiendo un pasivo en un insumo nutricional premium.
                                </p>
                            </div>
                        </ScrollReveal>

                        {/* Card 3 */}
                        <ScrollReveal className="group delay-200">
                            <div className="h-full bg-white/[0.03] backdrop-blur-sm border border-white/10 p-10 rounded-2xl hover:bg-white/[0.05] hover:border-gold-500/30 transition-all duration-500 cursor-default relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                                    <span className="material-icons text-8xl text-gold-500">trending_up</span>
                                </div>
                                <span className="material-icons text-4xl text-gold-400 mb-8 bg-gold-400/10 p-4 rounded-xl group-hover:scale-110 transition-transform duration-500">trending_up</span>
                                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-gold-200 transition-colors">Rentabilidad</h3>
                                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300">
                                    Transición de un centro de costos a un centro de utilidades. Economía circular real y medible.
                                </p>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Gallery / Impact */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20 mb-32">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                    <div className="bg-forest-800/80 backdrop-blur-lg p-16 flex flex-col justify-center text-white relative">
                        <div className="absolute top-0 right-0 p-10 opacity-5">
                            <span className="text-9xl font-serif">"</span>
                        </div>
                        <blockquote className="font-display text-3xl md:text-4xl leading-relaxed italic mb-10 text-gold-100">
                            "El proyecto permitió reducir significativamente impactos ambientales y transformar un residuo crítico en biomasa rica."
                        </blockquote>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-[1px] bg-gold-500"></div>
                            <div>
                                <p className="font-bold text-lg text-white">Equipo de Gestión</p>
                                <p className="text-xs text-gold-400 uppercase tracking-widest">Planta Avícola</p>
                            </div>
                        </div>
                    </div>
                    <div className="h-full min-h-[400px] relative">
                        <img
                            src="/Fotos/Testimonio/3.png"
                            alt="Larvas procesando sustrato"
                            className="w-full h-full object-cover filter brightness-75"
                            loading="lazy"
                            decoding="async"
                        />
                        <div className="absolute inset-0 bg-gold-900/20 mix-blend-overlay"></div>
                    </div>
                </div>
            </section>


        </div>
    );
};

export default CaseAvicola;