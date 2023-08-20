// Obtener los elementos del formulario
const form = document.querySelector('form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const feedbackInput = document.querySelector('#feedback');
const ratingInputs = document.querySelectorAll('input[type="radio"]');

// Agregar un evento de envío del formulario
form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Obtener los valores del formulario
    const name = nameInput.value;
    const email = emailInput.value;
    const feedback = feedbackInput.value;
    let rating = '';

    // Recorrer las opciones de rating para obtener el valor seleccionado
    for (let i = 0; i < ratingInputs.length; i++) {
        if (ratingInputs[i].checked) {
            rating = ratingInputs[i].value;
            break;
        }
    }

    // Crear un objeto con los valores del formulario
    const formData = {
        name,
        email,
        feedback,
        rating
    };

    // Convertir el objeto a una cadena JSON y guardar en el local storage
    localStorage.setItem('formData', JSON.stringify(formData));

    // Mostrar un mensaje de confirmación
    alert('¡Gracias por tu feedback!');

    // Reiniciar el formulario
    form.reset();
});

// Agregar un evento de carga de página para cargar los valores del formulario del local storage, si existen
window.addEventListener('load', function () {
    const formDataJSON = localStorage.getItem('formData');

    if (formDataJSON) {
        // Convertir la cadena JSON a un objeto y establecer los valores en el formulario
        const formData = JSON.parse(formDataJSON);
        nameInput.value = formData.name;
        emailInput.value = formData.email;
        feedbackInput.value = formData.feedback;

        // Seleccionar el input de rating que coincide con el valor del local storage
        for (let i = 0; i < ratingInputs.length; i++) {
            if (ratingInputs[i].value === formData.rating) {
                ratingInputs[i].checked = true;
                break;
            }
        }
    }
});