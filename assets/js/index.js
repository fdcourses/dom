'use strict';
// есть пустой массив
// при нажатии на кнопку отображайте текст на странице
// и записывайте этот текст в массив
// сбрасывать форму
const state = [];

const form = document.getElementById('form');

// const listener = ;

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const {
    target: {
      elements: {
        text123: { value },
        text123,
      },
    },
    target,
  } = e;

  if (value) {
    console.dir(value);
    state.push(value);

    document.body.append(value);
  }

  target.reset();
});

// document.body.addEventListener('click', (e) => {
//   e.stopPropagation(); // отвемяет всплытие события
//   console.dir(e.target);
// });

// window.addEventListener('click', (e) => {
//   console.log(e.target);
// })

const object = {
  value: 10,
  deepObject: {
    isTrue: true,
    isFalse: false,
  },
  deepArray: [10, 2, 3],
};

const {
  value: number,
  deepObject: { isTrue },
  deepObject,
  deepArray: [first, second, third],
  deepArray: array,
} = object;
