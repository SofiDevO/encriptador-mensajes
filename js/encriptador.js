const d = document;

/* Elemntos de la página */
const mensajeResultado = d.getElementById('resultado')
const areaTexto = d.getElementById("encriptador")
const ImagenMuneco = d.getElementById('muneco');
const ImagenForbriden = d.getElementById('forbriden');
const leyenda = d.getElementById('leyenda');
const avisoMinusculas = d.getElementById('advice');


/* Botones */
const btnEncriptar = d.getElementById('encriptar') ;
const btnDesencriptar = d.getElementById('desencriptar');
const btnPegar = d.getElementById('pegar');
const btnLimpiar = d.getElementById('limpiar');
/* const btnEs = d.getElementById('es');
const btnEn = d.getElementById('em'); */



/* Llaves Desencriptador */
const llaves = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"]
];


/* Ocultar elemntos y botones */
btnLimpiar.style.display = 'none'
ImagenForbriden.style.display = 'none'; 
btnPegar.style.display = 'none';
btnEncriptar.style.display = 'none';
btnDesencriptar.style.display = 'none';


/* Función para recuperar el texto del área de texto */
function recuperarTexto(){
    let area = d.querySelector(".area");
    ImagenMuneco.style.display = 'none' 
    return area.value.toLowerCase();
}

/* Evento al escribir en el área de texto, limita los caracteres y largo de las palabras mediante  expresiones regulares y el elemnto .replace */
areaTexto.addEventListener('input', () => {
    let texto = recuperarTexto();
    texto = texto.replace(/[^a-z0-9,.ñ ¿?\n]/gi, '');
    areaTexto.value = texto;
    if (texto.length > 23) {
    const palabras = texto.split(' ');
    const palabrasCortas = palabras.filter(palabra => palabra.length <= 23);
    areaTexto.value = palabrasCortas.join(' ');
    }
});  


/* Función para encriptar un mensaje */
function encriptarMensaje(mensaje) {
    let mensajeEncriptado = "";
    for (let i = 0; i < mensaje.length; i++) {
    let letra = mensaje[i];
        if (letra === "e") {
            mensajeEncriptado += "enter";
        } else if (letra === "i") {
            mensajeEncriptado += "imes";
        } else if (letra === "a") {
            mensajeEncriptado += "ai";
        } else if (letra === "o") {
            mensajeEncriptado += "ober";
        } else if (letra === "u") {
            mensajeEncriptado += "ufat";
        } else {
            mensajeEncriptado += letra;
        }
    }
    return mensajeEncriptado;
};

/* Función para desencriptar un mensaje */
function desencriptar(texto){
    for (let i = 0; i < llaves.length; i++)
    if (texto.includes(llaves[i][1])){
        texto = texto.replaceAll(llaves[i][1],llaves[i][0]);
    }
    return texto; 
};

/* funcion para limpiar  el texto */
export default  function limpiar(){
    d.getElementById ('encriptador').value = "";
};
function limpiarResultado(){
    mensajeResultado.textContent = "";
};


 /* Función para pegar el texto copiado */
function pegarTextoCopiado() {
    navigator.clipboard.readText().then(textoPegado => {
        recuperarTexto()
        areaTexto.value = textoPegado;
    });
}

/* Evento COPIAR al al hacer click en el Resultado */
mensajeResultado.addEventListener('click', ()=>{
    copiarTexto()
});
    
function copiarTexto(){
    let textoCopiar = mensajeResultado.textContent;
    navigator.clipboard.writeText(textoCopiar).then(()=>{
    console.log("Se copio: " + textoCopiar)
    btnPegar.style.display = 'block';
    btnEncriptar.style.display = 'block';
    btnDesencriptar.style.display = 'block';
/*     leyenda.textContent = textoHaSidoCopiado(); */
})
limpiarResultado();
};





/* Integración del cambio de idioma. Muchas funciones se movieron dentro de la funcion, cambiar idioma para que los cambios se apliquen dentro del mismo scope  */
 const flagES = d.getElementById('es');
 const flagEN = d.getElementById('en');

flagES.addEventListener('click', () => {
cambiarIdioma('es');
limpiarResultado()
});



flagEN.addEventListener('click', () => {
cambiarIdioma('en');
limpiarResultado()
});


