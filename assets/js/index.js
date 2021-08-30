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
   * @returns {any} значение удаленного элемента
   */
  pop() {
    if(this.size > 0) {
      const deleted = this[this._head];
      delete this[this._head++];
      return deleted;      
    }
  }
}
// сделайте функцию которая принимает две очереди
// и на их основании возвращает одну очередь
// элементы становятся в новую очередь поочередно
const q1 = new Queue(1);
const q2 = new Queue(2,8);

/**
 * Функция которая принимает две очереди и возяращает 
 * очередь с поочередно вставленными данными из принятых очередей
 * @param {Queue} q1 первая очередь
 * @param {Queue} q2 вторая очередь
 * @returns {Queue} очередь из двух очередей
 */
function mergeQueues (q1,q2) {
  const resultQueue = new Queue();

  while(q1.size || q2.size) {
    if(q1.size) {
      resultQueue.push(q1.pop());
    }

    if(q2.size) {
      resultQueue.push(q2.pop());
    }
  }

  // for(let i = 0; i !== q1.size + q2.size; ) {
  //   if(q1.size) {
  //     resultQueue.push(q1.pop());
  //   }

  //   if(q2.size) {
  //     resultQueue.push(q2.pop());
  //   }
  // }

  return resultQueue;
}