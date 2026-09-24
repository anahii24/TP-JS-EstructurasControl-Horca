function ejercicio04() {

    const distancia = Number(prompt("Ingrese la distancia en km: "));
    const tiempo = Number(prompt("Ingrese el tiempo estimado en minutos: "));
    const demanda = prompt("Ingrese la demanda: baja, media o alta ");

    if (isNaN(distancia) || isNaN(tiempo)) {
        alert("Los datos ingresados no son válidos");
        return;
    }

    let factor;

    switch (demanda) {

        case "baja":
            factor = 1.0;
            break;

        case "media":
            factor = 1.3;
            break;

        case "alta":
            factor = 1.8;
            break;

        default:
            alert("Nivel de demanda no válido");
            return;
    }

    let total = (800 + distancia * 350 + tiempo * 80) * factor;

    if (distancia > 20) {
        total = total + 1500;
    }

    alert("El costo estimado del viaje es: $" + total);

}