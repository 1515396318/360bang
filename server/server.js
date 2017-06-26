const express=require("express");
const app=express();
const fs=require("fs");
const url=require("url");
var dataBuffer=[];
app.get("/at/shop/:num",function (req,res) {
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header('Content-type', 'application/json');
    var num=req.params.num;
    var filename="data/"+num+".json";
    var result = null;

    for(var i=0;i<dataBuffer.length;i++){
        var dataObj=dataBuffer[i];
        if(num in dataObj){
            result=dataObj[num];
            break;
        }
    }

    //如果result为null，缓存中没有数据
    if(result==null){
        fs.readFile(filename,function (err,data) {
            if(err){
                return;
            }
            var o={};
            o[num]=data;
            dataBuffer.push(o);
            result=data;
            res.send(result);
        });
    }else{
        res.send(result);
    }
});

//实验接口
app.get("/cross",function (req,res) {
    fs.readFile("data/1.json",function (data) {
        var callName=url.parse(req.url).query;
        callName=callName.split("=")[1];
        res.send(callName+"("+data+")");
    })
});

//第二页jsonp接口
app.get("/jp",function (req,res) {
    fs.readFile("data/2.json",function (err,data) {
        var callName1=url.parse(req.url).query;
        callName1=callName1.split("=")[1];
        res.send(callName1+"("+data+")");
    });
});

app.listen(3000,function () {
    console.log("服务已启动")
});