import React from 'react';
import { Link } from 'react-router-dom';

const Privacy: React.FC = () => {
    return (
        <div className="bg-forest-50 dark:bg-forest-900 min-h-screen transition-colors duration-300 pt-20">
            <main className="w-full">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col lg:flex-row gap-12 lg:gap-24">
                    {/* Sidebar Navigation */}
                    <aside className="hidden lg:block w-64 flex-shrink-0">
                        <div className="sticky top-32 space-y-8">
                            <div>
                                <h2 className="text-gold-600 dark:text-gold-400 text-sm font-bold uppercase tracking-wider mb-6">Índice</h2>
                                <nav className="space-y-1 border-l border-forest-200 dark:border-white/10">
                                    <a className="group flex items-center justify-between px-4 py-2 text-sm font-medium border-l-2 border-gold-500 -ml-[2px] text-forest-900 dark:text-white bg-forest-100/50 dark:bg-white/5 rounded-r-lg transition-all" href="#intro">
                                        <span>Introducción</span>
                                    </a>
                                    <a className="group flex items-center justify-between px-4 py-2 text-sm font-medium border-l-2 border-transparent hover:border-gold-400/50 -ml-[2px] text-forest-600 dark:text-slate-400 hover:text-forest-900 dark:hover:text-white transition-all" href="#collection">
                                        <span>Recolección de Datos</span>
                                    </a>
                                    <a className="group flex items-center justify-between px-4 py-2 text-sm font-medium border-l-2 border-transparent hover:border-gold-400/50 -ml-[2px] text-forest-600 dark:text-slate-400 hover:text-forest-900 dark:hover:text-white transition-all" href="#usage">
                                        <span>Uso de la Información</span>
                                    </a>
                                    <a className="group flex items-center justify-between px-4 py-2 text-sm font-medium border-l-2 border-transparent hover:border-gold-400/50 -ml-[2px] text-forest-600 dark:text-slate-400 hover:text-forest-900 dark:hover:text-white transition-all" href="#security">
                                        <span>Seguridad de Datos</span>
                                    </a>
                                    <a className="group flex items-center justify-between px-4 py-2 text-sm font-medium border-l-2 border-transparent hover:border-gold-400/50 -ml-[2px] text-forest-600 dark:text-slate-400 hover:text-forest-900 dark:hover:text-white transition-all" href="#rights">
                                        <span>Derechos del Usuario</span>
                                    </a>
                                </nav>
                            </div>
                            <div className="p-6 rounded-sm bg-white dark:bg-forest-800 border border-forest-200 dark:border-forest-700 shadow-lg">
                                <span className="material-icons text-gold-500 mb-3 text-3xl">support_agent</span>
                                <h3 className="text-forest-900 dark:text-white font-bold mb-2">¿Tienes dudas?</h3>
                                <p className="text-sm text-forest-600 dark:text-slate-400 mb-4">Nuestro equipo legal está disponible para resolver tus inquietudes.</p>
                                <Link to="/contacto" className="inline-flex items-center text-sm font-bold text-gold-600 dark:text-gold-400 hover:text-forest-900 dark:hover:text-white transition-colors">
                                    Contactar soporte <span className="material-icons text-sm ml-1">arrow_forward</span>
                                </Link>
                            </div>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <div className="flex-1 max-w-3xl">
                        <header className="mb-16">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-400/10 text-gold-600 dark:text-gold-400 text-xs font-bold uppercase tracking-wider mb-6 border border-gold-400/20">
                                Legal
                            </div>
                            <h1 className="text-4xl md:text-5xl font-display text-forest-900 dark:text-white mb-6 leading-tight tracking-tight">
                                Política de Privacidad
                            </h1>
                            <p className="text-xl text-forest-700 dark:text-slate-300 mb-8 font-light">
                                Tu confianza es nuestra prioridad. En BioImpacto creemos en la transparencia total sobre cómo manejamos tu información.
                            </p>
                            <div className="flex items-center gap-3 text-sm text-forest-500 dark:text-slate-500 border-t border-forest-200 dark:border-white/10 pt-6">
                                <span className="material-icons text-lg">schedule</span>
                                <span>Última actualización: <strong>Octubre 2023</strong></span>
                                <span className="mx-2">•</span>
                                <span>Tiempo de lectura: <strong>5 min</strong></span>
                            </div>
                        </header>

                        <div className="space-y-12">
                            <div className="prose prose-lg max-w-none text-forest-700 dark:text-slate-300 leading-relaxed" id="intro">
                                <p>
                                    En <strong>BioImpacto</strong>, nos comprometemos a proteger su privacidad y a garantizar que sus datos personales se manejen de manera segura y transparente. Esta política detalla nuestras prácticas de recopilación, uso y divulgación de información cuando usted utiliza nuestro sitio web y servicios. Al acceder a nuestra plataforma, usted acepta las prácticas descritas en esta política.
                                </p>
                            </div>

                            <section className="bg-white dark:bg-forest-800 rounded-sm p-8 border border-forest-200 dark:border-forest-700 shadow-md scroll-mt-32 hover:border-gold-400/30 transition-colors duration-300" id="collection">
                                <div className="flex items-start gap-4 mb-6">
                                    <div className="p-3 bg-forest-100 dark:bg-forest-900 rounded-lg text-gold-600 dark:text-gold-400 border border-forest-200 dark:border-forest-700">
                                        <span className="material-icons text-2xl">storage</span>
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-display text-forest-900 dark:text-white mb-2">Recolección de Datos</h2>
                                        <p className="text-forest-500 dark:text-slate-400 text-sm">Información que recopilamos directa e indirectamente.</p>
                                    </div>
                                </div>
                                <div className="space-y-4 text-forest-700 dark:text-slate-300 leading-relaxed">
                                    <p>Recopilamos varios tipos de información para diversos fines con el fin de brindarle y mejorar nuestro servicio:</p>
                                    <ul className="list-disc pl-5 space-y-2 marker:text-gold-500">
                                        <li><strong>Datos Personales:</strong> Mientras utiliza nuestro servicio, es posible que le pidamos que nos proporcione cierta información de identificación personal que puede usarse para contactarlo o identificarlo ("Datos Personales"). Esto puede incluir su correo electrónico, nombre y número de teléfono.</li>
                                        <li><strong>Datos de Uso:</strong> También podemos recopilar información sobre cómo se accede y utiliza el servicio ("Datos de Uso"). Estos datos pueden incluir la dirección IP de su computadora, tipo de navegador, versión del navegador y las páginas que visita.</li>
                                        <li><strong>Cookies:</strong> Utilizamos cookies y tecnologías de seguimiento similares para rastrear la actividad en nuestro servicio y mantener cierta información.</li>
                                    </ul>
                                </div>
                            </section>

                            <section className="bg-white dark:bg-forest-800 rounded-sm p-8 border border-forest-200 dark:border-forest-700 shadow-md scroll-mt-32 hover:border-gold-400/30 transition-colors duration-300" id="usage">
                                <div className="flex items-start gap-4 mb-6">
                                    <div className="p-3 bg-forest-100 dark:bg-forest-900 rounded-lg text-gold-600 dark:text-gold-400 border border-forest-200 dark:border-forest-700">
                                        <span className="material-icons text-2xl">description</span>
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-display text-forest-900 dark:text-white mb-2">Uso de la Información</h2>
                                        <p className="text-forest-500 dark:text-slate-400 text-sm">Cómo utilizamos tus datos para mejorar tu experiencia.</p>
                                    </div>
                                </div>
                                <div className="space-y-4 text-forest-700 dark:text-slate-300 leading-relaxed">
                                    <p>BioImpacto utiliza los datos recopilados para diversos fines:</p>
                                    <div className="grid md:grid-cols-2 gap-4 mt-4">
                                        <div className="bg-forest-50 dark:bg-forest-900/50 p-4 rounded-sm border border-forest-200 dark:border-white/5">
                                            <h4 className="font-bold text-forest-900 dark:text-white mb-1">Mantenimiento</h4>
                                            <p className="text-sm text-forest-600 dark:text-slate-400">Para proporcionar y mantener nuestro servicio operativo 24/7.</p>
                                        </div>
                                        <div className="bg-forest-50 dark:bg-forest-900/50 p-4 rounded-sm border border-forest-200 dark:border-white/5">
                                            <h4 className="font-bold text-forest-900 dark:text-white mb-1">Notificaciones</h4>
                                            <p className="text-sm text-forest-600 dark:text-slate-400">Para notificarle sobre cambios en nuestro servicio o políticas.</p>
                                        </div>
                                        <div className="bg-forest-50 dark:bg-forest-900/50 p-4 rounded-sm border border-forest-200 dark:border-white/5">
                                            <h4 className="font-bold text-forest-900 dark:text-white mb-1">Soporte</h4>
                                            <p className="text-sm text-forest-600 dark:text-slate-400">Para proporcionar atención y soporte al cliente de manera efectiva.</p>
                                        </div>
                                        <div className="bg-forest-50 dark:bg-forest-900/50 p-4 rounded-sm border border-forest-200 dark:border-white/5">
                                            <h4 className="font-bold text-forest-900 dark:text-white mb-1">Análisis</h4>
                                            <p className="text-sm text-forest-600 dark:text-slate-400">Para recopilar análisis o información valiosa y mejorar el servicio.</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section className="bg-white dark:bg-forest-800 rounded-sm p-8 border border-forest-200 dark:border-forest-700 shadow-md scroll-mt-32 hover:border-gold-400/30 transition-colors duration-300" id="security">
                                <div className="flex items-start gap-4 mb-6">
                                    <div className="p-3 bg-forest-100 dark:bg-forest-900 rounded-lg text-gold-600 dark:text-gold-400 border border-forest-200 dark:border-forest-700">
                                        <span className="material-icons text-2xl">security</span>
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-display text-forest-900 dark:text-white mb-2">Seguridad de los Datos</h2>
                                        <p className="text-forest-500 dark:text-slate-400 text-sm">Protocolos de encriptación y protección.</p>
                                    </div>
                                </div>
                                <div className="space-y-4 text-forest-700 dark:text-slate-300 leading-relaxed">
                                    <p>
                                        La seguridad de sus datos es importante para nosotros, pero recuerde que ningún método de transmisión a través de Internet o método de almacenamiento electrónico es 100% seguro. Si bien nos esforzamos por utilizar medios comercialmente aceptables para proteger sus datos personales, no podemos garantizar su seguridad absoluta.
                                    </p>
                                    <div className="flex items-center gap-3 p-4 bg-gold-400/10 border border-gold-400/20 rounded-sm mt-4">
                                        <span className="material-icons text-gold-600 dark:text-gold-400">verified_user</span>
                                        <p className="text-sm text-gold-700 dark:text-gold-300 font-medium">Todos los datos sensibles se transmiten mediante tecnología SSL (Secure Socket Layer).</p>
                                    </div>
                                </div>
                            </section>

                            <section className="bg-white dark:bg-forest-800 rounded-sm p-8 border border-forest-200 dark:border-forest-700 shadow-md scroll-mt-32 hover:border-gold-400/30 transition-colors duration-300" id="rights">
                                <div className="flex items-start gap-4 mb-6">
                                    <div className="p-3 bg-forest-100 dark:bg-forest-900 rounded-lg text-gold-600 dark:text-gold-400 border border-forest-200 dark:border-forest-700">
                                        <span className="material-icons text-2xl">gavel</span>
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-display text-forest-900 dark:text-white mb-2">Derechos del Usuario</h2>
                                        <p className="text-forest-500 dark:text-slate-400 text-sm">Tus derechos bajo las leyes de protección de datos.</p>
                                    </div>
                                </div>
                                <div className="space-y-4 text-forest-700 dark:text-slate-300 leading-relaxed">
                                    <p>BioImpacto tiene como objetivo tomar medidas razonables para permitirle corregir, modificar, eliminar o limitar el uso de sus datos personales.</p>
                                    <p>En determinadas circunstancias, usted tiene los siguientes derechos de protección de datos:</p>
                                    <ul className="list-disc pl-5 space-y-2 marker:text-gold-500">
                                        <li>El derecho a acceder, actualizar o eliminar la información que tenemos sobre usted.</li>
                                        <li>El derecho de rectificación si esa información es inexacta o incompleta.</li>
                                        <li>El derecho a oponerse a nuestro procesamiento de sus datos personales.</li>
                                        <li>El derecho a la portabilidad de los datos, solicitando una copia de sus datos en un formato estructurado.</li>
                                    </ul>
                                    <p className="pt-4 text-sm text-forest-500 dark:text-slate-400 border-t border-forest-200 dark:border-white/5 mt-4">
                                        Para ejercer cualquiera de estos derechos, por favor contáctenos a través de nuestro formulario oficial o correo directo.
                                    </p>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Privacy;