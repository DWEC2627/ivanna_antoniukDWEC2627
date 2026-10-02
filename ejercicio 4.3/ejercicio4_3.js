const pelicula={
    titulo:  "Interstellar",
director : "Christopher Nolan",
ano: 2014,
//genero: "Ciencia ficción",
duracion: 169,
disponible: "si",

 ficha: function(){
return  this.titulo + " " + "("+ this.ano + ")" + "-" + this.director + "-" + this.duracion + " min" + "- " + "Disponible: " + this.disponible;
 } ,

 disponibilidad: function(){
if(this.disponible==="no"){
    return "La pelicula no esta disponible "
}else{
    return "La pelicula esta disponible "
}
 }
};

let pelicula1 = pelicula.ficha();
console.log(pelicula1)

pelicula1= pelicula.disponibilidad();
console.log(pelicula1)

console.log(pelicula.genero)

const cliente = {
    nombre: "Laura",
    numeroCliente: 27,
    pelisAlquil: 3,

    puedeAlquilar: function() {
        if (this.pelisAlquil >= 3) {
            return false;
        } else {
            return true;
        }
    }
};

let clienta = cliente.puedeAlquilar();
console.log(clienta);


function alquilar(cliente, pelicula) {
    if (cliente.puedeAlquilar() && pelicula.disponible === "si") {
        cliente.pelisAlquil++;
        pelicula.disponible = "no";
        return "El alquiler se realizo con exito!";
    } else {
        return "No se puede realizar el alquiler";
    }
}

console.log(alquilar(cliente, pelicula));

console.log(cliente);
console.log(pelicula);


function Pelicula (titulo, director, ano, duracion){
    this.titulo = titulo;
    this.director= director;
    this.ano= ano;
    this.duracion= duracion;


this.ficha= function(){
return  this.titulo + " " + "("+ this.ano + ")" + "-" + this.director + "-" + this.duracion + " min" + "- " + "Disponible: " + this.disponible;
 } ;
}

const matrix = new Pelicula("The Matrix" , "Lana y Lilly Wachowski", 1999 , 136 );
console.log(matrix.ficha());

const pulpFiction = new Pelicula ("Pulp Fiction", "Quentin Tarantino",  1994, 154  );
console.log(pulpFiction.ficha());

function propiedades(){
    for(let propiedad in matrix){
        console.log(propiedad + ": " + matrix[propiedad]);
    }
}
propiedades();


function valores(){
    return Object.values(matrix);

}

console.log(valores());

function aTexto(){
    return JSON.stringify(matrix);
}


console.log(aTexto());