function ejercicio09() {

    const dificultad = prompt("¿Tiene dificultad para respirar? si/no ");
    const dolor = Number(prompt("Ingrese el nivel de dolor del 1 al 10: "));
    const presion = Number(prompt("Ingrese la presión arterial sistólica: "));

    if (isNaN(dolor) || isNaN(presion)) {
        alert("Los datos ingresados no son válidos");
        return;
    }

    let nivel;
    let espera;

    if (dificultad === "si" || presion > 180) {

        nivel = "Nivel Rojo - Atención Inmediata";
        espera = "0 minutos";

    } else if (dolor >= 7 || (presion >= 140 && presion <= 180)) {

        nivel = "Nivel Amarillo - Urgencia Media";
        espera = "Hasta 60 minutos";

    } else {

        nivel = "Nivel Verde - Consulta de Baja Prioridad";
        espera = "Hasta 120 minutos";
    }

    alert(nivel + "Tiempo máximo de espera: " + espera);
}