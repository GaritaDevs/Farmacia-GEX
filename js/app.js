const carrito = document.querySelector('#carrito');
const listaProductos = document.querySelector('.listaProductos');
const cajaCarrito = document.querySelector('#lista tbody');
const vaciarCarritoBtn = document.querySelector('#vaciarCarrito');

let articulosCarrito = [];

cargarEventListeners();

function cargarEventListeners() {

    listaProductos.addEventListener('click', agregarItem);

    carrito.addEventListener('click', eliminarItem);

    vaciarCarritoBtn.addEventListener('click', vaciarCarrito);

    document.addEventListener('DOMContentLoaded', () => {
        articulosCarrito = JSON.parse(localStorage.getItem('carrito')) || [];
        carritoHTML();
    });
}

function agregarItem(e) {

    e.preventDefault();
    if (e.target.classList.contains('agregarCarrito')) {
        const item = e.target.parentElement.parentElement;
        leerDatosItem(item);
    }
}

function leerDatosItem(item) {
    const infoProductos = {
        imagen: item.querySelector('img').src,
        titulo: item.querySelector('h4').textContent,
        precio: item.querySelector('.precio').textContent,

        id: item.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }

    if (articulosCarrito.some(item => item.id === infoProductos.id)) {
        const items = articulosCarrito.map(item => {

            if (item.id === infoProductos.id) {
                let cantidad = parseInt(item.cantidad);
                cantidad++
                item.cantidad = cantidad;
                return item;
            } else {
                return item;
            }
        })
        articulosCarrito = [...items];
    } else {
        articulosCarrito = [...articulosCarrito, infoProductos];
    }
    carritoHTML();
}


function eliminarItem(e) {
    e.preventDefault();
    if (e.target.classList.contains('borrarProducto')) {
        const item = e.target.parentElement.parentElement;
        const itemId = item.querySelector('a').getAttribute('data-id');
        articulosCarrito = articulosCarrito.filter(item => item.id !== itemId);
        carritoHTML();
    }
}

function carritoHTML() {

    vaciarCarrito();

    articulosCarrito.forEach(item => {

        const row = document.createElement('tr');
        row.innerHTML = `
        <td>
        <img src="${item.imagen}" width=100>
        </td>
               <td>${item.titulo}</td>
               <td>${item.precio}</td>
               <td>${item.cantidad} </td>
               <td>
                    <a href="#" class="borrarProducto" data-id="${item.id}">X</a>
               </td>
          `;
        cajaCarrito.appendChild(row);

    });

    sincronizarStorage();
}

function sincronizarStorage() {
    localStorage.setItem('carrito', JSON.stringify(articulosCarrito));
}

function vaciarCarrito() {
    while (cajaCarrito.firstChild) {
        cajaCarrito.removeChild(cajaCarrito.firstChild);
    }
}




function info1() {
    Swal.fire({
        title: 'Dove:',
        text: 'Este producto ayuda a la hidratacion de la piel, usar en las noches antes de dormir.',
        confirmButtonText: "Aceptar",
    })
}

function info2() {
    Swal.fire({
        title: 'Restore Kit:',
        text: 'Este kit tiene los siguientes productos: Crema para manos, crema para cabello, lipstick, Shampoo.',
        confirmButtonText: "Aceptar",
    })
}

function info3() {
    Swal.fire({
        title: 'Renew Kit:',
        text: 'Este kit tiene los siguientes productos: Aceite para cabello, hidratante, gotas para los ojos.',
        confirmButtonText: "Aceptar",
    })
}

function info4() {
    Swal.fire({
        title: 'Kit Venus:',
        text: 'Es un lipstick de la version gold de nuestra marca venus.',
        confirmButtonText: "Aceptar",
    })
}

function info5() {
    Swal.fire({
        title: 'Kit Venus:',
        text: 'Este kit venus tiene dos pinta labios y una crema para manos.',
        confirmButtonText: "Aceptar",
    })
}

function info6() {
    Swal.fire({
        title: 'Alcohol Venus:',
        text: 'Alcohol para manos mata el 99% de los germenes.',
        confirmButtonText: "Aceptar",
    })
}

function info7() {
    Swal.fire({
        title: 'Protector Solar:',
        text: 'Este protector soloar de Ordinary tiene 50+.',
        confirmButtonText: "Aceptar",
    })
}

function info8() {
    Swal.fire({
        title: 'Kit Otoño Ridge:',
        text: 'Este kit contiene: pinta labios de diferentes colores y una crema para la piel.',
        confirmButtonText: "Aceptar",
    })
}

function info9() {
    Swal.fire({
        title: 'Kit crema hidratante:',
        text: 'Este producto son dos cremas hidratantes para cabello.',
        confirmButtonText: "Aceptar",
    })
}

function info10() {
    Swal.fire({
        title: 'Kit humectante de Ordinary:',
        text: 'Kit humectante de Ordinary para cabello y piel.',
        confirmButtonText: "Aceptar",
    })
}


function info11() {
    Swal.fire({
        title: 'Kit de Ordinary:',
        text: 'Este Kit de Ordinary contiene: Un protector solar, unas gotas para el cabello, crema para el cuerpo, un mini shampoo.',
        confirmButtonText: "Aceptar",
    })
}

function info12() {
    Swal.fire({
        title: 'Kit de curology:',
        text: 'Este kit de curology contiene: Un shampoo, un acondicionador y un jabon corporal.',
        confirmButtonText: "Aceptar",
    })
}