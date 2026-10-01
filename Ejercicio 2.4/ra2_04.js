let precioTexto = "3.99"
let diasTexto = "4"
//Mostrar por consola el tipo de ambas variables.
console.log(typeof precioTexto)
console.log(typeof diasTexto)
//Crear un bloque while que se ejecute exactamente dos veces.
let contador =0
while(contador<2){
console.log("contador " + (contador+1))
//Dentro del bloque while, intentar el cálculo directo de: precioTexto × diasTexto
console.log("Calculo directo: " + (precioTexto*diasTexto))
//Convertir los valores a número y volver a calcular en el segundo ciclo del bloque while.
let precio = Number(precioTexto)
let dias = Number(diasTexto)


/*
Además, dentro del bucle while crear una variable,
 un bloque if y un bloque switch. 
 La primera vez que se ejecute el bloque
  while no debe entrar en el bloque if, 
  la segunda sí debe entrar y crear una segunda
   variable. Mostrar con mensajes de consola.

*/ 
let variable = "Soy una variable dentro del while"
if(contador==1){
console.log("Creo que estoy en if")
 let variableif = 0
 console.log("la variable se ha creadp y es " + variableif)
}else{
    console.log("No estoy en if ")
}


/*
El switch debe elegir un camino la primera
 vez y la segunda vez otro. 
 En ambos casos se indicará por 
 onsola el camino tomado y se 
 demostrará si las variables 
 definidas dentro del while y del if están disponible o no.
*/
switch(contador){

    case 0:
        Text = "estamos en la vuelta numero 1"
        console.log(variable)
        break;
        case 1:
            Text="Estamos en la vuelta 2 "
            console.log(variable)
            console.log(variableif)
            break;

}contador++;


}

