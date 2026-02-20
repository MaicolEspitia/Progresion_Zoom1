# Zoom Meeting en la web (Netlify)

Sitio para unirse a una reunión de Zoom desde el navegador. Listo para desplegar en **Netlify**.

## Despliegue en Netlify

1. **Sube el proyecto** a GitHub (o conéctalo desde Netlify).
2. En Netlify: **New site from Git** → elige el repo.
3. **Configuración de build:**
   - Build command: *(dejar vacío o `npm install`)*
   - Publish directory: `public`
   - Functions directory: `netlify/functions`
4. **Variables de entorno** (opcional pero recomendado):  
   En *Site settings → Environment variables* añade:
   - `ZOOM_SDK_KEY` = tu SDK Key de Zoom
   - `ZOOM_SDK_SECRET` = tu SDK Secret de Zoom  
   Si no las pones, se usan las que están en el código (solo para pruebas).
5. **Zoom Marketplace:**  
   En tu app de Meeting SDK → **Surface** → **Domain Allow List** añade tu dominio de Netlify (ej: `tu-sitio.netlify.app`) sin `https://`.

## Probar en local

```bash
npm install
npx netlify dev
```

Abre http://localhost:8888 y verás la página. La función `get_signature` se ejecuta en local.

## Reunión de prueba

En `public/index.html` están el número de reunión y la contraseña. Cámbialos por los de tu reunión cuando vayas a entregar la prueba.
