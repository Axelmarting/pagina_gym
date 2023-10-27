function mostrarResultadoCalorias() {
    let pesoIngresado;
    let alturaIngresada;
    let aniosIngresados;
    let masculoChequeado;
    let femeninoChequeado;
    let sexo;

    pesoIngresado = parseFloat(document.getElementById("peso1").value);
    alturaIngresada = parseFloat(document.getElementById("altura1").value);
    aniosIngresados = parseFloat(document.getElementById("anios1").value);

    femeninoChequeado = document.getElementById("femenino1");
    masculoChequeado = document.getElementById("masculino1");

    if (femeninoChequeado.checked) {
        sexo = "f";
    } else if (masculoChequeado.checked) {
        sexo = "m";
    } else {
        alert("Por favor, seleccione un sexo.");
    }

    switch(sexo){
        case "f":
            break;

        default:
            break;
    }

}



function mostrarResultadoPeso() {
    let pesoIngresado;
    let alturaIngresada;
    let aniosIngresados;
    let masculoChequeado;
    let femeninoChequeado;
    let sexo;

    pesoIngresado = parseFloat(document.getElementById("peso2").value);
    alturaIngresada = parseFloat(document.getElementById("altura2").value);
    aniosIngresados = parseFloat(document.getElementById("anios1").value);

    femeninoChequeado = document.getElementById("femenino2");
    masculoChequeado = document.getElementById("masculino2");

    if (femeninoChequeado.checked) {
        sexo = "f";
    } else if (masculoChequeado.checked) {
        sexo = "m";
    } else {
        alert("Por favor, seleccione un sexo.");
    }

}