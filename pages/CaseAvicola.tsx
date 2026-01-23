import React from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';

const CaseAvicola: React.FC = () => {
    return (
        <div className="bg-forest-50 dark:bg-forest-900 min-h-screen transition-colors duration-300 pt-20">
            {/* Hero Section */}
            <header className="relative h-[70vh] min-h-[600px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img 
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-hpV9FKWFTrkRtbKqTqYEuddkB7f2o2khXQy0m50ZXv5rBvkHEVo76Plq2KFsCrojxv4g-qS0Kl7_KbswjI8AnB3mUs9SZcWmUx_d3qzdI6tbmVv1VN7hylGlUZIk4cL-MVCFgZCQ8soTPDgSK7xgRrFKn-QIfWPryPRPrNFW9iwNXgbI94TWAfizj5ZSQ3d1MAC-7ihwmhBcIGj2KPTBsEL71MwGW2Sq4sZPtHt87HWKqfAWafFtBR_ZpDEErt-WLlzHKK2iXOFR" 
                        alt="Instalaciones Avícola" 
                        className="w-full h-full object-cover filter brightness-[0.4]"
                        loading="lazy"
                        decoding="async"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-forest-900 via-transparent to-forest-900/50"></div>
                </div>
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <ScrollReveal>
                        <div className="inline-block px-4 py-1 border border-gold-400/50 rounded-full bg-black/30 backdrop-blur-sm mb-6">
                            <span className="text-gold-400 uppercase tracking-[0.2em] text-xs font-bold">Caso de Éxito: Avícola</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-display text-white mb-6 leading-tight">
                            De residuo avícola a <br/><span className="text-gold-500 italic">proteína comercializable</span>
                        </h1>
                        <p className="text-xl text-gray-200 font-light max-w-3xl mx-auto leading-relaxed">
                            Implementación de un sistema de bioconversión con Mosca Soldado Negra para el tratamiento de 2 toneladas diarias de guano avícola.
                        </p>
                    </ScrollReveal>
                </div>
            </header>

            {/* Key Stats */}
            <section className="relative -mt-20 z-20 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="bg-white dark:bg-forest-800 rounded-sm shadow-xl shadow-forest-900/10 border border-forest-100 dark:border-forest-700 p-8 md:p-12 grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-forest-100 dark:divide-forest-700">
                        <div className="text-center pt-4 md:pt-0">
                            <span className="block text-4xl md:text-5xl font-display text-gold-500 mb-2">95%</span>
                            <span className="text-xs uppercase tracking-widest text-forest-600 dark:text-forest-300 font-bold">Reducción de Olores</span>
                        </div>
                        <div className="text-center pt-8 md:pt-0">
                            <span className="block text-4xl md:text-5xl font-display text-gold-500 mb-2">300 kg</span>
                            <span className="text-xs uppercase tracking-widest text-forest-600 dark:text-forest-300 font-bold">Larva / Día (Promedio)</span>
                        </div>
                        <div className="text-center pt-8 md:pt-0">
                            <span className="block text-4xl md:text-5xl font-display text-gold-500 mb-2">2 Ton</span>
                            <span className="text-xs uppercase tracking-widest text-forest-600 dark:text-forest-300 font-bold">Residuo Diario Tratado</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Challenge & Result Summary */}
            <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <ScrollReveal>
                        <span className="text-gold-600 dark:text-gold-400 uppercase tracking-[0.2em] text-xs font-bold mb-4 block">El Desafío</span>
                        <h2 className="text-3xl md:text-4xl font-display text-forest-900 dark:text-white mb-6">Gestión de Guano Avícola</h2>
                        <div className="prose prose-lg text-forest-700 dark:text-gray-300 font-light leading-relaxed">
                            <p className="mb-6">
                                El proyecto permitió reducir significativamente impactos ambientales y transformar un residuo crítico en biomasa rica en proteína, utilizable para alimentación animal y con potencial de comercialización.
                            </p>
                            <div className="bg-gold-400/10 border-l-4 border-gold-400 p-6 rounded-r-sm my-8">
                                <p className="text-forest-900 dark:text-white font-bold text-lg flex items-center gap-2">
                                    <span className="material-icons text-gold-500">check_circle</span>
                                    Resultado Final
                                </p>
                                <p className="text-forest-700 dark:text-gray-300 mt-2 italic">
                                    "Problema resuelto + nuevo activo productivo."
                                </p>
                            </div>
                        </div>
                    </ScrollReveal>
                    <div className="relative h-[500px] rounded-sm overflow-hidden shadow-2xl group">
                        <img 
                            src="https://images.unsplash.com/photo-1589923188900-85dae523342b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                            alt="Planta de tratamiento con BSF" 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            loading="lazy"
                            decoding="async"
                        />
                        <div className="absolute inset-0 bg-forest-900/20 group-hover:bg-transparent transition-colors duration-500"></div>
                    </div>
                </div>
            </section>

            {/* The Solution Details */}
            <section className="py-24 bg-forest-100 dark:bg-forest-800/50 border-y border-forest-200 dark:border-forest-700 transition-colors duration-300">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <ScrollReveal>
                        <div className="text-center mb-16">
                            <span className="text-gold-600 dark:text-gold-400 uppercase tracking-[0.2em] text-xs font-bold mb-4 block">Tecnología Aplicada</span>
                            <h2 className="text-3xl md:text-5xl font-display text-forest-900 dark:text-white mb-6">Sistema de Bioconversión BSF</h2>
                            <p className="text-lg text-forest-700 dark:text-gray-300 max-w-3xl mx-auto font-light">
                                Utilizamos larvas de Mosca Soldado Negra para procesar residuos orgánicos de manera acelerada y eficiente.
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <ScrollReveal className="bg-white dark:bg-forest-900 p-8 rounded-sm shadow-md border-t-4 border-gold-400">
                            <span className="material-icons text-4xl text-forest-600 dark:text-forest-400 mb-6">delete_outline</span>
                            <h3 className="text-xl font-bold text-forest-900 dark:text-white mb-3">Reducción de Olores</h3>
                            <p className="text-forest-600 dark:text-gray-400 text-sm leading-relaxed">
                                El procesamiento rápido de las larvas evita la fermentación anaeróbica del guano, logrando una reducción de olores del 95%.
                            </p>
                        </ScrollReveal>
                        <ScrollReveal className="bg-white dark:bg-forest-900 p-8 rounded-sm shadow-md border-t-4 border-gold-400 delay-100">
                            <span className="material-icons text-4xl text-forest-600 dark:text-forest-400 mb-6">bug_report</span>
                            <h3 className="text-xl font-bold text-forest-900 dark:text-white mb-3">Producción de Proteína</h3>
                            <p className="text-forest-600 dark:text-gray-400 text-sm leading-relaxed">
                                Generación promedio de 300 kg de larva fresca por día, convirtiendo un pasivo ambiental en un insumo de alto valor nutricional.
                            </p>
                        </ScrollReveal>
                        <ScrollReveal className="bg-white dark:bg-forest-900 p-8 rounded-sm shadow-md border-t-4 border-gold-400 delay-200">
                            <span className="material-icons text-4xl text-forest-600 dark:text-forest-400 mb-6">trending_up</span>
                            <h3 className="text-xl font-bold text-forest-900 dark:text-white mb-3">Activo Productivo</h3>
                            <p className="text-forest-600 dark:text-gray-400 text-sm leading-relaxed">
                                Transformación del modelo de gestión: de pagar por botar residuos a generar ingresos o ahorros mediante la producción de biomasa.
                            </p>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Gallery / Impact */}
            <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-forest-200 dark:border-forest-700 rounded-sm overflow-hidden">
                    <div className="bg-forest-900 p-12 md:p-16 flex flex-col justify-center text-white">
                        <span className="material-icons text-gold-400 text-5xl mb-6">format_quote</span>
                        <blockquote className="font-display text-2xl md:text-3xl leading-relaxed italic mb-8">
                            "El proyecto permitió reducir significativamente impactos ambientales y transformar un residuo crítico en biomasa rica en proteína."
                        </blockquote>
                        <div>
                            <p className="font-bold text-lg text-gold-400">Equipo de Gestión</p>
                            <p className="text-sm text-forest-300 uppercase tracking-widest">Planta Avícola</p>
                        </div>
                    </div>
                    <div className="h-full min-h-[400px]">
                        <img 
                             src="https://lh3.googleusercontent.com/aida-public/AB6AXuBK0_TulWvmpPtLOYQEqwA187vMxt9PJ3i_0bYDsVsuizRFYfz9G5S6ZAnBhkIGtPyT7FJBcNhf7BqUO2R7kp09TAECS_kew8NypA8IWKyLPeZU5XHfQK7vIkQB_2FyaGgljDeg1IgiFOIjRg0nsUukCkiVaxLi02niqIEvHlQ1NXTtgIJI85E8t8cAc9Nd5v8H_rIO4YrLc-pH622pgE0WfVJnSD8bFIfUa8_jLxQvqqeoPxwUXSXDIRsJ0UYyRr9QZCzFsF8LMGmC" 
                             alt="Larvas procesando sustrato" 
                             className="w-full h-full object-cover"
                             loading="lazy"
                             decoding="async"
                        />
                    </div>
                 </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-gold-400 text-forest-900">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">¿Buscas una solución similar?</h2>
                    <p className="text-lg font-medium mb-10 opacity-90">
                        Convertimos tus residuos orgánicos críticos en oportunidades de negocio.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link to="/contacto" className="bg-forest-900 text-white px-8 py-4 rounded-sm font-bold uppercase tracking-widest text-xs hover:bg-forest-800 transition-colors shadow-lg">
                            Solicitar Evaluación
                        </Link>
                        <Link to="/productos#mosca" className="bg-white/20 border border-forest-900 text-forest-900 px-8 py-4 rounded-sm font-bold uppercase tracking-widest text-xs hover:bg-white/30 transition-colors">
                            Ver Tecnología BSF
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CaseAvicola;