import React from 'react';
import { SOCIAL_LINKS } from '../constants';
import ScrollReveal from '../components/ScrollReveal';

const FAQ: React.FC = () => {
    const whatsappLink = SOCIAL_LINKS.find(l => l.name === 'WhatsApp')?.url || "#";

    return (
        <div className="bg-forest-50 dark:bg-forest-900 min-h-screen transition-colors duration-300">
            {/* Header Section */}
            <div className="pt-32 pb-16 bg-white dark:bg-forest-800 relative overflow-hidden border-b border-forest-100 dark:border-forest-700 transition-colors duration-300">
                <div className="absolute top-0 right-0 w-64 h-64 bg-gold-400/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-forest-100 dark:bg-forest-900/40 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2 pointer-events-none transition-colors duration-300"></div>
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <ScrollReveal>
                        <span className="block text-gold-600 dark:text-gold-400 uppercase tracking-[0.2em] text-xs font-bold mb-4">Centro de Ayuda</span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display text-forest-900 dark:text-white mb-6 transition-colors duration-300">Preguntas Frecuentes</h1>
                        <p className="text-lg text-forest-700 dark:text-cream/80 max-w-2xl mx-auto font-light leading-relaxed transition-colors duration-300">
                            Resolvemos tus dudas sobre bioconversión, manejo de núcleos y consultoría técnica. Información experta para decisiones informadas.
                        </p>
                    </ScrollReveal>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative">
                    {/* FAQ Content - Left Column */}
                    <div className="lg:col-span-8 space-y-16">
                        
                        {/* Section 1: Productos */}
                        <section>
                            <ScrollReveal>
                                <div className="flex items-center gap-4 mb-8 border-b border-forest-200 dark:border-forest-700 pb-4 transition-colors duration-300">
                                    <span className="p-2 bg-gold-400/10 rounded-sm text-gold-600 dark:text-gold-400">
                                        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>inventory_2</span>
                                    </span>
                                    <h2 className="text-2xl font-display text-forest-900 dark:text-white transition-colors duration-300">Nuestros Productos</h2>
                                </div>
                                <div className="space-y-4">
                                    <details className="group bg-white dark:bg-forest-800 border border-forest-200 dark:border-forest-700 rounded-sm overflow-hidden open:border-gold-400 open:ring-1 open:ring-gold-400/20 transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-black/20">
                                        <summary className="flex justify-between items-center cursor-pointer p-6 hover:bg-forest-50 dark:hover:bg-forest-700 transition-colors select-none">
                                            <span className="font-medium text-forest-900 dark:text-cream pr-4 text-sm md:text-base transition-colors duration-300">¿Cuál es la diferencia entre lombrices rojas y mosca soldado?</span>
                                            <span className="material-symbols-outlined text-gold-600 dark:text-gold-400 group-open:rotate-180 transition-transform duration-300" style={{ fontVariationSettings: "'FILL' 0" }}>expand_more</span>
                                        </summary>
                                        <div className="px-6 pb-8 text-forest-700 dark:text-gray-300 font-light leading-relaxed border-t border-forest-100 dark:border-forest-700 pt-4 text-sm md:text-base bg-forest-50/50 dark:bg-forest-900/30 transition-colors duration-300">
                                            Las Lombrices Rojas Californianas (Eisenia foetida) son ideales para compostaje a largo plazo, produciendo humus de alta calidad y mejorando la estructura del suelo. La Mosca Soldado Negra (Hermetia illucens), en cambio, son "trituradoras" voraces que reducen el volumen de residuos en días, generando biomasa rica en proteína para alimentación animal, aunque su residuo (frass) es distinto al humus.
                                        </div>
                                    </details>
                                    <details className="group bg-white dark:bg-forest-800 border border-forest-200 dark:border-forest-700 rounded-sm overflow-hidden open:border-gold-400 open:ring-1 open:ring-gold-400/20 transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-black/20">
                                        <summary className="flex justify-between items-center cursor-pointer p-6 hover:bg-forest-50 dark:hover:bg-forest-700 transition-colors select-none">
                                            <span className="font-medium text-forest-900 dark:text-cream pr-4 text-sm md:text-base transition-colors duration-300">¿Cómo se garantiza la supervivencia del núcleo en el envío?</span>
                                            <span className="material-symbols-outlined text-gold-600 dark:text-gold-400 group-open:rotate-180 transition-transform duration-300" style={{ fontVariationSettings: "'FILL' 0" }}>expand_more</span>
                                        </summary>
                                        <div className="px-6 pb-8 text-forest-700 dark:text-gray-300 font-light leading-relaxed border-t border-forest-100 dark:border-forest-700 pt-4 text-sm md:text-base bg-forest-50/50 dark:bg-forest-900/30 transition-colors duration-300">
                                            Utilizamos embalajes especiales respirables con sustrato húmedo enriquecido que mantiene las condiciones ideales durante el transporte. Garantizamos que el núcleo llega vivo y activo a cualquier punto de la región. Si hubiese algún problema en el transporte, reponemos el núcleo sin costo.
                                        </div>
                                    </details>
                                    <details className="group bg-white dark:bg-forest-800 border border-forest-200 dark:border-forest-700 rounded-sm overflow-hidden open:border-gold-400 open:ring-1 open:ring-gold-400/20 transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-black/20">
                                        <summary className="flex justify-between items-center cursor-pointer p-6 hover:bg-forest-50 dark:hover:bg-forest-700 transition-colors select-none">
                                            <span className="font-medium text-forest-900 dark:text-cream pr-4 text-sm md:text-base transition-colors duration-300">¿Qué incluye el Kit de Iniciación?</span>
                                            <span className="material-symbols-outlined text-gold-600 dark:text-gold-400 group-open:rotate-180 transition-transform duration-300" style={{ fontVariationSettings: "'FILL' 0" }}>expand_more</span>
                                        </summary>
                                        <div className="px-6 pb-8 text-forest-700 dark:text-gray-300 font-light leading-relaxed border-t border-forest-100 dark:border-forest-700 pt-4 text-sm md:text-base bg-forest-50/50 dark:bg-forest-900/30 transition-colors duration-300">
                                            El kit incluye el núcleo de lombrices o larvas seleccionado, una porción de sustrato activado para la inoculación inmediata, un manual digital de cuidados y acceso a nuestra línea de soporte por WhatsApp para resolver dudas durante el primer mes de instalación.
                                        </div>
                                    </details>
                                </div>
                            </ScrollReveal>
                        </section>

                         {/* Section 2: Envíos y Servicios */}
                        <section>
                            <ScrollReveal>
                                <div className="flex items-center gap-4 mb-8 border-b border-forest-200 dark:border-forest-700 pb-4 transition-colors duration-300">
                                    <span className="p-2 bg-gold-400/10 rounded-sm text-gold-600 dark:text-gold-400">
                                        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>local_shipping</span>
                                    </span>
                                    <h2 className="text-2xl font-display text-forest-900 dark:text-white transition-colors duration-300">Envíos y Servicios</h2>
                                </div>
                                <div className="space-y-4">
                                    <details className="group bg-white dark:bg-forest-800 border border-forest-200 dark:border-forest-700 rounded-sm overflow-hidden open:border-gold-400 open:ring-1 open:ring-gold-400/20 transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-black/20">
                                        <summary className="flex justify-between items-center cursor-pointer p-6 hover:bg-forest-50 dark:hover:bg-forest-700 transition-colors select-none">
                                            <span className="font-medium text-forest-900 dark:text-cream pr-4 text-sm md:text-base transition-colors duration-300">¿Realizan envíos a todo Chile?</span>
                                            <span className="material-symbols-outlined text-gold-600 dark:text-gold-400 group-open:rotate-180 transition-transform duration-300" style={{ fontVariationSettings: "'FILL' 0" }}>expand_more</span>
                                        </summary>
                                        <div className="px-6 pb-8 text-forest-700 dark:text-gray-300 font-light leading-relaxed border-t border-forest-100 dark:border-forest-700 pt-4 text-sm md:text-base bg-forest-50/50 dark:bg-forest-900/30 transition-colors duration-300">
                                            Actualmente concentramos nuestros despachos principalmente en la Región del Biobío y alrededores para garantizar la vitalidad de los núcleos. Para envíos a otras regiones, evaluamos caso a caso dependiendo de las condiciones climáticas y tiempos de transporte. Contáctanos para cotizar.
                                        </div>
                                    </details>
                                    <details className="group bg-white dark:bg-forest-800 border border-forest-200 dark:border-forest-700 rounded-sm overflow-hidden open:border-gold-400 open:ring-1 open:ring-gold-400/20 transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-black/20">
                                        <summary className="flex justify-between items-center cursor-pointer p-6 hover:bg-forest-50 dark:hover:bg-forest-700 transition-colors select-none">
                                            <span className="font-medium text-forest-900 dark:text-cream pr-4 text-sm md:text-base transition-colors duration-300">¿En qué consiste la consultoría técnica?</span>
                                            <span className="material-symbols-outlined text-gold-600 dark:text-gold-400 group-open:rotate-180 transition-transform duration-300" style={{ fontVariationSettings: "'FILL' 0" }}>expand_more</span>
                                        </summary>
                                        <div className="px-6 pb-8 text-forest-700 dark:text-gray-300 font-light leading-relaxed border-t border-forest-100 dark:border-forest-700 pt-4 text-sm md:text-base bg-forest-50/50 dark:bg-forest-900/30 transition-colors duration-300">
                                            Nuestra consultoría abarca desde el diagnóstico de sus residuos hasta el diseño e implementación de plantas de bioconversión. Visitamos su predio o empresa, dimensionamos el sistema necesario, capacitamos a su personal y realizamos seguimiento para asegurar el éxito del proceso.
                                        </div>
                                    </details>
                                </div>
                            </ScrollReveal>
                        </section>

                    </div>

                    {/* Contact Sidebar - Right Column */}
                    <div className="lg:col-span-4 relative">
                        <div className="sticky top-32 space-y-6">
                            <div className="bg-white dark:bg-forest-800 p-8 rounded-sm border border-forest-200 dark:border-forest-700 shadow-lg transition-colors duration-300">
                                <h3 className="text-xl font-display text-forest-900 dark:text-white mb-4 transition-colors duration-300">¿No encuentras tu respuesta?</h3>
                                <p className="text-forest-700 dark:text-gray-300 text-sm font-light mb-6 transition-colors duration-300">
                                    Nuestro equipo técnico está disponible para responder dudas específicas sobre tu proyecto.
                                </p>
                                <a 
                                    href={whatsappLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full bg-gold-400 hover:bg-gold-500 text-forest-900 font-bold py-3 px-6 rounded-sm transition-all uppercase text-xs tracking-widest flex items-center justify-center gap-2 mb-4"
                                >
                                    Contactar por WhatsApp
                                </a>
                                <a 
                                    href="/contacto"
                                    className="w-full bg-forest-50 dark:bg-forest-900 hover:bg-forest-100 dark:hover:bg-forest-800 text-forest-900 dark:text-white border border-forest-200 dark:border-forest-600 font-medium py-3 px-6 rounded-sm transition-all uppercase text-xs tracking-widest flex items-center justify-center gap-2"
                                >
                                    Formulario Web
                                </a>
                            </div>

                            <div className="bg-forest-900 dark:bg-black p-8 rounded-sm shadow-lg text-white relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-gold-400/20 rounded-full blur-2xl group-hover:bg-gold-400/30 transition-colors duration-300"></div>
                                <span className="relative z-10 material-icons text-gold-400 text-3xl mb-4">school</span>
                                <h3 className="relative z-10 text-xl font-display mb-2">Manual de Cuidados</h3>
                                <p className="relative z-10 text-white/70 text-sm font-light mb-6">
                                    Descarga nuestra guía básica digital para el manejo de núcleos de lombriz.
                                </p>
                                <button className="relative z-10 text-gold-400 uppercase text-xs font-bold tracking-widest hover:text-white transition-colors flex items-center gap-2">
                                    Descargar PDF <span className="material-icons text-sm">download</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;