const d = document;

/* Elemntos de la página */
const mensajeResultado = d.getElementById('resultado')
const areaTexto = d.getElementById("encriptador")
const ImagenMuneco = d.getElementById('muneco');
const ImagenForbriden = d.getElementById('forbriden');
const leyenda = d.getElementById('leyenda');

/* Botones */
const btnEncriptar = d.getElementById('encriptar') ;
const btnDesencriptar = d.getElementById('desencriptar');
const btnPegar = d.getElementById('pegar');
const btnLimpiar = d.getElementById('limpiar');
/* const btnReset = d.getElementById('reset');
 */const btnEnviar = d.getElementById('enviar')


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
/* btnReset.style.display = 'none';
 *//* btnEncriptar.style.display = 'none';
btnDesencriptar.style.display = 'none'; */


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
    mensajeResultado.style.overflow = auto;
   /* alert("¡¡Buen intento!! 🤡  No puedes ingresar más de 23 carácteres seguidos, usa espacios"); */
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
}


/* Evento al hacer clic en el botón de encriptar */

export default  btnEncriptar.addEventListener('click', ()=>{
    let area = recuperarTexto() ;
    let encriptado = encriptarMensaje(area);


        if (area === ''){
            mensajeResultado.textContent = ErrorAlert();
            ImagenForbriden.style.display = 'block'; 
            leyenda.style.display = 'none'; 
            ImagenMuneco.style.display = 'none';
            const loader = d.querySelector(".loader");
            loader.classList.add("none");
        }else{
            mensajeResultado.textContent = encriptado;
            ImagenForbriden.style.display = 'none'; 
            ImagenMuneco.style.display = 'none'; 
            /* btnReset.style.display = 'block'; */
            btnPegar.style.display = 'block';
            const loader = d.querySelector(".loader");
            loader.classList.add("none");
            leyenda.style.display = 'block'; 
            leyenda.textContent = textoCopiado();
/*             btnReset.style.display = 'block';
 */            limpiar();

        }
});



/* Función para desencriptar un mensaje */
function desencriptar(texto){
    for (let i = 0; i < llaves.length; i++)
    if (texto.includes(llaves[i][1])){
        texto = texto.replaceAll(llaves[i][1],llaves[i][0]);
    }
    return texto; 
}

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
        mensajeResultado.textContent = desencriptado;
/*         btnReset.style.display = 'block';
 */        const loader = d.querySelector(".loader");
        loader.classList.add("none");
        leyenda.style.display = 'block'; 
        leyenda.textContent = textoCopiado();
/*         btnReset.style.display = 'block'; */
        limpiar();
    }
});

/* Evento al hacer clic en el área de texto */
areaTexto.addEventListener('click', ()=>{
    btnPegar.style.display = 'block';
    btnLimpiar.style.display = 'block'
    ImagenMuneco.style.display = 'none' 
    ImagenForbriden.style.display = 'none' 
    leyenda.style.display = 'none'; 
    const loader = d.querySelector(".loader");
    loader.classList.remove("none");
    mensajeResultado.textContent = capturandoTexto();
})

/* Evento copiar al al hacer click en el Resultado */
mensajeResultado.addEventListener('click', ()=>{
    let copy = copiarTexto()
  
    function copiarTexto(){
        let textoCopiar = mensajeResultado.textContent;
        navigator.clipboard.writeText(textoCopiar).then(()=>{
        console.log("texto copiado " + textoCopiar)
        btnPegar.style.display = 'block';
        leyenda.textContent = textoHaSidoCopiado();
    })
    limpiarResultado();
    }
});




/* funcion para limpiar  el texto */
function limpiar(){
    d.getElementById ('encriptador').value = "";
}

function limpiarResultado(){
    mensajeResultado.textContent = "";
}

/* Evento al hacer clic en el botón de limpiar */
btnLimpiar.addEventListener('click', ()=>{
    let borrar = limpiar();    
})

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



/* Función para mostrar un mensaje cuando se copia el texto */
function textoHaSidoCopiado(){
    let textoCopia = d.querySelector('.leyenda');
    return ("El texto se copió al portapapeles")
}

/* Funcion para mostrar mensaje de que el texto se ha copiado */
function textoCopiado(){
    let copiarLeyenda = d.querySelector('.leyenda');
    return("Da click en el resultado para copiar ❏")
}  





/* Evento para el boton reset */
/* btnReset.addEventListener('click', ()=>{
    let refresh = recargar()

    function recargar(){
        location.reload();
    }
})     */





    
 /* Evento para  el boton pegar */
btnPegar.addEventListener('click', ()=>{
    let paste = pegarTextorCopiado()
    areaTexto.textContent =paste;
    areaTexto.style.color = "blue"
    btnLimpiar.style.display = 'block'
    


})

    
/* funcion para recuperar el texto copiado  */
function pegarTextorCopiado(){
    navigator.clipboard.readText()
    .then(textoPegado => {
    areaTexto.value = textoPegado;
}
)} 






























 





































