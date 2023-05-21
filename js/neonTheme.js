
const d = document;

const toggle = d.getElementById ('toggleDark');
const body = d.querySelector('body');
const cajaResultado = d.getElementById('mensaje-resultado');
const mensajeResultado = d.getElementById('resultado')
const botonEncriptar= d.getElementById('encriptar')
const botonPegar= d.getElementById('pegar')
const botonLimpiar= d.getElementById( 'limpiar' )
const botonCopiar= d.getElementById('copiar')
const botonDesencriptar= d.getElementById('desencriptar')
const areaTexto = d.getElementById("encriptador")


toggle.addEventListener('click', cambiarModo);

export  function cambiarModo(){
    this.classList.toggle('bi-lightbulb-fill')
    if(this.classList.toggle('bi-lightbulb')){
        body.style.background = 'white';
        body.style.color = 'black';
        body.style.transition = '2s';
    }else{
        body.style.background = 'black';
        body.style.color = 'white';
        body.style.transition = '2s';

        areaTexto.style.color = 'white'
        areaTexto.style.backgroundColor = 'black'
        areaTexto.style.border = 'solid 3px rgba(0,212,255,1)';
        areaTexto.style.boxShadow = '0 0 20px rgba(0,212,255,1)';

        mensajeResultado.style.color = 'white'
        
        cajaResultado.style.border = 'solid 4px rgba(0,212,255,1)';
        cajaResultado.style.boxShadow = '0 0 20px rgba(0,212,255,1)';


        botonEncriptar.style.color = 'rgba(0,212,255,1)'
        botonEncriptar.style.boxShadow = '0 0 10px  white'

        botonPegar.style.color = 'rgba(0,212,255,1)'
        botonPegar.style.boxShadow = '0 0 10px  white'

        botonLimpiar.style.color = 'rgba(0,212,255,1)'
        botonLimpiar.style.boxShadow = '0 0 10px  white'

        botonCopiar.style.color = 'rgba(0,212,255,1)'
        botonCopiar.style.boxShadow = '0 0 10px  white'

        botonDesencriptar.style.color = 'rgba(0,212,255,1)'
        botonDesencriptar.style.boxShadow = '0 0 10px  white'

        botonEncriptar.style.background = 'linear-gradient(50deg, rgba(2,0,36,1) 0%, rgba(10,77,104,1) 50%, rgba(0,212,255,1) 100%)'
        botonPegar.style.background = 'linear-gradient(50deg, rgba(2,0,36,1) 0%, rgba(10,77,104,1) 50%, rgba(0,212,255,1) 100%)'
        botonLimpiar.style.background = 'linear-gradient(50deg, rgba(2,0,36,1) 0%, rgba(10,77,104,1) 50%, rgba(0,212,255,1) 100%)'
        botonCopiar.style.background = 'linear-gradient(50deg, rgba(2,0,36,1) 0%, rgba(10,77,104,1) 50%, rgba(0,212,255,1) 100%)'
        botonDesencriptar.style.background = 'linear-gradient(50deg, rgba(2,0,36,1) 0%, rgba(10,77,104,1) 50%, rgba(0,212,255,1) 100%)'
    }
        
        
        
}

