'use strict';

class Stack {
  /**
   * 
   * @param {number} maxSize размер стека
   */
  constructor(maxSize = 10) {
    this.maxSize = maxSize;
    this._size = 0;
  }

  push(item) {
    if(this._size >= this.maxSize) {
      throw new RangeError("Stack overflown");
    }
    this[`_${this._size}`] = item;
    this._size++;
    return this._size;
  }

  pop() {
    if(this._size === 0 ) {
      return;
    }
    const deleted = this[`_${this._size - 1}`];
    delete this[`_${this._size--}`];

    return deleted;
  }

  pick() {
    return this[`_${this._size - 1}`]
  }
}

const stack1 = new Stack();