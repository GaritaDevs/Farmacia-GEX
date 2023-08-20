function pago() {
    var tipo = document.getElementById("tipo").value;
    var cantidad = document.getElementById("cantidad").value;
    var seguro = document.getElementById("seguro").value;
    var pagoTipo = 0;

    if (tipo == "Seleccione el tipo" || cantidad == "" || seguro == "Seleccioes su preferencia") {
        swal.fire({
            icon: "error",
            title: "Atencion usuario",
            text: "No dejas campos vacios",
        })
    } else

        if (seguro == "ASSA") {
            pagoTipo = 10000;
        } else if (seguro == "PALIG") {
            pagoTipo = 35000;
        } else if (seguro == "MAPFRE") {
            pagoTipo = 25000;
        } else if (seguro == "MediSmart") {
            pagoTipo = 31500;
        }

    //Calculos y resultados 


    var monto = cantidad * pagoTipo;
    document.getElementById("txtResultadoMontoFinal").innerHTML = "$" + monto;

}

function btnLimpiar() {
    document.getElementById("tipo").value = "Tipo de Plan";
    document.getElementById("cantidad").value = "";
    document.getElementById("seguro").value = "";
    document.getElementById("txtResultadoMontoFinal").value = "";

}



var foto = 0;
var micarrusel = {};
var total = 0;

//Arreglo para cargar las imagenes y titulo de cada foto
micarrusel = [{ imageurl: "./img/seguro1.png", titulo: "PALIG", href: 'https://www.palig.com/es/costa-rica' },
{ imageurl: "./img/seguro2.png", titulo: "ASSA" },
{ imageurl: "./img/seguro3.png", titulo: "MAPFRE" },
{ imageurl: "./img/seguro4.png", titulo: "MediSmart" },
];

//Funcion que permite cambiar las imagenes (anterior y siguiente)
var cambiar = function (mas) {
    //Almacena la cantidad total de imagenes
    total = micarrusel.length;
    foto = foto + mas;
    //Condicionales para determinar la imagen a presentar
    if (foto > total) {
        foto = 1
    }
    if (foto < 1) {
        foto = total;
    }

    //Instrucciones que apuntan a cada imagen y titulo
    document.thumb.src = micarrusel[foto - 1].imageurl;
    titulo = document.getElementById('titulo');
    titulo.innerText = micarrusel[foto - 1].titulo;
}