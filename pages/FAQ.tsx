import React, { useState } from 'react';
import { SOCIAL_LINKS } from '../constants';
import ScrollReveal from '../components/ScrollReveal';

// Updated interface to accept ReactNode for rich text answers (lists, bolding, etc.)
const AccordionItem: React.FC<{ question: string; answer: React.ReactNode }> = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`group bg-white dark:bg-forest-800 border ${isOpen ? 'border-gold-400 ring-1 ring-gold-400/20' : 'border-forest-200 dark:border-forest-700'} rounded-sm overflow-hidden transition-all duration-300 shadow-sm hover:shadow-lg hover:border-gold-400/30`}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex justify-between items-center w-full text-left p-6 hover:bg-forest-50 dark:hover:bg-forest-700 transition-colors cursor-pointer select-none"
                aria-expanded={isOpen}
            >
                <span className="font-medium text-forest-900 dark:text-cream pr-4 text-sm md:text-base transition-colors duration-300">{question}</span>
                <span className={`material-symbols-outlined text-gold-600 dark:text-gold-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} style={{ fontVariationSettings: "'FILL' 0" }}>expand_more</span>
            </button>
            <div
                className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
            >
                <div className="overflow-hidden">
                    <div className="px-6 pb-8 text-forest-700 dark:text-gray-300 font-light leading-relaxed border-t border-forest-100 dark:border-forest-700 pt-4 text-sm md:text-base bg-forest-50/50 dark:bg-forest-900/30 transition-colors duration-300">
                        {answer}
                    </div>
                </div>
            </div>
        </div>
    );
};

const FAQ: React.FC = () => {
    const whatsappLink = SOCIAL_LINKS.find(l => l.name === 'WhatsApp')?.url || "#";

    return (
        <div className="bg-forest-50 dark:bg-forest-900 min-h-screen transition-colors duration-300 relative">
            {/* Background Image para toda la página */}
            <div className="fixed inset-0 z-0 overflow-hidden">
                <img
                    alt="Textura orgánica FAQ"
                    className="w-full h-full object-cover opacity-[0.08] dark:opacity-[0.15]"
                    src="/Fotos/Background/BackgroundFaq.jpg"
                />
            </div>

            {/* Header Section */}
            <div className="pt-32 pb-16 relative z-10 overflow-hidden transition-colors duration-300">
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

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative z-10">
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
                                    <AccordionItem 
                                        question="¿Cuál es la diferencia entre lombrices y mosca soldado negra?"
                                        answer={
                                            <>
                                                <p className="mb-3"><strong>Las lombrices rojas californianas</strong> son ideales para procesos de compostaje continuo, transformando residuos orgánicos en humus de alta calidad que mejora la estructura y fertilidad del suelo a largo plazo.</p>
                                                <p><strong>La mosca soldado negra</strong>, en cambio, es una solución de reducción rápida de residuos: sus larvas consumen grandes volúmenes en pocos días y generan biomasa rica en proteína, apta para alimentación animal.</p>
                                            </>
                                        }
                                    />
                                    <AccordionItem 
                                        question="¿Cómo se envían los núcleos?"
                                        answer="Utilizamos embalaje respirable con un sustrato húmedo y nutritivo que crea un microclima estable durante el transporte. Esto permite que el núcleo biológico viaje en condiciones óptimas por 7 a 10 días, e incluye garantía de supervivencia DOA (Dead on Arrival)."
                                    />
                                    <AccordionItem 
                                        question="¿Qué incluye el kit inicial?"
                                        answer={
                                            <>
                                                <p className="mb-2">Cada kit incluye:</p>
                                                <ul className="list-disc pl-5 space-y-1 marker:text-gold-500">
                                                    <li>Núcleo biológico seleccionado (lombrices o larvas)</li>
                                                    <li>Sustrato</li>
                                                    <li>Manual digital de cuidados</li>
                                                    <li>Guía de alimentación para las primeras 4 semanas</li>
                                                    <li>Acceso a nuestra comunidad de soporte técnico</li>
                                                </ul>
                                            </>
                                        }
                                    />
                                </div>
                            </ScrollReveal>
                        </section>

                        {/* Section 2: Proceso de Bioconversión */}
                        <section>
                            <ScrollReveal>
                                <div className="flex items-center gap-4 mb-8 border-b border-forest-200 dark:border-forest-700 pb-4 transition-colors duration-300">
                                    <span className="p-2 bg-gold-400/10 rounded-sm text-gold-600 dark:text-gold-400">
                                        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>recycling</span>
                                    </span>
                                    <h2 className="text-2xl font-display text-forest-900 dark:text-white transition-colors duration-300">Proceso de Bioconversión</h2>
                                </div>
                                <div className="space-y-4">
                                    <AccordionItem 
                                        question="¿Qué residuos no debo usar en el vermicompostaje doméstico?"
                                        answer={
                                            <>
                                                <p className="mb-2">En sistemas domésticos se recomienda evitar: carnes, pescados, lácteos, aceites, grasas, heces de animales carnívoros (perros y gatos) y alimentos muy ácidos en grandes cantidades (cítricos, cebolla).</p>
                                                <p>Estos residuos pueden acidificar el sistema, generar malos olores o atraer plagas.</p>
                                            </>
                                        }
                                    />
                                    <AccordionItem 
                                        question="¿Cuánto tiempo toma obtener humus?"
                                        answer={
                                            <>
                                                <p className="mb-2">El proceso completo de humificación toma entre 3 y 6 meses, dependiendo de la temperatura, humedad y tamaño de los residuos.</p>
                                                <p>En sistemas bien establecidos, es posible comenzar a cosechar lixiviado (humus líquido) a partir de las 4 a 6 semanas.</p>
                                            </>
                                        }
                                    />
                                </div>
                            </ScrollReveal>
                        </section>

                        {/* Section 3: Logística y Envíos */}
                        <section>
                            <ScrollReveal>
                                <div className="flex items-center gap-4 mb-8 border-b border-forest-200 dark:border-forest-700 pb-4 transition-colors duration-300">
                                    <span className="p-2 bg-gold-400/10 rounded-sm text-gold-600 dark:text-gold-400">
                                        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>local_shipping</span>
                                    </span>
                                    <h2 className="text-2xl font-display text-forest-900 dark:text-white transition-colors duration-300">Logística y Envíos</h2>
                                </div>
                                <div className="space-y-4">
                                    <AccordionItem 
                                        question="¿Cuáles son los plazos de despacho?"
                                        answer="Los despachos se realizan entre 2 y 5 días hábiles, según el tipo de producto y la región de destino. Nos aseguramos de tener condiciones óptimas de transporte y supervivencia."
                                    />
                                </div>
                            </ScrollReveal>
                        </section>

                        {/* Section 4: Consultoría y Acompañamiento Estratégico */}
                        <section>
                            <ScrollReveal>
                                <div className="flex items-center gap-4 mb-8 border-b border-forest-200 dark:border-forest-700 pb-4 transition-colors duration-300">
                                    <span className="p-2 bg-gold-400/10 rounded-sm text-gold-600 dark:text-gold-400">
                                        {/* Using 'psychology' for the brain/strategy icon concept */}
                                        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>psychology</span>
                                    </span>
                                    <h2 className="text-2xl font-display text-forest-900 dark:text-white transition-colors duration-300">Consultoría y Acompañamiento Estratégico</h2>
                                </div>
                                <div className="space-y-4">
                                    <AccordionItem 
                                        question="¿Ofrecen asesoría fuera de mi región?"
                                        answer={
                                            <>
                                                <p className="mb-3">Sí. Acompañamos proyectos en todo Chile, tanto de forma remota como presencial.</p>
                                                <p>Nuestro proceso comienza con un diagnóstico técnico, donde evaluamos tu tipo de residuo, volúmenes, espacio disponible y objetivos productivos o comerciales. En base a esto definimos si el proyecto es viable y qué tecnología de bioconversión se ajusta mejor, antes de coordinar la implementación en terreno.</p>
                                            </>
                                        }
                                    />
                                    <AccordionItem 
                                        question="¿Pueden diseñar sistemas con enfoque productivo o comercial?"
                                        answer={
                                            <>
                                                <p className="mb-3">Absolutamente. Desarrollamos soluciones a medida, pensadas para producir proteína, reducir costos operativos o generar un nuevo ingreso.</p>
                                                <p>Diseñamos el flujo completo del sistema, incluyendo recepción y pretratamiento de residuos, módulos de cría intensiva, cosecha de biomasa y manejo del subproducto, considerando siempre eficiencia operativa, estabilidad del proceso y potencial de escalamiento.</p>
                                            </>
                                        }
                                    />
                                    <AccordionItem 
                                        question="¿La consultoría incluye acompañamiento en la implementación?"
                                        answer="Sí. Nuestro trabajo no termina en el diseño. Acompañamos la puesta en marcha, capacitamos a tu equipo y realizamos ajustes iniciales para asegurar que el sistema funcione correctamente desde el inicio y se mantenga estable en el tiempo."
                                    />
                                    <AccordionItem 
                                        question="¿Este sistema realmente me puede generar ingresos?"
                                        answer={
                                            <>
                                                <p className="mb-2">Sí, un sistema de bioconversión puede generar ingresos cuando existe un flujo constante de residuos, una escala adecuada y un uso claro del producto final (venta de biomasa o ahorro en insumos).</p>
                                                <p>Nuestro rol es evaluar si el sistema puede transformarse en una unidad productiva rentable o para reducción de costos.</p>
                                            </>
                                        }
                                    />
                                    <AccordionItem 
                                        question="¿Cuándo empieza a ser rentable un sistema de bioconversión?"
                                        answer="Depende de la escala, el tipo de residuo y el modelo de uso. En proyectos bien diseñados, es posible ver impactos económicos positivos en los primeros meses, ya sea por reducción de costos o por valorización del producto generado."
                                    />
                                    <AccordionItem 
                                        question="¿Puedo vender la biomasa o el producto final?"
                                        answer="Sí. La biomasa generada —como larvas ricas en proteína o Lombrices Californianas— puede utilizarse para autoconsumo animal o venta."
                                    />
                                    <AccordionItem 
                                        question="¿Esto es un negocio o un complemento a mi actividad actual?"
                                        answer="Puede ser ambas cosas. Para algunos clientes es un complemento que reduce costos; para otros, una línea productiva adicional. La clave está en el diseño del sistema y en el objetivo desde el inicio."
                                    />
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