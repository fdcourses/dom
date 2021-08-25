'use strict';

const cardsContainer = document.querySelector('#root');

const userCards = data.map((user) => generateUserCard(user));
cardsContainer.append(...userCards);

// const userCards = data.map((user) => generateUserCard(user));
// cardsContainer.append(...userCards);

// userObj - обьект с инфой о пользователе
function generateUserCard(userObj) {
  const { name, description, profilePicture } = userObj;

  const userCard = document.createElement('li');
  userCard.classList.add('cardWrapper');

  const article = document.createElement('article');
  article.classList.add('userCard');

  const imgWrapper = document.createElement('div');
  imgWrapper.classList.add('imgWrapper');

  const initails = document.createElement('div');
  initails.classList.add('initials');
  initails.textContent = name
    .split(' ')
    .map((word) => word[0])
    .join(' ');
   
  initails.style.backgroundColor = stringToColour(name);

  const img = document.createElement('img');
  img.classList.add('img');
  img.setAttribute('src', profilePicture);
  img.alt = name;

  img.addEventListener('error', deleteHandler);

  imgWrapper.append(initails, img);

  const userName = document.createElement('h2');
  userName.classList.add('cardName');
  userName.textContent = name;

  const cardDescription = document.createElement('p');
  cardDescription.classList.add('cardDescription');

  cardDescription.append(document.createTextNode(description));

  article.append(imgWrapper, userName, cardDescription);
  userCard.append(article);

  return userCard;
}

/* 
  HANDLERS 
*/
function deleteHandler(e) {
  const { target } = e;
  target.style.visibility = 'hidden';
}

/*
  UTILS
*/

function stringToColour(str) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  var colour = '#';
  for (var i = 0; i < 3; i++) {
    var value = (hash >> (i * 8)) & 0xFF;
    colour += ('00' + value.toString(16)).substr(-2);
  }
  return colour;
}

const testString = "Anthony's Restaurant & Pizza";

const initails = testString;
