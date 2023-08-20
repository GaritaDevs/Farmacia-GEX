
const langEl = document.querySelector('.langWrap');
const link = document.querySelectorAll('a');
const logo = document.querySelector('.logo');
const cero = document.querySelector('.cero');
const uno = document.querySelector('.uno');
const dos = document.querySelector('.dos');
const tres = document.querySelector('.tres');
const cuatro = document.querySelector('.cuatro');
const cinco = document.querySelector('.cinco');
const seis = document.querySelector('.seis');
const siete = document.querySelector('.siete');
const ocho = document.querySelector('.ocho');
const nueve = document.querySelector('.nueve');
const diez = document.querySelector('.diez');
const once = document.querySelector('.once');
const doce = document.querySelector('.doce');
const trece = document.querySelector('.trece');
const catorce = document.querySelector('.catorce');
const quince = document.querySelector('.quince');
const diezseis = document.querySelector('.diezseis');
const diezsiete = document.querySelector('.diezsiete');
const diezocho = document.querySelector('.diezocho');
const dieznueve = document.querySelector('.dieznueve');
const veinte = document.querySelector('.veinte');
const veintiuno = document.querySelector('.veintiuno');
const veintidos = document.querySelector('.veintidos');
const veintitres = document.querySelector('.veintitres');
const veinticuatro = document.querySelector('.veinticuatro');
const veinticinco = document.querySelector('.veinticinco');
const veintiseis = document.querySelector('.veintiseis');
const veintiseiss = document.querySelector('.veintiseiss');
const veintisiete = document.querySelector('.veintisiete');
const veintiocho = document.querySelector('.veintiocho');

const treinta = document.querySelector('.treinta');
const treintauno = document.querySelector('.treintauno');
const treintados = document.querySelector('.treintados');
const treintatres = document.querySelector('.treintatres');
const treintacuatro = document.querySelector('.treintacuatro');
const treintacinco = document.querySelector('.treintacinco');
const treintaseis = document.querySelector('.treintaseis');
const treintasiete = document.querySelector('.treintasiete');
const treintaocho = document.querySelector('.treintaocho');
const treintanueve = document.querySelector('.treintanueve');
const cuarenta = document.querySelector('.cuarenta');
const cuarentauno = document.querySelector('.cuarentauno');
const cuarentados = document.querySelector('.cuarentados');
const cuarentatres = document.querySelector('.cuarentatres');
const cuarentacuatro = document.querySelector('.cuarentacuatro');
const cuarentacinco = document.querySelector('.cuarentacinco');
const cuarentaseis = document.querySelector('.cuarentaseis');
const cuarentasiete = document.querySelector('.cuarentasiete');
const cuarentaocho = document.querySelector('.cuarentaocho');
const cuarentanueve = document.querySelector('.cuarentanueve');
const cincuenta = document.querySelector('.cincuenta');
const cincuentauno = document.querySelector('.cincuentauno');
const cincuentados = document.querySelector('.cincuentados');
const cincuentatres = document.querySelector('.cincuentatres');
const cincuentacuatro = document.querySelector('.cincuentacuatro');
const cincuentacinco = document.querySelector('.cincuentacinco');
const cincuentaseis = document.querySelector('.cincuentaseis');
const cincuentasiete = document.querySelector('.cincuentasiete');
const cincuentaocho = document.querySelector('.cincuentaocho');
const cincuentanueve = document.querySelector('.cincuentanueve');
const sesenta = document.querySelector('.sesenta');
const sesentauno = document.querySelector('.sesentauno');
const sesentados = document.querySelector('.sesentados');
const sesentatres = document.querySelector('.sesentatres');
const sesentacuatro = document.querySelector('.sesentacuatro');
const sesentacinco = document.querySelector('.sesentacinco');
const sesentaseis = document.querySelector('.sesentaseis');
const sesentasiete = document.querySelector('.sesentasiete');
const sesentaocho = document.querySelector('.sesentaocho');
const sesentanueve = document.querySelector('.sesentanueve');
const setenta = document.querySelector('.setenta');
const setentauno = document.querySelector('.setentauno');




