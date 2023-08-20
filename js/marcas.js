'use strict';

//evento que carga la funcion automaticamente
window.onload = function () {
    document.getElementById("output-img").innerHTML = "<img src='img/logoFarmaciaFinal.png' style = 'width: 300px;' class = 'img-fluid rounded' alt= 'logo'/>";


    document.getElementById("pharmacy").onchange = function (e) {

        let n = e.target.value;

        let imagen = "<img src='img/" + n + ".jpg' class='img-fluid img-thumbnail rounded' alt='marcas' />";

        //salida de las imagenes y los textos informativos...
        document.getElementById("output-img").innerHTML = imagen;

    };
};

