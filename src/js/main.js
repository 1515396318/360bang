requirejs.config({
   baseUrl:"js/lib",
   paths:{
       jquery:"jquery-3.1.1",
       mytools:"mytools",
       app:"../app"
   },
   shim:{
       "mytools":{
           exports:"createXHR"
       }
   }
});

define(["mytools","app/constans","app/shoplist","app/shopDom","app/jsonp","app/picMouse"],function () {

});