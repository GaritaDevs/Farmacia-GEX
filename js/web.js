//Section cuatro pestanas

var cerrar = document.getElementsByClassName("close")[0];
cerrar.onclick = function () {
    modal.style.display = "none"
}

function opciones(evt, info) {
    var i, contenido, tablinks;

    contenido = document.getElementsByClassName("contenido");
    for (i = 0; i < contenido.length; i++) {
        contenido[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {

        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(info).style.display = "block";
    evt.currentTarget.className += " active";
}


$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: true,
    autoplay: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 3
        }
    }
});


var modal = document.getElementById('contenedor1');
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

img.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

var cerrar = document.getElementsByClassName("close")[0];
cerrar.onclick = function () {
    modal.style.display = "none"
}
