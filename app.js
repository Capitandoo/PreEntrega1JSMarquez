let nombre = prompt ("Hola!! Como estas? Ingresas tu nombre?");
let reserva = prompt ("¿Habitación simple o doble?");
let personas = prompt ("Miedo por preguntar...¿Cuantas personas?");
let precio;

while ((reserva == "") && (personas == "")) {
    alert(nombre + " " + "habitación y cantidad de personas no pueden estar vacios");
    nombre = prompt ("Hola!! Como estas? Ingresas tu nombre?");
    reserva = prompt ("¿Habitación simple o doble?");
    personas = prompt ("Miedo por preguntar...¿Cuantas personas?");
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
    alert("impagable");
}
while (reserva == "simple" || reserva == "doble"){
    alert("total" + precio);
    break;
}
