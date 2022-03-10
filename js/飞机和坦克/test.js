/*
 * @Author: Ana
 * @Date: 2021-11-17 21:22:14
 * @LastEditors: Ana
 * @LastEditTime: 2021-11-20 08:26:16
 * @Description: 今天也要加油呀
 * @FilePath: /飞机和坦克/test.js
 */

function randomNum(min,max){
    return parseInt(Math.random()*(max-min)+min)
}
var mainScreen=document.getElementById("mainScreen")
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
    mainScreen.addEventListener("mousemove",function(e){
        var en=e||window.event
        
        movex=en.pageX-basex
        basex=en.pageX
        movey=en.pageY-basey
        basey=en.pageY

        human.style.left=human.offsetLeft+movex+"px"
        human.style.top=human.offsetTop+movey+"px"

    },false)
},false)


//发射子弹,此时每隔两秒创建一个子弹,超出页面的高度就消失
var timerBullent=setInterval(function(){
    //创建子弹
    var bullent=document.createElement("div")  //表示的是创建一个子弹的元素
    bullent.className="bullent"   //创建一个样式
    bullent.style.left=human.offsetLeft+40+"px"  //这里表示的是在飞机的中间创建子弹
    bullent.style.top=human.offsetTop-20+"px"
    mainScreen.appendChild(bullent)

    //让子弹飞
    var timerBullentFly=setInterval(function(){
        bullent.style.top=bullent.offsetTop-5+"px"
        if(bullent.offsetTop<=-20){
            clearInterval(timerBullentFly)  //表示关闭定时器
            mainScreen.removeChild(bullent)  //表示的是移走子弹  要不然程序性能越来越差
        }
    },50)
    bullent.timer=timerBullentFly
},1000)


//创建坦克,注意坦克只要左右移动就可以,一定是在屏幕的最上方
//敌人下落
var timerTank=setInterval(function(){
    //创建敌人
    var tank=document.createElement("div")  //表示的是创建一个子弹的元素
    tank.className="tank"   //创建一个样式
    tank.style.left=randomNum(0,650)+"px"  //这里表示的是在飞机的中间创建子弹
    tank.style.top="0px"
    mainScreen.appendChild(tank)

    //让坦克飞
    var timerTankFly=setInterval(function(){
        tank.style.top=tank.offsetTop+10+"px"
        if(tank.offsetTop>=1000){
            clearInterval(timerTankFly)  //表示关闭定时器
            mainScreen.removeChild(tank)  //表示的是移走坦克  要不然程序性能越来越差
        }
    },50)
    tank.timer=timerTankFly
},1000)

var timerPz=setInterval(function(){
    var allTanks=document.getElementsByClassName("tank")
    var allBullents=document.getElementsByClassName("bullent")
    for(var i=0;i<allBullents.length;i++){
        for(var j=0;j<allTanks.length;j++){
            var b=allBullents[i]
            var t=allTanks[j]

            if(pzFunc(b,t)){
                clearInterval(b.timer)
                clearInterval(t.timer)
                mainScreen.removeChild(b)
                mainScreen.removeChild(t)
                break
            }
        }
    }
},200)


//检测是否发生碰撞
function pzFunc(obj1,obj2){
    var obj1Left=obj1.offsetLeft
    var obj1Width=obj1Left+obj1.offsetWidth
    var obj1Top=obj1.offsetTop;
    var obj1Height=obj1Top+obj1.offsetHeight

    var obj2Left=obj2.offsetLeft
    var obj2Width=obj2Left+obj2.offsetWidth
    var obj2Top=obj2.offsetTop;
    var obj2Height=obj2Top+obj2.offsetHeight

    if(!(obj1Left>obj2Width||obj1Width<obj2Left||obj1Top>obj2Height||obj1Height<obj2Top))
    {
       return true//表示的是碰撞
    }else{
        return false
    }

}

//死亡检测
var timerDie=setInterval(function(){
    var allTanks=document.getElementsByClassName("tank")
    for(var i=0;i<allTanks.length;i++){

            if(pzFunc(allTanks[i],human)){
                for (var j=0;j<100;j++){
                    clearInterval(j)
                }
               break 
            }
        }
    },200)