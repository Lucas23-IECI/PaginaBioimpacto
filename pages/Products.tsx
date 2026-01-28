import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';

interface CarouselImage {
    src: string;
    label: string;
    className?: string;
}

interface ProductCarouselProps {
    images: CarouselImage[];
    activeIndex?: number;
    onIndexChange?: (index: number) => void;
}

const ProductCarousel: React.FC<ProductCarouselProps> = ({ images, activeIndex: controlledIndex, onIndexChange }) => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [internalIndex, setInternalIndex] = useState(0);

    // Determine current index (controlled or internal)
    const currentIndex = controlledIndex !== undefined ? controlledIndex : internalIndex;

    // Scroll to the index when controlledIndex changes
    useEffect(() => {
        if (controlledIndex !== undefined && scrollRef.current) {
            const { clientWidth } = scrollRef.current;
            const targetScroll = controlledIndex * clientWidth;
            // Only scroll if significant difference to avoid conflict with user swipe
            if (Math.abs(scrollRef.current.scrollLeft - targetScroll) > 10) {
                scrollRef.current.scrollTo({ left: targetScroll, behavior: 'smooth' });
            }
        }
    }, [controlledIndex]);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const { clientWidth } = scrollRef.current;
            const newIndex = direction === 'left'
                ? Math.max(0, currentIndex - 1)
                : Math.min(images.length - 1, currentIndex + 1);

            if (onIndexChange) {
                onIndexChange(newIndex);
            } else {
                setInternalIndex(newIndex);
                scrollRef.current.scrollTo({ left: newIndex * clientWidth, behavior: 'smooth' });
            }
        }
    };

    const handleScroll = () => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current;
            const newIndex = Math.round(scrollLeft / clientWidth);

            if (newIndex !== currentIndex) {
                if (onIndexChange) {
                    onIndexChange(newIndex);
                } else {
                    setInternalIndex(newIndex);
                }
            }
        }
    };

    return (
        <div className="absolute inset-0 group bg-forest-900 overflow-hidden">
            <div
                ref={scrollRef}
                onScroll={handleScroll}
                className="absolute inset-0 flex overflow-x-auto snap-x snap-mandatory no-scrollbar scroll-smooth"
            >
                {images.map((img, idx) => (
                    <img
                        key={idx}
                        src={img.src}
                        alt={img.label}
                        loading="lazy"
                        decoding="async"
                        className="min-w-full h-full snap-center shrink-0 object-cover"
                    />
                ))}
            </div>

            <div className="absolute inset-0 pointer-events-none flex items-center justify-between px-4 z-20">
                <button
                    onClick={() => scroll('left')}
                    className="pointer-events-auto w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/80 dark:bg-forest-800/80 hover:bg-gold-400 text-forest-900 dark:text-white hover:text-forest-900 backdrop-blur-md flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100 transform -translate-x-4 group-hover:translate-x-0 border border-forest-100 dark:border-forest-700 shadow-lg"
                >
                    <span className="material-icons text-lg md:text-xl">chevron_left</span>
                </button>
                <button
                    onClick={() => scroll('right')}
                    className="pointer-events-auto w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/80 dark:bg-forest-800/80 hover:bg-gold-400 text-forest-900 dark:text-white hover:text-forest-900 backdrop-blur-md flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 border border-forest-100 dark:border-forest-700 shadow-lg"
                >
                    <span className="material-icons text-lg md:text-xl">chevron_right</span>
                </button>
            </div>

            <div className="absolute bottom-4 md:bottom-6 left-0 w-full flex justify-center gap-2 md:gap-3 pointer-events-none z-20">
                {images.map((_, idx) => (
                    <div
                        key={idx}
                        className={`w-2 h-2 md:w-2.5 md:h-2.5 rounded-full backdrop-blur-sm transition-all duration-300 ${idx === currentIndex ? 'bg-gold-400 shadow-[0_0_10px_rgba(212,175,55,0.5)] scale-110' : 'bg-forest-300/50 dark:bg-forest-600/50'}`}
                    ></div>
                ))}
            </div>
        </div>
    );
};

