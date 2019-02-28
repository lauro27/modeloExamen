//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar() {

    var nota;
    var maximo;
    var minimo;
    var contador = 1;
    var genero;
    var contadorVarones = 0;
    var contadorChicas = 0;
    var sumaDeNotas = 0;
    var promedioDeNotas;

    while (contador <= 6) {
        ventas = parseFloat(prompt("Ingrese la nota del alumno " + contador));
        genero = prompt("Ingrese el genero. F o M.");
        genero = genero.toLocaleLowerCase();
        if (isNaN(nota) || nota == Infinity || nota < 0 || nota > 10) {
            alert("Error. Dato invalido");
        }else{
            if(contador == 1){
                maximo = nota;
                minimo = nota;
                contador++;
                sumaDeNotas = sumaDeNotas + nota;
            }
            else{
                if(nota > maximo){
                    maximo = nota;
                    contador++;
                }
                else if(nota < minimo){
                    minimo = nota;
                    contador++;
                }
            }
        }

    }
}

