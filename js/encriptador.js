const d = document;

const mensajeResultado = d.getElementById('resultado')
const areaTexto = d.getElementById("encriptador")
const ImagenMuneco = d.getElementById('muneco');
const ImagenForbriden = d.getElementById('forbriden');
const Leyenda = d.getElementById('leyenda');



const btnPegar = d.getElementById('pegar');
const btnLimpiar = d.getElementById('limpiar');
const btnCopiar = d.getElementById('copiar');
const btnDesencriptar = d.getElementById('desencriptar');

const btnEncriptar = d.getElementById('encriptar') ;


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
            btnPegar.style.display = 'block';
            btnCopiar.style.display = 'block';
            btnDesencriptar.style.display = 'block';
            mensajeResultado.textContent = encriptado;
            const loader = d.querySelector(".loader");
            loader.classList.add("none");
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

/* function recuperarTextoDesencriptado(){
    let areaEncriptado = d.querySelector(".resulttado");
    return areaEncriptado.value
} */




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
    
    ImagenMuneco.style.display = 'none' 
    ImagenForbriden.style.display = 'none' 
    Leyenda.style.display = 'none'; 
    const loader = d.querySelector(".loader");
    loader.classList.remove("none");
    mensajeResultado.textContent = capturandoTexto();
})


/* Evento al escribir en el área de texto */
areaTexto.addEventListener('input', () => {
    let texto = recuperarTexto();

    texto = texto.replace(/[^\w\s]/gi, '');
    areaTexto.value = texto;
    if (texto.length > 16) {
    const palabras = texto.split(' ');
    const palabrasCortas = palabras.filter(palabra => palabra.length <= 23);
    areaTexto.value = palabrasCortas.join(' ');
    alert("¡¡Buen intento!! 🤡  No puedes ingresar más de 23 carácteres seguidos, usa espacios")
    }
});    
    







/* Evento al hacer clic en el botón de limpiar */

btnLimpiar.addEventListener('click', ()=>{
    reinicio = limpiar();
    function limpiar(){
        location.reload();
    }

})


























