/**
 * Created by Administrator on 2018/5/21.
 */
function add(items) {
    var tbody = document.getElementsByTagName('tbody')[0];
    var name = items.name;
    var price = items.price;

    var tr = document.createElement("tr");
    tr.innerHTML = '<tr><td>'+name+'</td><td>'+price.toFixed(2)+'</td><td><a href="javascript:void(0);">删除</a></td></tr>';
    tbody.appendChild(tr);

    var footTextTd = document.getElementsByTagName('tfoot')[0].firstChild.lastChild;
    var footText = footTextTd.innerText;//取到的是文本节点

    var data = footText.indexOf("(");
    var allPrice = Number(footText.substr(0,data-1));//总价钱
    var count = Number(footText.substr(data+1,1));//件数

    allPrice = (allPrice+price).toFixed(2);
    count = count +1;
    footTextTd.innerHTML = allPrice+"("+count+"件商品)";

}
add({name:'产品四',price:20.60});
add({name:'产品五',price:20.00});


function bind() {
    var footTextTd = document.getElementsByTagName('tfoot')[0].firstChild.lastChild;
    var footText = footTextTd.innerText;//取到的是文本节点
    console.log(footText);

    var data = footText.indexOf("(");
    var allPrice = Number(footText.substr(0,data-1));//总价钱
    var count = Number(footText.substr(data+1,1));//件数

    console.log(allPrice);
    console.log(count);

    var tbody = document.getElementsByTagName("tbody")[0];
    var tr = document.getElementsByTagName("tr");
    var price;
    //事件委托问题
    tbody.onclick = function(ev){
        //浏览器兼容问题
        var ev = ev || window.event;
        var target = ev.target || ev.srcElement;

        if(target.nodeName.toLowerCase() == "a"){
            price = Number(target.parentNode.parentNode.firstChild.nextSibling.innerText);
            tbody.removeChild(target.parentNode.parentNode);
        }


        allPrice = (allPrice - price).toFixed(2);
        count = count - 1;
        footTextTd.innerHTML = allPrice+"("+count+"件商品)";
    }

}
bind();