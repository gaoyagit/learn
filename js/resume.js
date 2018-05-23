/**
 * Created by Administrator on 2018/5/23.
 */
var rightBox = document.getElementsByClassName("rightBox")[0];
var rightHeight = rightBox.offsetHeight;

var leftBox = document.getElementsByClassName("leftBox")[0];
leftBox.style.height = rightHeight+"px";
console.log(leftBox.style.height);