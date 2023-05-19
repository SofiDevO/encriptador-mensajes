const d = document;

const mensajeResultado = document.getElementById('resultado');
const areaTexto = (document.getElementById("encriptador"));
const ImagenMuneco = d.getElementById('muneco');
const Leyenda = d.getElementById('leyenda');



const btnPegar = d.getElementById('pegar');
const btnLimpiar = d.getElementById('limpiar');
const btnCopiar = d.getElementById('copiar');
const btnDesencriptar = d.getElementById('desencriptar');

const btnEncriptar = d.getElementById('encriptar') ;


/* funcion btnEncriptar, boton */
export default  btnEncriptar.addEventListener('click', ()=>{
    let area = recuperarTexto();
    let encriptartexto = encriptar();

    
    function encriptar(){
        if (recuperarTexto() === ''){
            alert("Debes ingresar texto")
            
        }else{
            alert(recuperarTexto())
            
        }
    }
    
    function recuperarTexto(){
        let area = d.querySelector(".area"); 
        return area.value;
    }.

    
        
})


/* al poner el cursor en el text area, desaparace el personaje (muneco) y la leyenda y aparece un loader */

areaTexto.addEventListener('click', ()=>{
    Leyenda, ImagenMuneco.style.display = 'none' 
    Leyenda.style.display = 'none'; 
    const loader = d.querySelector(".loader");
    loader.classList.remove("none");

})

/* Boton para limpiar TransformStreamDefaultController(Solo es un reset) */

btnLimpiar.addEventListener('click', ()=>{
    reinicio = limpiar();
    function limpiar(){
        location.reload();
    }

})






















