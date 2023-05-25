
const d = document;
/* Elementos de la pagina */
const toggle = d.getElementById ('toggleDark');
const header = d.getElementById ('header');
const body = d.querySelector('body');
const cajaResultado = d.getElementById('mensaje-resultado');
const areaTexto = d.getElementById("encriptador")
const logo = d.getElementById('logo');
const footer = d.getElementById('footer')
const logoFooter = d.getElementById('logo-footer');
const mensajeResultado = d.getElementById('resultado')

/* botones */
const botonEncriptar= d.getElementById('encriptar')
const botonPegar= d.getElementById('pegar')
const botonLimpiar= d.getElementById( 'limpiar' )
const botonDesencriptar= d.getElementById('desencriptar')
const botonGithub = d.getElementById('github')
const botonAlura = d.getElementById('aluracursos')
const botonLinkedin = d.getElementById('linkedin')
const botonPlatzi = d.getElementById('platzi')



toggle.addEventListener('click', cambiarModo);

export  function cambiarModo(){
    this.classList.toggle('bi-lightbulb-fill')
    if(this.classList.toggle('bi-lightbulb-off-fill')){
        body.style.background = 'white';
        body.style.color = 'black';
        body.style.transition = '2s';
      
        header.style.backgroundColor = 'white';
        header.style.transition = '2s';
      
        toggle.style.filter = 'invert(0%) sepia(83%) saturate(7433%) hue-rotate(290deg) brightness(80%) contrast(114%);'
       
        logo.style.filter = ' invert(0%) sepia(99%) saturate(3%) hue-rotate(150deg) brightness(102%) contrast(100%)';
        
        logoFooter.style.filter = 'invert(100%) sepia(0%) saturate(0%) hue-rotate(6deg) brightness(101%) contrast(104%) drop-shadow(0 0 12px  rgba(0,212,255,1)';
       
        botonGithub.style.filter = 'invert(100%) sepia(0%) saturate(0%) hue-rotate(6deg) brightness(101%) contrast(104%)';
        botonAlura.style.filter = 'invert(15%) sepia(73%) saturate(1667%) hue-rotate(197deg) brightness(99%) contrast(101%)';
        botonLinkedin.style.filter = ' invert(15%) sepia(60%) saturate(6697%) hue-rotate(221deg) brightness(100%) contrast(97%)';
        botonPlatzi.style.filter = 'invert(55%) sepia(47%) saturate(5746%) hue-rotate(64deg) brightness(99%) contrast(80%)';
        
        areaTexto.style.backgroundColor = 'white'
        areaTexto.style.color = 'black';
        areaTexto.style.border = 'solid 4px #012650';
        areaTexto.style.boxShadow = '0 0 0px ';
        
        mensajeResultado.style.color = 'black'


        cajaResultado.style.boxShadow = '0 0 0px ';
        cajaResultado.style.border = 'solid 4px #012650';

      

        /* Estilos en el tema oscuro */
    }else{
        body.style.background = 'black';
        header.style.background = 'black';
        header.style.transition = '2s';
        body.style.color = 'white';
        body.style.transition = '2s';
       
        botonGithub.style.filter = 'invert(100%) sepia(100%) saturate(0%) hue-rotate(289deg) brightness(103%) contrast(101%)drop-shadow(0 0 12px  rgba(255, 255, 255)';
        botonAlura.style.filter = 'invert(16%) sepia(45%) saturate(2765%) hue-rotate(196deg) brightness(94%) contrast(97%) drop-shadow(0 0 12px  rgba(0,212,255,1)';
        botonLinkedin.style.filter = 'invert(15%) sepia(60%) saturate(6697%) hue-rotate(221deg) brightness(100%) contrast(97%) drop-shadow(0 0 12px  rgba(0, 24, 179)';
        botonPlatzi.style.filter = 'invert(55%) sepia(47%) saturate(5746%) hue-rotate(64deg) brightness(99%) contrast(80%) drop-shadow(0 0 12px  rgba(87, 196, 1)';
       
       
        areaTexto.style.color = 'white'
        areaTexto.style.backgroundColor = 'black'
        areaTexto.style.border = 'solid 3px rgba(0,212,255,1)';
        areaTexto.style.boxShadow = '0 0 20px rgba(0,212,255,1)';
        areaTexto.style.transition = '2s';
        
        
        logo.style.filter = 'invert(100%) sepia(0%) saturate(0%) hue-rotate(6deg) brightness(101%) contrast(104%) drop-shadow(0 0 12px  rgba(0,212,255,1)';
        

        mensajeResultado.style.color = 'white'
        mensajeResultado.style.transition = '2s';

        footer.style.backgroundColor = '#080808'
        logoFooter.style.filter = 'invert(100%) sepia(12%) saturate(166%) hue-rotate(219deg) brightness(115%) contrast(90%) drop-shadow(0 0 12px  rgba(0,212,255,1)';

        mensajeResultado.style.color = 'white'
        mensajeResultado.style.transition = '2s';
        
        cajaResultado.style.border = 'solid 4px rgba(0,212,255,1)';
        cajaResultado.style.boxShadow = '0 0 20px rgba(0,212,255,1)';
        cajaResultado.style.transition = '2s';


        botonEncriptar.style.boxShadow = '0 0 10px  rgba(0,212,255,1)'
        botonEncriptar.style.transition = '.4s';


        botonPegar.style.boxShadow = '0 0 10px  rgba(0,212,255,1)'
        botonPegar.style.transition = '.4s';



        botonLimpiar.style.boxShadow = '0 0 10px  rgba(0,212,255,1)'
        botonLimpiar.style.transition = '.4s';

        botonDesencriptar.style.boxShadow = '0 0 10px  rgba(0,212,255,1)';
        botonDesencriptar.style.transition = '.4s';
        


        botonEncriptar.style.background = 'linear-gradient(50deg, rgba(2,0,36,1) 0%, rgba(10,77,104,1) 50%, rgba(0,212,255,1) 100%)'
        botonPegar.style.background = 'linear-gradient(50deg, rgba(2,0,36,1) 0%, rgba(10,77,104,1) 50%, rgba(0,212,255,1) 100%)'
        botonLimpiar.style.background = 'linear-gradient(50deg, rgba(2,0,36,1) 0%, rgba(10,77,104,1) 50%, rgba(0,212,255,1) 100%)'
        /* btnReset.style.background = 'linear-gradient(50deg, rgba(2,0,36,1) 0%, rgba(10,77,104,1) 50%, rgba(0,212,255,1) 100%)'*/
        botonDesencriptar.style.background = 'linear-gradient(50deg, rgba(2,0,36,1) 0%, rgba(10,77,104,1) 50%, rgba(0,212,255,1) 100%)'
    }
        
        
        
}

