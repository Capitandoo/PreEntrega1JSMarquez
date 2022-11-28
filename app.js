let nombre = prompt ("Hola!! Como estas? Ingresas tu nombre?");
let reserva = prompt ("¿Habitación simple o doble?");
let hidro = prompt ("¿Con hidromasaje? - si/no");
let precio;
let precioHidro;
let totalreserva;

while ((reserva == "") && (hidro == "")) {
    alert(nombre + " " + "Los datos no pueden estar vacios");
    nombre = prompt ("Hola!! Como estas? Ingresas tu nombre?");
    reserva = prompt ("¿Habitación simple o doble?");
    hidro = prompt ("¿Con hidromasaje? - si/no");
}

if (reserva == "simple" || reserva == "doble"){
    switch (reserva){
        case "simple":
            precio = 50;
            break;
            case "doble":
                precio = 100;
                break;
                default:
                break;
    }
}else{
    alert("sin opción");
}

if (hidro == "si"){
    precioHidro = 100;
}else{
    precioHidro = 0;
    alert("sencillita entonces");
}

function total (){
    totalreserva = precio + precioHidro;
    alert(nombre + " el total de la reserva es de " + totalreserva);
}

total ();
