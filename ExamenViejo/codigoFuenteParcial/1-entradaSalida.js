//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	
    var base;
    var perimetro;

    base = parseFloat(document.getElementById("lado").value);
    perimetro = base * 3;

    console.log(perimetro.toFixed(2));

	
}

