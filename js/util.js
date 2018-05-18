/**
 * Created by Administrator on 2018/5/18.
 */
var util = require('util');

//function Base(){
//    this.name = 'base';
//    this.base = '1991';
//    this.sayhello = function(){
//        console.log("hello "+this.name);
//    }
//};
//
//Base.prototype.showName = function(){
//    console.log(this.name);
//};
//
//function Sub(){
//    this.name = "sub";
//}
//util.inherits(Sub,Base);
//
//var objBase = new Base();
//objBase.showName();
//objBase.sayhello();
//console.log(objBase);
//
//var objSub = new Sub();
//objSub.showName();
////objSub.sayhello();
//console.log(objSub);


function Person(){
    this.name = "gaoya";
    this.address = "beijing";
    this.telphone = 1234614321646;
    this.toString = function(){
        return this.name;
    }
};

var obj = new Person();
console.log(util.inspect(obj));
console.log(util.inspect(obj,false,true));