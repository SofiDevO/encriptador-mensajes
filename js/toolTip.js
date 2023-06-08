const d = document;

const navIcons = d.getElementById('nav');


export default navIcons.addEventListener('mousemove', (e)=>{
    let x = e.clientX;
    let y = e.clientY;
        if(e.target.className == 'tooltip-box'){
        e.target.children[0].style.top = y  + 'px';
        e.target.children[0].style.left = x + 'px';
    }
});