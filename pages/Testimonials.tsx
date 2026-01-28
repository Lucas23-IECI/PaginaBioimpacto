import React, { useState, useRef } from 'react';
import ScrollReveal from '../components/ScrollReveal';
import Toast from '../components/Toast';
import { Link } from 'react-router-dom';

// --- Helper Components ---

interface StarRatingProps {
    rating: number;
    size?: string;
    interactive?: boolean;
    onRate?: (rating: number) => void;
}

const StarRating: React.FC<StarRatingProps> = ({ rating, size = "text-sm", interactive = false, onRate }) => {
    const [hoverRating, setHoverRating] = useState(0);

    return (
        <div
            className={`flex gap-1 ${interactive ? 'cursor-pointer' : ''}`}
            aria-label={`Calificación: ${rating} de 5 estrellas`}
            onMouseLeave={() => interactive && setHoverRating(0)}
        >
            {[1, 2, 3, 4, 5].map((star) => {
                // Determine fill based on hover (if interactive) or actual rating
                const effectiveRating = interactive && hoverRating > 0 ? hoverRating : rating;

                const isFull = effectiveRating >= star;
                const isHalf = effectiveRating >= star - 0.5 && effectiveRating < star;

                return (
                    <span
                        key={star}
                        className={`material-icons ${size} transition-colors duration-200 ${isFull || isHalf ? 'text-gold-500' : 'text-forest-200 dark:text-forest-600'}`}
                        onMouseEnter={() => interactive && setHoverRating(star)}
                        onClick={() => interactive && onRate && onRate(star)}
                    >
                        {isFull ? 'star' : isHalf ? 'star_half' : 'star'}
                        {/* Note: using 'star' for empty in interactive mode looks better for filling up, using CSS color to distinguish */}
                    </span>
                );
            })}
        </div>
    );
};

interface ExpandableTextProps {
    text: string;
    limit?: number;
    className?: string;
    isQuote?: boolean;
}

const ExpandableText: React.FC<ExpandableTextProps> = ({ text, limit = 120, className = "", isQuote = false }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const shouldTruncate = text.length > limit;

    const content = isExpanded ? text : (shouldTruncate ? text.substring(0, limit) + "..." : text);
    const displayContent = isQuote ? `"${content}"` : content;

    return (
        <div className="flex flex-col items-start h-full">
            <p className={`${className} transition-all duration-300`}>
                {displayContent}
            </p>
            {shouldTruncate && (
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        setIsExpanded(!isExpanded);
                    }}
                    className="text-gold-600 dark:text-gold-400 text-[10px] font-bold uppercase tracking-widest mt-3 hover:text-forest-900 dark:hover:text-white transition-colors focus:outline-none border-b border-transparent hover:border-gold-400 pb-0.5 inline-block"
                    aria-expanded={isExpanded}
                >
                    {isExpanded ? 'Leer menos' : 'Leer más'}
                </button>
            )}
        </div>
    );
};

// --- Main Component ---

