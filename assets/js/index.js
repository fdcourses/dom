'use strict';

const cardsContainer = document.querySelector('#root');

const userCards = data.map((user) => generateUserCard(user));
cardsContainer.append(...userCards);

// userObj - обьект с инфой о пользователе
function generateUserCard (userObj) {
  const {name, description , profilePicture} = userObj;

  const userCard = document.createElement();

  // ваше задание

  return userCard;
}