function calcularPrecio(precio, dias){
   if(dias>=7){
    return precio*dias*0.10;
   }else if(dias>=4){
    return precio*dias*0.05;

   }else{
    return precio*dias;
   }
}

let precioDia = calcularPrecio(12,3)
console.log("Precio final: " + precioDia)



function esAlquilable(disponible){
return disponible===true;
}

console.log(esAlquilable(true));
console.log(esAlquilable(false));


function permiteAlquiler(edad, edadMinima){
    if(edad>=edadMinima){
        return true;
    }else{
        return false;
    }
}

let edad = permiteAlquiler(17,18)
console.log(edad)


function tieneSaldo(saldo, precio){
    if(saldo>=precio){
        return true

    }else{
        return false
    }
}

let saldo = tieneSaldo(1,12)
console.log(saldo)


function puedeAlquilar(disponible, edad, saldo, dias, precio){
    let precioFinal= calcularPrecio(precio,dias);
    return esAlquilable(disponible)&&
    permiteAlquiler(edad,18)&&
    tieneSaldo(saldo, precioFinal);
}
console.log(puedeAlquilar(true, 18,15,7,78));