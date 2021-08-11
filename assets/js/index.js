'use strict';

const btn = document.querySelector('#btn');

function clickHandler(event) {
  console.dir(event.currentTarget); // тот на ком обработчик
  console.dir(event.target); // то куда кликнули
  console.log(event);
}



btn.addEventListener('click', clickHandler);
document.body.addEventListener('click', clickHandler);

const mouseEvent = new MouseEvent('click');

btn.dispatchEvent(mouseEvent);
