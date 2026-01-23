import React, { useState } from 'react';
import { SOCIAL_LINKS } from '../constants';

const Contact: React.FC = () => {
    // Extract real data from constants
    const whatsapp = SOCIAL_LINKS.find(l => l.name === 'WhatsApp');
    const email = SOCIAL_LINKS.find(l => l.name === 'Email');
    
    // Formatting phone number for display (assuming standard mobile format)
    const displayPhone = "+56 9 9267 3011"; 

    // Form State
    const [formData, setFormData] = useState({
        name: '',
        company: '',
        interest: 'Núcleos de Lombrices Californianas', // Default value matching the first option
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [id]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Construct the email body
        const subject = `Consulta Web BioImpacto: ${formData.interest}`;
        const body = `Hola equipo BioImpacto,

Me gustaría recibir información sobre lo siguiente:

------------------------------------------------
DATOS DE CONTACTO
------------------------------------------------
• Nombre: ${formData.name}
• Empresa/Campo: ${formData.company || 'No especificado'}
• Interés Principal: ${formData.interest}

------------------------------------------------
MENSAJE
------------------------------------------------
${formData.message}

------------------------------------------------
Enviado desde el formulario web de BioImpacto.`;

        // Create mailto link
        // We use encodeURIComponent to ensure special characters (newlines, accents) are handled correctly
        const mailtoLink = `mailto:contacto@bioimpacto.cl?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        // Open email client
        window.location.href = mailtoLink;
    };

    return (
        <div className="pt-32 min-h-screen relative bg-forest-50 dark:bg-forest-900 transition-colors duration-300">
             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 text-center">
                <span className="text-gold-600 dark:text-gold-400 uppercase tracking-[0.3em] text-xs font-bold mb-6 block animate-pulse">Inicia la transformación</span>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-display text-forest-900 dark:text-white leading-[0.95] mb-8 drop-shadow-sm transition-colors duration-300">
                    Hablemos de <br/><span className="text-gold-500 relative inline-block">tu Proyecto</span>
                </h1>
                <p className="text-lg text-forest-700 dark:text-gray-300 max-w-2xl mx-auto font-light leading-relaxed transition-colors duration-300">
                    Ya sea que busques implementar un sistema de vermicompostaje o escalar una planta de bioconversión, nuestro equipo técnico está listo para asesorarte.
                </p>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
                    {/* Contact Form */}
                    <div className="lg:col-span-7 order-2 lg:order-1">
                        <form onSubmit={handleSubmit} className="space-y-8 bg-white dark:bg-forest-800 p-8 md:p-12 rounded-sm border border-forest-200 dark:border-forest-700 shadow-xl shadow-forest-900/10 dark:shadow-black/20 transition-colors duration-300">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <label className="block text-xs uppercase tracking-widest font-semibold text-forest-800 dark:text-white/90 mb-2 transition-colors duration-300" htmlFor="name">Nombre Completo</label>
                                    <input 
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full bg-forest-50 dark:bg-forest-900 border-b border-forest-300 dark:border-forest-600 text-forest-900 dark:text-white px-0 py-3 focus:ring-0 focus:border-gold-500 transition-colors placeholder-forest-400 dark:placeholder-forest-700/50 outline-none" 
                                        id="name" 
                                        placeholder="Ej. Juan Pérez" 
                                        type="text" 
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs uppercase tracking-widest font-semibold text-forest-800 dark:text-white/90 mb-2 transition-colors duration-300" htmlFor="company">Empresa / Campo</label>
                                    <input 
                                        value={formData.company}
                                        onChange={handleChange}
                                        className="w-full bg-forest-50 dark:bg-forest-900 border-b border-forest-300 dark:border-forest-600 text-forest-900 dark:text-white px-0 py-3 focus:ring-0 focus:border-gold-500 transition-colors placeholder-forest-400 dark:placeholder-forest-700/50 outline-none" 
                                        id="company" 
                                        placeholder="Ej. Agrícola Santa María" 
                                        type="text" 
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-xs uppercase tracking-widest font-semibold text-forest-800 dark:text-white/90 mb-2 transition-colors duration-300" htmlFor="interest">Interés Principal</label>
                                <select 
                                    value={formData.interest}
                                    onChange={handleChange}
                                    className="w-full bg-forest-50 dark:bg-forest-900 border-b border-forest-300 dark:border-forest-600 text-forest-900 dark:text-white px-0 py-3 focus:ring-0 focus:border-gold-500 transition-colors cursor-pointer outline-none" 
                                    id="interest"
                                >
                                    <option>Núcleos de Lombrices Californianas</option>
                                    <option>Larvas de Mosca Soldado Negra</option>
                                    <option>Diseño de Planta de Compostaje</option>
                                    <option>Consultoría Técnica</option>
                                    <option>Otro</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-xs uppercase tracking-widest font-semibold text-forest-800 dark:text-white/90 mb-2 transition-colors duration-300" htmlFor="message">Mensaje</label>
                                <textarea 
                                    required
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full bg-forest-50 dark:bg-forest-900 border-b border-forest-300 dark:border-forest-600 text-forest-900 dark:text-white px-0 py-3 focus:ring-0 focus:border-gold-500 transition-colors placeholder-forest-400 dark:placeholder-forest-700/50 resize-none outline-none" 
                                    id="message" 
                                    placeholder="Cuéntanos brevemente sobre tu proyecto o duda..." 
                                    rows={4}
                                ></textarea>
                            </div>
                            <div className="pt-4">
                                <button type="submit" className="group bg-gold-400 hover:bg-gold-500 text-forest-900 font-bold py-4 px-10 rounded-sm w-full md:w-auto border border-gold-400 transition-all hover:tracking-wider uppercase text-xs tracking-widest flex items-center justify-center gap-3 shadow-lg hover:shadow-gold-400/20">
                                    Enviar Solicitud
                                    <span className="material-icons text-sm transition-transform group-hover:translate-x-1">send</span>
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Direct Channels */}
                    <div className="lg:col-span-5 flex flex-col justify-center order-1 lg:order-2">
                        <h3 className="text-3xl font-display text-forest-900 dark:text-white mb-10 transition-colors duration-300">Canales Directos</h3>
                        <div className="space-y-10">
                            {/* Phone */}
                            <div className="flex items-start gap-6 group">
                                <div className="w-12 h-12 rounded-full bg-white dark:bg-forest-800 border border-forest-200 dark:border-forest-700 flex items-center justify-center shrink-0 group-hover:bg-gold-400 transition-colors duration-300 shadow-md">
                                    <span className="material-icons text-gold-400 group-hover:text-forest-900 transition-colors">phone</span>
                                </div>
                                <div>
                                    <span className="block text-xs text-forest-500 dark:text-gray-400 uppercase tracking-widest mb-1 transition-colors duration-300">Teléfono Directo</span>
                                    <a className="text-xl text-forest-900 dark:text-white font-medium hover:text-gold-500 dark:hover:text-gold-400 transition-colors" href={whatsapp?.url || '#'}>{displayPhone}</a>
                                    <p className="text-sm text-forest-600 dark:text-gray-500 mt-1 transition-colors duration-300">Lunes a Viernes, 9am - 6pm</p>
                                </div>
                            </div>

                            {/* WhatsApp */}
                            <div className="flex items-start gap-6 group">
                                <div className="w-12 h-12 rounded-full bg-white dark:bg-forest-800 border border-forest-200 dark:border-forest-700 flex items-center justify-center shrink-0 group-hover:bg-gold-400 transition-colors duration-300 shadow-md">
                                    <svg className="w-5 h-5 fill-gold-400 group-hover:fill-forest-900 transition-colors" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"></path>
                                    </svg>
                                </div>
                                <div>
                                    <span className="block text-xs text-forest-500 dark:text-gray-400 uppercase tracking-widest mb-1 transition-colors duration-300">WhatsApp</span>
                                    <a className="text-xl text-forest-900 dark:text-white font-medium hover:text-gold-500 dark:hover:text-gold-400 transition-colors" href={whatsapp?.url || '#'}>Iniciar Chat</a>
                                    <p className="text-sm text-forest-600 dark:text-gray-500 mt-1 transition-colors duration-300">Respuesta rápida</p>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="flex items-start gap-6 group">
                                <div className="w-12 h-12 rounded-full bg-white dark:bg-forest-800 border border-forest-200 dark:border-forest-700 flex items-center justify-center shrink-0 group-hover:bg-gold-400 transition-colors duration-300 shadow-md">
                                    <span className="material-icons text-gold-400 group-hover:text-forest-900 transition-colors">mail</span>
                                </div>
                                <div>
                                    <span className="block text-xs text-forest-500 dark:text-gray-400 uppercase tracking-widest mb-1 transition-colors duration-300">Correo Electrónico</span>
                                    <a className="text-xl text-forest-900 dark:text-white font-medium hover:text-gold-500 dark:hover:text-gold-400 transition-colors" href={email?.url || '#'}>contacto@bioimpacto.cl</a>
                                </div>
                            </div>

                            {/* Location */}
                            <div className="flex items-start gap-6 group">
                                <div className="w-12 h-12 rounded-full bg-white dark:bg-forest-800 border border-forest-200 dark:border-forest-700 flex items-center justify-center shrink-0 group-hover:bg-gold-400 transition-colors duration-300 shadow-md">
                                    <span className="material-icons text-gold-400 group-hover:text-forest-900 transition-colors">location_on</span>
                                </div>
                                <div>
                                    <span className="block text-xs text-forest-500 dark:text-gray-400 uppercase tracking-widest mb-1 transition-colors duration-300">Ubicación</span>
                                    <p className="text-xl text-forest-900 dark:text-white font-medium leading-snug transition-colors duration-300">Concepción,<br/>Región del Biobío, Chile</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Functional Map Section */}
            <div className="w-full h-[600px] relative overflow-hidden bg-forest-50 dark:bg-forest-900 border-t border-forest-200 dark:border-forest-800 transition-colors duration-300">
                <iframe 
                    allowFullScreen 
                    className="w-full h-full opacity-90 hover:opacity-100 transition-all duration-700 filter grayscale-[20%] contrast-[105%] dark:grayscale-[20%] dark:invert-[90%] dark:hue-rotate-[180deg] dark:contrast-[85%] dark:opacity-80" 
                    style={{ border: 0 }}
                    height="100%" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade" 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d102237.95726101967!2d-73.12351239568916!3d-36.82701633543976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9669b5d194c77f0d%3A0x6b4f7496660630!2sConcepci%C3%B3n%2C%20B%C3%ADo%20B%C3%ADo!5e0!3m2!1sen!2scl!4v1689620000000!5m2!1sen!2scl" 
                    width="100%"
                    title="Mapa de Ubicación BioImpacto"
                >
                </iframe>
                
                {/* Animated Marker Overlay */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full z-10 flex flex-col items-center pointer-events-none">
                    <div className="bg-forest-900 border-2 border-gold-400 px-4 py-2 rounded shadow-2xl mb-2 animate-bounce">
                        <span className="font-display text-white font-bold tracking-tight text-lg">Bio<span className="text-gold-400">Impacto</span></span>
                    </div>
                    <div className="w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[14px] border-t-gold-400 filter drop-shadow-lg"></div>
                    <div className="w-4 h-1 bg-black/40 rounded-full blur-[2px] mt-1"></div>
                </div>

                {/* External Link Button */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20">
                    <a 
                        className="bg-white dark:bg-forest-900 hover:bg-gold-400 hover:text-forest-900 text-forest-900 dark:text-white font-bold py-3 px-8 rounded-full shadow-xl transition-all hover:scale-105 flex items-center gap-2 uppercase text-xs tracking-widest border border-forest-200 dark:border-white/10" 
                        href="https://www.google.com/maps/place/Concepci%C3%B3n,+B%C3%ADo+B%C3%ADo" 
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span className="material-icons text-base">map</span>
                        Abrir en Google Maps
                    </a>
                </div>
            </div> 
        </div>
    );
};

export default Contact;