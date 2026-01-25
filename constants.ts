import { SocialLink, NavLink, SearchItem } from './types';

// Using the specific Logo requested. Assuming it's in the public folder.
export const LOGO_URL = "/Fotos/Logo/Logo.png"; // Force updated

export const SOCIAL_LINKS: SocialLink[] = [
    {
        name: "WhatsApp",
        url: "https://api.whatsapp.com/send/?phone=56992673011",
        icon: "",
        colorClass: "fill-[#25D366]",
        isSvg: true,
        svgPath: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"
    },
    {
        name: "Facebook",
        url: "https://www.facebook.com/profile.php?id=61556162679665",
        icon: "",
        colorClass: "fill-[#1877F2]",
        isSvg: true,
        svgPath: "M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036c-2.148 0-2.797 1.603-2.797 2.892v1.08h3.47l-.002 3.667h-3.468v7.98H9.101Z"
    },
    {
        name: "Instagram",
        url: "https://www.instagram.com/bioimpactochile/?hl=es",
        icon: "",
        colorClass: "",
        isSvg: true,
        svgPath: "M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z"
    },
    {
        name: "Email",
        url: "https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=GTvVlcRzCbZtZWCddjzSKkcMDpwJhfsBmSZvmbDPLcWbsfmcXXDXbJzxfrJWgjlWXhhxTFdWmSMQZ",
        icon: "mail",
        colorClass: "text-[#555555]",
        isSvg: false
    }
];

export const NAV_LINKS: NavLink[] = [
    { name: "Home", path: "/" },
    { name: "Productos", path: "/productos" },
    { name: "Testimonios", path: "/testimonios" },
    { name: "FAQ", path: "/faq" },
    { name: "Contacto", path: "/contacto" },
];

export const SEARCH_INDEX: SearchItem[] = [
    { id: '1', title: "Lombrices Californianas", category: 'Producto', path: "/productos#lombrices", tags: ["eisenia", "roja", "humus", "compostaje", "vermicompostaje", "núcleo"] },
    { id: '2', title: "Mosca Soldado Negra", category: 'Producto', path: "/productos#mosca", tags: ["hermetia", "illucens", "larvas", "proteína", "residuos", "bioconversión"] },
    { id: '3', title: "Consultoría Técnica", category: 'Servicio', path: "/productos#consultoria", tags: ["asesoría", "diagnóstico", "diseño", "plantas", "capacitación"] },
    { id: '4', title: "Diseño de Plantas", category: 'Servicio', path: "/productos#consultoria", tags: ["industrial", "planos", "flujos", "agroindustria"] },
    { id: '5', title: "Envíos y Despachos", category: 'FAQ', path: "/faq", tags: ["tiempo", "retiro", "sucursal", "transporte", "región"] },
    { id: '6', title: "Kit de Iniciación", category: 'FAQ', path: "/faq", tags: ["manual", "sustrato", "principiante", "garantía"] },
    { id: '7', title: "Alimentación de Lombrices", category: 'FAQ', path: "/faq", tags: ["comida", "residuos", "prohibido", "cuidados"] },
    { id: '8', title: "Contacto Comercial", category: 'General', path: "/contacto", tags: ["cotización", "email", "teléfono", "ubicación", "dirección"] },
    { id: '9', title: "Testimonio Avícola", category: 'Testimonio', path: "/testimonios", tags: ["guano", "olores", "caso", "éxito"] },
    { id: '10', title: "Testimonio Viñedo", category: 'Testimonio', path: "/testimonios", tags: ["orujo", "fertilizante", "ahorro"] },
];