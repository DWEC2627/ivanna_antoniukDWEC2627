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


function buscarPelicula(pelicula) {
    return pelicula.titulo === "Parasite" ||
           pelicula.titulo === "Whiplash";
}

console.log(peliculas.filter(buscarPelicula));

for(let i=0;i<peliculas.length;i++){
    console.log(peliculas[i].titulo)
}

for(let i=0;i<peliculas.length;i++){
    if(peliculas[i].genero=="Ciencia ficción"){
    console.log(peliculas[i])
}
}

//orden de pequeño al grande

console.log(peliculas.sort((a,b)=>a.valoracion-b.valoracion))
//orden de mayor al grande 
console.log(peliculas.sort((a,b)=>b.precio-a.precio))