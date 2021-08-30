'use strict';

class Queue {

  constructor(...elements) {
    this._tail = 0;
    this._head = 0;

    // for(let i = 0; i < elements.length; i++) {
    //   this.push(elements[i]);
    // }

    for(const element of elements) {
      this.push(element);
    }
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
    return this.size;
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
 // сделайте такое создание очереди рабочим
const q1 = new Queue(1,2,3,5);
