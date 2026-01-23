import React from 'react';

const Terms: React.FC = () => {
    return (
        <div className="bg-forest-50 dark:bg-forest-900 min-h-screen transition-colors duration-300 pt-20">
            <main className="flex-1 flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8 w-full max-w-5xl mx-auto">
                <div className="layout-content-container flex flex-col w-full flex-1 gap-12">
                    {/* Header */}
                    <div className="flex flex-wrap justify-between gap-3 p-4 border-b border-forest-200 dark:border-forest-700 pb-8">
                        <div className="flex min-w-72 flex-col gap-4">
                            <h1 className="text-forest-900 dark:text-white text-4xl md:text-5xl font-display font-black leading-tight tracking-tight">
                                Términos y Condiciones
                            </h1>
                            <p className="text-forest-600 dark:text-forest-300 text-base font-medium leading-normal flex items-center gap-2">
                                <span className="material-icons text-gold-500 text-sm">calendar_today</span>
                                Vigente desde: Octubre 2023
                            </p>
                        </div>
                    </div>

                    {/* Intro */}
                    <div className="px-4">
                        <p className="text-forest-700 dark:text-slate-200 text-lg font-light leading-relaxed">
                            Bienvenido a BioImpacto. Al acceder a nuestro sitio web y adquirir nuestros productos ecológicos, usted acepta estar sujeto a los siguientes términos y condiciones. Estos términos están diseñados para asegurar una experiencia transparente y segura para toda nuestra comunidad. Lea atentamente esta sección antes de continuar utilizando nuestros servicios.
                        </p>
                    </div>

                    {/* Articles */}
                    <div className="flex flex-col gap-10">
                        <article className="group bg-white dark:bg-forest-800/50 p-6 rounded-sm shadow-sm border border-forest-100 dark:border-forest-700 transition-colors duration-300">
                            <h2 className="text-gold-600 dark:text-gold-400 text-[22px] font-display font-bold leading-tight tracking-tight pb-4 flex items-center gap-3 group-hover:translate-x-1 transition-transform">
                                <span className="bg-forest-100 dark:bg-forest-900 border border-forest-200 dark:border-forest-700 text-gold-600 dark:text-gold-400 rounded-full w-8 h-8 flex items-center justify-center text-sm shadow-sm">1</span>
                                Aceptación de Términos
                            </h2>
                            <p className="text-forest-700 dark:text-slate-300 text-base font-normal leading-relaxed pl-11 border-l-2 border-forest-100 dark:border-forest-700/50">
                                Al utilizar los servicios de BioImpacto, usted confirma que ha leído, entendido y aceptado estos términos en su totalidad. Este acuerdo constituye un contrato legalmente vinculante entre usted y BioImpacto. Si no está de acuerdo con alguna parte de estos términos, le rogamos que se abstenga de utilizar nuestros servicios o realizar compras en nuestra plataforma.
                            </p>
                        </article>

                        <article className="group bg-white dark:bg-forest-800/50 p-6 rounded-sm shadow-sm border border-forest-100 dark:border-forest-700 transition-colors duration-300">
                            <h2 className="text-gold-600 dark:text-gold-400 text-[22px] font-display font-bold leading-tight tracking-tight pb-4 flex items-center gap-3 group-hover:translate-x-1 transition-transform">
                                <span className="bg-forest-100 dark:bg-forest-900 border border-forest-200 dark:border-forest-700 text-gold-600 dark:text-gold-400 rounded-full w-8 h-8 flex items-center justify-center text-sm shadow-sm">2</span>
                                Uso de los Servicios
                            </h2>
                            <div className="pl-11 border-l-2 border-forest-100 dark:border-forest-700/50 space-y-4">
                                <p className="text-forest-700 dark:text-slate-300 text-base font-normal leading-relaxed">
                                    Usted se compromete a utilizar nuestro sitio web únicamente para fines legales y de una manera que no infrinja los derechos de, restrinja o inhiba el uso y disfrute del sitio por parte de cualquier tercero. Las conductas prohibidas incluyen:
                                </p>
                                <ul className="list-none space-y-3 text-forest-700 dark:text-slate-300">
                                    <li className="flex items-start gap-3">
                                        <span className="material-icons text-gold-500 text-sm mt-1">check_circle</span>
                                        <span>Acosar o causar angustia o inconvenientes a cualquier persona.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="material-icons text-gold-500 text-sm mt-1">check_circle</span>
                                        <span>Transmitir contenido obsceno u ofensivo.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="material-icons text-gold-500 text-sm mt-1">check_circle</span>
                                        <span>Interrumpir el flujo normal de diálogo dentro de nuestro sitio.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="material-icons text-gold-500 text-sm mt-1">check_circle</span>
                                        <span>Intentar acceder sin autorización a nuestros servidores o bases de datos.</span>
                                    </li>
                                </ul>
                            </div>
                        </article>

                        <article className="group bg-white dark:bg-forest-800/50 p-6 rounded-sm shadow-sm border border-forest-100 dark:border-forest-700 transition-colors duration-300">
                            <h2 className="text-gold-600 dark:text-gold-400 text-[22px] font-display font-bold leading-tight tracking-tight pb-4 flex items-center gap-3 group-hover:translate-x-1 transition-transform">
                                <span className="bg-forest-100 dark:bg-forest-900 border border-forest-200 dark:border-forest-700 text-gold-600 dark:text-gold-400 rounded-full w-8 h-8 flex items-center justify-center text-sm shadow-sm">3</span>
                                Propiedad Intelectual
                            </h2>
                            <p className="text-forest-700 dark:text-slate-300 text-base font-normal leading-relaxed pl-11 border-l-2 border-forest-100 dark:border-forest-700/50">
                                Todo el contenido incluido en este sitio, como texto, gráficos, logotipos, iconos de botones, imágenes, clips de audio, descargas digitales y compilaciones de datos, es propiedad de BioImpacto o de sus proveedores de contenido y está protegido por las leyes internacionales de derechos de autor. La compilación de todo el contenido de este sitio es propiedad exclusiva de BioImpacto.
                            </p>
                        </article>

                        <article className="group bg-white dark:bg-forest-800/50 p-6 rounded-sm shadow-sm border border-forest-100 dark:border-forest-700 transition-colors duration-300">
                            <h2 className="text-gold-600 dark:text-gold-400 text-[22px] font-display font-bold leading-tight tracking-tight pb-4 flex items-center gap-3 group-hover:translate-x-1 transition-transform">
                                <span className="bg-forest-100 dark:bg-forest-900 border border-forest-200 dark:border-forest-700 text-gold-600 dark:text-gold-400 rounded-full w-8 h-8 flex items-center justify-center text-sm shadow-sm">4</span>
                                Limitación de Responsabilidad
                            </h2>
                            <p className="text-forest-700 dark:text-slate-300 text-base font-normal leading-relaxed pl-11 border-l-2 border-forest-100 dark:border-forest-700/50">
                                BioImpacto no será responsable de ningún daño de ningún tipo que surja del uso de este sitio o de cualquier información, contenido, materiales, productos (incluido el software) o servicios incluidos o puestos a su disposición a través de este sitio, incluidos, entre otros, daños directos, indirectos, incidentales, punitivos y consecuentes, a menos que se especifique lo contrario por escrito.
                            </p>
                        </article>

                        <article className="group bg-white dark:bg-forest-800/50 p-6 rounded-sm shadow-sm border border-forest-100 dark:border-forest-700 transition-colors duration-300">
                            <h2 className="text-gold-600 dark:text-gold-400 text-[22px] font-display font-bold leading-tight tracking-tight pb-4 flex items-center gap-3 group-hover:translate-x-1 transition-transform">
                                <span className="bg-forest-100 dark:bg-forest-900 border border-forest-200 dark:border-forest-700 text-gold-600 dark:text-gold-400 rounded-full w-8 h-8 flex items-center justify-center text-sm shadow-sm">5</span>
                                Modificaciones
                            </h2>
                            <p className="text-forest-700 dark:text-slate-300 text-base font-normal leading-relaxed pl-11 border-l-2 border-forest-100 dark:border-forest-700/50">
                                Nos reservamos el derecho de realizar cambios en nuestro sitio, políticas y estos Términos y Condiciones en cualquier momento. Si alguna de estas condiciones se considerara inválida, nula o por cualquier motivo inaplicable, esa condición se considerará separable y no afectará la validez y aplicabilidad de ninguna condición restante. Es su responsabilidad revisar esta página periódicamente para ver si hay actualizaciones.
                            </p>
                        </article>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Terms;