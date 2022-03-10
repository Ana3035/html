/*
 * @Author: Ana
 * @Date: 2021-11-17 21:22:14
 * @LastEditors: Ana
 * @LastEditTime: 2021-11-19 18:10:36
 * @Description: 今天也要加油呀
 * @FilePath: /飞机和坦克/test.js
 */
//首先需要让背景图片滑动起来
var jsBg1=document.getElementById("bg1")
var jsBg2=document.getElementById("bg2")
//设置一个定时器
var timerBg=setInterval(function(){
    jsBg1.style.top=jsBg1.offsetTop+1+"px"
    jsBg2.style.top=jsBg2.offsetTop+1+"px"
    //写到这里存在一个问题,就是一张走完了就没有了
    //所以要写一个循环,当走完全程的时候,需要让top返回
    if(jsBg1.offsetTop >=1000){
        jsBg1.style.top="-1000px"
    }
    if(jsBg2.offsetTop >=1000){
        jsBg2.style.top="-1000px"
    }
},10)

//让小人动起来
var human=document.getElementById("human")
human.addEventListener("mousedown",function(e){
    var ev = e||window.event
    basex=ev.pageX  //此时表示的是点击的时候确认的值
    basey=ev.pageY
    
    movex=0
    movey=0
    //这里表示的是给主屏幕添加事件
    document.getElementById("mainScreen").addEventListener("mousemove",function(e){
        var en=e||window.event
        
        movex.
    })
})
