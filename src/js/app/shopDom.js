/**
 * Created by 15153 on 2017/6/22.
 */
//该模块是渲染页面的
define(function () {
    var o={};
    o.operaDom=function (obj) {
        var imgs=document.querySelectorAll(".store img");
        var name=document.querySelectorAll(".news a");
        var shopGrade=document.querySelectorAll(".shopGrade");
        var p1=document.querySelectorAll(".p1");
        var p2=document.querySelectorAll(".p2");
        var moods=document.querySelectorAll(".moods");
        console.log(p1);
        for(var i=0;i<imgs.length;i++){
            imgs[i].src=obj.shop_data[i].shop_ico;
            name[i].innerHTML=obj.shop_data[i].shop_name;
            shopGrade[i].innerHTML="店铺等级：";
            p1[i].innerHTML="主营 : "+obj.shop_data[i].shop_desc;
            p2[i].innerHTML="地址 : "+obj.shop_data[i].addr_detail;
            moods[i].innerHTML="人气"+obj.shop_data[i].shop_visit+"次浏览";
        }
    };
    return o;
});