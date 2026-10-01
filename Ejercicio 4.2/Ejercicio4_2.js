const calcularPrecio= function(precio, dias){
   if(dias>=7){
    return precio*dias*0.10;
   }else if(dias>=4){
    return precio*dias*0.05;

   }else{
    return precio*dias;
   }
}


console.log("Precio final: " + calcularPrecio(17,9))



const  esAlquilable= function(disponible){
return disponible===true;
}

console.log("Disponible:" + esAlquilable(true));
console.log("Disponible:" + esAlquilable(false));


const  permiteAlquiler = function(edad, edadMinima){
    if(edad>=edadMinima){
        return true;
    }else{
        return false;
    }
}


console.log("Tienes permmiso de alquiler: " + permiteAlquiler(8,18))


const  tieneSaldo= function(saldo, precio){
    if(saldo>=precio){
        return true

    }else{
        return false
    }
}


console.log("Tienes saldo suficiente " + tieneSaldo(78,98))


function puedeAlquilar(disponible, edad, saldo, dias, precio){
    let precioFinal= calcularPrecio(precio,dias);
    return esAlquilable(disponible)&&
    permiteAlquiler(edad,18)&&
    tieneSaldo(saldo, precioFinal);
}
console.log("Puedes alquilar: " + puedeAlquilar(true, 18,15,7,78));