/*
 * @Author: Ana
 * @Date: 2021-11-24 11:38:49
 * @LastEditors: Ana
 * @LastEditTime: 2021-11-25 12:46:23
 * @Description: 今天也要加油呀
 * @FilePath: /H5C3/json/1.js
 */
$(document).ready(function(){
    var imgs=$(".img")
    var names=$(".name")
    var addresses=$(".address")

    $.ajax({
        type:"get",
        url:"1.json",
        dataType:"json",
        success:function(data,status){
            console.log(data)
            console.log(status)

            var dataArr=data["shop_data"]
            for(var i=0;i<dataArr.length;i++){
                imgs.eq(i).attr("src",dataArr[i]["shop_ico"])
                names.eq(i).html(dataArr[i]["shop_name"])
                addresses.eq(i).html(dataArr[i]["addr"])

            }
        }
    })
    //给每一个li都添加一个点击事件
    $("li").bind("click",function(){
        var page=$(this).text()  //可以表示拿到的是第几页
        //发起ajax请求
        $.ajax({
            type:"get",
            url:page+".json",
            dataType:"json",
            success:function(data,status){
                console.log(data)
                console.log(status)
    
                var dataArr=data["shop_data"]
                for(var i=0;i<dataArr.length;i++){
                    imgs.eq(i).attr("src",dataArr[i]["shop_ico"])
                    names.eq(i).html(dataArr[i]["shop_name"])
                    addresses.eq(i).html(dataArr[i]["addr"])
    
                }
            }
        })
    })
})
