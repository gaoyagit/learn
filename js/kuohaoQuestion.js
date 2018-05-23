/**
 * Created by Administrator on 2018/5/21.
 */
var s = "((())())";

var leftArray = [];
var rightArray = [];
var numberArray = [];
for(var i = 0 ;i< s.length;i++){
    if(s[i] == "("){
        leftArray.push(i);
    }else{
        rightArray.push(i);
    }
}

for(var i = 0 ;i <leftArray.length;i++){
    var num = 1;
    var begin = leftArray[i];
    var end = rightArray[i];

    for(var j = begin+1;j<end;j++){
        if(s[j] == ")"){
            num++;
        }
    }
    numberArray.push(num);
}

var result = 1;
for(var i = 0 ;i<numberArray.length;i++){
    result = result * numberArray[i];
}
console.log("result:"+result);