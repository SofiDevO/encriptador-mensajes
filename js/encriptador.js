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
/* funcion btnEncriptar, boton */
export default  btnEncriptar.addEventListener('click', ()=>{
    
    let area = recuperarTexto();
    let encriptartexto = encriptar();
    


    function encriptar(){
        if (recuperarTexto() === ''){
            mensajeResultado.textContent = ErrorAlert();
            ImagenForbriden.style.display = 'block'; 
            Leyenda.style.display = 'none'; 
            ImagenMuneco.style.display = 'none';
            const loader = d.querySelector(".loader");
            loader.classList.add("none");
 
        }else{
            ImagenForbriden.style.display = 'none'; 
            ImagenMuneco.style.display = 'none'; 

            mensajeResultado.textContent = recuperarTexto();
            
            const loader = d.querySelector(".loader");
            loader.classList.add("none");


        }
    }

    function recuperarTexto(){
        let area = d.querySelector(".area");
        ImagenMuneco.style.display = 'none' 
 
        return area.value;
    }
})

/* Funciones que cambian el texto: resultado */
function ErrorAlert(){
    let textoError = d.querySelector(".resultado"); 
    return ("Debes ingresar un texto");
    const loader = d.querySelector(".loader");
    loader.classList.add("none");
}
function capturandoTexto(){
    let capturando = d.querySelector(".resultado");
    return ("Capturando Texto");

}



/* al poner el cursor en el text area, desaparace el personaje (muneco) y la leyenda y aparece un loader */

areaTexto.addEventListener('click', ()=>{
    ImagenMuneco.style.display = 'none' 
    ImagenForbriden.style.display = 'none' 
    Leyenda.style.display = 'none'; 
    const loader = d.querySelector(".loader");
    loader.classList.remove("none");
    mensajeResultado.textContent = capturandoTexto();

})



/* Boton para limpiar TransformStreamDefaultController(Solo es un reset) */

btnLimpiar.addEventListener('click', ()=>{
    reinicio = limpiar();
    function limpiar(){
        location.reload();
    }

})



























