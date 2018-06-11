var util = require('util');
function Base(){
    this.name = "gaoya";
    this.base = 1991;
    this.sayHello = function(){
        console.log("hello:"+this.name);
    }
}

Base.prototype.shownName=function(){
    console.log(this.name);
}

function Sub(){
    this.name = "sub";
}

util.inherits(Sub,Base);

var objBase = new Base();
objBase.shownName();
objBase.sayHello();
console.log(objBase);

var objSub = new Sub();
//objSub.sayHello();
objSub.shownName();
console.log(objSub);