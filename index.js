/*
 * @Description: Rolin's code edit
 * @Author: Rolin-Code
 * @Date: 2021-11-04 16:24:17
 * @LastEditors: Rolin
 * @Code-Function-What do you want to do: 
 */
var http = require('http')
var fs = require('fs')
var durl = require('url')
const path = require("path")
var sd = require('silly-datetime')

var server = http.createServer()

server.on('request',function(res,resp){
    var time=sd.format(new Date(), 'YYYY-MM-DD HH:mm:ss');
    console.log("收到客户端的请求,请求路径是:" + req.url+"\n请求时间："+time);
    
    var url = req.url;
    const {query,pathname} = durl.parse(req.url,true)

    if(pathname === '/api/user/login'){
        
    }
})

server.listen(11119)