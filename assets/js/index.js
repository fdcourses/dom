'use strict';

// const root = document.querySelector('#root');

// // 1 создать сам элемент
// const firstPar = document.createElement('p');
// // 2 заполнить элемент контентом
// firstPar.textContent = 'JS Created me';

// const secondPar = document.createElement('p');
// secondPar.textContent = 'Я буду по середине';
// // 3 сказать куда именно присоеденить элемент
// root.append(firstPar, secondPar);

// const thirdPar = document.createElement('p');
// thirdPar.textContent = 'Я буду последним';

// root.appendChild(thirdPar);

/*
  создать функцию. которая будет принимать у пользователя текст
  и будет вставлять новый элемент параграфа с этим текстом 
  в конец <body>
*/

const classNamesForPar = ['class1', 'createdPar', 'textColor'];

function createTextPar(text) {
  // const userInput = prompt(`Введите текст`);
  const newPar = document.createElement('p');
  newPar.textContent = text;

  for (let i = 0; i < classNamesForPar.length; i++) {
    newPar.classList.add(classNamesForPar[i]);
  }
  document.body.append(newPar);
}

// удаление элемента
// element.remove()

// удаление ребенка родителем
//parentElement.removeChild(childElement)


const closeBtn = document.querySelector('#closeBtn');

function deleteWindow (e) {
  const { target } = e;
  target.parentElement.remove();
}

closeBtn.addEventListener('click', deleteWindow);