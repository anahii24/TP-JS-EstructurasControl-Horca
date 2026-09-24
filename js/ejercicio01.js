function ejercicio01() {

    const rol = prompt("Ingrese su rol: admin, editor o cliente ");
    const estadoCuenta = prompt("Ingrese el estado de la cuenta: activa o suspendida ");
    const hora = Number(prompt("Ingrese la hora actual (0 a 23)"));

    if (estadoCuenta === "suspendida") {

        alert("Acceso denegado, La cuenta está suspendida");

    } else if (rol === "admin") {

        alert("Acceso permitido, Tiene acceso total");

    } else if (rol === "editor") {

        if (hora >= 8 && hora <= 18) {
            alert("Acceso permitido para editor");
        } else {
            alert("Acceso denegado, El editor solo puede ingresar entre las 8 y las 18 hs");
        }

    } else if (rol === "cliente") {

        alert("Acceso permitido para cliente");

    } else {

        alert("Rol no autorizado");
    }
}