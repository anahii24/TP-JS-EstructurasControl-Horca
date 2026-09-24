function ejercicio03() {

    const sueldoBruto = Number(prompt("Ingrese el sueldo bruto: "));

    if (isNaN(sueldoBruto)) {
        alert("El sueldo ingresado no es válido");
        return;
    }

    const jubilacion = sueldoBruto * 0.11;
    const obraSocial = sueldoBruto * 0.03;
    const ley19032 = sueldoBruto * 0.03;

    const descuentosLey = jubilacion + obraSocial + ley19032;
    const sueldoNetoProvisorio = sueldoBruto - descuentosLey;

    let ganancias = 0;

    if (sueldoNetoProvisorio <= 1200000) {

        ganancias = 0;

    } else if (sueldoNetoProvisorio <= 2000000) {

        ganancias = (sueldoNetoProvisorio - 1200000) * 0.15;

    } else {

        ganancias = 120000 + (sueldoNetoProvisorio - 2000000) * 0.25;
    }

    const sueldoNetoFinal = sueldoNetoProvisorio - ganancias;

    console.log("Sueldo Bruto: $" + sueldoBruto);
    console.log("Descuentos de Ley: $" + descuentosLey);
    console.log("Retención de Ganancias: $" + ganancias);
    console.log("Sueldo Neto Final: $" + sueldoNetoFinal);

}