link.forEach(r => {
    r.addEventListener('click', () => {
        const attr = r.getAttribute('language');
        logo.textContent = changeLanguage[attr].logo;
        cero.textContent = changeLanguage[attr].cero;
        uno.textContent = changeLanguage[attr].uno;
        dos.textContent = changeLanguage[attr].dos;
        tres.textContent = changeLanguage[attr].tres;
        cuatro.textContent = changeLanguage[attr].cuatro;
        cinco.textContent = changeLanguage[attr].cinco;
        seis.textContent = changeLanguage[attr].seis;
        siete.textContent = changeLanguage[attr].siete;
        ocho.textContent = changeLanguage[attr].ocho;
        nueve.textContent = changeLanguage[attr].nueve;
        diez.textContent = changeLanguage[attr].diez;
        once.textContent = changeLanguage[attr].once;
        doce.textContent = changeLanguage[attr].doce;
        trece.textContent = changeLanguage[attr].trece;
        catorce.textContent = changeLanguage[attr].catorce;
        quince.textContent = changeLanguage[attr].quince;
        diezseis.textContent = changeLanguage[attr].diezseis;
        diezsiete.textContent = changeLanguage[attr].diezsiete;
        diezocho.textContent = changeLanguage[attr].diezocho;
        dieznueve.textContent = changeLanguage[attr].dieznueve;
        veinte.textContent = changeLanguage[attr].veinte;
        veintiuno.textContent = changeLanguage[attr].veintiuno;
        veintidos.textContent = changeLanguage[attr].veintidos;
        veintitres.textContent = changeLanguage[attr].veintitres;
        veinticuatro.textContent = changeLanguage[attr].veinticuatro;
        veinticinco.textContent = changeLanguage[attr].veinticinco;
        veintiseis.textContent = changeLanguage[attr].veintiseis;
        veintisiete.textContent = changeLanguage[attr].veintisiete;
        veintiocho.textContent = changeLanguage[attr].veintiocho;
        treinta.textContent = changeLanguage[attr].treinta;
        treintauno.textContent = changeLanguage[attr].treintauno;
        treintados.textContent = changeLanguage[attr].treintados;
        treintatres.textContent = changeLanguage[attr].treintatres;
        treintacuatro.textContent = changeLanguage[attr].treintacuatro;
        treintacinco.textContent = changeLanguage[attr].treintacinco;
        treintaseis.textContent = changeLanguage[attr].treintaseis;
        treintasiete.textContent = changeLanguage[attr].treintasiete;
        treintaocho.textContent = changeLanguage[attr].treintaocho;
        treintanueve.textContent = changeLanguage[attr].treintanueve;
        cuarenta.textContent = changeLanguage[attr].cuarenta;
        cuarentauno.textContent = changeLanguage[attr].cuarentauno;
        cuarentados.textContent = changeLanguage[attr].cuarentados;
        cuarentatres.textContent = changeLanguage[attr].cuarentatres;
        cuarentacuatro.textContent = changeLanguage[attr].cuarentacuatro;
        cuarentacinco.textContent = changeLanguage[attr].cuarentacinco;
        cuarentaseis.textContent = changeLanguage[attr].cuarentaseis;
        cuarentasiete.textContent = changeLanguage[attr].cuarentasiete;
        cuarentaocho.textContent = changeLanguage[attr].cuarentaocho;
        cuarentanueve.textContent = changeLanguage[attr].cuarentanueve;
        cincuenta.textContent = changeLanguage[attr].cincuenta;
        cincuentauno.textContent = changeLanguage[attr].cincuentauno;
        cincuentados.textContent = changeLanguage[attr].cincuentados;
        cincuentatres.textContent = changeLanguage[attr].cincuentatres;
        cincuentacuatro.textContent = changeLanguage[attr].cincuentacuatro;
        cincuentacinco.textContent = changeLanguage[attr].cincuentacinco;
        cincuentaseis.textContent = changeLanguage[attr].cincuentaseis;
        cincuentasiete.textContent = changeLanguage[attr].cincuentasiete;
        cincuentaocho.textContent = changeLanguage[attr].cincuentaocho;
        cincuentanueve.textContent = changeLanguage[attr].cincuentanueve;
        sesenta.textContent = changeLanguage[attr].sesenta;
        sesentauno.textContent = changeLanguage[attr].sesentauno;
        sesentados.textContent = changeLanguage[attr].sesentados;
        sesentatres.textContent = changeLanguage[attr].sesentatres;
        sesentacuatro.textContent = changeLanguage[attr].sesentacuatro;
        sesentacinco.textContent = changeLanguage[attr].sesentacinco;
        sesentaseis.textContent = changeLanguage[attr].sesentaseis;
        sesentasiete.textContent = changeLanguage[attr].sesentasiete;
        sesentaocho.textContent = changeLanguage[attr].sesentaocho;
        sesentanueve.textContent = changeLanguage[attr].sesentanueve;
        setenta.textContent = changeLanguage[attr].setenta;
        setentauno.textContent = changeLanguage[attr].setentauno;
    });
});


