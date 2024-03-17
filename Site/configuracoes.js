const acaoPaleta = document.getElementById("Paletas");
const mostrarEsconder = document.getElementById("secao-2");
const idSeta = document.getElementById ("seta-paleta")
const acaoHistoria = document.getElementById("historia");
const mostrarHistoria = document.getElementById("nossa-historia");
const setaHistoria = document.getElementById("setaHistoria")


acaoPaleta.addEventListener('click', function(){
    mostrarEsconder.classList.toggle('show')
    if (mostrarEsconder.style.display === 'none'){
        mostrarEsconder.style.display = 'flex';
        idSeta.classList.remove('bi-arrow-down-square-fill');
        idSeta.classList.add('bi-arrow-up-square-fill');
        idSeta.style.transform = 'rotate(180deg)';
        
    }
    else {
        mostrarEsconder.style.display = 'none';
        idSeta.classList.remove('bi-arrow-up-square-fill');
        idSeta.classList.add('bi-arrow-down-square-fill');
        idSeta.style.transform = 'rotate(0deg)';
    }
})

acaoHistoria;addEventListener('click',function(){
    if(mostrarHistoria.style.display === 'none'){
        mostrarHistoria.style.display = 'block';
        setaHistoria.classList.remove('bi-arrow-down-square-fill');
        setaHistoria.classList.add('bi-arrow-up-square-fill');
        
    }
    else{
        mostrarHistoria.style.display = 'none';
        setaHistoria.classList.remove('bi-arrow-up-square-fill');
        setaHistoria.classList.add('bi-arrow-down-square-fill');

    }
})