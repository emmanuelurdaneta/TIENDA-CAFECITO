# Tostado Café Pre-entrega

E-commerce de café de especialidad hecho con React + Vite.

- **Sitio online:** _(completar con la URL de Netlify)_
- **Repositorio:** https://github.com/emmanuelurdaneta/TIENDA-CAFECITO

## Cómo correrlo

1. Crear un archivo `.env` en la raíz con la API key de [Imgbb](https://api.imgbb.com/):

   ```
   VITE_IMGBB_API_KEY=tu_api_key
   ```

2. Instalar y levantar:

   ```bash
   npm install
   npm run dev      # desarrollo en http://localhost:5173
   npm run build    # build de producción en /dist
   ```

## Formulario de alta de producto

Debajo del catálogo hay un formulario (`ProductForm`) que sube la imagen a Imgbb, recibe la URL y simula el envío a la API con `console.log`:

```
Subiendo imagen a Imgbb...
Imagen subida con éxito.
URL: https://i.ibb.co/.../imagen.jpg
Enviando los siguientes datos COMPLETOS a la API: { id, nombre, precio, stock, urlImagen }
```

## Estructura

```
public/
  productos.json          # datos de productos (se cargan con fetch)
src/
  components/
    layout/               # Layout, Header, NavBar, Footer, TeamCard
    products/             # ItemListContainer, ItemList, Item, ItemCount, ProductForm
  services/productos.js   # fetch a productos.json
  services/imgbb.js       # subida de imágenes a Imgbb
  utils/formatPrice.js
```

## Deploy

**Netlify:** build command `npm run build`, publish directory `dist`, y cargar la variable de entorno `VITE_IMGBB_API_KEY` en _Site configuration → Environment variables_ antes de hacer el deploy.
