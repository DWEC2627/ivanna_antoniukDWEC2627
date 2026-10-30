/*JavaScript counts months from 0 to 11:

January = 0.

December = 11. */
const inicio = new Date(2025,2,29,20,30) ;
//Fecha inicio
console.log("Inicio en Madrid: " , inicio)
console.log("Inicio en UTC : " , inicio.toISOString() ) //aqui falta algo que no pueden ser iguales 


//The getTimezoneOffset() method returns the difference (in minutes) between local time an UTC time
console.log(
    "Diferencia local-UTC en min: ",
    inicio.getTimezoneOffset()
);

//la fecha que corresponde a 2 días después en hora local y en UTC;
//osea sumar 2 dias en el calendario
const dosDias= new Date(inicio);
//The setDate() method sets the day of a date object (1-31):
dosDias.setDate(dosDias.getDate()+2);//Explotara?
console.log("Dos dias despues en MAdrid: " + dosDias)
console.log("Dos dias despues en UTC: " + dosDias.toISOString() )//aqui falta algo pero ns el que 

//horas reales 
const horasPasadas= (dosDias.getTime()-inicio.getTime())/(1000*60*60); //para pasar de milisegundos a horas hago esto 1000*60*60
console.log("Horas pasadas: " , horasPasadas);

//sumar 48 horas
const cuarentaYOchoHoras=
new Date(inicio.getTime()+48*60*60*1000);//aqui lo mismo que de arriba pero mas 48h 

console.log("Exactamentisimo 48 horas despues de UTC: ", cuarentaYOchoHoras.toISOString())//AQUI FALTA ALGO
console.log("Exactamente 48 horas despues en madrid : ", cuarentaYOchoHoras )

