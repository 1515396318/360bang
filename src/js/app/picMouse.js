/**
 * Created by 15153 on 2017/6/26.
 */
define(["jquery"],function ($) {
    $(".logo>div").each(function (index) {
       $(this).on("mouseover",function () {
           console.log($(this).get(0))
           $(this).css("background","#0f5");
           $(".hiddDiv div").eq(index).css("display","block")
       }).on("mouseout",function () {
           $(this).css("background","rgba(50, 50, 50, 0.8)");
           $(".hiddDiv div").eq(index).css("display","none")
       })
    });
});