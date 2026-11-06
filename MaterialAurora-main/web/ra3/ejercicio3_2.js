//seleccionamos iframe
let iframe = document.querySelector("iframe");
//seleccionar el mensaje
let mensaje= iframe.parentElement.querySelector(".notice");
//seleccionamos botones
let botones = iframe.parentElement.querySelectorAll("button");
//contentWindow.history


let atras = botones[0];
let adelante = botones[1];

//controlar la posicion actual
let posicion =0;
//la ultima posicion alcanzada
let maximo = 0;

iframe.onload = function(){

    if(posicion<0) posicion =0;
    maximo = Math.max(maximo, posicion);
     
    //desactivarb atras si estamos en primera pagina 
    atras.disabled=posicion===0;
    //desactivamos alante si estamos en la ultima pagina 
    adelante.disabled = posicion ===maximo;

    //si atras esta desactivado ponemols su opacidad a 40%
    if(atras.disabled){
        atras.style.opacity="0.4"
    }else{
        atras.style.opacy="1"
    }

    
    if(adelante.disabled){
        adelante.style.opacity="0.4"
    }else{
        adelante.style.opacy="1"
    }

  
};

//cuando pulsamos el boton atras

atras.onclick= function(){
//comprobar si existe la pagina anterior 
if(posicion>0){
    posicion--;
//bvolvemos al historial del iframe 
    iframe.contentWindow.history.back();

}
}

adelante.onclick= function(){
if(posicion<maximo){
    posicion++;
    iframe.contentWindow.history.forward();
}
}

