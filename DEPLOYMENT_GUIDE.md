# 🚀 Guía de Despliegue - Cotillón DEXIS

Esta guía te ayudará a poner tu landing page en línea para que tus clientes puedan acceder a ella desde cualquier lugar.

## 🌟 Opciones de Despliegue Gratuitas

### 1. Netlify (⭐ Más Recomendado)

**¿Por qué Netlify?**
- ✅ Completamente gratis
- ✅ Muy fácil de usar
- ✅ Dominio gratuito incluido
- ✅ SSL automático (https://)
- ✅ Actualizaciones automáticas

**Pasos para desplegar:**

1. **Preparar el proyecto:**
   ```bash
   npm run build
   ```
   Esto creará una carpeta `dist` con todos los archivos optimizados.

2. **Ir a Netlify:**
   - Visita [netlify.com](https://netlify.com)
   - Crea una cuenta gratuita

3. **Subir tu sitio:**
   - En el dashboard de Netlify, busca la sección "Deploy"
   - Arrastra y suelta la carpeta `dist` completa
   - ¡Listo! Tu sitio estará en línea en segundos

4. **Personalizar dominio (opcional):**
   - Puedes cambiar el nombre del sitio en Site Settings
   - Ejemplo: `cotillon-dexis.netlify.app`

### 2. Vercel

**Pasos para desplegar:**

1. **Ir a Vercel:**
   - Visita [vercel.com](https://vercel.com)
   - Crea una cuenta gratuita

2. **Subir proyecto:**
   - Haz clic en "New Project"
   - Sube la carpeta completa del proyecto (no solo `dist`)
   - Vercel detectará automáticamente que es un proyecto Vite
   - Haz clic en "Deploy"

3. **¡Listo!**
   - Tu sitio estará disponible en una URL como `cotillon-dexis.vercel.app`

### 3. GitHub Pages (Si usas GitHub)

1. **Subir código a GitHub:**
   - Crea un repositorio en GitHub
   - Sube todo el código del proyecto

2. **Configurar GitHub Pages:**
   - Ve a Settings > Pages en tu repositorio
   - Selecciona "GitHub Actions" como source
   - Crea un archivo `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    - uses: actions/setup-node@v2
      with:
        node-version: '18'
    - run: npm install
    - run: npm run build
    - uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
```

## 🏠 Hosting Tradicional (Con tu propio dominio)

Si ya tienes un hosting web tradicional:

1. **Construir el proyecto:**
   ```bash
   npm run build
   ```

2. **Subir archivos:**
   - Conecta por FTP a tu servidor
   - Sube TODO el contenido de la carpeta `dist`
   - Asegúrate de que `index.html` esté en la raíz

3. **Configurar dominio:**
   - Apunta tu dominio a la carpeta donde subiste los archivos

## 📱 Configuración Post-Despliegue

### Verificar que todo funcione:

1. **✅ Navegación:** Todos los enlaces del menú deben funcionar
2. **✅ WhatsApp:** El botón flotante debe abrir WhatsApp correctamente
3. **✅ Formulario:** Debe mostrar el mensaje de confirmación
4. **✅ Mapa:** Debe cargar y mostrar la ubicación
5. **✅ Responsive:** Probar en móvil, tablet y desktop

### Optimizaciones adicionales:

1. **Google Analytics (opcional):**
   - Agrega tu código de tracking en `index.html`

2. **Meta tags para redes sociales:**
   - Ya están incluidos en el `index.html`
   - Personaliza la imagen de preview si es necesario

3. **Favicon personalizado:**
   - Reemplaza `public/vite.svg` con tu logo
   - Actualiza la referencia en `index.html`

## 🔧 Solución de Problemas Comunes

### "La página no carga"
- Verifica que subiste la carpeta `dist` completa
- Asegúrate de que `index.html` esté en la raíz

### "El WhatsApp no funciona"
- Verifica que el número esté correcto: `5493516260063`
- Prueba desde un dispositivo móvil

### "El mapa no aparece"
- Es normal, el mapa necesita una API key real de Google Maps
- Para producción, considera obtener una API key gratuita

### "Los estilos se ven mal"
- Asegúrate de subir TODOS los archivos de la carpeta `dist`
- Verifica que no haya errores en la consola del navegador

## 📈 Próximos Pasos

Una vez que tu sitio esté en línea:

1. **Comparte la URL:**
   - En tus redes sociales
   - En tarjetas de presentación
   - En material publicitario

2. **Configura Google My Business:**
   - Agrega la URL de tu sitio web
   - Esto ayudará con el SEO local

3. **Monitorea el rendimiento:**
   - Usa Google Analytics para ver visitantes
   - Netlify y Vercel ofrecen estadísticas básicas gratis

## 🎯 URLs de Ejemplo

Después del despliegue, tu sitio estará disponible en URLs como:

- **Netlify:** `https://cotillon-dexis.netlify.app`
- **Vercel:** `https://cotillon-dexis.vercel.app`
- **Tu dominio:** `https://www.cotillondexis.com`

## 💡 Consejos Finales

1. **Prueba en diferentes dispositivos** antes de compartir
2. **Guarda la URL** en un lugar seguro
3. **Haz capturas de pantalla** para tus redes sociales
4. **Comparte con orgullo** tu nueva presencia digital

¡Tu landing page profesional está lista para atraer más clientes a Cotillón DEXIS! 🎉