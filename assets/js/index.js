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

  const img = document.createElement('img');
  img.classList.add('img');
  img.setAttribute('src', profilePicture);
  img.alt = name;

  img.addEventListener('error', (e) => {
    const { target } = e;
    target.style.visibility = 'hidden';
  });

  imgWrapper.append(img);

  const userName = document.createElement('h2');
  userName.classList.add('cardName');
  userName.textContent = name;

  const cardDescription = document.createElement('p');
  cardDescription.classList.add('cardDescription');
  // const cardDescriptionText = document.createTextNode(description);
  // cardDescription.append(cardDescriptionText);

  cardDescription.append(document.createTextNode(description));

  article.append(imgWrapper, userName, cardDescription);
  userCard.append(article);

  return userCard;
}

const testString = "20 Anthony's Restaurant & Pizza";

const initails = testString
  .split(' ')
  .map((word) => word[0])
  .join(' ');
