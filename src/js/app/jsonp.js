/**
 * Created by 15153 on 2017/6/23.
 */
//jsonp请求数据
define(function () {
    console.log("123");
    function opeData(data) {
        var imgs=document.querySelectorAll(".store img");
        console.log(imgs);
    }
    var pagination=document.querySelector(".pagination");
    var as=pagination.getElementsByTagName("a");
    as[2].onclick=function(e){
        var head=document.querySelector("head");
        var script=document.createElement("script");
        script.setAttribute("src","http://localhost:3000/jp/?callback=opeData");
        head.appendChild(script);
    };

});