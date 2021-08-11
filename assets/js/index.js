'use strict';

const btn = document.querySelector('#btn');

const [btn1, btn2] = document.querySelectorAll('button');

function btnHandler(e) {

  console.log(e.target.textContent);
}

btn1.addEventListener('click', btnHandler);
btn2.addEventListener('click', btnHandler);
