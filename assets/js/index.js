'use strict';

const user = {
  id: 2,
};

const obj = {
  id: 1,
  name: 'Test',
  lastName: 'Test',
  id: 1000,
  age: 5,
  0: false,
  [user]: 'Hello',
};

const objEntries = Object.entries(obj);
const objKeys = Object.keys(obj);
const objValue = Object.values(obj);
const objSize = objValue.length;

const map = new Map();

const arr = [1, 34, 5];

const func = () => {};

map.set('id', 1);
map.set(arr, 'array');
map.set(func, 'function');
map.set(1, 1);
map.set('1', 'number one');
map.set(user, 'object');

map.set(map, 'lol');

const value = map.get('1');
map.delete('1');
// map.clear();

const vocabulary = new Map([
  ['получить', 'obtain'],
  ['преимущество', 'advantage'],
  ['стул', 'chair'],
  ['наличка', 'cash'],
  ["цифробуквенный", 'alphanumerical'],
  ['переговоры', 'negotiacions'],
  ['значительный','significant'],
  ["кот",'cat'],
  ['собака', 'dog'],
  ['слон', 'elephant'],
  ["язык", 'language']
]);

const stringToTranslate = 'слон значительный получить наличку собака кот цифробуквенный стул';

const string = 'test|not|yet|hello|there';
const arrFromStr = string.split('|');
const reformedStr = arrFromStr.join('$');


// создать функцию которая принимает строку на руссокм
// и возвращает строку на английском
function translate(str) {


  return newStr;
}