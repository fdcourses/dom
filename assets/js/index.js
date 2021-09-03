'use strict';

const cardsContainer = document.querySelector('#root');

const userCards = data.map(function (userObj) {
  return generateUserCard(userObj);
});
cardsContainer.append(...userCards);

/**
 * Создает карточку на основании обьекта пользователя
 * @param {object} userObj обьект с даннывми пользователя
 * @returns {HTMLLIElement} верстка карточки
 */
function generateUserCard(userObj) {
  const { id, name, description, profilePicture } = userObj;

  const img = createElement('img', {
    classNames: ['img'],
    attrs: { src: profilePicture, alt: name , 'data-id' : id},
  });
  img.addEventListener('error', deleteHandler);
  img.addEventListener('load', imageLoadHandler);

  const userName = createElement(
    'h2',
    { classNames: ['cardName'] },
    document.createTextNode(name)
  );

  const cardDescription = createElement(
    'p',
    {
      classNames: ['cardDescription'],
    },
    document.createTextNode(description)
  );

  const initails = createElement(
    'div',
    { classNames: ['initials'] },
    document.createTextNode(
      name
        .trim()
        .split(' ')
        .map((word) => word[0])
        .join(' ')
    )
  );
  initails.style.backgroundColor = stringToColour(name);

  const imgWrapper = createElement(
    'div',
    { classNames: ['imgWrapper'], attrs: {id: `wrapper${id}`} },
    initails
  );

  const article = createElement(
    'article',
    { classNames: ['userCard'] },
    imgWrapper,
    userName,
    cardDescription
  );

  const userCard = createElement(
    'li',
    { classNames: ['cardWrapper'] },
    article
  );

  return userCard;
}

const tagName = 'li';
const classes = ['cardWrapper', 'class2', 'flex', 'mainHeading'];
const attrs = { alt: 'text' , src: './assets/img/logo.png'};

const img = createElement('img');

const test = createElement('div', {} , );

/**
 * Создает HTML элемент
 * @param {string} tagName имя элемента
 * @param {object} options обьект настроек
 * @param {string[]} options.classNames строки с именами CSS классов 
 * @param {object} options.attrs обьект с аттрибутами
 * @param {Function} options.onClick функция обработки события клика
 * @param  {Node[]} children дочерние DOM узлы
 * @returns {HTMLElement} созданный элемент 
 */
function createElement(tagName, options, ...children) {
  // debugger;
  const { classNames = [], attrs = {}, onClick = () => {} } = options;

  const element = document.createElement(tagName);
  
  element.classList.add(...classNames);

  const attributesTuples = Object.entries(attrs);

  for (const attribute of attributesTuples) {
    const [key, value] = attribute;
    element.setAttribute( key , value);
  }

  element.onclick = onClick;

  element.append(...children);

  return element;
}

/* 
  HANDLERS 
*/

/**
 * Обработчик для удаления сломынных картинок
 */
function deleteHandler({ target }) {
  target.remove();
}

/**
 * Обрабочик для прикрепления картинки к оббертке
 * @param {Event} e 
 */
function imageLoadHandler (e) {
  const {target , target : { dataset: {id}}} = e;
  document.getElementById(`wrapper${id}`).append(target);
}

/*
  UTILS
*/
/**
 * Функция генерации цвета для строки
 * @param {string} str 
 * @returns {string} строка в виде хекс-кода (#FF3610)
 */
function stringToColour(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  let colour = '#';
  for (let i = 0; i < 3; i++) {
    let value = (hash >> (i * 8)) & 0xff;
    colour += ('00' + value.toString(16)).substr(-2);
  }
  return colour;
}

function generateLinks(contacts) {
  // пройтись мапом выернуть уже готовые элементы ссылок
  // воспользоватся мапой для определния какую картинку делать
}