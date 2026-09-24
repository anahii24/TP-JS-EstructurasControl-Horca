function ejercicio07() {

    const saldoInicial = 250000;
    let saldo = saldoInicial;

    const opcion = Number(prompt(
        "CAJERO AUTOMÁTICO\n" +
        "1 - Consultar Saldo\n" +
        "2 - Extraer Dinero\n" +
        "3 - Depositar Dinero\n" +
        "4 - Salir"
    ));

    switch (opcion) {

        case 1:

            alert("Su saldo es: $" + saldo);
            break;

        case 2:

            const extraccion = Number(prompt("Ingrese la cantidad a extraer: "));

            if (extraccion % 1000 !== 0) {

                alert("La cantidad debe ser múltiplo de $1.000");

            } else if (extraccion > saldo) {

                alert("No tiene saldo suficiente");

            } else {

                saldo = saldo - extraccion;
                alert("Extracción realizada. Su saldo es: $" + saldo);
            }

            break;

        case 3:

            const deposito = Number(prompt("Ingrese el monto a depositar: "));

            saldo = saldo + deposito;

            alert("Depósito realizado. Su saldo es: $" + saldo);

            break;

        case 4:

            alert("Gracias por utilizar el cajero");

            break;

        default:

            alert("Opción no válida");
    }
}