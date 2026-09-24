function ejercicio02() {

    const edad = Number(prompt("Ingrese la edad del conductor: "));
    const cobertura = prompt("Ingrese la cobertura: terceros, terceros_completo o todo_riesgo ");
    const accidentes = Number(prompt("Ingrese la cantidad de accidentes del último año: "));

    let tarifaBase = 0;
    let precioFinal = 0;

    if (cobertura === "terceros") {

        tarifaBase = 45000;

    } else if (cobertura === "terceros_completo") {

        tarifaBase = 70000;

    } else if (cobertura === "todo_riesgo") {

        tarifaBase = 110000;

    } else {

        alert("Tipo de cobertura no válido");
        return;
    }

    if (accidentes >= 3 && cobertura === "todo_riesgo") {

        alert("No se puede contratar Todo Riesgo con 3 o más accidentes");
        return;

    } else {

        precioFinal = tarifaBase;

        if (edad < 25) {
            precioFinal = precioFinal * 1.20;
        }

        if (accidentes === 0) {
            precioFinal = precioFinal * 0.90;
        }

        if (accidentes >= 3) {
            precioFinal = precioFinal * 1.30;
        }

        alert("El valor final de la póliza es: $" + precioFinal);
    }
}
