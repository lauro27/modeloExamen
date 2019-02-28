//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
    var primerNumero;
    var segundoNumero;
    var resultado;

    primerNumero = parseFloat(prompt("Ingrese un numero"));
    segundoNumero = parseFloat(prompt("Ingrese otro numero"));


    if (primerNumero == segundoNumero){
        resultado = primerNumero * segundoNumero;
    }else if(primerNumero > segundoNumero){
        resultado = primerNumero - segundoNumero;
    }else{
        resultado = primerNumero + segundoNumero;
    }

    document.write(resultado);


}

