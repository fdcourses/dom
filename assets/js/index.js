'use strict';

const [btn1, btn2] = document.querySelectorAll('button');

const firstUser = {
  name: 'User',
  lastName: 'Userovich'
}

function listener(e) {
  console.dir(e.currentTarget);
  alert(`YO this is  ${e.currentTarget}`);
  // console.dir(e);
}

btn1.addEventListener('click', listener, true);
// document.body.addEventListener('click', listener, true);
// document.addEventListener('click', listener, true);
// window.addEventListener('click', listener,  true);