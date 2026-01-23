# BioImpacto

Sitio web corporativo de BioImpacto Chile, empresa especializada en soluciones de bioconversion y gestion de residuos organicos mediante biotecnologia aplicada.

## Descripcion

BioImpacto ofrece servicios de transformacion de residuos organicos en recursos de valor utilizando dos tecnologias principales:

- Lombrices Californianas (Eisenia foetida): Produccion de humus de alta calidad para regeneracion de suelos
- Mosca Soldado Negra (Hermetia illucens): Bioconversion rapida de residuos en proteina para alimentacion animal

El sitio incluye las siguientes secciones:

- Inicio: Presentacion de la empresa y propuesta de valor
- Productos: Catalogo de nucleos de lombrices y mosca soldado negra
- Testimonios: Casos de exito y experiencias de clientes
- Preguntas Frecuentes: Informacion tecnica sobre bioconversion
- Contacto: Formulario de consultas y datos de contacto

## Tecnologias

- React 19
- TypeScript
- Vite
- Tailwind CSS
- React Router

## Requisitos

- Node.js 18 o superior
- npm

## Instalacion

1. Clonar el repositorio:

```bash
git clone https://github.com/Lucas23-IECI/PaginaBioimpacto.git
cd PaginaBioimpacto
```

2. Instalar dependencias:

```bash
npm install
```

## Ejecucion en Local

Iniciar el servidor de desarrollo:

```bash
npm run dev
```

El sitio estara disponible en `http://localhost:5173`

## Build para Produccion

Generar build optimizado:

```bash
npm run build
```

Los archivos de produccion se generaran en la carpeta `dist/`

## Estructura del Proyecto

```
PaginaBioimpacto/
├── components/          # Componentes reutilizables
├── pages/               # Paginas de la aplicacion
├── context/             # Contextos de React (tema)
├── public/
│   └── Fotos/           # Imagenes del sitio
│       ├── Background/  # Fondos de paginas
│       ├── Home/        # Imagenes de inicio
│       ├── Logo/        # Logos de la empresa
│       └── Productos/   # Fotos de productos
├── App.tsx              # Componente principal con rutas
├── index.tsx            # Punto de entrada
├── index.html           # Template HTML
├── constants.ts         # Constantes y enlaces
├── types.ts             # Definiciones de tipos
└── vite.config.ts       # Configuracion de Vite
```

## Contacto

- Web: https://bioimpacto.cl
- Email: contacto@bioimpacto.cl
- WhatsApp: +56 9 9267 3011
- Ubicacion: Concepcion, Chile
