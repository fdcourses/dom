'use strict';

let count = 0;

function test() {
  count++;
  if (count < 10) {
    test();
  }
}

// создайте рекурсивную функцию которая принимает положительное число
// и вызвается пока это число больше 0 и логирует это число

/**
 * Рекурсивно выводит в консоль числа от верхнего предела до 0
 * @param {number} number
 */
function countdown(number) {
  // debugger;
  if (number > 0) {
    console.log(number);
    countdown(number - 1);
  }
}

// создайте функцию logRange принимет два числа
// и логирует от первого ко второму
/**
 *
 * @param {number} min
 * @param {number} max
 */
function logRange(min, max) {
  if (min <= max) {
    console.log(min);
    logRange(min + 1, max);
  }
}

/**
 * Функция рассчета суммы чисел от 1 до max
 * @param {number} number
 * @returns {number} сумма чисел от 1 до max
 */
function increment(number) {
  debugger;
  let result = number;

  if (number > 0) {
    // рекурсивные вызовы функции в колл стеке
    result += increment(number - 1);
  }

  // доходим до базы рекурсии
  return result;
}

const tree = {
  value: 10,
  left: {
    value: 20,
    left: {
      value: 10,
    },
  },
  right: {
    value: 30,
  },
};

/**
 *
 * @param {Object} tree
 * @param {number} tree.value - значение узла дерева
 * @param {object} tree.left - левый узел дерева
 * @param {object} tree.right - правый узел дерева
 * @returns {number} сумма всех параметров value
 */
function getTreeValue({ value, left, right }) {
  let result = value;

  if (left) {
    result += getTreeValue(left);
  }

  if (right) {
    result += getTreeValue(right);
  }

  return result;
}

// написать рекурсивную функцию возведения числа в степень
/**
 * @param {number} number число
 * @param {number} exp степень
 * @returns {number}
 */
function power(number, exp) {
  if (exp === 0) {
    return 1;
  }

  return exp > 0
    ? number * power(number, exp - 1)
    : 1 / (number * power(number, Math.abs(exp) - 1));
}

const value = 10000;

const arr = [1,3,4,8,9,15,7,3,10,5];



const testArr = Array(10000).fill(null).map((abracadabra, i) => i+1);

const testArr1 = Array(1000).fill(null).map((abracadabra, i) => `string${i+1}`);

// O(n)
function linearSearch(arr, value) {

  for(let i = 0; i < arr.length; i++) {
    if(arr[i] === value) {
      return true;
    }
  }

  return false;
}
// O (n^2)
function createMultiplicationTable (number) {
  const table = [];

  for(let i =1; i <=  number; i++) {
    for(let j = 1; j <= number; j++) {
      table.push(`${i} * ${j} = ${i*j}`);
    }
  }

  return table;
}
// O (log n)
function binarySearch(arr, value) {

  let start = 0;
  let end = arr.length - 1;
  let middle = Math.round((end + start) / 2);
  
  
  while(true) {
    if(arr[middle] === value) {
      return true;
    }

    if(arr[middle] > value) {
      end = middle;
      middle = Math.floor((end + start) / 2);
    } else if(arr[middle] < value) {
      start = middle;
      middle = Math.round((end + start) / 2);
    } 

    if(start === end && start === middle) {
      return false;
    }
  }
}

console.time('linear');
linearSearch(testArr, value);
console.timeEnd('linear');

console.time('quadro');
createMultiplicationTable(1000);
console.timeEnd('quadro');

console.time('binary');
binarySearch(testArr, 10000);
console.timeEnd('binary');

let listItem1 = {
  value : 1,
  next : listItem2,
  prev: null,
}

let listItem2 = {
  value : 2,
  next: listItem3,
  prev: listItem1,
}

let listItem3 = {
  value: 3,
  next: null,
  prev: listItem2
}

function test() {
  test();
}