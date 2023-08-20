window.addEventListener("load", initi, false);

function initi() {
  let email = document.getElementById("inscriptionTxt");
  let btnEnviar = document.getElementById("btnSend");
  //Esta expresion tiene todo para que la persona ponga un email correcto
  let expressionEmail =
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
  let alerta = document.getElementById("mensajeAlert");

  btnEnviar.onclick = function () {
    email = inscriptionTxt.value;

    /// Estrictamente igual ===
    if (email === "") {
      alerta.textContent = "El campo email esta vacio";
      alerta.classList.add("alertaRoja");
      alerta.classList.remove("alertaVerde");
    } else if (expressionEmail.test(email) === false) {
      alerta.textContent = "Email invalido";
      alerta.classList.add("alertaRoja");
      alerta.classList.remove("alertaVerde");
    } else {
      alerta.textContent = "Su registro fue exitoso";
      alerta.classList.add("alertaVerde");
      alerta.classList.remove("alertaRoja");

      emailjs.sendForm(
        "service_7x4rc2q",
        "template_xn1d9id",
        "#inscription",
        "6sLVDSHJ4IwuSrQWp"
      );
      cleanInputs();
    }
  };

  function cleanInputs() {
    inscriptionsTxt.value = "";
    alerta.value = "";
  }
}

window.addEventListener("load", init, false);

function init() {
  let nombre = document.getElementById("nombreTxt");
  let apellido = document.getElementById("apellidoTxt");
  let email = document.getElementById("emailTxt");
  let numero = document.getElementById("numberTxt");
  let mensaje = document.getElementById("mensajeTxt");
  let alerta = document.getElementById("mensajeAlert");
  let btnEnviar = document.getElementById("btnSendd");
  let expressionEmail =
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

  btnEnviar.onclick = function () {
    nombre = nombreTxt.value;
    apellido = apellidoTxt.value;
    email = emailTxt.value;
    numero = numberTxt.value;
    mensaje = mensajeTxt.value;

    if (
      nombre === "" &&
      apellido === "" &&
      email === "" &&
      numero === "" &&
      mensaje === ""
    ) {
      Swal.fire({
        html: '<iframe src="https://embed.lottiefiles.com/animation/32338"></iframe>',
        title: "No deje campos vacios!",
        background: "#fff",
        timer: 4000,
      });
    } else if (nombre === "") {
      Swal.fire({
        html: '<iframe src="https://embed.lottiefiles.com/animation/32338"></iframe>',
        title: "No deje campos vacios!",
        background: "#fff",
        timer: 4000,
      });
    } else if (apellido === "") {
      Swal.fire({
        html: '<iframe src="https://embed.lottiefiles.com/animation/32338"></iframe>',
        title: "No deje campos vacios!",
        background: "#fff",
        timer: 4000,
      });
    } else if (email === "") {
      Swal.fire({
        html: '<iframe src="https://embed.lottiefiles.com/animation/32338"></iframe>',
        title: "No deje campos vacios!",
        background: "#fff",
        timer: 4000,
      });
    } else if (expressionEmail.test(email) === false) {
      Swal.fire({
        html: '<iframe src="https://embed.lottiefiles.com/animation/32338"></iframe>',
        title: "No deje campos vacios!",
        background: "#fff",
        timer: 4000,
      });
    } else if (numero === "") {
      Swal.fire({
        html: '<iframe src="https://embed.lottiefiles.com/animation/32338"></iframe>',
        title: "No deje campos vacios!",
        background: "#fff",
        timer: 4000,
      });
    } else if (mensaje === "") {
      Swal.fire({
        html: '<iframe src="https://embed.lottiefiles.com/animation/32338"></iframe>',
        title: "No deje campos vacios!",
        background: "#fff",
        timer: 4000,
      });
    } else {
      Swal.fire({
        title: "Respuestas enviadas",
        text: "Gracias por realizar nuestra encuesta",
        html: '<iframe src="https://embed.lottiefiles.com/animation/95029"></iframe>',
      });
      emailjs.sendForm(
        "service_7x4rc2q",
        "template_yjd8jtj",
        "#form",
        "6sLVDSHJ4IwuSrQWp"
      );
      cleanInputs();
    }
  };

  function cleanInputs() {
    nombreTxt.value = "";
    apellidoTxt.value = "";
    emailTxt.value = "";
    numberTxt.value = "";
    mensajeTxt.value = "";
  }
}
