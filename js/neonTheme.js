
const d = document;

const toggle = d.getElementById ('toggleDark');
const body = d.querySelector('body');
const cajaResultado = d.getElementById('mensaje-resultado');
const logo = d.getElementById('logo');
const logoFooter = d.getElementById('logo-footer');
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
        
        logo.style.filter = 'invert(16%) sepia(45%) saturate(2765%) hue-rotate(196deg) brightness(94%) contrast(97%)';
        logoFooter.style.filter = 'invert(100%) sepia(0%) saturate(0%) hue-rotate(6deg) brightness(101%) contrast(104%)';
        areaTexto.style.backgroundColor = 'white'
        areaTexto.style.color = 'black';
        areaTexto.style.border = 'solid 4px #012650';
        areaTexto.style.boxShadow = '0 0 0px ';
        mensajeResultado.style.color = 'black'


        cajaResultado.style.boxShadow = '0 0 0px ';
        cajaResultado.style.border = 'solid 4px #012650';

      


    }else{
        body.style.background = 'black';
        body.style.color = 'white';
        body.style.transition = '2s';

        areaTexto.style.color = 'white'
        areaTexto.style.backgroundColor = 'black'
        areaTexto.style.border = 'solid 3px rgba(0,212,255,1)';
        areaTexto.style.boxShadow = '0 0 20px rgba(0,212,255,1)';
        areaTexto.style.transition = '2s';
        
        
        logo.style.filter = 'invert(100%) sepia(12%) saturate(166%) hue-rotate(219deg) brightness(115%) contrast(90%) drop-shadow(0 0 12px  rgba(0,212,255,1)';
        
        mensajeResultado.style.color = 'white'
        mensajeResultado.style.transition = '2s';

        
        logoFooter.style.filter = 'invert(100%) sepia(12%) saturate(166%) hue-rotate(219deg) brightness(115%) contrast(90%) drop-shadow(0 0 12px  rgba(0,212,255,1)';

        mensajeResultado.style.color = 'white'
        mensajeResultado.style.transition = '2s';
        
        cajaResultado.style.border = 'solid 4px rgba(0,212,255,1)';
        cajaResultado.style.boxShadow = '0 0 20px rgba(0,212,255,1)';
        cajaResultado.style.transition = '2s';


        botonEncriptar.style.color = 'rgba(0,212,255,1)'
        botonEncriptar.style.boxShadow = '0 0 10px  white'
        botonEncriptar.style.transition = '2s';


        botonPegar.style.color = 'rgba(0,212,255,1)'
        botonPegar.style.boxShadow = '0 0 10px  white'
        botonPegar.style.transition = '2s';



        botonLimpiar.style.color = 'rgba(0,212,255,1)'
        botonLimpiar.style.boxShadow = '0 0 10px  white'
        botonLimpiar.style.transition = '2s';


        botonCopiar.style.color = 'rgba(0,212,255,1)';
        botonCopiar.style.boxShadow = '0 0 10px  white';
        botonCopiar.style.transition = '2s';

        botonDesencriptar.style.color = 'rgba(0,212,255,1)';
        botonDesencriptar.style.boxShadow = '0 0 10px  white';
        botonDesencriptar.style.transition = '2s';


        botonEncriptar.style.background = 'linear-gradient(50deg, rgba(2,0,36,1) 0%, rgba(10,77,104,1) 50%, rgba(0,212,255,1) 100%)'
        botonPegar.style.background = 'linear-gradient(50deg, rgba(2,0,36,1) 0%, rgba(10,77,104,1) 50%, rgba(0,212,255,1) 100%)'
        botonLimpiar.style.background = 'linear-gradient(50deg, rgba(2,0,36,1) 0%, rgba(10,77,104,1) 50%, rgba(0,212,255,1) 100%)'
        botonCopiar.style.background = 'linear-gradient(50deg, rgba(2,0,36,1) 0%, rgba(10,77,104,1) 50%, rgba(0,212,255,1) 100%)'
        botonDesencriptar.style.background = 'linear-gradient(50deg, rgba(2,0,36,1) 0%, rgba(10,77,104,1) 50%, rgba(0,212,255,1) 100%)'
    }
        
        
        
}

