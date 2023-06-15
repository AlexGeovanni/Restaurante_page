
document.getElementById('opentable').addEventListener('click', oculta1);
document.getElementById('online').addEventListener('click', oculta2);

function oculta1(){
    document.querySelector('.powered ').classList.add('ocul');
    document.querySelector('.Leads ').classList.add('powered');
}

function oculta2(){
    document.querySelector('.Leads ').classList.remove('powered');
    document.querySelector('.powered ').classList.remove('ocul');
}
