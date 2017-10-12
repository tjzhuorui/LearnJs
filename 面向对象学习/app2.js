/**
 * Created by robin on 17/10/12.
 */
/*
1.创建一个对象
 */
function Person(name){
    var _this={};

    _this._name=name;

    _this.sayHello=function(clientName){
        alert('Person:Hello ['+clientName+'].My name is ['+_this._name+']');
    }
    return _this;
}

var p=Person('lilei');
p.sayHello('hanmeimei');

/*
反思.其实这种方式，更像是调用了一个函数，在函数的内部，去构造了一个对象。
 */
/*
Question. 那么，是否可以用new 关键字来创建对象呢？
Answer.可以
*/
var p2=new Person('p2p2');
p2.sayHello('p2的hanmeimei');

/*
2.继承
 */
// function Teacher(name){
//     var _this=Person(name);//返回一个Person对象
//     return _this;
// }
// var t=Teacher('Mr.A');
// t.sayHello('hanmeimei');

/*
2.1 重写sayHello方法
 */
// function Teacher(name){
//     var _this=Person(name);//返回一个Person对象
//
//     _this.sayHello=function(clientName){
//         alert("Teacher:Hello ["+clientName+"].I'm your English teacher,["+_this._name+"]");
//     }
//
//     return _this;
// }
// var t=Teacher('Mr.A');
// t.sayHello('hanmeimei');

/*
2.2 在重写的sayHello方法中，调用父类的方法
 */
function Teacher(name){
    var _this=Person(name);//返回一个Person对象

    var superSayHello=_this.sayHello;//
    _this.sayHello=function(clientName){
        superSayHello.call(this,clientName);
        alert("Teacher:Hello ["+clientName+"].I'm your English teacher,["+_this._name+"]");
        superSayHello.call(this,clientName);
    }

    return _this;
}
var t=Teacher('Mr.A');
t.sayHello('hanmeimei');

/**
 * 封装，同样的,使用 (function(){}())具体见app1.js
 */
