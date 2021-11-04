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
var respObj = require('./obj')

var server = http.createServer()

server.on('request',function(req,resp){
    var time=sd.format(new Date(), 'YYYY-MM-DD HH:mm:ss');
    console.log("收到客户端的请求,请求路径是:" + req.url+"\n请求时间："+time);
    
    var url = req.url;
    const {query,pathname} = durl.parse(req.url,true)

    if(pathname === '/api/user/login'){
        resp.writeHead(200,{"Content-type":"application/json"})
        type = eval(query.loginType)
        account = query.account
        password = query.password
        console.log(type,account,password)
        if(type === 0){ //学号登陆
            if(account === '2019060703300' && password === '5f4dcc3b5aa765d61d8327deb882cf99'){
                body = {
                    code:0,
                    token:"tokentokentokentoken",
                    uid:2,
                    msg:"使用学号登陆成功，学号为："+account
                }
                resp.end(JSON.stringify(respObj.out("学号登录",body)))
            }else{
                body = {
                    code:1,
                    msg:"使用学号登陆失败"
                }
                resp.end(JSON.stringify(respObj.out("学号登录",body)))
            }
        }else if(type === 1){
            if(account === '18911111111' && password === '5f4dcc3b5aa765d61d8327deb882cf99'){
                body = {
                    code:0,
                    token:"tokentokentokentoken",
                    uid:2,
                    msg:"使用手机登陆成功，学号为："+account
                }
                resp.end(JSON.stringify(respObj.out("学号登录",body)))
            }else{
                body = {
                    code:1,
                    msg:"使用学号登陆失败"
                }
                resp.end(JSON.stringify(respObj.out("手机登录",body)))
            }
        }else{
            body = {
                    code:1,
                    msg:"登陆失败"
                }
                resp.end(JSON.stringify(respObj.out("使用了错误的登陆方式",body)))
        }
    }
})

server.listen(11119)