function cambiarIdioma(idioma) {
  // Cambiar el texto de los elementos según el idioma
    if (idioma === 'es') {
        btnEncriptar.textContent = 'Encriptar';
        btnDesencriptar.textContent = 'Desencriptar';
        btnPegar.textContent = 'Pegar';
        btnLimpiar.textContent = 'Reset';
        areaTexto.textContent = 'Ingresa el texto aquí';
        mensajeResultado.textContent = 'Empieza por escribir algo';
        leyenda.textContent = 'Ingresa el texto que deseas encriptar';
        avisoMinusculas.textContent = 'Solo minúsculas sin acentos';
    } else if (idioma === 'en') {
        avisoMinusculas.textContent = 'Only lowercase without accents';
        mensajeResultado.textContent = 'Start by type something';
        leyenda.textContent = 'Enter the text you want to encrypt';
        btnEncriptar.textContent = 'Encrypt';
        btnDesencriptar.textContent = 'Decrypt';
        btnPegar.textContent = 'Paste';
        btnLimpiar.textContent = 'Reset';
        areaTexto.textContent = 'type your text here';
    };
    
  /* Evento al hacer clic en el área de texto */
    areaTexto.addEventListener('click', ()=>{
        btnPegar.style.display = 'block';
        btnLimpiar.style.display = 'block'
        btnEncriptar.style.display = 'block';
        btnDesencriptar.style.display = 'block';
        ImagenMuneco.style.display = 'none' 
        ImagenForbriden.style.display = 'none' 
        leyenda.style.display = 'none'; 
        const loader = d.querySelector(".loader");
        loader.classList.remove("none");
        mensajeResultado.textContent = capturandoTexto();
        limpiar()
});



/* Evento al hacer clic en el botón de encriptar */
btnEncriptar.addEventListener('click', ()=>{
    let area = recuperarTexto() ;
    let encriptado = encriptarMensaje(area);
    if (area === ''){
        mensajeResultado.textContent = ErrorAlert();
        ImagenForbriden.style.display = 'block'; 
        leyenda.style.display = 'none'; 
        ImagenMuneco.style.display = 'none';
        const loader = d.querySelector(".loader");
        loader.classList.add("none");
        btnLimpiar.style.display = 'block'
    }else{
        mensajeResultado.textContent = encriptado;
        ImagenForbriden.style.display = 'none';  
        ImagenMuneco.style.display = 'none'; 
        btnPegar.style.display = 'block';
        const loader = d.querySelector(".loader");
        loader.classList.add("none");
        leyenda.style.display = 'block'; 
        leyenda.textContent = textoCopiado();

    }
});

/* Evento al hacer click en el botón desencriptar */
btnDesencriptar.addEventListener('click', ()=>{
    let area = recuperarTexto()
    let desencriptado  = desencriptar(area);
    if (area === ''){
        mensajeResultado.textContent = ErrorAlert();
        ImagenForbriden.style.display = 'block'; 
        leyenda.style.display = 'none'; 
        ImagenMuneco.style.display = 'none';
        const loader = d.querySelector(".loader");
        loader.classList.add("none");
    }else{
        ImagenForbriden.style.display = 'none'; 
        mensajeResultado.textContent = desencriptado;
        const loader = d.querySelector(".loader");
        loader.classList.add("none");
        leyenda.style.display = 'block'; 
        leyenda.textContent = textoCopiado();


    }
});

mensajeResultado.addEventListener('click', ()=>{
    leyenda.textContent = textoHaSidoCopiado();
});

/* Función para mostrar un mensaje cuando se copia el texto */
function textoHaSidoCopiado() {
    let textoCopia = d.querySelector('.leyenda');
    if (idioma === 'es') {
    return "El texto se copió al portapapeles";
    } else if (idioma === 'en') {
    return "The text has been copied to the clipboard";
    }
}

/* Evento para  el boton pegar */
btnPegar.addEventListener('click', () => {

    pegarTextoCopiado();
    leyenda.style.display = 'block';
    ImagenForbriden.style.display = 'none';
    const loader = d.querySelector(".loader");
    loader.classList.remove("none");
});

/* Evento al hacer clic en el botón de RESET */
btnLimpiar.addEventListener('click', ()=>{
    let borrar = limpiar();    
    let borrarResultado  = limpiarResultado()
    ImagenForbriden.style.display = 'none'; 
    leyenda.style.display = 'block'; 
    ImagenMuneco.style.display = 'block';
    const loader = d.querySelector(".loader");
    loader.classList.add("none");
});

/* SECCION DE MENSAJES LEYENDA */
/* Función para mostrar un mensaje de error */
    function ErrorAlert() {
        let textoError = d.querySelector(".resultado");
        if (idioma === 'es') {
        return "Debes ingresar un texto";
        } else if (idioma === 'en') {
        return "You must enter a text";
        }
        const loader = d.querySelector(".loader");
        loader.classList.add("none");
    };
    /* Funcion para mostrar mensaje de copiar texto */
    function textoCopiado() {
        let copiarLeyenda = d.querySelector('.leyenda');
        if (idioma === 'es') {
        return "Da click en el resultado para copiar ❏";
        } else if (idioma === 'en') {
        return "Click on the result to copy ❏";
        }
    }

  /* Función para mostrar un mensaje de capturando texto */
    function capturandoTexto() {
        let capturando = d.querySelector(".resultado");
        if (idioma === 'es') {
        return "Capturando Texto";
        } else if (idioma === 'en') {
        return "Capturing Text";
        }
    };
}




/* Cambiar el idioma inicialmente a español */
cambiarIdioma('es');

