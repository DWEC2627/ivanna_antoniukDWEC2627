let peliculas = [
    {
        titulo: "Interstellar",
        director: "Christopher Nolan",
        genero: "Ciencia ficción",
        precio: 3.99,
        valoracion: 4.8
    },
    {
        titulo: "Parasite",
        director: "Bong Joon-ho",
        genero: "Drama",
        precio: 3.49,
        valoracion: 4.9
    },
    {
        titulo: "The Grand Budapest Hotel",
        director: "Wes Anderson",
        genero: "Comedia",
        precio: 2.49,
        valoracion: 4.6
    },
    {
        titulo: "Whiplash",
        director: "Damien Chazelle",
        genero: "Drama",
        precio: 2.99,
        valoracion: 4.8
    },
    {
        titulo: "Arrival",
        director: "Denis Villeneuve",
        genero: "Ciencia ficción",
        precio: 2.99,
        valoracion: 4.6
    }
];


//calcular cuántas películas están disponibles;
const totalPelis= peliculas.length;
console.log(`Hay un total de ${totalPelis} peliculas`);

//precio medio
let precioTotal = 0;

for (let i = 0; i < peliculas.length; i++) {
    precioTotal += peliculas[i].precio;
}

const precioMedio = precioTotal / peliculas.length;
//toFixed(2) sirve para mostrar un número con exactamente dos cifras decimales.

console.log(`El precio medio es ${precioMedio.toFixed(2)} euros`);

//pelicula mejor valorada

/*
.map() recorre un array y crea 
un nuevo array con el resultado de aplicar
 una operación a cada elemento.*/
 const peli= peliculas.map(pelicula=>pelicula.valoracion)
const mejorValor = Math.max(...peli)
console.log(mejorValor)

//cuantas peliculas permanecen a cada genero 
// Cuántas películas pertenecen a cada género

let contadorCienciaFiccion = 0;
let contadorDrama = 0;
let contadorComedia = 0;

for (let i = 0; i < peliculas.length; i++) {
    if (peliculas[i].genero === "Ciencia ficción") {
        contadorCienciaFiccion++;
    } else if (peliculas[i].genero === "Drama") {
        contadorDrama++;
    } else if (peliculas[i].genero === "Comedia") {
        contadorComedia++;
    }
}

console.log(`Ciencia ficción: ${contadorCienciaFiccion}`);
console.log(`Drama: ${contadorDrama}`);
console.log(`Comedia: ${contadorComedia}`);

//Obtener con Set los géneros sin repetir;
//Set en JavaScript sirve para guardar valores sin repetirlos.
const generos= peliculas.map(pelicula=>pelicula.genero)
const generosUnicos = new Set(generos);
console.log(generosUnicos);


//Obtener la relación de género con número de películas mediante Map.
//Map para relacionar cada género con el número de películas que tiene.
const generosMap = new Map();

for (let i = 0; i < peliculas.length; i++) {
    const genero = peliculas[i].genero;

    if (generosMap.has(genero)) {
        generosMap.set(genero, generosMap.get(genero) + 1);
    } else {
        generosMap.set(genero, 1);
    }
}

console.log(generosMap);