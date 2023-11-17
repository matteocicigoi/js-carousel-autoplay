# Esercizio: JS Carousel autoplay

### Esercizio originale: [Carosello Mono Array](https://github.com/matteocicigoi/js-array-carousel)

 ## Autoplay

```js
const interval = 3000;// tempo
let set = setInterval(prevNextFn, interval);//autoplay

// bottone start
const start = document.getElementById('start');//elemento
start.addEventListener('click', function(){
    //evento
    clearInterval(set);
    set = setInterval(prevNextFn, interval);
});
// bottone stop
const stop = document.getElementById('stop');//elemento
stop.addEventListener('click', function(){
    //evento
    clearInterval(set);
});
```
 