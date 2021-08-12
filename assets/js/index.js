'use strict';

const [btn1, btn2] = document.querySelectorAll('button');

const firstUser = {
  name: 'User',
  lastName: 'Userovich'
}

function listener(e) {
  console.dir(e.target.dataset);
}

btn1.addEventListener('click', listener);

btn2.addEventListener('click', listener);