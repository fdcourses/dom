'use strict';

class Queue {

  constructor() {
    this._tail = 0;
    this._head = 0;
  }

  get size() {
    return this._tail - this._head;
  }
  /**
   * Метод для добавленя элемента в конец очереди
   * @param {*} item 
   * @returns {number} размер очереди
   */
  push(item) {
    this[this._tail++] = item;
    return this.size
  }

  /**
   * Метод для удаления элемента с начала очереди
   * @returns {any} удаленный элемент
   */
  pop() {
    if(this.size > 0) {
      const deleted = this[this._head];
      delete this[this._head++];
      return deleted;      
    }
  }
}

const q = new Queue();

q.push(1);
q.push(2);
q.push(3);