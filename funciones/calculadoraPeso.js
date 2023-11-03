function mostrarResultadoPeso() {
    //let pesoIngresado;
    let alturaIngresada;
    //let aniosIngresados;
    let masculoChequeado;
    let femeninoChequeado;
    let sexo;
    let alturaPulgadas;
    let operacion;

    //pesoIngresado = parseFloat(document.getElementById("peso2").value);
    alturaIngresada = parseFloat(document.getElementById("altura2").value);
    //aniosIngresados = parseFloat(document.getElementById("anios1").value);

    femeninoChequeado = document.getElementById("femenino2");
    masculoChequeado = document.getElementById("masculino2");

    sexo = validandoSexo(femeninoChequeado, masculoChequeado);

    alturaPulgadas = alturaIngresada / 2.54;

    if(validaciones(alturaIngresada)){
        operacion = calculandoPeso(sexo,alturaPulgadas);
    }

    if(isNaN(operacion)){
        document.getElementById("resultado2").value = "Datos incorrectos.";
    }
    else{
        document.getElementById("resultado2").value = parseInt(operacion);
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

function validaciones(num1){
    if(validandoInputs(num1,"altura")){
        return true;
    }
    return false;
}

function calculandoPeso(sexo,n1){
    let calculo;
    switch(sexo){
        case "m":
            calculo = 50 + 2.3 * (n1 - 60);
            break;
        case "f":
            calculo = 45.5 + 2.3 * (n1 - 60);
            break;
    }
    return calculo;
}