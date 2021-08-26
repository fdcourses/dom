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
  // debugger;
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
