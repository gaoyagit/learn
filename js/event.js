var events = require('events');
var eventEmitter = new events.EventEmitter();

var listener1 = function listener1(){
    console.log('listener1');
}

var listener2 = function listener2(){
    console.log('listener2');
}

eventEmitter.addListener('connection',listener1);

eventEmitter.addListener('connection',listener2);

var eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log("you ji ge listener"+eventListeners);

eventEmitter.emit('connection');

// �Ƴ���󶨵� listener1 ����
eventEmitter.removeListener('connection', listener1);
console.log("listener1 �����ܼ�����");

// ���������¼�
eventEmitter.emit('connection');

eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners + " �����������������¼���");

console.log("����ִ����ϡ�");

