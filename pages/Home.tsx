import React from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';

const Home: React.FC = () => {
    return (
        <div className="relative">
            <header className="relative min-h-screen flex items-center justify-center pt-20" style={{
                backgroundImage: `url('/Fotos/Background/BackgroundHero.jpg')`,
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

            <section className="bg-forest-50 dark:bg-forest-900 pt-32 pb-0 relative overflow-hidden transition-colors duration-300" id="soluciones">
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
                                    src="/Fotos/Home/NucleoLombriz.png"
                                    alt="Lombrices Californianas en sustrato"
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
                                <Link to="/productos#lombrices" className="inline-flex items-center text-gold-600 dark:text-gold-500 hover:text-forest-900 dark:hover:text-white transition-colors uppercase text-xs font-bold tracking-[0.2em] gap-3 group/link">
                                    ADQUIRIR NUCLEO <span className="material-icons text-sm group-hover/link:translate-x-1 transition-transform">east</span>
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
                                <Link to="/productos#mosca" className="inline-flex items-center text-gold-600 dark:text-gold-500 hover:text-forest-900 dark:hover:text-white transition-colors uppercase text-xs font-bold tracking-[0.2em] gap-3 group/link">
                                    ADQUIERE TU NUCLEO <span className="material-icons text-sm group-hover/link:translate-x-1 transition-transform">east</span>
                                </Link>
                            </div>
                            <div className="relative min-h-[500px] lg:h-auto overflow-hidden group order-1 lg:order-2">
                                <img
                                    src="/Fotos/Home/NucleosLarvas.png"
                                    alt="Larvas de Mosca Soldado Negra"
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 filter hover:contrast-110 opacity-90 group-hover:opacity-100"
                                />
                                <div className="absolute inset-0 bg-black/10 dark:bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Consulting Section - New Design */}
            <section className="bg-forest-900 text-white overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    {/* Left Image Side */}
                    <div className="relative min-h-[500px] lg:min-h-[900px]">
                        <img
                            src="/Fotos/Home/AsesoriaFoto.png"
                            alt="Invernadero y estructura verde"
                            className="absolute inset-0 w-full h-full object-cover opacity-80"
                        />
                        <div className="absolute inset-0 bg-forest-900/20"></div>
                        {/* Gold vertical line separator on right edge */}
                        <div className="absolute top-0 right-0 w-1 h-full bg-gold-400 hidden lg:block"></div>
                    </div>

                    {/* Right Content Side */}
                    <div className="p-10 md:p-16 lg:p-24 flex flex-col justify-center">
                        <ScrollReveal>
                            <span className="text-gold-500 text-xs uppercase tracking-[0.25em] font-bold mb-4 block">INGENIERÍA & DISEÑO</span>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display text-white mb-6 leading-tight">
                                Asesoría Técnica Especializada
                            </h2>
                            <p className="text-gray-300 font-light text-lg mb-10 leading-relaxed">
                                Asesoramos a empresas, agricultores y proyectos de economía circular en el diseño e implementación de sistemas de bioconversión (lombrices, BSF y compostaje industrial).
                            </p>

                            {/* Cards Row */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                                <div className="border border-gold-500/30 bg-forest-800/50 p-6 rounded-sm hover:border-gold-500 transition-colors">
                                    <span className="material-icons text-gold-500 text-3xl mb-4">trending_down</span>
                                    <h4 className="font-bold text-white mb-2">Optimización de gestión de residuos</h4>
                                    <p className="text-sm text-gray-400">Reducción de costos operativos mediante bioconversión in situ.</p>
                                </div>
                                <div className="border border-gold-500/30 bg-forest-800/50 p-6 rounded-sm hover:border-gold-500 transition-colors">
                                    <span className="material-icons text-gold-500 text-3xl mb-4">sync</span>
                                    <h4 className="font-bold text-white mb-2">Implementación de economía circular</h4>
                                    <p className="text-sm text-gray-400">Valorización de residuos orgánicos en subproductos que puedes rentabilizar.</p>
                                </div>
                            </div>

                            <p className="text-gray-300 mb-8 font-light">
                                Ofrecemos asesoría técnica en bioconversión de residuos orgánicos, desde proyectos piloto hasta implementación a mayor escala.
                            </p>

                            <Link to="/contacto" className="bg-gold-500 hover:bg-gold-400 text-forest-900 font-bold py-4 px-8 rounded-sm inline-flex items-center gap-2 uppercase text-xs tracking-widest transition-colors w-fit mb-16">
                                Evaluar mi proyecto
                                <span className="material-icons text-sm">arrow_forward</span>
                            </Link>

                            {/* Lists Row */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                <div>
                                    <h5 className="font-bold text-white mb-6">¿Qué incluye nuestra asesoría técnica?</h5>
                                    <ul className="space-y-3">
                                        <li className="flex items-center gap-3 text-sm text-gray-300">
                                            <span className="material-icons text-gold-500 text-xs">check_circle</span>
                                            Diagnóstico de residuos y volumen
                                        </li>
                                        <li className="flex items-center gap-3 text-sm text-gray-300">
                                            <span className="material-icons text-gold-500 text-xs">check_circle</span>
                                            Selección de tecnología (lombriz / BSF / híbrido)
                                        </li>
                                        <li className="flex items-center gap-3 text-sm text-gray-300">
                                            <span className="material-icons text-gold-500 text-xs">check_circle</span>
                                            Diseño del sistema
                                        </li>
                                        <li className="flex items-center gap-3 text-sm text-gray-300">
                                            <span className="material-icons text-gold-500 text-xs">check_circle</span>
                                            Acompañamiento en implementación
                                        </li>
                                        <li className="flex items-center gap-3 text-sm text-gray-300">
                                            <span className="material-icons text-gold-500 text-xs">check_circle</span>
                                            Indicadores de desempeño
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h5 className="font-bold text-white mb-6">¿Para quién es este servicio?</h5>
                                    <ul className="space-y-3">
                                        <li className="flex items-center gap-3 text-sm text-gray-300">
                                            <span className="material-icons text-gold-500 text-xs">business</span>
                                            Empresas con residuos orgánicos
                                        </li>
                                        <li className="flex items-center gap-3 text-sm text-gray-300">
                                            <span className="material-icons text-gold-500 text-xs">agriculture</span>
                                            Agroindustria
                                        </li>
                                        <li className="flex items-center gap-3 text-sm text-gray-300">
                                            <span className="material-icons text-gold-500 text-xs">account_balance</span>
                                            Municipalidades
                                        </li>
                                        <li className="flex items-center gap-3 text-sm text-gray-300">
                                            <span className="material-icons text-gold-500 text-xs">lightbulb</span>
                                            Proyectos de innovación
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            <section className="relative py-40" style={{
                backgroundImage: `url('/Fotos/Background/BackgroundOrigen.jpg')`,
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
                            <h2 className="text-4xl md:text-6xl font-display text-forest-900 dark:text-white mb-6 leading-tight transition-colors duration-300">
                                "BioImpacto nació en el campo..."
                            </h2>
                            <p className="text-lg md:text-xl text-forest-700 dark:text-gold-400 font-medium mb-10 max-w-3xl mx-auto italic">
                                Experiencia real en vermicompostaje y bioconversión de residuos orgánicos
                            </p>
                            <div className="prose prose-lg mx-auto mb-12 font-light text-forest-800 dark:text-white/80 leading-loose transition-colors duration-300">
                                <p className="mb-8">
                                    Empecé compostando <strong>residuos orgánicos</strong>, entendiendo errores, probando sistemas de <strong>vermicompostaje y bioconversión</strong>, y viendo qué funcionaba realmente bajo el sol y la lluvia.
                                </p>
                                <div className="py-8 relative">
                                    <span className="absolute top-0 left-1/2 -translate-x-1/2 text-gold-400/20 text-6xl font-serif">"</span>
                                    <p className="text-2xl text-forest-900 dark:text-white font-display italic relative z-10 transition-colors duration-300">
                                        Lo que transforma un hobby en una <strong>solución de gestión de residuos orgánicos</strong> es el sistema completo.
                                    </p>
                                </div>
                                <p className="mt-6">
                                    Hoy, <strong>BioImpacto</strong> acompaña a <strong>productores, agricultores y empresas</strong> a implementar <strong>soluciones de vermicompostaje y bioconversión de residuos orgánicos en Chile</strong>, diseñadas para ser <strong>escalables, rentables y operables en la vida real</strong>.
                                </p>
                            </div>
                            <div className="flex justify-center">
                                <Link to="/contacto" className="bg-gold-400 hover:bg-gold-500 text-forest-900 font-bold py-5 px-12 rounded-sm shadow-xl transition transform hover:-translate-y-1 flex items-center gap-3 uppercase text-xs tracking-widest border border-gold-400">
                                    Hablemos de tu proyecto
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