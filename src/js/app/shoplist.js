/**
 * Created by 15153 on 2017/6/22.
 */
//该模块发送请求
define(["mytools","app/constans","app/shopDom"],function (XHR,u,dom) {
    var xhr=XHR();
    var url=u.host+u.path+"/1";
    xhr.open("get",url);
    xhr.send(null);
    xhr.onreadystatechange=function () {
        if(xhr.readyState==4){
            if(xhr.status>=200&&xhr.status<300||xhr.status==304){
                var obj=JSON.parse(xhr.responseText);
                dom.operaDom(obj);
            }
        }
    };
});