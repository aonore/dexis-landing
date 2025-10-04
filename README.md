# Cotillón DEXIS - Landing Page

Una landing page moderna y colorida para el negocio de cotillón, repostería, descartables y golosinas "Cotillón DEXIS".

## 🚀 Características

- **Diseño moderno y divertido** con colores vibrantes
- **Completamente responsive** (móvil, tablet, desktop)
- **Botón flotante de WhatsApp** para contacto directo
- **Secciones completas**: Header, Hero, Nosotros, Productos, Video, Contacto, Footer
- **Formulario de contacto funcional**
- **Mapa integrado de Google Maps**
- **Información de horarios y ubicación**
- **Animaciones suaves y efectos hover**

## 📋 Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:

- **Node.js** (versión 18 o superior) - [Descargar aquí](https://nodejs.org/)
- **npm** (viene incluido con Node.js)
- Un editor de código como **Visual Studio Code**

## 🛠️ Instalación Paso a Paso

### 1. Descargar el Proyecto
- Descarga y extrae el archivo ZIP del proyecto
- Abre una terminal/consola de comandos
- Navega hasta la carpeta del proyecto:
```bash
cd cotillon-dexis-landing
```

### 2. Instalar Dependencias
Ejecuta el siguiente comando para instalar todas las dependencias necesarias:
```bash
npm install
```

### 3. Iniciar el Servidor de Desarrollo
Para ver la página en tu navegador:
```bash
npm run dev
```

La página estará disponible en: `http://localhost:5173`

### 4. Personalizar la Información (Opcional)
Si necesitas cambiar alguna información, edita estos archivos:

- **Información de contacto**: `src/components/Header.tsx`, `src/components/Contact.tsx`, `src/components/Footer.tsx`
- **Contenido de productos**: `src/components/Products.tsx`
- **Información "Nosotros"**: `src/components/About.tsx`
- **Número de WhatsApp**: `src/components/WhatsAppFloat.tsx`

## 🌐 Despliegue en Producción

### Opción 1: Netlify (Recomendado - Gratis)
1. Crea una cuenta en [Netlify](https://netlify.com)
2. Construye el proyecto:
   ```bash
   npm run build
   ```
3. Arrastra la carpeta `dist` a Netlify
4. ¡Tu sitio estará en línea!

### Opción 2: Vercel (Gratis)
1. Crea una cuenta en [Vercel](https://vercel.com)
2. Conecta tu repositorio de GitHub
3. Vercel detectará automáticamente que es un proyecto Vite
4. ¡Despliega automáticamente!

### Opción 3: Hosting Tradicional
1. Ejecuta: `npm run build`
2. Sube el contenido de la carpeta `dist` a tu servidor web
3. Configura tu dominio para apuntar a esos archivos

## 📱 Configuración del WhatsApp

El botón de WhatsApp está configurado con:
- **Número**: +54 9 351 6260063
- **Mensaje predeterminado**: "¡Hola! Me interesa conocer más sobre sus productos para mi evento."

Para cambiar el número o mensaje, edita el archivo `src/components/WhatsAppFloat.tsx`.

## 🗺️ Configuración del Mapa

El mapa está configurado para mostrar:
- **Dirección**: Av. San Martín 891, La Calera, Córdoba, Argentina

Si necesitas ajustar la ubicación exacta, edita la URL del iframe en `src/components/Contact.tsx`.

## 📧 Configuración del Formulario de Contacto

Actualmente el formulario muestra una alerta de confirmación. Para conectarlo a un servicio de email:

### Opción 1: EmailJS (Recomendado)
1. Crea una cuenta en [EmailJS](https://emailjs.com)
2. Configura un servicio de email
3. Instala EmailJS: `npm install @emailjs/browser`
4. Modifica la función `handleSubmit` en `src/components/Contact.tsx`

### Opción 2: Formspree
1. Crea una cuenta en [Formspree](https://formspree.io)
2. Cambia el action del formulario por la URL de Formspree

## 🎨 Personalización de Colores

Los colores principales están definidos usando Tailwind CSS:
- **Rosa**: `from-pink-500 to-purple-500`
- **Azul**: `from-blue-500 to-teal-500`
- **Verde**: `from-green-500 to-emerald-500`
- **Amarillo**: `from-yellow-500 to-orange-500`

Para cambiar los colores, busca estas clases en los archivos de componentes.

## 📁 Estructura del Proyecto

```
cotillon-dexis-landing/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── Header.tsx          # Encabezado y navegación
│   │   ├── Hero.tsx            # Sección principal
│   │   ├── About.tsx           # Sección "Nosotros"
│   │   ├── Products.tsx        # Catálogo de productos
│   │   ├── VideoSection.tsx    # Sección de video
│   │   ├── Contact.tsx         # Formulario y contacto
│   │   ├── WhatsAppFloat.tsx   # Botón flotante WhatsApp
│   │   └── Footer.tsx          # Pie de página
│   ├── App.tsx                 # Componente principal
│   ├── main.tsx               # Punto de entrada
│   └── index.css              # Estilos globales
├── package.json               # Dependencias del proyecto
└── README.md                  # Este archivo
```

## 🔧 Comandos Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye el proyecto para producción
- `npm run preview` - Previsualiza la versión de producción
- `npm run lint` - Ejecuta el linter para revisar el código

## 📞 Soporte

Si tienes alguna pregunta o necesitas ayuda con la implementación:

1. Revisa este README completo
2. Verifica que Node.js esté instalado correctamente
3. Asegúrate de ejecutar `npm install` antes de `npm run dev`
4. Contacta al desarrollador si persisten los problemas

## 🎉 ¡Listo!

Tu landing page de Cotillón DEXIS está lista para usar. La página incluye todas las secciones solicitadas y está optimizada para convertir visitantes en clientes.

**Características destacadas:**
- ✅ Header con información de contacto
- ✅ Sección Hero atractiva
- ✅ Información "Quiénes Somos"
- ✅ Catálogo de productos por categorías
- ✅ Sección de video promocional
- ✅ Formulario de contacto completo
- ✅ Mapa de ubicación
- ✅ Horarios de atención
- ✅ Botón flotante de WhatsApp
- ✅ Footer con redes sociales
- ✅ Diseño responsive
- ✅ Colores vibrantes y modernos

¡Que tengas mucho éxito con tu negocio! 🎊