const Testimonials: React.FC = () => {
    const [toast, setToast] = useState<{ show: boolean; message: string }>({ show: false, message: '' });

    // Pagination State
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 3;
    const testimonialsListRef = useRef<HTMLDivElement>(null);

    // Form State
    const [formData, setFormData] = useState({
        name: '',
        company: '',
        rating: 0,
        message: ''
    });
    const [formErrors, setFormErrors] = useState({
        name: '',
        rating: '',
        message: ''
    });

    const [showShareModal, setShowShareModal] = useState(false);
    const [shareDataState, setShareDataState] = useState({ text: '', url: '' });

    const handleShare = async (text: string, author: string) => {
        const currentUrl = window.location.href;
        const shareText = `"${text}" - ${author}`;
        const shareData = {
            title: 'Testimonio BioImpacto',
            text: shareText,
            url: currentUrl
        };

        // Try Web Share API first
        if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
            try {
                await navigator.share(shareData);
            } catch (err) {
                if ((err as Error).name !== 'AbortError') {
                    setShareDataState({ text: shareText, url: currentUrl });
                    setShowShareModal(true);
                }
            }
        } else {
            // Fallback for desktop/unsupported
            setShareDataState({ text: shareText, url: currentUrl });
            setShowShareModal(true);
        }
    };

    // Data for Grid Testimonials (Expanded for Pagination)
    const testimonials = [
        {
            id: 1,
            text: "Increíble el rendimiento de la mosca soldado negra para procesar los desechos de nuestra planta de packing. Pasamos de pagar por el retiro de basura a generar proteína. Es un cambio de paradigma total para nuestra operación.",
            author: "",
            role: "Agroindustrial del Sur",
            initials: "",
            rating: 5
        },
        {
            id: 2,
            text: "Partimos buscando una forma de reducir residuos y terminamos montando un sistema que hoy produce biomasa rica en proteína para alimentación animal. Pasamos de botar residuos a generar un producto con valor comercial.",
            author: "",
            role: "Tiene un campo y alimenta a sus animales con biomasa",
            initials: "",
            rating: 5
        },
        {
            id: 3,
            text: "La asesoría fue clave. No solo nos entregaron los núcleos, nos enseñaron a operar el sistema, a mantenerlo estable y a escalarlo. Hoy el sistema funciona de forma continua y controlada.",
            author: "",
            role: "Compró lombrices para reducir sus residuos orgánicos",
            initials: "",
            rating: 5
        },
        {
            id: 4,
            text: "Hoy producimos parte del alimento proteico para nuestros animales a partir de residuos propios. Bajamos costos y dejamos de depender completamente de proveedores externos.",
            author: "",
            role: "Productor piscicultor",
            initials: "",
            rating: 5
        }
    ];

    // Pagination Logic
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentTestimonials = testimonials.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(testimonials.length / itemsPerPage);

    const paginate = (pageNumber: number) => {
        setCurrentPage(pageNumber);
        if (testimonialsListRef.current) {
            const headerOffset = 120; // Adjust for sticky header
            const elementPosition = testimonialsListRef.current.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    };

    // Form Handlers
    const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        // Clear error when user starts typing
        if (formErrors[name as keyof typeof formErrors]) {
            setFormErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const handleRatingChange = (rating: number) => {
        setFormData(prev => ({ ...prev, rating }));
        if (formErrors.rating) {
            setFormErrors(prev => ({ ...prev, rating: '' }));
        }
    };

    const validateForm = () => {
        let valid = true;
        let errors = { name: '', rating: '', message: '' };

        if (!formData.name.trim()) {
            errors.name = 'Por favor ingresa tu nombre.';
            valid = false;
        }

        if (formData.rating === 0) {
            errors.rating = 'Por favor selecciona una calificación.';
            valid = false;
        }

        if (!formData.message.trim()) {
            errors.message = 'Por favor escribe tu testimonio.';
            valid = false;
        }

        setFormErrors(errors);
        return valid;
    };

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Perform validation synchronously
        const submissionErrors = { name: '', rating: '', message: '' };
        let hasError = false;

        // Name validation
        if (/\d/.test(formData.name)) {
            submissionErrors.name = 'El nombre no puede contener números.';
            hasError = true;
        }
        if (!formData.name.trim()) {
            submissionErrors.name = 'Por favor ingresa tu nombre.';
            hasError = true;
        }

        // Company validation (toast only, as per previous requirement/constraints)
        if (formData.company && (formData.company.match(/\d/g) || []).length > 2) {
            setToast({ show: true, message: 'Error: La empresa no puede tener más de 2 números.' });
            return; // Stop immediately
        }

        // Message validation
        if (formData.message.length < 20) {
            submissionErrors.message = 'Tu testimonio es muy corto (mínimo 20 caracteres).';
            hasError = true;
        }
        if (!formData.message.trim()) {
            submissionErrors.message = 'Por favor escribe tu testimonio.';
            hasError = true;
        }

        // Rating validation
        if (formData.rating === 0) {
            submissionErrors.rating = 'Por favor selecciona una calificación.';
            hasError = true;
        }

        setFormErrors(submissionErrors);

        if (hasError) {
            const firstMsg = submissionErrors.name || submissionErrors.rating || submissionErrors.message;
            setToast({ show: true, message: `Error: ${firstMsg}` });
            return;
        }

        const subject = `Testimonio: ${formData.name}`;
        const body = `Hola equipo BioImpacto,

Quiero dejar mi testimonio sobre sus servicios.

Soy ${formData.name} de ${formData.company || 'mi proyecto personal'}.
Calificación: ${formData.rating} estrellas.

Mi testimonio:
"${formData.message}"

Saludos,
${formData.name}`;

        window.location.href = `mailto:contacto@bioimpacto.cl?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        setTimeout(() => {
            setToast({ show: true, message: 'Abriendo tu cliente de correo...' });
            setFormData({ name: '', company: '', rating: 0, message: '' });
            setFormErrors({ name: '', rating: '', message: '' });
        }, 500);

    };

    return (
        <div className="bg-forest-50 dark:bg-forest-900 min-h-screen text-forest-900 dark:text-cream transition-colors duration-300 relative">
            {/* Background Image para toda la página */}
            {/* Background Texture for Body Content */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-[url('/Fotos/Background/BackgroundTestimonios2.webp')] bg-cover bg-center opacity-[0.03] dark:opacity-[0.05] bg-fixed mix-blend-multiply dark:mix-blend-overlay"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-forest-50/50 to-forest-50/80 dark:via-forest-900/50 dark:to-forest-900/80"></div>
            </div>

            <Toast
                isVisible={toast.show}
                message={toast.message}
                onClose={() => setToast({ ...toast, show: false })}
            />

            {/* Share Modal Fallback */}
            {showShareModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in" onClick={() => setShowShareModal(false)}>
                    <div className="bg-white dark:bg-forest-800 rounded-sm shadow-2xl max-w-sm w-full p-6 border border-forest-100 dark:border-forest-700 transform scale-100 transition-all" onClick={e => e.stopPropagation()}>
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-xl font-display text-forest-900 dark:text-white">Compartir Testimonio</h3>
                            <button onClick={() => setShowShareModal(false)} className="text-forest-400 hover:text-forest-600 dark:hover:text-forest-200">
                                <span className="material-icons">close</span>
                            </button>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <a
                                href={`https://wa.me/?text=${encodeURIComponent(shareDataState.text + ' ' + shareDataState.url)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex flex-col items-center justify-center p-4 rounded-sm bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#25D366] transition-colors gap-2"
                            >
                                <span className="material-icons text-3xl">chat</span>
                                <span className="text-sm font-bold">WhatsApp</span>
                            </a>
                            <a
                                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareDataState.text)}&url=${encodeURIComponent(shareDataState.url)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex flex-col items-center justify-center p-4 rounded-sm bg-[#1DA1F2]/10 hover:bg-[#1DA1F2]/20 text-[#1DA1F2] transition-colors gap-2"
                            >
                                <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current opacity-80" aria-hidden="true">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                </svg>
                                <span className="text-sm font-bold">Twitter / X</span>
                            </a>
                            <a
                                href={`mailto:?subject=Testimonio BioImpacto&body=${encodeURIComponent(shareDataState.text + '\n\n' + shareDataState.url)}`}
                                className="flex flex-col items-center justify-center p-4 rounded-sm bg-forest-500/10 hover:bg-forest-500/20 text-forest-600 dark:text-forest-400 transition-colors gap-2"
                            >
                                <span className="material-icons text-3xl">email</span>
                                <span className="text-sm font-bold">Email</span>
                            </a>
                            <button
                                onClick={async () => {
                                    try {
                                        await navigator.clipboard.writeText(`${shareDataState.text}\n\n${shareDataState.url}`);
                                        setToast({ show: true, message: '¡Copiado!' });
                                        setShowShareModal(false);
                                    } catch (e) {
                                        setToast({ show: true, message: 'Error al copiar' });
                                    }
                                }}
                                className="flex flex-col items-center justify-center p-4 rounded-sm bg-gold-400/10 hover:bg-gold-400/20 text-gold-600 dark:text-gold-400 transition-colors gap-2"
                            >
                                <span className="material-icons text-3xl">content_copy</span>
                                <span className="text-sm font-bold">Copiar</span>
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <header className="relative py-32 lg:py-48 overflow-hidden z-10 flex items-center justify-center" style={{
                backgroundImage: `url('/Fotos/Background/BackgroundTestimonios2.webp')`,
                backgroundAttachment: 'fixed',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
            }}>
                <div className="absolute inset-0 bg-forest-100/40 dark:bg-forest-900/60 backdrop-blur-[1px] transition-colors duration-300"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-forest-50 via-forest-50/20 to-transparent dark:from-forest-900 dark:via-forest-900/40 dark:to-transparent transition-colors duration-300"></div>
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <ScrollReveal>
                        <div className="max-w-4xl mx-auto">
                            <span className="block text-gold-600 dark:text-gold-400 uppercase tracking-[0.3em] text-xs font-bold mb-6">Testimonios & Casos de Éxito</span>
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display text-forest-900 dark:text-cream leading-[0.95] mb-6 drop-shadow-lg transition-colors duration-300">
                                Resultados que <br /><span className="italic text-gold-500 text-shadow-gold">Transforman</span>
                            </h1>
                            <p className="text-lg text-forest-700 dark:text-gray-300 max-w-2xl mx-auto font-light leading-relaxed transition-colors duration-300">
                                Historias reales de productores y empresas que han revolucionado su gestión de residuos y rentabilidad con nuestras soluciones.
                            </p>
                        </div>
                    </ScrollReveal>
                </div>
            </header>

            <section className="py-24 relative z-10 transition-colors duration-300">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="mb-20">
                        <ScrollReveal>
                            <div className="bg-white dark:bg-forest-800 border border-forest-200 dark:border-forest-700 rounded-sm overflow-hidden grid md:grid-cols-2 shadow-2xl shadow-forest-900/10 dark:shadow-black/40 transition-colors duration-300">
                                <div className="relative group min-h-[400px]">
                                    <img
                                        alt="Martin Muñoz - Fundador BioImpacto"
                                        loading="lazy"
                                        decoding="async"
                                        className="absolute inset-0 w-full h-full object-cover rounded-sm"
                                        src="/Fotos/Testimonio/FotoMartin.jpg"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-forest-900/80 via-transparent to-transparent opacity-60"></div>
                                </div>
                                <div className="p-10 md:p-14 flex flex-col justify-center">
                                    <div className="flex items-center justify-between mb-6">
                                        <div className="flex items-center gap-4">
                                            <img
                                                alt="Martin Muñoz"
                                                loading="lazy"
                                                decoding="async"
                                                className="w-12 h-12 rounded-full border-2 border-gold-400 shadow-sm object-cover"
                                                src="/Fotos/Testimonio/PerfilMartin.jpg"
                                            />
                                            <div>
                                                <h4 className="text-forest-900 dark:text-cream font-display text-xl transition-colors duration-300">Martin Muñoz</h4>
                                                <p className="text-gold-600 dark:text-gold-400 text-xs uppercase tracking-widest font-bold">FOUNDER BIOIMPACTO</p>
                                            </div>
                                        </div>
                                        <button
                                            onClick={() => handleShare("Mi visión es transformar la gestión de residuos en Chile. No solo se trata de reciclar, sino de crear valor real: recuperar suelos degradados y generar proteína sostenible para el futuro de la agricultura.", "Martin Muñoz")}
                                            className="text-forest-300 dark:text-forest-600 hover:text-gold-500 dark:hover:text-gold-400 transition-colors p-2 rounded-full hover:bg-forest-50 dark:hover:bg-forest-700/50"
                                            aria-label="Compartir testimonio"
                                        >
                                            <span className="material-icons">share</span>
                                        </button>
                                    </div>
                                    <blockquote className="text-2xl text-forest-800 dark:text-gray-200 font-serif italic mb-8 relative leading-relaxed transition-colors duration-300">
                                        <span className="absolute -top-4 -left-2 text-6xl text-gold-400/20 font-serif">"</span>
                                        <ExpandableText
                                            text="Mi visión es transformar la gestión de residuos en Chile. No solo se trata de reciclar, sino de crear valor real: recuperar suelos degradados y generar proteína sostenible para el futuro de la agricultura."
                                            limit={150}
                                        />
                                    </blockquote>
                                    <div className="mb-2">
                                        <StarRating rating={5} />
                                    </div>
                                    <p className="text-sm text-forest-600 dark:text-gray-400 font-light">Gestión de Residuos & Bioconversión</p>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>

                    <ScrollReveal>
                        <div ref={testimonialsListRef} className="scroll-mt-32">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 min-h-[500px]">
                                {currentTestimonials.map((t) => (
                                    <div key={t.id} className="bg-white/90 dark:bg-forest-800/90 backdrop-blur-sm border border-forest-200 dark:border-forest-700 p-8 rounded-sm shadow-lg hover:shadow-2xl hover:border-gold-400/30 transition-all duration-300 flex flex-col h-full group animate-fade-in">
                                        <div className="flex justify-between items-start mb-6">
                                            <StarRating rating={t.rating} />
                                            <span className="material-icons text-forest-200 dark:text-forest-600 group-hover:text-gold-400/20 transition-colors text-4xl">format_quote</span>
                                        </div>
                                        <div className="flex-grow mb-8">
                                            <ExpandableText
                                                text={t.text}
                                                className="text-forest-700 dark:text-gray-300 font-light leading-relaxed"
                                                limit={130}
                                                isQuote={true}
                                            />
                                        </div>
                                        <div className="flex items-center justify-between border-t border-forest-100 dark:border-forest-700 pt-6 mt-auto">
                                            <div className="flex items-center gap-4">
                                                {t.initials && (
                                                    <div className="w-10 h-10 bg-forest-100 dark:bg-forest-700 rounded-full flex items-center justify-center text-gold-600 dark:text-gold-400 font-bold border border-forest-200 dark:border-forest-600 transition-colors duration-300">
                                                        {t.initials}
                                                    </div>
                                                )}
                                                <div>
                                                    {t.author && <h5 className="text-forest-900 dark:text-cream font-medium text-sm transition-colors duration-300">{t.author}</h5>}
                                                    <p className="text-xs text-forest-500 dark:text-gray-500 uppercase tracking-wide">{t.role}</p>
                                                </div>
                                            </div>
                                            <button
                                                onClick={() => handleShare(t.text, t.author)}
                                                className="text-forest-300 dark:text-forest-600 hover:text-gold-500 dark:hover:text-gold-400 transition-colors p-2 rounded-full hover:bg-forest-50 dark:hover:bg-forest-700/50"
                                                aria-label="Compartir testimonio"
                                            >
                                                <span className="material-icons text-lg">share</span>
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Pagination Controls */}
                            {testimonials.length > itemsPerPage && (
                                <div className="flex flex-col items-center gap-6 mb-24">
                                    {/* Page Indicators (Dots) */}
                                    <div className="flex justify-center gap-3">
                                        {Array.from({ length: totalPages }).map((_, idx) => (
                                            <button
                                                key={idx}
                                                onClick={() => paginate(idx + 1)}
                                                className={`h-2.5 rounded-full transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-gold-400/50 ${currentPage === idx + 1
                                                    ? 'w-8 bg-gold-400'
                                                    : 'w-2.5 bg-forest-200 dark:bg-forest-700 hover:bg-gold-300'
                                                    }`}
                                                aria-label={`Ir a página ${idx + 1}`}
                                            />
                                        ))}
                                    </div>

                                    {/* Navigation Buttons */}
                                    <div className="flex justify-center items-center gap-6">
                                        <button
                                            onClick={() => paginate(currentPage - 1)}
                                            disabled={currentPage === 1}
                                            className={`flex items-center gap-2 px-6 py-3 rounded-sm border transition-all uppercase text-xs font-bold tracking-widest ${currentPage === 1
                                                ? 'border-forest-100 dark:border-forest-700 text-forest-300 dark:text-forest-600 cursor-not-allowed'
                                                : 'border-forest-300 dark:border-forest-500 text-forest-700 dark:text-white hover:bg-gold-400 hover:text-forest-900 hover:border-gold-400'
                                                }`}
                                        >
                                            <span className="material-icons text-base">arrow_back</span>
                                            Anterior
                                        </button>
                                        <span className="text-sm font-medium text-forest-500 dark:text-forest-400">
                                            Página {currentPage} de {totalPages}
                                        </span>
                                        <button
                                            onClick={() => paginate(currentPage + 1)}
                                            disabled={currentPage === totalPages}
                                            className={`flex items-center gap-2 px-6 py-3 rounded-sm border transition-all uppercase text-xs font-bold tracking-widest ${currentPage === totalPages
                                                ? 'border-forest-100 dark:border-forest-700 text-forest-300 dark:text-forest-600 cursor-not-allowed'
                                                : 'border-forest-300 dark:border-forest-500 text-forest-700 dark:text-white hover:bg-gold-400 hover:text-forest-900 hover:border-gold-400'
                                                }`}
                                        >
                                            Siguiente
                                            <span className="material-icons text-base">arrow_forward</span>
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </ScrollReveal>

                    <div className="mb-24">
                        <ScrollReveal>
                            <div className="text-center mb-16">
                                <span className="text-gold-600 dark:text-gold-400 uppercase tracking-[0.2em] text-xs font-bold mb-4 block">Impacto Real</span>
                                <h2 className="text-3xl md:text-5xl font-display text-forest-900 dark:text-cream mb-6 transition-colors duration-300">Casos de Éxito</h2>
                                <div className="w-16 h-1 bg-gold-400 mx-auto"></div>
                            </div>
                            <div className="space-y-8">
                                {/* Case 1: Avícola */}
                                <div className="bg-white/90 dark:bg-forest-800/90 backdrop-blur-sm border border-forest-200 dark:border-forest-700 p-8 rounded-sm hover:shadow-2xl hover:border-forest-400 dark:hover:border-forest-600 transition-all duration-300 group shadow-lg">
                                    <div className="flex flex-col md:flex-row gap-8 items-center">
                                        <div className="w-full md:w-1/3">
                                            <div className="aspect-video bg-forest-100 dark:bg-forest-900 overflow-hidden relative rounded-sm shadow-inner border border-forest-200 dark:border-forest-700">
                                                <img
                                                    alt="Caso Avícola"
                                                    loading="lazy"
                                                    decoding="async"
                                                    className="w-full h-full object-cover opacity-90 dark:opacity-80 group-hover:opacity-100 transition-opacity"
                                                    src="/Fotos/Testimonio/1.png"
                                                />
                                                <div className="absolute top-4 left-4 bg-white/90 dark:bg-forest-900/90 backdrop-blur text-gold-600 dark:text-gold-400 text-[10px] font-bold px-3 py-1 uppercase tracking-widest rounded-sm shadow-md border border-gold-400/20">Avícola</div>
                                            </div>
                                        </div>
                                        <div className="w-full md:w-2/3">
                                            <div className="flex justify-between items-start mb-2">
                                                <h3 className="text-2xl font-display text-forest-900 dark:text-cream mb-0 transition-colors duration-300">De residuo avícola a proteína comercializable</h3>
                                                <button
                                                    onClick={() => handleShare("Transformamos un residuo crítico en biomasa rica en proteína. Problema resuelto + nuevo activo productivo.", "Caso Avícola")}
                                                    className="text-forest-300 dark:text-forest-600 hover:text-gold-500 dark:hover:text-gold-400 transition-colors p-2 rounded-full hover:bg-forest-50 dark:hover:bg-forest-700/50"
                                                    aria-label="Compartir caso"
                                                >
                                                    <span className="material-icons">share</span>
                                                </button>
                                            </div>
                                            <div className="mb-4">
                                                <StarRating rating={5} />
                                            </div>
                                            <div className="mb-6">
                                                <ExpandableText
                                                    text="Implementación de un sistema de bioconversión con Mosca Soldado Negra para el tratamiento de 2 toneladas mensuales de guano avícola. El proyecto permitió reducir significativamente impactos ambientales y transformar un residuo crítico en biomasa rica en proteína, utilizable para alimentación animal y con potencial de comercialización."
                                                    className="text-forest-700 dark:text-gray-300 font-light"
                                                    limit={200}
                                                />
                                            </div>
                                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                                                <li className="flex items-center gap-3 text-sm text-forest-700 dark:text-gray-300 transition-colors duration-300">
                                                    <span className="material-icons text-gold-500 text-sm">check_circle</span>
                                                    <span>Reducción de olores en un 95%</span>
                                                </li>
                                                <li className="flex items-center gap-3 text-sm text-forest-700 dark:text-gray-300 transition-colors duration-300">
                                                    <span className="material-icons text-gold-500 text-sm">check_circle</span>
                                                    <span>Producción promedio de 300 kg de larva al mes</span>
                                                </li>
                                            </ul>
                                            <div className="bg-gold-400/10 border border-gold-400/30 p-3 rounded-sm mb-6 inline-block">
                                                <p className="text-xs font-bold text-gold-600 dark:text-gold-400 uppercase tracking-wider flex items-center gap-2">
                                                    <span className="material-icons text-sm">trending_up</span>
                                                    Resultado: problema resuelto + nuevo activo productivo.
                                                </p>
                                            </div>
                                            <br />
                                            <Link
                                                to="/casos/avicola-el-monte"
                                                className="text-forest-500 dark:text-forest-400 text-xs font-bold uppercase tracking-widest hover:text-forest-900 dark:hover:text-white transition-colors inline-flex items-center gap-2"
                                            >
                                                Leer caso completo <span className="material-icons text-sm">arrow_forward</span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                {/* Case 2: Frutícola / Packing (Formerly Vineyard) */}
                                <div className="bg-white/90 dark:bg-forest-800/90 backdrop-blur-sm border border-forest-200 dark:border-forest-700 p-8 rounded-sm hover:shadow-2xl hover:border-forest-400 dark:hover:border-forest-600 transition-all duration-300 group shadow-lg">
                                    <div className="flex flex-col md:flex-row gap-8 items-center">
                                        <div className="w-full md:w-1/3">
                                            <div className="aspect-video bg-forest-100 dark:bg-forest-900 overflow-hidden relative rounded-sm shadow-inner border border-forest-200 dark:border-forest-700">
                                                <img
                                                    alt="Caso Frutícola"
                                                    loading="lazy"
                                                    decoding="async"
                                                    className="w-full h-full object-cover opacity-90 dark:opacity-80 group-hover:opacity-100 transition-opacity"
                                                    src="/Fotos/Testimonio/primero del segundo.png"
                                                />
                                                <div className="absolute top-4 left-4 bg-white/90 dark:bg-forest-900/90 backdrop-blur text-gold-600 dark:text-gold-400 text-[10px] font-bold px-3 py-1 uppercase tracking-widest rounded-sm shadow-md border border-gold-400/20">Agroindustria</div>
                                            </div>
                                        </div>
                                        <div className="w-full md:w-2/3">
                                            <div className="flex justify-between items-start mb-2">
                                                <h3 className="text-2xl font-display text-forest-900 dark:text-cream mb-0 transition-colors duration-300">De residuos frutícolas a biomasa comercializable</h3>
                                                <button
                                                    onClick={() => handleShare("Transformamos descartes frutícolas en biomasa rica en proteína. Menor costo operativo + nuevo activo productivo.", "Caso Frutícola")}
                                                    className="text-forest-300 dark:text-forest-600 hover:text-gold-500 dark:hover:text-gold-400 transition-colors p-2 rounded-full hover:bg-forest-50 dark:hover:bg-forest-700/50"
                                                    aria-label="Compartir caso"
                                                >
                                                    <span className="material-icons">share</span>
                                                </button>
                                            </div>
                                            <div className="mb-4">
                                                <StarRating rating={5} />
                                            </div>
                                            <div className="mb-6">
                                                <ExpandableText
                                                    text="Diseño e implementación de un sistema de bioconversión con Mosca Soldado Negra para el tratamiento de descartes frutícolas y residuos orgánicos del proceso de packing. El sistema permitió reducir significativamente los volúmenes enviados a disposición final y transformar los residuos en biomasa rica en proteína, con potencial de venta para alimentación animal."
                                                    className="text-forest-700 dark:text-gray-300 font-light"
                                                    limit={200}
                                                />
                                            </div>
                                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                                                <li className="flex items-center gap-3 text-sm text-forest-700 dark:text-gray-300 transition-colors duration-300">
                                                    <span className="material-icons text-gold-500 text-sm">check_circle</span>
                                                    <span>Reducción del volumen de residuos en un 70%</span>
                                                </li>
                                                <li className="flex items-center gap-3 text-sm text-forest-700 dark:text-gray-300 transition-colors duration-300">
                                                    <span className="material-icons text-gold-500 text-sm">check_circle</span>
                                                    <span>Generación continua de biomasa utilizable</span>
                                                </li>
                                            </ul>
                                            <div className="bg-gold-400/10 border border-gold-400/30 p-3 rounded-sm mb-6 inline-block">
                                                <p className="text-xs font-bold text-gold-600 dark:text-gold-400 uppercase tracking-wider flex items-center gap-2">
                                                    <span className="material-icons text-sm">trending_up</span>
                                                    Resultado: menor costo operativo + nuevo activo productivo.
                                                </p>
                                            </div>
                                            <br />
                                            <Link
                                                to="/casos/vina-terruno-vivo"
                                                className="text-forest-500 dark:text-forest-400 text-xs font-bold uppercase tracking-widest hover:text-forest-900 dark:hover:text-white transition-colors inline-flex items-center gap-2"
                                            >
                                                Leer caso completo <span className="material-icons text-sm">arrow_forward</span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>

                    <div className="py-20 bg-forest-50 dark:bg-forest-900 border-t border-forest-200 dark:border-forest-800 transition-colors duration-300">
                        <div className="container mx-auto px-4 max-w-3xl">
                            <ScrollReveal>
                                <div className="glass-panel p-10 md:p-16 rounded-sm text-center relative overflow-hidden shadow-2xl">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-gold-400/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                                    <h2 className="text-3xl md:text-4xl font-display text-forest-900 dark:text-cream mb-4 transition-colors duration-300">Comparte tu Experiencia</h2>
                                    <p className="text-forest-700 dark:text-gray-300 font-light mb-10 transition-colors duration-300">Tu opinión nos ayuda a seguir mejorando y ayuda a otros productores a tomar la decisión correcta.</p>
                                    <form onSubmit={handleFormSubmit} className="space-y-6 text-left">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <label className="block text-xs uppercase tracking-widest text-gold-600 dark:text-gold-400 font-bold mb-2">Nombre Completo *</label>
                                                <input
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleFormChange}
                                                    placeholder="Ej. Juan Pérez"
                                                    className={`w-full bg-forest-50 dark:bg-forest-900 border ${formErrors.name ? 'border-red-400' : 'border-forest-200 dark:border-forest-700'} rounded-sm px-4 py-3 outline-none focus:border-gold-400 transition-colors text-forest-900 dark:text-white placeholder-forest-300 dark:placeholder-forest-600`}
                                                    type="text"
                                                />
                                                {formErrors.name && <span className="text-red-400 text-xs mt-1 block">{formErrors.name}</span>}
                                            </div>
                                            <div>
                                                <label className="block text-xs uppercase tracking-widest text-gold-600 dark:text-gold-400 font-bold mb-2">Empresa / Fundo</label>
                                                <input
                                                    name="company"
                                                    value={formData.company}
                                                    onChange={handleFormChange}
                                                    placeholder="Ej. Agrícola del Valle"
                                                    className="w-full bg-forest-50 dark:bg-forest-900 border border-forest-200 dark:border-forest-700 rounded-sm px-4 py-3 outline-none focus:border-gold-400 transition-colors text-forest-900 dark:text-white placeholder-forest-300 dark:placeholder-forest-600"
                                                    type="text"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block text-xs uppercase tracking-widest text-gold-600 dark:text-gold-400 font-bold mb-2">Calificación *</label>
                                            <div className="flex flex-col gap-1">
                                                <StarRating
                                                    rating={formData.rating}
                                                    interactive={true}
                                                    size="text-2xl"
                                                    onRate={handleRatingChange}
                                                />
                                                {formErrors.rating && <p className="text-red-500 text-xs mt-1">{formErrors.rating}</p>}
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block text-xs uppercase tracking-widest text-gold-600 dark:text-gold-400 font-bold mb-2">Tu Testimonio *</label>
                                            <textarea
                                                name="message"
                                                value={formData.message}
                                                onChange={handleFormChange}
                                                placeholder="Cuéntanos cómo BioImpacto ayudó a tu proyecto..."
                                                rows={4}
                                                className={`w-full bg-forest-50 dark:bg-forest-900 border ${formErrors.message ? 'border-red-400' : 'border-forest-200 dark:border-forest-700'} rounded-sm px-4 py-3 outline-none focus:border-gold-400 transition-colors text-forest-900 dark:text-white placeholder-forest-300 dark:placeholder-forest-600`}
                                            ></textarea>
                                            {formErrors.message && <p className="text-red-500 text-xs mt-1">{formErrors.message}</p>}
                                        </div>
                                        <div className="text-center pt-4">
                                            <button
                                                className="bg-gold-400 hover:bg-gold-500 text-forest-900 font-bold py-4 px-12 rounded-sm shadow-md hover:shadow-lg hover:shadow-gold-400/20 transition-all transform hover:-translate-y-1 uppercase text-xs tracking-widest inline-flex items-center gap-2"
                                                type="submit"
                                            >
                                                Enviar Reseña
                                                <span className="material-icons text-sm">send</span>
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </div >
            </section >
        </div >
    );
};

export default Testimonials;