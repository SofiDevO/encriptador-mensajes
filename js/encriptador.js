const d = document;

/* Elemntos de la página */
const mensajeResultado = d.getElementById('resultado')
const areaTexto = d.getElementById("encriptador")
const ImagenMuneco = d.getElementById('muneco');
const ImagenForbriden = d.getElementById('forbriden');
const Leyenda = d.getElementById('leyenda');

/* Botones */
const btnEncriptar = d.getElementById('encriptar') ;
const btnDesencriptar = d.getElementById('desencriptar');
const btnPegar = d.getElementById('pegar');
const btnLimpiar = d.getElementById('limpiar');
const btnCopiar = d.getElementById('copiar');


/* Ocultar elemntos y botones */
btnLimpiar.style.display = 'none'
ImagenForbriden.style.display = 'none'; 
btnPegar.style.display = 'none';
btnCopiar.style.display = 'none';
btnDesencriptar.style.display = 'none';

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
    }


/* Función para desencriptar un mensaje */
function desencriptarMensaje(mensajeEncriptado) {
    let mensajeDesencriptado = "";
    for (let i = 0; i < mensajeEncriptado.length; i++) {
    let fragmento = mensajeEncriptado.substr(i, 5);
        if (fragmento === "enter") {
            mensajeDesencriptado += "e";
            i += 4;
        } else if (fragmento === "imes") {
            mensajeDesencriptado += "i";
            i += 4;
        } else if (fragmento === "ober") {
            mensajeDesencriptado += "o";
            i += 3;
        } else if (fragmento === "ufat") {
            mensajeDesencriptado += "u";
            i += 3;
        } else {
            let fragmentoDosLetras = mensajeEncriptado.substr(i, 2);
        if (fragmentoDosLetras === "ai") {
            mensajeDesencriptado += "a";
            i += 1;
        } else {
            mensajeDesencriptado += mensajeEncriptado[i];
        }
        }
    }
    return mensajeDesencriptado;
}

/* Evento al hacer clic en el botón de encriptar */

export default  btnEncriptar.addEventListener('click', ()=>{
    let area = recuperarTexto();
    let encriptado = encriptarMensaje(area);
    
        if (area === ''){
            mensajeResultado.textContent = ErrorAlert();
            ImagenForbriden.style.display = 'block'; 
            Leyenda.style.display = 'none'; 
            ImagenMuneco.style.display = 'none';
            const loader = d.querySelector(".loader");
            loader.classList.add("none");
        }else{
            ImagenForbriden.style.display = 'none'; 
            ImagenMuneco.style.display = 'none'; 
            btnCopiar.style.display = 'block';
            btnPegar.style.display = 'block';
            btnLimpiar.style.display = 'block'
            btnDesencriptar.style.display = 'block';
            mensajeResultado.textContent = encriptado;
            const loader = d.querySelector(".loader");
            loader.classList.add("none");
            btnEncriptar.style.display = 'none';
        }

});

/* Evento al hacer click en el botón desencriptar */
btnDesencriptar.addEventListener('click', ()=>{
    let areaDesencriptar= areaTexto.value;
    let desencriptado  = desencriptarMensaje(areaDesencriptar);
    mensajeResultado.textContent = desencriptado;
    

});


/* Función para recuperar el texto del área de texto */
function recuperarTexto(){
    let area = d.querySelector(".area");
    ImagenMuneco.style.display = 'none' 
    
    return area.value.toLowerCase();
}


/* Función para mostrar un mensaje de error */
function ErrorAlert(){
    let textoError = d.querySelector(".resultado"); 
    return ("Debes ingresar un texto");
    const loader = d.querySelector(".loader");
    loader.classList.add("none");
}



/* Función para mostrar un mensaje de capturando texto */
function capturandoTexto(){
    let capturando = d.querySelector(".resultado");
    return ("Capturando Texto");
}

/* Evento al hacer clic en el área de texto */
areaTexto.addEventListener('click', ()=>{
    btnPegar.style.display = 'block';
    ImagenMuneco.style.display = 'none' 
    ImagenForbriden.style.display = 'none' 
    Leyenda.style.display = 'none'; 
    const loader = d.querySelector(".loader");
    loader.classList.remove("none");
    mensajeResultado.textContent = capturandoTexto();
})


/* Evento al escribir en el área de texto, limita los caracteres y largo de las palabras mediante  expresiones regulares y el elemnto .replace */

areaTexto.addEventListener('input', () => {
    let texto = recuperarTexto();
    texto = texto.replace(/[^a-z0-9,.ñ \n]/gi, '');
    areaTexto.value = texto;
    if (texto.length > 23) {
    const palabras = texto.split(' ');
    const palabrasCortas = palabras.filter(palabra => palabra.length <= 23);
    areaTexto.value = palabrasCortas.join(' ');
   /* alert("¡¡Buen intento!! 🤡  No puedes ingresar más de 23 carácteres seguidos, usa espacios"); */
    }
});    


/* Evento al hacer clic en el botón de limpiar */
btnLimpiar.addEventListener('click', ()=>{
    reinicio = limpiar();
    function limpiar(){
        location.reload();
    }
})

/* Evento al hacer click sosbre el botón copiar */

btnCopiar.addEventListener('click', ()=>{
    let copy = copiarTexto()
/*     let autoPaste = pegarTextorCopiado()
 */   
    function copiarTexto(){
        let textoCopiar = mensajeResultado.textContent;
        navigator.clipboard.writeText(textoCopiar).then(()=>{
        console.log("texto copiado " + textoCopiar)
        btnCopiar.style.display = 'none';

        /* areaTexto.textContent = autoPaste;
        btnPegar.style.display = 'none';
        areaTexto.style.color = "red"
        btnCopiar.style.display = 'none'; */
    })



    }
    
});
 /* Evento para  el boton pegar */
btnPegar.addEventListener('click', ()=>{
    let paste = pegarTextorCopiado()
    areaTexto.textContent =paste;
    areaTexto.style.color = "blue"
    btnPegar.style.display = 'none';


})

    
/* funcion para recuperar el texto copiado  */
function pegarTextorCopiado(){
    navigator.clipboard.readText()
    .then(textoPegado => {
    areaTexto.value = textoPegado;
}
)} 


























