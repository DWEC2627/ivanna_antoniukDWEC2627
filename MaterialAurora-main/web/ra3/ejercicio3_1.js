
//probando con span
let datos = document.querySelectorAll("#informacionNavegador .info-item span");

//titulo
datos[0].textContent = document.title;

//url actual 
datos[1].textContent = window.location.href;

//idioma del documento y el navegador 
 datos[2].textContent = document.documentElement.lang +" / "+ navigator.language;

 //ancho y alto de la pantalla

 datos[3].textContent = window.innerWidth+ " / " + window.innerHeight;

 //ancho y alto de la ventana del navegador

 datos[4].textContent = screen.width +" / " + screen.height

 //el UserAgent del navegador
 
 datos[5].textContent= navigator.userAgent;
