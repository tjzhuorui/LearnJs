/**
 * Created by robin on 17/10/12.
 */
//http://www.cnblogs.com/jerome-rong/archive/2012/05/31/2528556.html

/*
 call([thisObj[,arg1[, arg2[, [,.argN]]]]])
 参数
 thisObj
 可选项。将被用作当前对象的对象。
 arg1, arg2, , argN
 可选项。将被传递方法参数序列。
 说明
 call 方法可以用来代替另一个对象调用一个方法。call 方法可将一个函数的对象上下文从初始的上下文改变为由 thisObj 指定的新对象。

 如果没有提供 thisObj 参数，那么 Global 对象被用作 thisObj。
 */

/*
 ex1.
 */
function add() {
    var total = 0;
    for (var i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }
    alert(total);
}

function sub(a, b) {
    alert(a - b);
}

add.call(sub, 1, 2, 3, 4, 5);
//这个例子中的意思就是用 add 来替换 sub，注意替换二字,或者可以用追加
// 注意：js 中的函数其实是对象，函数名是对 Function 对象的引用

/*
 Question.函数可以传递n个参数吗，n是未知的
 Answer. 可以.通过arguments来传递
 */
// function say(){
//     console.log('Hello' + arguments[0] + arguments[1]);
//     console.log(arguments.length);
//
// }
// say('World, ByeBye');


/*
 ex2.
 */
function Class1() {
    this.name = "class1";

    this.showNam = function () {
        alert(this.name);
    }
}

function Class2() {
    this.name = "class2";
}

var c1 = new Class1();
var c2 = new Class2();

c1.showNam.call(c2);
// 注意，call 的意思是把 c1 的方法放到c2上执行，原来c2是没有showNam() 方法，现在是把c1 的showNam()方法放到 c2 上来执行，
// 所以this.name 应该是 class2，执行的结果就是 ：alert（"class2"）;

/**
 * ex3.实现了继承
 */
function Person(name) {
    this._name = name;

    this.greet = function () {
        alert('Person:My name is [' + this._name + '].');
    }
}

function Doctor(name) {
    this._name = name;
    Person.call(this);
}

var p = new Person('person');

var d = new Doctor('doctor');
// d.greet();
p.greet.call(d);

//结论，还是没有完全理解call，仅仅在app1和app2中的调用父类方法的时候用到