let changeLanguage = {

    "espanish":
    {
        "cero": "Farmacia GEX",
        "uno": "Especialistas y productos de calidad",
        "dos": "Productos premium",
        "tres": "Tenemos ofertas especiales",
        "tress": "Ver productos",
        "cuatro": "Seguros Medicos.",
        "cinco": "Trabajamos con diferentes aseguradoras para darte un mejor servicio",
        "cincoo": "Ver seguros",
        "logo": "Farmacia GEX",
        "siete": "Inicio",
        "ocho": "Nosotros",
        "nueve": "Productos",
        "diez": "Info",
        "once": "Seguros",
        "doce": "Bienestar",
        "trece": "COVID-19",
        "catorce": "Marcas",
        "quince": "Ubicacion",
        "diezseis": "Contacto",
        "diezsiete": "Quienes somos.",
        "diezocho": "Farmacia GEX es una empresa encargada en la distribucion de medicamentos premium a nivel nacional e internacional, ademas de esto trabajamos en nuestros laboratorios produciendo la mejor calidad de nuestros propios medicamentos.",
        "dieznueve": "Contamos con nuestra propia red de medicos y de laboratorios, respaldados a nivel mundial, Farmacia Gex esta ubicada de momento solo en centro america y su sede principal se encuentra en Costa Rica.",
        "veinte": "Mas información.",
        "veintiuno": "Productos",
        "veintidos": "Nuestra farmacia trabaja solo con productos de calidad y de marcas conocidas a nivel mundial. La gran mayoria de productos que se venden son productos Premium Entra a nuestra seccion de productos para que puedas elegir todos los producto que necesitas",
        "veintitres": "Tienda",
        "veinticuatro": "Seguros Medicos",
        "veinticinco": "Cotizar.",
        "veintiseis": "Trabajamos con la aseguradora PALIG",
        "veintiseiss": "Seguro",
        "veintisiete": "Desde el año 2000",
        "veintiocho": "Para saber mas de este seguro entre en contacto con PALIG",
        "treinta": "Trabajamos con la aseguradora MAPFRE",
        "treintauno": "Desde el año 2010",
        "treintados": "Para saber mas de este seguro entre en contacto con MAPFRE",
        "treintatres": "Trabajamos con la aseguradora ASSA",
        "treintacuatro": "Desde el año 1999",
        "treintacinco": "Para saber mas de este seguro entre en contacto con ASSA",
        "treintaseis": "Trabajamos con la aseguradora MediSmart",
        "treintasiete": "Desde el año 2000",
        "treintaocho": "Para saber mas de este seguro entre en contacto con MediSmart",
        "treintanueve": "El ejercicios es vida",
        "cuarenta": "Unas pocas horas de ejercicio al dia pueden cambiar tu vida, suscribete para recibir mas informacion",
        "cuarentauno": "Bienestar",
        "cuarentados": "Nos preocupamos por tu salud",
        "cuarentatres": "Estas diferentes practicas te pueden ayudar a hacer tu dia mas productivo, aprender algo nuevo y mejorar tu salud",
        "cuarentacuatro": "Yoga",
        "cuarentacinco": "Pesas",
        "cuarentaseis": "Crossfit",
        "cuarentasiete": "Capoeira",
        "cuarentaocho": "El yoga es una práctica que conecta el cuerpo, la respiración y la mente. Esta práctica utiliza posturas físicas, ejercicios de respiración y meditación para mejorar la salud general. El yoga se desarrolló como una práctica espiritual hace miles de años.",
        "cuarentanueve": "La noción de pesas hace referencia a diversas cuestiones. Por lo general, el término se asocia a un objeto de gran peso que se utiliza para realizar ejercicio físico o en competiciones deportivas. Si una persona desea ejercitar sus brazos para desarrollar los músculos de la zona, es probable que emplee pesas.",
        "cincuenta": "CrossFit se define como un sistema de entrenamiento de fuerza y acondicionamiento basado en ejercicios funcionales constantemente variados realizados a una alta intensidad",
        "cincuentauno": "El jogo de la capoeira es una lucha ficticia entre dos personas, donde se despliega una configuración de movimientos característica que abarca patadas, esquives, barridos, y una multiplicidad acrobacias y posiciones invertidas que se inscriben dentro de una estéticaparticular",
        "cincuentados": "Que es COVID-19",
        "cincuentatres": "Informacion",
        "cincuentacuatro": "Mejores marcas",
        "cincuentacinco": "Testimonios",
        "cincuentaseis": "Los productos son increibles y el servico tambien",
        "cincuentasiete": "Muy feliz con la calidad de entrega de la farmacia.",
        "cincuentaocho": "Farmacia favorita, muy superior a la competencia.",
        "cincuentanueve": "Muy feliz con la atencion brindada. Muy agradecido.",
        "sesenta": "El website es incrible, muy facil de usar. Me encanta!",
        "sesentauno": "Llena nuestra encuesta",
        "sesentados": "Haz click aqui para dejar tu comentario",
        "sesentatres": "Ubicaciones",
        "sesentacuatro": "Laboratorio",
        "sesentacinco": "Contáctenos",
        "sesentaseis": "Nombre",
        "sesentasiete": "Apellido",
        "sesentaocho": "Email",
        "sesentanueve": "Teléfono",
        "setenta": "Comentario",
        "setentauno": "Derechos reservados",

    },

    //objeto de json que asigna los valores a cada clase en ingles  
    "english":
    {
        "cero": "GEX Pharmacy",
        "uno": "Specialists and Quality Products",
        "dos": "Premium Products",
        "tres": "We have special offers",
        "tress": "See products",
        "cuatro": "Medical Insurance.",
        "cinco": "We work with different insurers to give you a better service",
        "cincoo": "See insurance",
        "logo": "GEX Pharmacy",
        "siete": "Home",
        "ocho": "About Us",
        "nueve": "Products",
        "diez": "Info",
        "once": "Insurance",
        "doce": "Wellness",
        "trece": "COVID-19",
        "catorce": "Brands",
        "quince": "Location",
        "diezseis": "Contact",
        "diezsiete": "About Us.",
        "diezocho": "GEX Pharmacy is a company responsible for the distribution of premium medications nationally and internationally. In addition to this, we work in our laboratories producing the best quality of our own medications.",
        "dieznueve": "We have our own network of doctors and laboratories, supported worldwide. Gex Pharmacy is currently only located in Central America, and its main headquarters are in Costa Rica.",
        "veinte": "More information.",
        "veintiuno": "Products",
        "veintidos": "Our pharmacy only works with quality products and well-known brands worldwide. The vast majority of the products sold are Premium products. Go to our products section so you can choose all the products you need",
        "veintitres": "Shop",
        "veinticuatro": "Medical Insurance",
        "veinticinco": "Get a quote.",
        "veintiseis": "We work with the insurer PALIG",
        "veintiseiss": "Insurance",
        "veintisiete": "Since the year 2000",
        "veintiocho": "To learn more about this insurance, contact PALIG",
        "treinta": "We work with the insurer MAPFRE",
        "treintauno": "Since the year 2010",
        "treintados": "To learn more about this insurance, contact MAPFRE",
        "treintatres": "We work with the insurer ASSA",
        "treintacuatro": "Since the year 1999",
        "treintacinco": "To learn more about this insurance, contact ASSA",
        "treintaseis": "We work with the insurer MediSmart",
        "treintasiete": "Since the year 2000",
        "treintaocho": "To learn more about this insurance, contact MediSmart",
        "treintanueve": "Exercise is life",
        "cuarenta": "A few hours of exercise a day can change your life, subscribe to receive more information",
        "cuarentauno": "Wellness",
        "cuarentados": "We care about your health",
        "cuarentatres": "These different practices can help you make your day more productive, learn something new and improve your health",
        "cuarentacuatro": "Yoga",
        "cuarentacinco": "Lifting",
        "cuarentaseis": "Crossfit",
        "cuarentasiete": "Capoeira",
        "cuarentaocho": "Yoga is a practice that connects the body, breath, and mind. This practice uses physical postures, breathing exercises, and meditation to improve overall health. Yoga developed as a spiritual practice thousands of years ago.",
        "cuarentanueve": "The term 'weights' refers to various issues. Generally, the term is associated with a heavy object used for physical exercise or in sports competitions. If a person wants to exercise their arms to develop the muscles in that area, they will likely use weights.",
        "cincuenta": "CrossFit is defined as a strength and conditioning training system based on constantly varied functional exercises performed at high intensity.",
        "cincuentauno": "The jogo de capoeira is a fictitious fight between two people, where a characteristic configuration of movements is deployed that includes kicks, dodges, sweeps, and a multitude of acrobatics and inverted positions that are inscribed within a particular aesthetic.",
        "cincuentados": "What is COVID-19",
        "cincuentatres": "Information",
        "cincuentacuatro": "Top brands",
        "cincuentacinco": "Testimonials",
        "cincuentaseis": "The products are incredible and so is the service",
        "cincuentasiete": "Very happy with the quality of the pharmacy's delivery.",
        "cincuentaocho": "Favorite pharmacy, much superior to the competition.",
        "cincuentanueve": "Very happy with the attention given. Very grateful.",
        "sesenta": "The website is incredible, very easy to use. I love it!",
        "sesentauno": "Fill out our survey",
        "sesentados": "Click here to leave your comment",
        "sesentatres": "Locations",
        "sesentacuatro": "Laboratory",
        "sesentacinco": "Contact us",
        "sesentaseis": "Name",
        "sesentasiete": "Last name",
        "sesentaocho": "Email",
        "sesentanueve": "Phone",
        "setenta": "Comment",
        "setentauno": "All rights reserved"
    }
}
