
//let sirve para crear una variable.
/*
console

console es una herramienta que tiene JavaScript para mostrar información en la consola del navegador.

Piensa que console es como una especie de ventana de comunicación para el programador.

No es algo que normalmente vea el usuario de la página.


log

log es una función dentro de console.

console.log()

Significa:

"Muestra esto en la consola."
*/


let titulo = "Interstellar";
let director = "Christopher Nolan";
let anio = 2014;
let precio = 3.99;
let disponible = true;
let valoracion = 4.8;

console.log(titulo);
console.log(director);
console.log(anio);
console.log(precio);
console.log(disponible);
console.log(valoracion);

//precio de dos alquileres
let precioDosAlquileres = precio * 2;

console.log(precioDosAlquileres);

//alquiler de 3 dias 
let precioTresDias = precio + (0.50 * 3);

console.log(precioTresDias);
//frase con variables 
console.log(
    "La película " + titulo +
    " fue dirigida por " + director +
    " en el año " + anio +
    ". Su precio es de " + precio + "€, " +
    "está disponible: " + disponible +
    " y tiene una valoración de " + valoracion + "/5."
);

/*

Reglas de alquiler
Utilizar estas variables:

edad = 17
disponible = true
saldo = 5.00
Mostrar mediante console.log():

"Alquiler permitido"
cuando la película esté disponible, el usuario tenga al menos 16 años y disponga de saldo suficiente para una película de 3,49 €.

En caso contrario, indicar cuál de las condiciones no se cumple.

Utilizar if, else, operadores de comparación y operadores lógicos.

Última modificación: viernes, 25 de septiembre de 2026, 20:07
Saltar a actividad

 */

let edad = 17;
let saldo = 5.00;

console.log(edad);
console.log(disponible);
console.log(saldo);

if (edad >= 16 && disponible == true && saldo >= 3.49) {

    console.log("Alquiler permitido");

} else {

    if (edad < 16) {
        console.log("Eres muy joven");
    }

    if (disponible == false) {
        console.log("La película no está disponible");
    }

    if (saldo < 3.49) {
        console.log("No tienes saldo suficiente");
    }
}

