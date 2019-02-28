//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
    var importeSinIva;
    var porcetanjeDeIva = 21;
    var importeFianl;

    importeSinIva = parseFloat(prompt("Ingrese el importe."));
    importeFianl = importeSinIva + (importeSinIva * porcetanjeDeIva / 100);
    document.getElementById("importe").value = importeFianl.toFixed(2);

}

