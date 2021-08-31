'use strict';

const u1 = {
  id: 1,
  name: 'John',
  age: 20
}

const u2 = {
  id: 2,
  name: 'Jane',
  age: 23
}

const johnMsg = [
  'Hello',
  'yes',
  'no',
  'test'
]

const janeMsg = [
  'Hi',
  'abracadabra?',
  'test',
  'not test'
]

// создайте функцию, которая будет принимать айдишник пользователя
// и будет возвращать все его сообщения

const msgToUsers = new Map();

msgToUsers.set(u1.id, johnMsg);
msgToUsers.set(u2.id, janeMsg);


function getUserMsg({id}) {
  return msgToUsers.get(id);
}
