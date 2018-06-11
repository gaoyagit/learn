/**
 * Created by Administrator on 2018/6/5.
 */
var fs = require('fs');

//fs.readFile('input.txt',function(err,data){
//    if(err){
//        return console.log(err);
//    }
//    console.log("异步读取"+data.toString());
//})
//
//var data = fs.readFileSync('input.txt');
//console.log("同步读取"+ data.toString())
//
//console.log("程序读取完毕！")

console.log("准备打开文件！")
fs.open("input.txt","r+",function(err,fd){
    if(err){
        console.log(err);
    }
    console.log("文件打开成功")
})
