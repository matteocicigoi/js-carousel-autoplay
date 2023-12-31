'use strict';
/* Funzioni */
function prevNextFn(type, i = false){
    itemAll[currentImg].classList.remove('active');
    boxAll[currentImg].classList.remove('active');
    if(type === 'prev'){
        if(currentImg > 0){
            currentImg--;
        }else{
            currentImg = img.length - 1;
        }
    }else if(type === 'thumbnails'){
        currentImg = i;
    }else{
        if(currentImg < img.length - 1){
            currentImg++;
        }else{
            currentImg = 0;
        }
    }
    itemAll[currentImg].classList.add('active');
    boxAll[currentImg].classList.add('active');
}
//elementi dal dom
const items = document.querySelector('.items');
const thumbnails = document.querySelector('.thumbnails');
//img
const img = ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg'];

//immagine corrente
let currentImg = 0;

//crea gli elementi nel dom
for(let i = 0; i < img.length; i++){
    const slide = document.createElement('div');
    const box = document.createElement('div');
    slide.classList.add('item');
    box.classList.add('box');
    const elementImg = document.createElement('img');
    elementImg.src = `img/${img[i]}`;
    elementImg.alt = `Immagine ${i}`;
    
    if(currentImg === i){
        slide.classList.add('active');
        box.classList.add('active');
    }
    box.append(elementImg);
    thumbnails.append(box);
    slide.append(elementImg.cloneNode(true));
    items.append(slide);
}

//elementi dal dom
const itemAll = document.querySelectorAll('.item');
const boxAll = document.querySelectorAll('.box');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

//immagine precedente
prev.addEventListener('click', function(){
    prevNextFn('prev');
});

//immagine successiva
next.addEventListener('click', function(){
    prevNextFn('next');
});

//thumbnails
//elementi dal dom
const thumbnailsAll = document.querySelectorAll('.box');
//tutti i  box
for(let i = 0; i < thumbnailsAll.length; i++){
    thumbnailsAll[i].addEventListener('click', function(){
        prevNextFn('thumbnails', i);
    });
}
//Intervallo
const interval = 3000;
let set = setInterval(prevNextFn, interval);
const start = document.getElementById('start');
const stop = document.getElementById('stop');
start.addEventListener('click', function(){
    clearInterval(set);
    set = setInterval(prevNextFn, interval);
});
stop.addEventListener('click', function(){
    clearInterval(set);
});