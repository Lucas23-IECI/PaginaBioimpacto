import React from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';

const CaseVina: React.FC = () => {
    return (
        <div className="bg-forest-50 dark:bg-forest-900 min-h-screen transition-colors duration-300 pt-20">
            {/* Hero Section */}
            <header className="relative h-[70vh] min-h-[600px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img 
                        src="https://images.unsplash.com/photo-1615811361269-66924b123681?q=80&w=1920&auto=format&fit=crop" 
                        alt="Agroindustria y Frutas" 
                        className="w-full h-full object-cover filter brightness-[0.4]"
                        loading="lazy"
                        decoding="async"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-forest-900 via-transparent to-transparent"></div>
                </div>
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <ScrollReveal>
                        <div className="inline-block px-4 py-1 border border-gold-400/50 rounded-full bg-black/30 backdrop-blur-sm mb-6">
                            <span className="text-gold-400 uppercase tracking-[0.2em] text-xs font-bold">Caso de Éxito: Agroindustria</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-display text-white mb-6 leading-tight">
                            De residuos frutícolas a <br/><span className="text-gold-500 italic">biomasa comercializable</span>
                        </h1>
                        <p className="text-xl text-gray-200 font-light max-w-3xl mx-auto leading-relaxed">
                            Diseño e implementación de un sistema de bioconversión con Mosca Soldado Negra para el tratamiento de descartes frutícolas y residuos de packing.
                        </p>
                    </ScrollReveal>
                </div>
            </header>

            {/* Key Stats */}
            <section className="relative -mt-20 z-20 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="bg-white dark:bg-forest-800 rounded-sm shadow-xl shadow-forest-900/10 border border-forest-100 dark:border-forest-700 p-8 md:p-12 grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-forest-100 dark:divide-forest-700">
                        <div className="text-center pt-4 md:pt-0">
                            <span className="block text-4xl md:text-5xl font-display text-gold-500 mb-2">70%</span>
                            <span className="text-xs uppercase tracking-widest text-forest-600 dark:text-forest-300 font-bold">Reducción Volumen Residuos</span>
                        </div>
                        <div className="text-center pt-8 md:pt-0">
                            <span className="block text-4xl md:text-5xl font-display text-gold-500 mb-2">Continua</span>
                            <span className="text-xs uppercase tracking-widest text-forest-600 dark:text-forest-300 font-bold">Generación de Biomasa</span>
                        </div>
                        <div className="text-center pt-8 md:pt-0">
                            <span className="block text-4xl md:text-5xl font-display text-gold-500 mb-2">BSF</span>
                            <span className="text-xs uppercase tracking-widest text-forest-600 dark:text-forest-300 font-bold">Tecnología Aplicada</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Challenge */}
            <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
                    <div className="lg:col-span-5">
                         <div className="sticky top-32">
                            <ScrollReveal>
                                <span className="text-gold-600 dark:text-gold-400 uppercase tracking-[0.2em] text-xs font-bold mb-4 block">El Desafío</span>
                                <h2 className="text-3xl md:text-4xl font-display text-forest-900 dark:text-white mb-6">Descartes de Packing</h2>
                                <p className="text-forest-700 dark:text-gray-300 font-light text-lg mb-6 leading-relaxed">
                                    La planta de packing generaba grandes volúmenes de descarte frutícola y residuos orgánicos que eran enviados a disposición final, representando un alto costo logístico y una pérdida de recursos.
                                </p>
                                <div className="p-6 bg-forest-50 dark:bg-forest-900/50 border-l-4 border-gold-400 rounded-r-sm">
                                    <p className="italic text-forest-800 dark:text-gray-200">
                                        El sistema permitió reducir significativamente los volúmenes enviados a disposición final y transformar los residuos en biomasa rica en proteína, con potencial de venta para alimentación animal.
                                    </p>
                                </div>
                                <div className="mt-8">
                                    <p className="text-forest-900 dark:text-white font-bold text-lg flex items-center gap-2">
                                        <span className="material-icons text-gold-500">trending_up</span>
                                        Resultado Final
                                    </p>
                                    <p className="text-forest-700 dark:text-gray-300 mt-2 italic pl-8">
                                        "Menor costo operativo + nuevo activo productivo."
                                    </p>
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                    <div className="lg:col-span-7 space-y-12">
                        {/* Process Step 1 */}
                        <ScrollReveal className="flex flex-col md:flex-row gap-6 items-start">
                             <div className="w-full md:w-1/2 rounded-sm overflow-hidden shadow-lg h-64">
                                <img src="https://images.unsplash.com/photo-1610832958506-aa56368176cf?q=80&w=800&auto=format&fit=crop" alt="Residuos Frutícolas" className="w-full h-full object-cover" loading="lazy" decoding="async" />
                             </div>
                             <div className="w-full md:w-1/2">
                                <span className="text-gold-500 font-display text-5xl opacity-50 absolute -mt-8 -ml-4 z-0">01</span>
                                <h3 className="relative z-10 text-xl font-bold text-forest-900 dark:text-white mb-3 pt-2">Recepción de Descartes</h3>
                                <p className="text-forest-600 dark:text-gray-400 text-sm">
                                    Acopio y trituración de frutas de descarte provenientes de la línea de packing para facilitar la ingesta por parte de las larvas.
                                </p>
                             </div>
                        </ScrollReveal>

                        {/* Process Step 2 */}
                        <ScrollReveal className="flex flex-col md:flex-row gap-6 items-start">
                             <div className="w-full md:w-1/2 order-1 md:order-2 rounded-sm overflow-hidden shadow-lg h-64">
                                <img src="https://images.unsplash.com/photo-1596464878233-02f89f5bc79c?q=80&w=800&auto=format&fit=crop" alt="Larvas BSF" className="w-full h-full object-cover filter contrast-110" loading="lazy" decoding="async" />
                             </div>
                             <div className="w-full md:w-1/2 order-2 md:order-1">
                                <span className="text-gold-500 font-display text-5xl opacity-50 absolute -mt-8 -ml-4 z-0">02</span>
                                <h3 className="relative z-10 text-xl font-bold text-forest-900 dark:text-white mb-3 pt-2">Bioconversión con BSF</h3>
                                <p className="text-forest-600 dark:text-gray-400 text-sm">
                                    Inoculación de larvas de Mosca Soldado Negra que consumen vorazmente la materia orgánica, reduciendo su volumen en un 70% en cuestión de días.
                                </p>
                             </div>
                        </ScrollReveal>

                        {/* Process Step 3 */}
                        <ScrollReveal className="flex flex-col md:flex-row gap-6 items-start">
                             <div className="w-full md:w-1/2 rounded-sm overflow-hidden shadow-lg h-64">
                                <img src="https://images.unsplash.com/photo-1596525737525-42294f86d8b0?q=80&w=800&auto=format&fit=crop" alt="Producto Final" className="w-full h-full object-cover" loading="lazy" decoding="async" />
                             </div>
                             <div className="w-full md:w-1/2">
                                <span className="text-gold-500 font-display text-5xl opacity-50 absolute -mt-8 -ml-4 z-0">03</span>
                                <h3 className="relative z-10 text-xl font-bold text-forest-900 dark:text-white mb-3 pt-2">Cosecha de Activos</h3>
                                <p className="text-forest-600 dark:text-gray-400 text-sm">
                                    Obtención de biomasa larvaria rica en proteínas (para venta o consumo animal) y biofertilizante (frass) estable.
                                </p>
                             </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

             {/* Results Detail */}
             <section className="py-24 bg-forest-900 text-white border-y border-gold-400/20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <ScrollReveal>
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-display mb-6">Ventajas del Modelo</h2>
                            <p className="text-lg text-gray-300 font-light max-w-3xl mx-auto">
                                Transformación de un costo hundido en un flujo de ingresos mediante biotecnología.
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="p-6 border border-white/10 rounded-sm bg-white/5 hover:bg-white/10 transition-colors">
                            <span className="material-icons text-gold-400 text-3xl mb-4">delete_forever</span>
                            <h4 className="font-bold text-lg mb-2">Reducción de Volumen</h4>
                            <p className="text-sm text-gray-400">70% menos de residuos enviados a vertederos, disminuyendo drásticamente costos de transporte.</p>
                        </div>
                         <div className="p-6 border border-white/10 rounded-sm bg-white/5 hover:bg-white/10 transition-colors">
                            <span className="material-icons text-gold-400 text-3xl mb-4">pets</span>
                            <h4 className="font-bold text-lg mb-2">Proteína Animal</h4>
                            <p className="text-sm text-gray-400">Producción de larvas con alto perfil proteico, ideales para alimentación de aves o peces.</p>
                        </div>
                         <div className="p-6 border border-white/10 rounded-sm bg-white/5 hover:bg-white/10 transition-colors">
                            <span className="material-icons text-gold-400 text-3xl mb-4">recycling</span>
                            <h4 className="font-bold text-lg mb-2">Circularidad</h4>
                            <p className="text-sm text-gray-400">Cumplimiento de normativas ambientales y metas de sostenibilidad corporativa.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-forest-50 dark:bg-forest-900">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-display text-forest-900 dark:text-white font-bold mb-6">¿Generas residuos orgánicos en tu proceso?</h2>
                    <p className="text-lg text-forest-700 dark:text-gray-300 font-medium mb-10">
                        Diseñamos sistemas de Mosca Soldado Negra a la medida de tu producción agroindustrial.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link to="/contacto" className="bg-gold-400 text-forest-900 px-8 py-4 rounded-sm font-bold uppercase tracking-widest text-xs hover:bg-gold-500 transition-colors shadow-lg">
                            Evaluar mi residuo
                        </Link>
                        <Link to="/productos#mosca" className="bg-forest-900 dark:bg-forest-800 text-white px-8 py-4 rounded-sm font-bold uppercase tracking-widest text-xs hover:bg-forest-800 dark:hover:bg-forest-700 transition-colors">
                            Ver Tecnología BSF
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CaseVina;