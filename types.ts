export interface NavLink {
    name: string;
    path: string;
}

export interface SocialLink {
    name: string;
    url: string;
    icon: string;
    colorClass: string;
    isSvg?: boolean;
    svgPath?: string;
}

export interface Testimonial {
    id: number;
    name: string;
    role: string;
    company: string;
    quote: string;
    image: string;
    rating: number;
    service: string;
}

export interface FaqItem {
    id: number;
    question: string;
    answer: string;
    category: string;
}

export interface SearchItem {
    id: string;
    title: string;
    category: 'Producto' | 'Servicio' | 'FAQ' | 'Testimonio' | 'General';
    path: string;
    tags: string[]; // Keywords for better search matching
}