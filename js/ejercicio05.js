function ejercicio05() {

    const ingresos = Number(prompt("Ingrese los ingresos brutos anuales: "));
    const superficie = Number(prompt("Ingrese la superficie afectada en m2: "));

    if (isNaN(ingresos) || isNaN(superficie)) {
        alert("Los datos ingresados no son válidos");
        return;
    }

    let categoria;

    if (ingresos <= 6000000 && superficie <= 30) {

        categoria = "Categoría A";

    } else if (ingresos <= 12000000 && superficie <= 45) {

        categoria = "Categoría B";

    } else if (ingresos <= 18000000 && superficie <= 85) {

        categoria = "Categoría C";

    } else {

        categoria = "Régimen General";
    }

    alert("La categoría correspondiente es: " + categoria);

}