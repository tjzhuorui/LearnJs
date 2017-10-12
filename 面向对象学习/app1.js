/**
 * Created by robin on 17/10/12.
 */

/*
 1.创建一个对象
 */
// function People(name) {
//     this._name = name;
//
//     this.greet = function (clientName) {
//         alert('People:Hello [' + clientName + '].My name is [' + this._name + ']');
//     }
// }
/*
 Question.是否支持 同样的方法名，但参数不一致？
 */
// function People(name) {
//     this._name = name;
//
//     this.greet = function (clientName) {
//         alert('People:Hello [' + clientName + '].My name is [' + this._name + ']');
//     }
//
//     this.greet=function(clientName,age){
//         alert('greet2.clientName=['+clientName+'],age=['+age+']');
//     }
// }
/**
 * Answer.不可以，这样，后看定义的方法，会把前面的方法，覆盖掉。
 * 例如上面的例子，只会执行第二个greet.
 */

var p = new People('lilei');
p.greet('hanmeimei');

/*
 2.创建一个对象，继承上面的对象
 */
// function Student(name){
//     this._name=name;
// }
// Student.prototype=new People();
//
// var s=new Student('wangchuanchuan');
// s.greet('hanmeimei');

/*
 2.1 在继承的对象中，重写greet方法
 */
// function Student(name){
//     this._name=name;
// }
// Student.prototype=new People();
// Student.prototype.greet=function(clientName){
//     alert('Student:Hello ['+clientName+'].My name is ['+this._name+']');
// }
//
// var s=new Student('wangchuanchuan');
// s.greet('hanmeimei');

/*
 2.2 在重写的greet方法里，调用父类的greet方法
 */
function Student(name) {
    this._name = name;
}
Student.prototype = new People();
var superGreet = Student.prototype.greet;//这个必须是Student,写people是不可以的
Student.prototype.greet = function (clientName) {
    superGreet.call(this, clientName);
    //Question.第一个参数this是用来干嘛的?
    //Answer.详细看app3
    alert('Student:Hello [' + clientName + '].My name is [' + this._name + ']');
    superGreet.call(this, clientName);
}

var s = new Student('wangchuanchuan');
s.greet('hanmeimei');

/*
*3. 封装类，比如2.2中的类，让外部代码无法访问superGreet这种类似的变量
* 只需要在需外面包一层(function(){}())
* 注意：
* 1）(){}()，最后一个括号表示，立马执行
* 2）里面的类，通过window.Student=Student 对外部代码进行发布
 */