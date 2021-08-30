'use strict';

class Stack {
  /**
   * @param {number} maxSize размер стека
   * @param {any[]} elements массив вносимых при создании в стек элементов
   */
  constructor(maxSize = 10, ...elements) {
    this.maxSize = maxSize;
    this._size = 0;

    for (let i = 0; i < elements.length; i++) {
      this.push(elements[i]);
    }
  }

  /**
   * Внесение в стек предмета
   * @param {*} item вносимый в стек предмет
   * @returns {number} размер стека
   */
  push(item) {
    if (this._size >= this.maxSize) {
      throw new RangeError('Stack overflown');
    }
    this[`_${this._size}`] = item;
    this._size++;
    return this._size;
  }
  /**
   * Метод для удаления значения из стека
   * @returns {*} удаленное из стека значения
   */
  pop() {
    if (this._size === 0) {
      return;
    }
    const deleted = this[`_${this._size - 1}`];
    delete this[`_${this._size--}`];

    return deleted;
  }
  /**
   * Метод для просмотра верхнего значения в стеке
   * @returns {*} верхнее значение в стеке
   */
  pick() {
    return this[`_${this._size - 1}`];
  }
}

const stack1 = new Stack(10, 'test', 'test12', '123', false);
