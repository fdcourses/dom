'use strict';
/*
  есть див и кнопки с цветами
  по нажатию на кнопки поменять цвет фона дива 
  на цвет названия кнопки
  использьовать дата-* аттрибуты при этим

*/

const btns = document.querySelectorAll('#root > button');

function listener(e) {
  const {target: btn} = e;
  const {dataset : {backgroundColor}} = btn;
  
  btn.parentElement.style.backgroundColor = backgroundColor;
}

for(const btn of btns) {
  btn.addEventListener('click', listener);
}

