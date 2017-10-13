/**
 * Created by robin on 17/10/13.
 */
/*
学习研究js内置的Date对象
 */
// var d=new Date();
// document.write(d+"<br>");
//
// var time=d.getTime();
// var year=d.getFullYear();
// var utcStr=d.toUTCString();
// var day=d.getDay();
//
// document.write("time=["+time+"]<br>");
// document.write("year=["+year+"]<br>");
// document.write("utcStr=["+utcStr+"]<br>");
// document.write("day=["+day+"]<br>");

/*
写一个时钟
 */

function check(num){
    if(num < 10)
        return "0"+num;
    return num;
}

function refreshTime() {
    var d=new Date();
    var year=d.getFullYear();
    var month=d.getMonth();
    var day=d.getDay();
    var hour=d.getHours();
    var min=d.getMinutes();
    var second=d.getSeconds();

    var timestr="";
    timestr=year+"-"+check(month)+"-"+check(day)+" "+check(hour)+":"+check(min)+":"+check(second);
    document.getElementById("clock").innerHTML=timestr;
    setTimeout('refreshTime()',500);
}

function analysis(){
    var dateStr=document.getElementById("date").value;
    alert(dateStr);
}


function init(){
    refreshTime();
}
