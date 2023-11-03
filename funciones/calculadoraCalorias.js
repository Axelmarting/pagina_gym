function mostrarResultadoCalorias() {
    let pesoIngresado;
    let alturaIngresada;
    let aniosIngresados;
    let masculoChequeado;
    let femeninoChequeado;
    let sexo;
    let calculoCalorias;

    pesoIngresado = parseFloat(document.getElementById("peso1").value);
    alturaIngresada = parseFloat(document.getElementById("altura1").value);
    aniosIngresados = parseFloat(document.getElementById("anios1").value);

    femeninoChequeado = document.getElementById("femenino1");
    masculoChequeado = document.getElementById("masculino1");

    sexo = validandoSexo(femeninoChequeado, masculoChequeado);

    if(validaciones(pesoIngresado,alturaIngresada,aniosIngresados)){
        calculoCalorias = calculandoCalorias(sexo,pesoIngresado,alturaIngresada,aniosIngresados);
    }

    if(isNaN(calculoCalorias)){
        document.getElementById("resultado1").value = "Datos incorrectos.";
    }
    else{
        document.getElementById("resultado1").value = parseInt(calculoCalorias);
    }

}

function validandoSexo(mujer,hombre){
    if (mujer.checked) {
        valorSexo = "f";
    } else if (hombre.checked) {
        valorSexo = "m";
    } else {
        alert("Por favor, seleccione un sexo.");
        return;
    }
    return valorSexo;
}

function validandoInputs(num, tipo){
    if (isNaN(num) || num <1) {
        alert("Por favor, ingrese un valor valido para: " + tipo);
        return false;
    }
    return true;
}

function validaciones(num1,num2,num3){
    if(validandoInputs(num1,"peso") && validandoInputs(num2,"altura") && validandoInputs(num3,"anios")){
        return true;
    }
    return false;
}

function calculandoCalorias(sexo,n1,n2,n3){
    let operacion;
    if(sexo == "m"){
        operacion = 88.362 + (13.397*n1) + (4.799*n2) - (5.677*n3);
    }
    else{
        operacion = 447.593 + (9.247*n1) + (3.098*n2) - (4.330*n3);
    }
    return operacion;
}