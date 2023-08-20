function evaluarEncuesta() {

    var pregunta1 = document.getElementById("r1").value;
    var pregunta2 = document.getElementById("r2").value;
    var pregunta3 = document.getElementById("r3").value;


    var respuesta4 = "";
    document.getElementsByName("opinion")
        .forEach(radio => {
            if (radio.checked) {
                respuesta4 = radio.value
            }
        });


    var respuesta5 = "";
    document.getElementsByName("opinion2")
        .forEach(radio => {
            if (radio.checked) {
                respuesta5 = radio.value
            }
        });

    var respuesta6 = "";
    document.getElementsByName("opinion3")
        .forEach(radio => {
            if (radio.checked) {
                respuesta6 = radio.value
            }
        });
    //Validacion de los datos ingresados
    if (pregunta1 == "" || pregunta2 == "" || pregunta3 == "" || respuesta4 == "" || respuesta5 == "" || respuesta6 == "") {

        Swal.fire({
            html: '<iframe src="https://embed.lottiefiles.com/animation/32338"></iframe>',
            title: 'No deje campos vacios!',

            background: '#fff',
            timer: 4000,
        })
    } else {


        Swal.fire({
            title: "Respuestas enviadas",
            text: "Gracias por realizar nuestra encuesta",
            html: '<iframe src="https://embed.lottiefiles.com/animation/95029"></iframe>',

        })
        document.getElementById("res0").innerHTML = "Gracias por sus respuestas";

    }
}