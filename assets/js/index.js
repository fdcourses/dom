'use strict';

// нашли кнопки
const [btn] = document.getElementsByTagName('button');

// создали функцию слушателя
function btnAlert () {
  alert('Вы нажали кнопку');
}

// сказали кнопке что она когда на неё нажимают запускает функцию
btn.addEventListener('click', btnAlert);

