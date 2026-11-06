# Material de HTML y CSS — JavaScript / Videoclub Aurora

Este paquete contiene **el material que se entrega al alumnado para la parte web**.
No contiene las soluciones JavaScript de los ejercicios.

La filosofía es:

- el profesor proporciona HTML y CSS;
- el profesor proporciona los datos JSON cuando el ejercicio los necesita;
- el alumno escribe el JavaScript;
- no hace falta modificar el HTML para añadir elementos durante los ejercicios en los que ya están previstos;
- desde RA6 en adelante se reutiliza la misma apariencia de Aurora y se hace evolucionar la aplicación.

## Estructura

```text
css/aurora.css
web/ra3/panel_navegador.html
web/ra6/01_estado.html
web/ra6/02_tarjeta_existente.html
web/ra6/03_catalogo_vacio.html
web/ra6/aurora_catalogo.html
web/ra5/aurora_interactivo.html
web/ra7/aurora_async.html
web/conjunta_cliente/aurora_servidor.html
data/peliculas.json
data/configuracion.json
img/README.txt
```

## Qué plantilla utilizar en cada actividad

### RA2

Las actividades 1–4 y la práctica RA2 no necesitan HTML ni CSS.
Se ejecutan en el navegador usando la consola.

### RA3

- Actividad 5: `web/ra3/panel_navegador.html`
- Actividad 6: no necesita una plantilla específica; se puede trabajar desde la consola.
- Actividad 7: `web/ra3/panel_navegador.html`
- Práctica RA3: `web/ra3/panel_navegador.html`

### RA4

Las actividades 8–12 y la práctica RA4 no necesitan HTML ni CSS.
El trabajo se realiza con JavaScript y consola.

### RA6

- Actividad 13: `web/ra6/01_estado.html`
- Actividad 14: `web/ra6/02_tarjeta_existente.html`
- Actividad 15: `web/ra6/03_catalogo_vacio.html`
- Actividad 16: `web/ra6/03_catalogo_vacio.html` + `data/peliculas.json`
- Actividad 17: `web/ra6/03_catalogo_vacio.html` + carpeta `img/`
- Actividad 18: `web/ra6/03_catalogo_vacio.html`
- Actividades 19–21: `web/ra6/aurora_catalogo.html`
- Práctica RA6: `web/ra6/aurora_catalogo.html`

### RA5

- Actividades 22–26: `web/ra5/aurora_interactivo.html`
- Práctica RA5: `web/ra5/aurora_interactivo.html`

El HTML ya contiene búsqueda, filtros, catálogo, alquiler, detalle y formulario.
El alumno programa su comportamiento mediante JavaScript.

### RA7

- Actividades 27–33: `web/ra7/aurora_async.html` cuando necesiten interfaz.
- Actividad 27: además de la página, se utiliza `data/peliculas.json`.
- Actividad 31: se utiliza también `data/configuracion.json`.
- Práctica RA7: `web/ra7/aurora_async.html`.

### Práctica conjunta con Entorno Servidor

Utilizar:

`web/conjunta_cliente/aurora_servidor.html`

La página sigue siendo Aurora y no incorpora ninguna funcionalidad nueva.
En esta práctica solamente cambia el origen de los datos del catálogo:

```text
ANTES
data/peliculas.json
      ↓
fetch()
      ↓
JavaScript
      ↓
DOM

DESPUÉS
http://localhost:8080/api/peliculas
      ↓
fetch()
      ↓
JSON
      ↓
JavaScript
      ↓
DOM
```

El servidor Java es responsabilidad del alumno en la asignatura de Desarrollo Web en Entorno Servidor.

## Importante sobre JavaScript

Este paquete deliberadamente **no contiene los archivos JavaScript de las actividades**.
El alumnado debe crearlos.

Las plantillas no dependen de ningún framework ni de ninguna fuente externa de CSS.
El aspecto se consigue únicamente con `css/aurora.css`.

Las imágenes reales tampoco se incluyen: el profesor puede colocar las imágenes proporcionadas para el curso en `img/`, utilizando los nombres indicados en `img/README.txt`.


## Uso de las plantillas con Fetch

Las actividades que utilizan `fetch()` no deben ejecutarse abriendo el HTML directamente con `file://`.
Utiliza el servidor local habitual del aula, por ejemplo Live Server de Visual Studio Code, o cualquier servidor HTTP local equivalente.
