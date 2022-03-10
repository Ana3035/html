/*
 * @Author: Ana
 * @Date: 2021-11-17 17:42:07
 * @LastEditors: Ana
 * @LastEditTime: 2021-11-17 21:01:47
 * @Description: 今天也要加油呀
 * @FilePath: /DOm/loop.js
 */
var jsBox=document.getElementById("box")
var jsPic=document.getElementById("pic")
var jsLeft=document.getElementById("left")
var jsRight=document.getElementById("right")
var jsLisArr=document.getElementsByTagName("li")

//首先将第一个li设置为红色
jsLisArr[0].style.backgroundColor="red"

//此时要启动一个计时器来更换jspic中的src属性
var currentPage=1
var timer=setInterval(startLoop,2000)
function startLoop(){
    currentPage++
    changepage()  //此处表示的是自己定义一个函数
}
function changepage(){
    if (currentPage==4){
        currentPage=1  //这里表示的是赋值
    }else if(currentPage==0){
        currentPage=3
    }
    jsPic.src="../../img/"+currentPage+".jpeg"

    //让下面的每个点跟着页面一起变背景
    //首先清空所有小圆点的颜色,表示的是换图片的时候就更换小圆点的颜色
    for(var i=0;i<jsLisArr.length;i++){
        jsLisArr[i].style.backgroundColor="cyan"
    }
    jsLisArr[currentPage-1].style.backgroundColor="red"//但是此时下面的颜色会全部变
}

//鼠标进入box的时候图片停止,然后箭头线束出来
jsBox.addEventListener("mouseover",overFunc,false)
function overFunc(){  //首先停止定时器
    clearInterval(timer)
    //显示出来左右的箭头
    jsLeft.style.display="block"
    jsRight.style.display="block"

}
//鼠标出来重启定时器
jsBox.addEventListener("mouseout",outFunc,false)
function outFunc(){  //重新开始定时器
    timer=setInterval(startLoop,1000)
    //隐藏左右箭头
    jsLeft.style.display="none"
    jsRight.style.display="none"
}

//点击左右箭头,颜色变深
jsLeft.addEventListener("mouseover",deep,false)
jsRight.addEventListener("mouseover",deep,false)
function deep(){
    this.style.backgroundColor="rgba(0,0,0,0.6)"
}
//离开箭头
jsLeft.addEventListener("mouseout",light,false)
jsRight.addEventListener("mouseout",light,false)
function light(){
    this.style.backgroundColor="rgba(0,0,0,0.2)"
}

//点击箭头切换页面
jsRight.addEventListener("click",function(){
    currentPage++
    changepage()
},false)
jsLeft.addEventListener("click",function(){
    currentPage--
    changepage()
},false)

//进入小圆点显示图片
for(var i=0;i<jsLisArr.length;i++){
    jsLisArr[i].index=i+1
    jsLisArr[i].addEventListener("mouseover",function(){
        // currentPage=parseInt(this.innerHTML)  //表示的是获取对应的页面
        currentPage=parseInt(this.index)
        changepage()
    },false)
}
