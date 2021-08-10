'use strict';

const img = document.querySelector('.slider-img');

const btns = document.querySelectorAll('.slider-container > button');
const [prevBtn, nextBtn] = btns;

const sliderImages = [
  'https://img.gazeta.ru/files3/316/11002316/terminator-pic905-895x505-35928.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cat_November_2010-1a.jpg/1200px-Cat_November_2010-1a.jpg',
  'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/dog_cool_summer_slideshow/1800x1200_dog_cool_summer_other.jpg',
];

const slider = new Slider(sliderImages, 0);

function updateView() {
  const { currentSlide } = slider;
  img.setAttribute('src', currentSlide);
}

const createSliderBtnHandler = (direction) => {
  return function () {
    const newSlide = direction === 'next' ? 'nextSlide' : 'prevSlide';
    slider.currentIndex = slider[newSlide];
    updateView();
  };
};

prevBtn.addEventListener('click', createSliderBtnHandler('next'));

nextBtn.addEventListener('click', createSliderBtnHandler('prev'));

updateView();

function makeCounter() {
  let name = 0; // замыкание здесь

  return  function getName() {
    return ++name;
  };
}

const increment1 = makeCounter();


// создайте функцию makeAdder (m)
// она возвращает функцию, которая принимает параметр n
// возвращенная функция должна складывать m и n

// const adder = makeAdder(20);
// adder(10) // 30
// adder(100) //130

// const adder2 = makeAdder(0)
// adder2(0) // 0
// adder2(500) // 500

function makeAdder(m) {
  let number = m;
  return function (n) {
    number = number + n;
    return number;
  }
}
//
const oneLineAdder = (state) => (number) => state += number;
//
const adder = makeAdder(20);
// adder(10) // 30
// adder(100) //130