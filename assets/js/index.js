'use strict';

const set = new Set();

set.add(1);

set.add({});
set.add({});
set.add({});

set.add(2);
set.add('teste32423423');
set.add(true);
set.add([1,2,3]);

set.add('1');

set.delete(true);

set.has(1);

// for(const entry of set.values()) {
//   console.log(entry);
// }

// for(const setEntry of set) {
//   console.log(setEntry);
// }

// есть 2 массива
const arr1 = [1,2,3,4,5];
const arr2 = [3,4,7,8,9];

//получить массив с уникальными значениями из двух верхних массивов
const unique = [...new Set([...arr1, ...arr2 ])];
