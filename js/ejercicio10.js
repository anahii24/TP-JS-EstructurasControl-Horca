function ejercicio10() {

    const monto = Number(prompt("Ingrese el monto en pesos argentinos: "));
    const moneda = prompt("Ingrese la moneda: USD, EUR o BRL ");
    const meses = Number(prompt("Ingrese los meses de proyección (1 a 12): "));

    if (isNaN(monto) || isNaN(meses)) {
        console.log("Los datos ingresados no son válidos");
        return;
    }

    let cotizacion;

    switch (moneda) {

        case "USD":
            cotizacion = 1300;
            break;

        case "EUR":
            cotizacion = 1420;
            break;

        case "BRL":
            cotizacion = 220;
            break;

        default:
            console.log("Moneda no válida");
            return;
    }

    const montoConComision = monto * 0.98;

    const monedaExtranjera = montoConComision / cotizacion;

    const valorProyectado = monto * (1 + 0.04 * meses);

    console.log("Monto recibido en " + moneda + ": " + monedaExtranjera);
    console.log("Valor equivalente proyectado por inflación: $" + valorProyectado);
}