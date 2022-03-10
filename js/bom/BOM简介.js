/*
 * @Author: Ana
 * @Date: 2021-11-15 09:25:52
 * @LastEditors: Ana
 * @LastEditTime: 2021-11-15 11:07:49
 * @Description: 今天也要加油呀
 * @FilePath: /html/js/BOM简介.js
 */
//BOM表示的就是浏览器的对象模型(browser object model),是一个用于访问浏览器和计算机屏幕的对象合集,可以通过全局对象window来访问这些对象,将浏览器看成一个对象,是为了操作浏览器,bom本质是一个集合,是一些屏幕对象的集合

//
console.log(window.document);
//浏览器里面所有框架的集合
console.log(window.frames);
//浏览器的描述信息
console.log(window.navigator);
//表示的是屏幕的信息
console.log(window.screen);
//里面含有几个属性
console.log(window.location);
//表示的是历史记录
console.log(window.history);

function func(){
    console.log("???")  //点击出现???
    //window.location.href="yellow.html"  //此处表示的就是点击就跳转到后面的网页
    //window.location.reload()   //此时表示的就是点击就刷新
    window.location.assign("pink.html")  //加载新的页面,此时还可以返回到之前的页面
    //window.location.replace("pink.html")   //表示的也是加载新的页面,但是不能返回原来的页面
 
}
function func1(){
    window.open("yellow.html","blank","width=400px,height=200px,left=10px,top=20px")
}
function func2(){
    window.close()
}