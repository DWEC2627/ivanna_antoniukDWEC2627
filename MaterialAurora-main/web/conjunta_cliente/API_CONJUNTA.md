# Práctica conjunta: contrato cliente-servidor

## Servidor

Cada alumno ejecuta su propio servidor Java en:

`http://localhost:8080`

Recurso:

`GET /api/peliculas`

URL completa:

`http://localhost:8080/api/peliculas`

La respuesta debe ser JSON.

## Estructura

Cada película tiene exactamente estas propiedades:

- `titulo`
- `director`
- `anio`
- `genero`
- `precio`
- `disponible`
- `valoracion`
- `sinopsis`
- `imagen`

## Contenido del servidor

El contenido debe ser diferente del `data/peliculas.json` utilizado en el curso, pero utilizar la misma estructura y los mismos géneros que admite la interfaz de Aurora.

El servidor debe proporcionar exactamente estas seis películas:

```json
[
  {
    "titulo": "Blade Runner 2049",
    "director": "Denis Villeneuve",
    "anio": 2017,
    "genero": "Ciencia ficción",
    "precio": 3.99,
    "disponible": true,
    "valoracion": 4.7,
    "sinopsis": "Un agente de policía descubre un secreto que le lleva a investigar una antigua desaparición.",
    "imagen": "img/blade-runner-2049.jpg"
  },
  {
    "titulo": "John Wick",
    "director": "Chad Stahelski",
    "anio": 2014,
    "genero": "Acción",
    "precio": 3.49,
    "disponible": true,
    "valoracion": 4.5,
    "sinopsis": "Un antiguo asesino vuelve a la acción después de que un grupo de criminales irrumpa en su casa.",
    "imagen": "img/john-wick.jpg"
  },
  {
    "titulo": "La vida de Brian",
    "director": "Terry Jones",
    "anio": 1979,
    "genero": "Comedia",
    "precio": 2.49,
    "disponible": true,
    "valoracion": 4.6,
    "sinopsis": "Un hombre corriente se ve envuelto por accidente en una serie de acontecimientos extraordinarios.",
    "imagen": "img/la-vida-de-brian.jpg"
  },
  {
    "titulo": "Lost in Translation",
    "director": "Sofia Coppola",
    "anio": 2003,
    "genero": "Romance",
    "precio": 2.99,
    "disponible": false,
    "valoracion": 4.4,
    "sinopsis": "Dos desconocidos entablan una relación inesperada durante una estancia en Tokio.",
    "imagen": "img/lost-in-translation.jpg"
  },
  {
    "titulo": "El show de Truman",
    "director": "Peter Weir",
    "anio": 1998,
    "genero": "Drama",
    "precio": 2.49,
    "disponible": true,
    "valoracion": 4.7,
    "sinopsis": "Un hombre comienza a sospechar que toda su vida forma parte de un elaborado programa de televisión.",
    "imagen": "img/el-show-de-truman.jpg"
  },
  {
    "titulo": "Coraline",
    "director": "Henry Selick",
    "anio": 2009,
    "genero": "Animación",
    "precio": 2.49,
    "disponible": true,
    "valoracion": 4.5,
    "sinopsis": "Una niña descubre una puerta hacia una versión aparentemente perfecta de su propia vida.",
    "imagen": "img/coraline.jpg"
  }
]
```

No se debe modificar la estructura de datos para adaptarla al cliente.

## Objetivo de la práctica de cliente

El cliente debe dejar de utilizar el archivo local `data/peliculas.json` y realizar:

`GET http://localhost:8080/api/peliculas`

Todo lo demás de Aurora debe seguir funcionando: búsqueda, filtros, ordenación, detalle y alquiler.

El alumno no debe escribir en su JavaScript los seis datos proporcionados por el servidor.
