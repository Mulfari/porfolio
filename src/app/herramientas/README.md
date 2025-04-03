# Sección de Herramientas

Esta sección muestra una colección de herramientas útiles para el desarrollo y la productividad.

## Cómo agregar nuevas herramientas

Para agregar una nueva herramienta, edita el archivo `src/app/herramientas/page.tsx` y agrega un nuevo objeto a la matriz `tools` con la siguiente estructura:

```typescript
{
  id: "id-unico", // Un identificador único para la herramienta
  name: "Nombre de la Herramienta",
  description: {
    es: "Descripción en español",
    en: "Descripción en inglés",
    de: "Descripción en alemán"
  },
  url: "https://url-de-la-herramienta.com",
  category: "categoria", // Debe ser una de las categorías existentes o agregar una nueva
  icon: "/icons/tools/nombre-icono.png" // Ruta al icono (idealmente 64x64px)
}
```

## Categorías existentes

- `development`: Herramientas de desarrollo
- `design`: Herramientas de diseño
- `productivity`: Herramientas de productividad

Si necesitas agregar una nueva categoría, también debes agregarla al array `categories` en el mismo archivo.

## Iconos

Los iconos deben guardarse en la carpeta `public/icons/tools/` preferiblemente en formato PNG o SVG con un tamaño de 64x64 píxeles. 