import React, { useState, useEffect } from 'react';
import { SOCIAL_LINKS } from '../constants';

// Extend window interface for Instagram embed
declare global {
    interface Window {
        instgrm?: {
            Embeds: {
                process: () => void;
            };
        };
    }
}

const Contact: React.FC = () => {
    // Extract real data from constants
    const whatsapp = SOCIAL_LINKS.find(l => l.name === 'WhatsApp');
    const email = SOCIAL_LINKS.find(l => l.name === 'Email');

    // Formatting phone number for display (assuming standard mobile format)
    const displayPhone = "+56 9 9267 3011";

    // Process Instagram embeds when component mounts
    useEffect(() => {
        // Give time for the DOM to render, then process Instagram embeds
        const timer = setTimeout(() => {
            if (window.instgrm) {
                window.instgrm.Embeds.process();
            }
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

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
        <div className="min-h-screen relative bg-forest-50 dark:bg-forest-900 transition-colors duration-300">
            {/* Background Image removed to use Header background instead */}

            <header className="relative py-32 lg:py-48 mb-20 flex items-center justify-center text-center overflow-hidden z-10" style={{
                backgroundImage: `url('/Fotos/Background/BackgroundContacto.webp')`,
                backgroundAttachment: 'fixed',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
            }}>
                <div className="absolute inset-0 bg-forest-100/40 dark:bg-forest-900/60 backdrop-blur-[1px] transition-colors duration-300"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-forest-50 via-forest-50/20 to-transparent dark:from-forest-900 dark:via-forest-900/40 dark:to-transparent transition-colors duration-300"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <span className="text-gold-600 dark:text-gold-400 uppercase tracking-[0.3em] text-xs font-bold mb-6 block animate-pulse">Inicia la transformación</span>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-display text-forest-900 dark:text-white leading-[0.95] mb-8 drop-shadow-sm transition-colors duration-300">
                        Hablemos de <br /><span className="text-gold-500 relative inline-block">tu Proyecto</span>
                    </h1>
                    <p className="text-lg text-forest-700 dark:text-gray-300 max-w-2xl mx-auto font-light leading-relaxed transition-colors duration-300">
                        Ya sea que busques implementar un sistema de vermicompostaje o escalar una planta de bioconversión, nuestro equipo técnico está listo para asesorarte.
                    </p>
                </div>
            </header>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32 relative z-10">
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
                                    <p className="text-xl text-forest-900 dark:text-white font-medium leading-snug transition-colors duration-300">Concepción,<br />Región del Biobío, Chile</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Social Media Section */}
            <div className="w-full py-20 relative z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Section Header */}
                    <div className="text-center mb-12">
                        <span className="text-gold-600 dark:text-gold-400 uppercase tracking-[0.3em] text-xs font-bold mb-4 block">Mantente Conectado</span>
                        <h2 className="text-4xl md:text-5xl font-display text-forest-900 dark:text-white mb-4 transition-colors duration-300">
                            Síguenos en <span className="text-gold-500">Redes</span>
                        </h2>
                        <p className="text-forest-600 dark:text-gray-400 max-w-2xl mx-auto transition-colors duration-300">
                            Descubre nuestros últimos proyectos, consejos de bioconversión y novedades del mundo sustentable.
                        </p>
                    </div>

                    {/* Social Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">

                        {/* Instagram Card */}
                        <a
                            href="https://www.instagram.com/bioimpactochile/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group block"
                        >
                            <div className="bg-white dark:bg-forest-800 rounded-lg border border-forest-200 dark:border-forest-700 shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] hover:border-pink-400/50">
                                {/* Header con gradiente Instagram */}
                                <div className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 p-6">
                                    <div className="flex items-center gap-4">
                                        <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                                            <svg className="w-8 h-8 fill-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="text-white font-bold text-2xl">Instagram</h3>
                                            <p className="text-white/80">@bioimpactochile</p>
                                        </div>
                                    </div>
                                </div>
                                {/* Content */}
                                <div className="p-6">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="flex -space-x-2">
                                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-white text-xs font-bold border-2 border-white dark:border-forest-800">🐛</div>
                                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-white text-xs font-bold border-2 border-white dark:border-forest-800">🌱</div>
                                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-forest-400 to-forest-600 flex items-center justify-center text-white text-xs font-bold border-2 border-white dark:border-forest-800">♻️</div>
                                        </div>
                                        <span className="text-sm text-forest-600 dark:text-gray-400">Contenido sustentable</span>
                                    </div>
                                    <p className="text-forest-700 dark:text-gray-300 mb-4 transition-colors duration-300">
                                        📸 Proyectos en acción, tips de compostaje y la transformación de residuos orgánicos en recursos valiosos.
                                    </p>
                                    <div className="flex items-center justify-between">
                                        <span className="text-pink-500 font-semibold group-hover:text-pink-400 transition-colors flex items-center gap-2">
                                            Visitar perfil
                                            <span className="material-icons text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </a>

                        {/* Facebook Card */}
                        <a
                            href="https://www.facebook.com/profile.php?id=61556162679665"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group block"
                        >
                            <div className="bg-white dark:bg-forest-800 rounded-lg border border-forest-200 dark:border-forest-700 shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] hover:border-blue-400/50">
                                {/* Header Facebook */}
                                <div className="bg-[#1877F2] p-6">
                                    <div className="flex items-center gap-4">
                                        <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                                            <svg className="w-8 h-8 fill-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="text-white font-bold text-2xl">Facebook</h3>
                                            <p className="text-white/80">BioImpacto Chile</p>
                                        </div>
                                    </div>
                                </div>
                                {/* Content */}
                                <div className="p-6">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="flex items-center gap-2 text-sm text-forest-600 dark:text-gray-400">
                                            <span className="material-icons text-[#1877F2] text-lg">thumb_up</span>
                                            <span>Comunidad activa</span>
                                        </div>
                                    </div>
                                    <p className="text-forest-700 dark:text-gray-300 mb-4 transition-colors duration-300">
                                        🌱 Únete a nuestra comunidad sustentable. Noticias, eventos y el impacto positivo que generamos juntos.
                                    </p>
                                    <div className="flex items-center justify-between">
                                        <span className="text-[#1877F2] font-semibold group-hover:text-blue-400 transition-colors flex items-center gap-2">
                                            Visitar página
                                            <span className="material-icons text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </a>

                        {/* WhatsApp Card */}
                        <a
                            href="https://wa.me/56962470017"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group block"
                        >
                            <div className="bg-white dark:bg-forest-800 rounded-lg border border-forest-200 dark:border-forest-700 shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] hover:border-green-400/50">
                                {/* Header WhatsApp */}
                                <div className="bg-[#25D366] p-6">
                                    <div className="flex items-center gap-4">
                                        <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                                            <svg className="w-8 h-8 fill-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="text-white font-bold text-2xl">WhatsApp</h3>
                                            <p className="text-white/80">+56 9 6247 0017</p>
                                        </div>
                                    </div>
                                </div>
                                {/* Content */}
                                <div className="p-6">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="flex items-center gap-2 text-sm text-forest-600 dark:text-gray-400">
                                            <span className="material-icons text-[#25D366] text-lg">chat</span>
                                            <span>Respuesta rápida</span>
                                        </div>
                                    </div>
                                    <p className="text-forest-700 dark:text-gray-300 mb-4 transition-colors duration-300">
                                        💬 Escríbenos directamente para cotizaciones, consultas técnicas o agendar una visita.
                                    </p>
                                    <div className="flex items-center justify-between">
                                        <span className="text-[#25D366] font-semibold group-hover:text-green-400 transition-colors flex items-center gap-2">
                                            Enviar mensaje
                                            <span className="material-icons text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;