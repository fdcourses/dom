'use strict';
// есть пустой массив
// при нажатии на кнопку отображайте текст на странице
// и записывайте этот текст в массив
const state = [];

const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
  e.preventDefault(); // предотвращает стандартное поведение 
  
  const { target : { elements : { text123: {value}}}, target} = e;

  state.push(value);

  const par = document.createElement('p');
  par.textContent = value;
  document.body.append(par );
  
  target.reset();

});

// document.body.addEventListener('click', (e) => {
//   e.stopPropagation(); // отвемяет всплытие события
//   console.dir(e.target);
// });

// window.addEventListener('click', (e) => {
//   console.log(e.target);
// })