function ejercicio06() {

    const ingreso = Number(prompt("Ingrese el ingreso mensual neto: "));
    const antiguedad = Number(prompt("Ingrese la antigüedad laboral en años: "));
    const deudas = prompt("¿Tiene deudas pendientes? si/no: ");
    const monto = Number(prompt("Ingrese el monto del crédito solicitado: "));

    if (isNaN(ingreso) || isNaN(antiguedad) || isNaN(monto)) {
        alert("Los datos numéricos no son válidos");
        return;
    }

    if (deudas === "si") {

        alert("Solicitud Rechazada. Motivo: posee deudas pendientes");

    } else if (antiguedad < 1) {

        alert("Solicitud Rechazada. Motivo: debe tener al menos 1 año de antigüedad laboral");

    } else {

        const cuota = (monto * 1.30) / 12;
        const limite = ingreso * 0.30;

        if (cuota > limite) {

            alert("Solicitud Rechazada. Motivo: la cuota supera el 30% del ingreso mensual");

        } else {

            alert("Solicitud Pre-Aprobada");
        }
    }

}