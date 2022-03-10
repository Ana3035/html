/*
 * @Author: Ana
 * @Date: 2021-11-14 15:41:10
 * @LastEditors: Ana
 * @LastEditTime: 2021-11-15 09:05:22
 * @Description: 今天也要加油呀
 * @FilePath: /html/js/1.js
 */
console.log("<h1>江大</h1>")
document.write("<h1>江大</h1>")   //这里表示的是直接将这个语句当成标签渲染在屏幕上输出
/*js中的数据类型：*/

// 1、数字(number):包括了浮点数以及整数
// 2、字符串(string)：包括了任意数量的字符组成的字符序列
// 3、布尔值(boolean)：包括true和false
// 4、undefined：当试图访问一个不存在的变量的时候，会得到一个特殊的值undefined，除此之外，使用已经定义但是没有赋值的变量的时候也会出现这样的情况，因为js会自动将变量在初始化之前设定成了undefined,但是undefined类型的值只有一个,那就是他自己
// 5.Null:表示的是只包括一个值的特殊数据类型.表示的是通常是没有值或者一个空白的值
var a
console.log(a)   //此时显示出来的就是undefined

/*js中的非基本数据类型(对象) */ 
//变量的定义:var 变量名;
//数据的存储:变量名=表达式;
var b;
b=10;
console.log(typeof(b));

var s=1e309;
console.log(s);
var num1=Infinity;  //表示的就是超出了js能够表示的范围


var num2=NaN;  //表示的是这个值不是数字,但是nan是一个数据类型
console.log(typeof(num2))

var str1="Ana";
console.log(str1+" is")

var a="12a3"
var num=parseInt(a)  //表示的是字符串转换
console.log(num)   //这里需要注意的是到一个不是数字的为止
console.log(typeof(num))
var b=num.toString()
console.log(typeof(b))  //数字转化成字符串

var c=Boolean(b)
console.log(c)   //转化成bool类型

// var d=prompt("请输入:")
// console.log(d)

// var num3=parseInt(prompt("输入数字:"))
// console.log(num3)

console.log(10/3)  //这里表示的不会取整

//前加加和后加加
var e=num++
console.log(e)  //这里表示的就是将num加上了一但是e本身还是返回num的值
console.log(num)
var f=++num;
console.log(f)  //这里表示的就是f返回的是num+1的值
console.log(num)

//if语句形式:
//if (表达式)  此时首先计算表达式的值,当表达式的值是真的时候,就选择执行下面的语句,否则直接结束
// {
// 语句
// }

console.log(1==1)
console.log(1=="1")  //这里表示的就是值相等就可以
console.log(1==="1")  //这里要求值以及数据类型都相等表示的是绝对相等

//三目运算符
// 表达式?表达式1:表达式2 和C++的相等
console.log(1?2:3)

//&& || !  

//函数 
//function 函数名(参数列表){
    // 语句
    //return 表达式
//}
function MyFuc(a){  //表示的是形参

    console.log(a)
}  //这个只是一个声明,需要下面的调用
MyFuc(1)   //传入一个实参,函数的调用本质上就是实参给形参赋值的过程

//区域
var g=10;   //此处表示的就是全局变量
function MyFuc1(){
    var g1=20;
    g=20  //此处和Python不一样,可以直接修改全部变量  
    console.log(g)
    console.log(g1)
}
MyFuc1()   //函数的调用一定要加上括号
//console.log(g1)   //这李就不能直接打印,因为是局部变量
//注意,在函数里面没有用var定义的变量,默认是全局变量

var h=MyFuc1   //此时就相当于把函数也看成一个数据,但是此处要使用的是函数名,而不是函数的调用
h()   //相当于上面的MyFuc1()

//匿名函数
var f=function(a,b){   //此处的函数就没有名字
    return a+b;
}
console.log(f(3,4))

//及时函数
// (function(str){
//     console.log(str)
// })("Ana")  //给第一个括号里面的匿名函数传导一个实参

//数组
var arr=[1,2,3,4]
console.log(arr[0])
for(var i=0;i<arr.length;i++){
    console.log("arr[%d] = %d", i,arr[i])//此时不需要%只需要一个逗号就可以
}
for(var i in arr){
    console.log(i)  //此时取出来的是下标,但是是一个字符串类型
    console.log("arr[%s] = %d", i,arr[i])
}

var arr1=new Array(1,2,"ana")  //此处表示的也是创建一个对象  但是只有一个数字的时候,表示的就是数组的长度是10

//数组的增删改查
arr[2]=5
arr.length=2//改变数组的长度
delete arr[0]  //删除数组元素,但是注意delete只是将数字删除,位置还是依然在,但是此处是未定义的

arr.push(6)  //表示默认在末尾方数字
arr.unshift(7)  //表示在前面方数字
arr.pop() //表示的是取出来末尾的数字
arr.shift()  //表示的是从头拿出数据

arr.join("#")  //表示的是将#依次放到每一个数字元素之间进行拼接
arr.reverse()  //表示的是反转数组
arr.slice(1,3)  //表示的是截取一个新的数组,需要重新将其定义
arr.splice(1,2,"an","a")  //第一个是位置,第二个是修改到的位置,第三个从后开始表示的就是插入修改的元素
arr.splice(1,0,10,15)  //此时表示的就是从1位置插入后面的数字,0表示位置不变
arr.concat([1,2])  //表示的是拼接数组合成一个新的数组
arr.indexOf(4)  //表示的是返回这个数据的位置

arr.sort()   //表示的是给数组升序排列
arr.sort(function(x,y){
    return x.length<y.length   //此处表示的是如果是字符串,那么就按照字符串的长短进行排序,此时是自定义的标准
})
console.log(arr)

//字符串常用方法
var str1="Ana1"
var str2=new String("Ana2")
console.log(str1.charAt[1])   //表示的是返回字符串的对应下标的第几个字母
console.log(str1.toUpperCase)  //表示的是全部转为大写  toLowerCase表示的是小写
console.log(str1.indexOf("Ana"))  //查找是否有这个单词,得到的是下标

var a=str1.replace("nice","good")  //表示的是将原来的nice变成good
var b=str1.substring(1,2)  //表示的是提取两个下标之间的字符串,后面没有值的时候,表示的就是一直提取到最后一个数字
str1.substr(2,3)  //注意第二个参数表示的是需要截取多长的字符串
str1.split(" ")  //表示的是根据空格来分割字符串

//math函数
Math.round(3.6)   //四舍五入
Math.ceil(3.6)   //向上取整
Math.floor(3.6)   //向下取整
Math.abs(3.6)   //取绝对值
Math.pow(3,3)  //x的y次方
Math.sqrt(3.6)   //开方
parseInt(Math.random()*(y-x+1)+x ) //求出随机数


