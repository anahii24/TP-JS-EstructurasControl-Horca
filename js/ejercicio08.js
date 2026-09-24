function ejercicio08() {

    const carrito = Number(prompt("Ingrese el monto total del carrito: "));
    const membresia = prompt("Ingrese la categoría: Bronce, Plata u Oro ");
    const cupon = prompt("Ingrese el cupón: DESC10, SUPER20 o ninguno ");

    if (isNaN(carrito)) {
        console.log("El monto ingresado no es válido");
        return;
    }

    let descuento = 0;

    if (membresia === "Plata") {

        descuento = descuento + carrito * 0.05;

    } else if (membresia === "Oro") {

        descuento = descuento + carrito * 0.15;
    }

    switch (cupon) {

        case "DESC10":

            descuento = descuento + carrito * 0.10;
            break;

        case "SUPER20":

            if (carrito > 50000) {
                descuento = descuento + carrito * 0.20;
            }

            break;

        case "ninguno":
            break;

        default:
            console.log("Cupón no válido");
    }

    const totalConDescuento = carrito - descuento;

    let envio;

    if (totalConDescuento > 100000) {
        envio = 0;
    } else {
        envio = 4500;
    }

    const totalFinal = totalConDescuento + envio;

    console.log("Monto original: $" + carrito);
    console.log("Descuento aplicado: $" + descuento);
    console.log("Costo de envío: $" + envio);
    console.log("Total neto a pagar: $" + totalFinal);
}