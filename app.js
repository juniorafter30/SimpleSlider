const obrazek1 = document.querySelector('.item1');
const obrazek2 = document.querySelector('.item2');
const przycisk = document.querySelector('.fas');


function add (){ 
    obrazek1.classList.toggle('hide');
    przycisk.classList.toggle('fer');
}

przycisk.addEventListener('click', add);