const Products: React.FC = () => {
    // State to manage selected format for Lombrices (Index based 0-3)
    const [selectedWormIndex, setSelectedWormIndex] = useState<number>(0); // Default to 500

    // BSF Index for carousel AND pricing (Unified state)
    const [selectedBSFIndex, setSelectedBSFIndex] = useState<number>(0); // Default to 25 Unid (Index 0)

    const wormFormats = [
        { id: 250, label: "250", sub: "Unidades", price: "$9.990", unitPrice: "$40 c/u" },
        { id: 500, label: "500", sub: "Unidades", price: "$18.090", unitPrice: "$36 c/u" },
        { id: 750, label: "750", sub: "Unidades", price: "$25.990", unitPrice: "$34 c/u" },
        { id: 1000, label: "1.000", sub: "Unidades", price: "$30.990", unitPrice: "$31 c/u" },
        { id: 2000, label: "2.000", sub: "Unidades", price: "$55.990", unitPrice: "$28 c/u" }
    ];

    const bsfFormats = [
        { id: 25, label: "25", sub: "Unid.", price: "$16.500", unitPrice: "$660 c/u" },
        { id: 50, label: "50", sub: "Unid.", price: "$32.000", unitPrice: "$640 c/u" },
        { id: 100, label: "100", sub: "Unid.", price: "$59.000", unitPrice: "$610 c/u" },
        { id: 250, label: "250", sub: "Unid.", price: "$147.500", unitPrice: "$590 c/u" }
    ];

    const wormImages = [
        { src: "/Fotos/Productos/NucleosDeLombrices/250.webp", label: "250 Unidades" },
        { src: "/Fotos/Productos/NucleosDeLombrices/500.webp", label: "500 Unidades" },
        { src: "/Fotos/Productos/NucleosDeLombrices/750.webp", label: "750 Unidades" },
        { src: "/Fotos/Productos/NucleosDeLombrices/1000.webp", label: "1.000 Unidades" },
        { src: "/Fotos/Productos/NucleosDeLombrices/2000.webp", label: "2.000 Unidades" }
    ];

    // UPDATED BSF Images: 4 Images mapped to the 4 formats
    const bsfImages = [
        { src: "/Fotos/Productos/NucleosMoscaSoldado/25.webp", label: "25 Unidades - Inicial" },
        { src: "/Fotos/Productos/NucleosMoscaSoldado/50.webp", label: "50 Unidades - Núcleo" },
        { src: "/Fotos/Productos/NucleosMoscaSoldado/100.webp", label: "100 Unidades - Avanzado" },
        { src: "/Fotos/Productos/NucleosMoscaSoldado/250.webp", label: "250 Unidades - Experto" }
    ];

    return (
        <div className="pt-20 bg-forest-50 dark:bg-forest-900 transition-colors duration-300 min-h-screen relative">
            {/* Background Image para toda la página */}
            {/* Background Texture for Body Content */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-[url('/Fotos/Background/BackgroundProductos.webp')] bg-cover bg-center opacity-[0.03] dark:opacity-[0.05] bg-fixed mix-blend-multiply dark:mix-blend-overlay"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-forest-50/50 to-forest-50/80 dark:via-forest-900/50 dark:to-forest-900/80"></div>
            </div>

            <header className="relative py-32 lg:py-48 overflow-hidden z-10 flex items-center justify-center" style={{
                backgroundImage: `url('/Fotos/Background/BackgroundProductos.webp')`,
                backgroundAttachment: 'fixed',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
            }}>
                <div className="absolute inset-0 bg-forest-100/40 dark:bg-forest-900/60 backdrop-blur-[1px] transition-colors duration-300"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-forest-50 via-forest-50/20 to-transparent dark:from-forest-900 dark:via-forest-900/40 dark:to-transparent transition-colors duration-300"></div>
                <ScrollReveal className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <span className="block text-gold-600 dark:text-gold-400 uppercase tracking-[0.3em] text-xs font-bold mb-6 animate-fade-in transition-colors duration-300">Catálogo 2026</span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-display text-forest-900 dark:text-white leading-tight mb-6 drop-shadow-lg transition-colors duration-300">
                        Soluciones para la<br />
                        <span className="text-gold-500 italic">Regeneración de Suelos</span>
                    </h1>
                    <p className="text-base md:text-lg text-forest-700 dark:text-forest-200 mb-0 max-w-2xl mx-auto font-light leading-relaxed transition-colors duration-300">
                        Biotecnología aplicada de alto rendimiento. Conoce nuestras líneas de bioconversión y consultoría técnica especializada.
                    </p>
                </ScrollReveal>
            </header>

            <section className="relative z-10 pb-16">
                {/* Product 1: Lombriz */}
                <div id="lombrices" className="container mx-auto px-4 mb-16 max-w-7xl scroll-mt-32">
                    <ScrollReveal>
                        <div className="flex flex-col lg:flex-row shadow-2xl shadow-forest-900/10 dark:shadow-black/50 rounded-sm overflow-hidden border border-forest-200 dark:border-forest-800 transition-colors duration-300">
                            <div className="lg:w-1/2 relative overflow-hidden group">
                                <img
                                    alt={wormImages[selectedWormIndex].label}
                                    className="w-full h-full min-h-[300px] object-cover"
                                    src={wormImages[selectedWormIndex].src}
                                    loading="lazy"
                                    decoding="async"
                                />
                                {/* Navigation Arrows */}
                                <div className="absolute inset-0 pointer-events-none flex items-center justify-between px-4 z-20">
                                    <button
                                        onClick={() => setSelectedWormIndex(prev => prev > 0 ? prev - 1 : wormImages.length - 1)}
                                        className="pointer-events-auto w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/80 dark:bg-forest-800/80 hover:bg-gold-400 text-forest-900 dark:text-white hover:text-forest-900 backdrop-blur-md flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100 transform -translate-x-4 group-hover:translate-x-0 border border-forest-100 dark:border-forest-700 shadow-lg"
                                    >
                                        <span className="material-icons text-lg md:text-xl">chevron_left</span>
                                    </button>
                                    <button
                                        onClick={() => setSelectedWormIndex(prev => prev < wormImages.length - 1 ? prev + 1 : 0)}
                                        className="pointer-events-auto w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/80 dark:bg-forest-800/80 hover:bg-gold-400 text-forest-900 dark:text-white hover:text-forest-900 backdrop-blur-md flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 border border-forest-100 dark:border-forest-700 shadow-lg"
                                    >
                                        <span className="material-icons text-lg md:text-xl">chevron_right</span>
                                    </button>
                                </div>
                                {/* Dot Indicators */}
                                <div className="absolute bottom-4 md:bottom-6 left-0 w-full flex justify-center gap-2 md:gap-3 z-20">
                                    {wormImages.map((_, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => setSelectedWormIndex(idx)}
                                            className={`w-2 h-2 md:w-2.5 md:h-2.5 rounded-full transition-all duration-300 ${idx === selectedWormIndex ? 'bg-gold-400 shadow-[0_0_10px_rgba(212,175,55,0.5)] scale-110' : 'bg-white/50 hover:bg-white/80'}`}
                                        />
                                    ))}
                                </div>
                            </div>
                            <div className="lg:w-1/2 bg-forest-900/95 backdrop-blur-md p-6 md:p-8 lg:p-12 flex flex-col justify-center relative overflow-hidden">
                                {/* Decorative Blur */}
                                <div className="absolute bottom-0 left-0 w-40 h-40 bg-gold-400/5 rounded-full blur-3xl"></div>

                                <span className="text-gold-400 text-xs uppercase tracking-[0.25em] mb-4 font-bold flex items-center gap-2">
                                    <span className="w-8 h-[1px] bg-gold-400"></span> Eisenia foetida
                                </span>
                                <h2 className="text-2xl md:text-3xl font-display text-white mb-6">Núcleos de Lombriz Californiana</h2>
                                <p className="text-gray-300 mb-6 font-light leading-relaxed text-sm md:text-base">
                                    Diseñados para acelerar tu proceso de compostaje desde el primer día. Nuestros núcleos garantizan una rápida colonización del sustrato, alta tasa de reproducción y producción constante de humus estable.
                                    <br /><br />
                                    Menos tiempo de espera. Más abono. Resultados en semanas. Ideales para huertos, jardines, compostaje domiciliario, proyectos educativos y emprendimientos.
                                </p>

                                {/* Pricing Selector Section */}
                                <div className="mb-6 md:mb-8 p-4 bg-forest-800/50 rounded-sm border border-forest-700/50 backdrop-blur-sm">
                                    <div className="flex justify-between items-center mb-4">
                                        <h4 className="text-gold-400 text-[10px] uppercase tracking-widest font-bold">Selecciona Formato</h4>
                                        <span className="text-gray-400 text-[10px] uppercase tracking-wider">{wormFormats[selectedWormIndex].unitPrice}</span>
                                    </div>

                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-4">
                                        {wormFormats.map((format, idx) => (
                                            <button
                                                key={format.id}
                                                onClick={() => setSelectedWormIndex(idx)}
                                                className={`p-2 rounded-sm text-center transition-all duration-300 border flex flex-col items-center justify-center min-h-[60px] md:h-16 ${selectedWormIndex === idx
                                                    ? 'bg-gold-400 border-gold-400 shadow-[0_0_15px_rgba(212,175,55,0.2)] transform -translate-y-0.5'
                                                    : 'bg-forest-900/50 border-forest-600 hover:border-gold-400/50 text-gray-300'
                                                    }`}
                                            >
                                                <span className={`block font-bold text-base md:text-lg leading-none ${selectedWormIndex === idx ? 'text-forest-900' : 'text-white'}`}>
                                                    {format.label}
                                                </span>
                                                <span className={`block text-[8px] md:text-[9px] uppercase tracking-wide mt-1 ${selectedWormIndex === idx ? 'text-forest-900/80' : 'text-gray-400'}`}>
                                                    {format.sub}
                                                </span>
                                            </button>
                                        ))}
                                    </div>

                                    <div className="flex justify-between items-end border-t border-forest-700 pt-3">
                                        <span className="text-gray-400 text-xs font-light">Precio Final</span>
                                        <span className="text-xl md:text-2xl font-display text-white">{wormFormats[selectedWormIndex].price}</span>
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-4 mt-auto">
                                    <Link to="/contacto" className="w-full bg-gold-400 hover:bg-gold-500 text-forest-900 font-bold py-3 md:py-4 px-6 transition-all duration-300 uppercase text-xs tracking-widest flex items-center justify-center gap-2 group/btn shadow-lg rounded-sm">
                                        Quiero comenzar mi compostaje
                                        <span className="material-icons text-base group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>

                {/* Product 2: Mosca Soldado */}
                <div id="mosca" className="container mx-auto px-4 mb-16 max-w-7xl scroll-mt-32">
                    <ScrollReveal>
                        <div className="flex flex-col lg:flex-row-reverse shadow-2xl shadow-forest-900/10 dark:shadow-black/50 rounded-sm overflow-hidden border border-forest-200 dark:border-forest-800 transition-colors duration-300">

                            {/* Text Column (Right) - Dark Themed: Forest 900 */}
                            <div className="lg:w-1/2 bg-forest-900/95 backdrop-blur-md p-6 md:p-8 lg:p-12 flex flex-col justify-center relative overflow-hidden">
                                {/* Decorative Blur */}
                                <div className="absolute bottom-0 left-0 w-40 h-40 bg-gold-400/5 rounded-full blur-3xl"></div>

                                <span className="text-gold-400 text-xs uppercase tracking-[0.25em] mb-4 font-bold flex items-center gap-2">
                                    <span className="w-8 h-[1px] bg-gold-400"></span> Hermetia illucens
                                </span>
                                <h2 className="text-2xl md:text-3xl font-display text-white mb-6">Núcleos de Mosca Soldado Negra</h2>
                                <p className="text-gray-300 mb-6 font-light leading-relaxed text-sm md:text-base">
                                    La Mosca Soldado Negra es un insecto benéfico utilizado para la gestión eficiente de residuos orgánicos y la producción de proteína para alimentación animal.
                                    <br /><br />
                                    Nuestras larvas consumen grandes cantidades de residuos en muy poco tiempo, reduciendo el volumen mientras los transforman en biomasa rica en proteína.
                                    Núcleos seleccionados y listos para trabajar, permitiendo una gestión controlada, segura y sin olores.
                                </p>

                                {/* Pricing Selector Section */}
                                <div className="mb-6 md:mb-8 p-4 bg-forest-800/50 rounded-sm border border-forest-700/50 backdrop-blur-sm">
                                    <div className="flex justify-between items-center mb-4">
                                        <h4 className="text-gold-400 text-[10px] uppercase tracking-widest font-bold">Selecciona Cantidad</h4>
                                        <span className="text-gray-400 text-[10px] uppercase tracking-wider">{bsfFormats[selectedBSFIndex].unitPrice}</span>
                                    </div>

                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-4">
                                        {bsfFormats.map((format, idx) => (
                                            <button
                                                key={format.id}
                                                onClick={() => setSelectedBSFIndex(idx)}
                                                className={`p-2 rounded-sm text-center transition-all duration-300 border flex flex-col items-center justify-center min-h-[60px] md:h-16 ${selectedBSFIndex === idx
                                                    ? 'bg-gold-400 border-gold-400 shadow-[0_0_15px_rgba(212,175,55,0.2)] transform -translate-y-0.5'
                                                    : 'bg-forest-900/50 border-forest-600 hover:border-gold-400/50 text-gray-300'
                                                    }`}
                                            >
                                                <span className={`block font-bold text-base md:text-lg leading-none ${selectedBSFIndex === idx ? 'text-forest-900' : 'text-white'}`}>
                                                    {format.label}
                                                </span>
                                                <span className={`block text-[8px] md:text-[9px] uppercase tracking-wide mt-1 ${selectedBSFIndex === idx ? 'text-forest-900/80' : 'text-gray-400'}`}>
                                                    {format.sub}
                                                </span>
                                            </button>
                                        ))}
                                    </div>

                                    <div className="flex justify-between items-end border-t border-forest-700 pt-3">
                                        <span className="text-gray-400 text-xs font-light">Precio Final</span>
                                        <span className="text-xl md:text-2xl font-display text-white">{bsfFormats[selectedBSFIndex].price}</span>
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-4 mt-auto">
                                    <Link to="/contacto" className="w-full bg-gold-400 hover:bg-gold-500 text-forest-900 font-bold py-3 md:py-4 px-6 transition-all duration-300 uppercase text-xs tracking-widest flex items-center justify-center gap-2 group/btn shadow-lg rounded-sm">
                                        Pedir más información
                                        <span className="material-icons text-base group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
                                    </Link>
                                </div>
                            </div>

                            {/* Image Column (Left) */}
                            <div className="lg:w-1/2 relative overflow-hidden group">
                                <img
                                    alt={bsfImages[selectedBSFIndex].label}
                                    className="w-full h-full min-h-[300px] object-cover"
                                    src={bsfImages[selectedBSFIndex].src}
                                    loading="lazy"
                                    decoding="async"
                                />
                                {/* Navigation Arrows */}
                                <div className="absolute inset-0 pointer-events-none flex items-center justify-between px-4 z-20">
                                    <button
                                        onClick={() => setSelectedBSFIndex(prev => prev > 0 ? prev - 1 : bsfImages.length - 1)}
                                        className="pointer-events-auto w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/80 dark:bg-forest-800/80 hover:bg-gold-400 text-forest-900 dark:text-white hover:text-forest-900 backdrop-blur-md flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100 transform -translate-x-4 group-hover:translate-x-0 border border-forest-100 dark:border-forest-700 shadow-lg"
                                    >
                                        <span className="material-icons text-lg md:text-xl">chevron_left</span>
                                    </button>
                                    <button
                                        onClick={() => setSelectedBSFIndex(prev => prev < bsfImages.length - 1 ? prev + 1 : 0)}
                                        className="pointer-events-auto w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/80 dark:bg-forest-800/80 hover:bg-gold-400 text-forest-900 dark:text-white hover:text-forest-900 backdrop-blur-md flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 border border-forest-100 dark:border-forest-700 shadow-lg"
                                    >
                                        <span className="material-icons text-lg md:text-xl">chevron_right</span>
                                    </button>
                                </div>
                                {/* Dot Indicators */}
                                <div className="absolute bottom-4 md:bottom-6 left-0 w-full flex justify-center gap-2 md:gap-3 z-20">
                                    {bsfImages.map((_, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => setSelectedBSFIndex(idx)}
                                            className={`w-2 h-2 md:w-2.5 md:h-2.5 rounded-full transition-all duration-300 ${idx === selectedBSFIndex ? 'bg-gold-400 shadow-[0_0_10px_rgba(212,175,55,0.5)] scale-110' : 'bg-white/50 hover:bg-white/80'}`}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>

                {/* Services Section - Asesoría Técnica */}
                <div id="consultoria" className="container mx-auto px-4 max-w-7xl scroll-mt-32">
                    <ScrollReveal>
                        <div className="flex flex-col lg:flex-row shadow-2xl shadow-black/40 rounded-sm overflow-hidden border border-forest-800 min-h-[400px] md:min-h-[500px]">
                            {/* Left Image Side */}
                            <div className="lg:w-1/2 relative overflow-hidden group">
                                <img
                                    alt="Instalaciones de Bioconversión Industrial"
                                    className="w-full h-full min-h-[300px] object-cover transition-transform duration-1000 filter brightness-75"
                                    src="/Fotos/Productos/AsesoriaTecnica/AsesoriaTec.webp"
                                    loading="lazy"
                                    decoding="async"
                                />
                                <div className="absolute inset-0 bg-forest-900/10 group-hover:bg-transparent transition-colors duration-500"></div>
                            </div>

                            {/* Right Content Side - Dark Theme Always */}
                            <div className="lg:w-1/2 bg-forest-900/95 backdrop-blur-md p-6 md:p-8 lg:p-12 flex flex-col justify-center relative overflow-hidden">
                                {/* Decorative Glow */}
                                <div className="absolute top-0 right-0 w-64 h-64 bg-gold-400/5 rounded-full blur-3xl pointer-events-none"></div>

                                <h2 className="text-2xl md:text-3xl font-display text-white mb-6 relative z-10 leading-tight">
                                    Asesoría Técnica y <br />Consultoría en Bioconversión
                                </h2>
                                <p className="text-gray-300 mb-8 md:mb-10 font-light leading-relaxed text-sm md:text-base relative z-10">
                                    Diseñamos e implementamos sistemas que transforman residuos orgánicos en productos comercializables.
                                    A través de nuestra asesoría, te ayudamos a convertir desechos en biomasa de alto valor —como proteína para alimentación animal— creando sistemas productivos con potencial real de venta.
                                    <br /><br />
                                    Analizamos tu contexto, diseñamos el sistema adecuado y te acompañamos en la implementación para que puedas generar un nuevo ingreso a partir de un residuo que hoy no tiene valor.
                                </p>

                                {/* Highlights Grid */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 md:mb-8 relative z-10">
                                    <div className="p-4 md:p-5 border border-gold-400/30 rounded-sm bg-forest-800/50 hover:border-gold-400 transition-colors">
                                        <div className="text-gold-400 mb-2"><span className="material-icons">trending_up</span></div>
                                        <h4 className="text-white font-bold text-sm mb-2">Evaluación de Oportunidad Comercial</h4>
                                        <p className="text-xs text-gray-400">Analizamos si tu flujo de residuos y escala permiten desarrollar un sistema viable económicamente y orientado a venta.</p>
                                    </div>
                                    <div className="p-4 md:p-5 border border-gold-400/30 rounded-sm bg-forest-800/50 hover:border-gold-400 transition-colors">
                                        <div className="text-gold-400 mb-2"><span className="material-icons">schema</span></div>
                                        <h4 className="text-white font-bold text-sm mb-2">Diseño de Sistemas Productivos</h4>
                                        <p className="text-xs text-gray-400">Diseñamos sistemas pensados para producir biomasa vendible, optimizando costos, tiempos y rendimiento.</p>
                                    </div>
                                </div>

                                {/* Feature List */}
                                <div className="mb-8 md:mb-10 relative z-10">
                                    <h5 className="text-gold-400 text-xs uppercase tracking-widest font-bold mb-4">SERVICIOS INCLUIDOS</h5>
                                    <ul className="space-y-3">
                                        <li className="flex items-start gap-3">
                                            <span className="material-icons text-gold-400 text-sm mt-0.5">check_circle</span>
                                            <div>
                                                <strong className="text-white text-sm block">Implementación y Puesta en Marcha</strong>
                                                <span className="text-xs text-gray-400">Te acompañamos en la instalación y operación inicial para asegurar estabilidad productiva y calidad.</span>
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="material-icons text-gold-400 text-sm mt-0.5">check_circle</span>
                                            <div>
                                                <strong className="text-white text-sm block">Estrategia de Escalamiento y Venta</strong>
                                                <span className="text-xs text-gray-400">Te orientamos en formatos de comercialización, escalamiento del sistema y valorización del producto final.</span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>

                                <div className="relative z-10 mt-auto">
                                    <Link to="/contacto" className="w-full bg-gold-400 hover:bg-gold-500 text-forest-900 font-bold py-3 md:py-4 px-8 rounded-sm transition-all uppercase text-xs tracking-widest flex items-center justify-center gap-2 shadow-lg hover:shadow-gold-400/20">
                                        Quiero crear un sistema rentable
                                        <span className="material-icons text-sm">arrow_forward</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            <section className="relative py-20 md:py-32 parallax-bg border-t border-forest-200 dark:border-forest-800 transition-colors duration-300" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBV3DqH7wsNQnh79hQ_UlLXsr5IgHP2bJhC2nSd66H-eWqbhZ8KFBnwS35pLAUITgjweFNt821YbcJ3CK3xBGpHRfgKFENNrhJFMEWxbpZ-OlepqbxKMH1f7HmnQxU6tfue20ofnurfzGm4yYXi8X101vvuMPSdDsJHPgIvuid7IhfItkpfvil_GcTw10FEdeOQjlayaRNWZaP0azOkH0u6qK_yxel1HM7Ah1-gMUocXV3CCzwnjGywtDhUjP37JMplYGzxjvMP-pYa')" }}>
                <div className="absolute inset-0 bg-forest-100/90 dark:bg-forest-900/90 transition-colors duration-300"></div>
                <ScrollReveal className="relative z-10 max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-2xl md:text-4xl font-display text-forest-900 dark:text-white mb-6 md:mb-8 transition-colors duration-300">¿Listo para transformar tus residuos?</h2>
                    <p className="text-base md:text-lg text-forest-700 dark:text-forest-200 mb-8 md:mb-10 font-light transition-colors duration-300">Contáctanos hoy mismo para evaluar qué solución se adapta mejor a tu escala y necesidades.</p>
                    <Link to="/contacto" className="inline-flex items-center gap-2 text-gold-600 dark:text-gold-400 hover:text-forest-900 dark:hover:text-white border-b border-gold-400 pb-1 transition-colors uppercase text-xs font-bold tracking-widest">
                        Ir a Formulario de Contacto <span className="material-icons text-sm">arrow_forward</span>
                    </Link>
                </ScrollReveal>
            </section>
        </div>
    );
};

export default Products;