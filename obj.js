/*
 * @Description: Rolin's code edit
 * @Author: Rolin-Code
 * @Date: 2021-11-04 17:20:57
 * @LastEditors: Rolin
 * @Code-Function-What do you want to do: 
 */

//获取当前年月日星期几几点几分几秒并打印
function getTimer() {
    var date = new Date()
    var week = ['星期日', '星期一', '星期二', '星期三', '星	期四', '星期五', '星期六']
    var year = date.getFullYear()
    var month = date.getMonth() + 1
    var datee = date.getDate()
    var day = date.getDay()
    var time = year + '年' + month + '月' + datee + '日 	' + week[day]
    function getTimerr() {
        var time = new Date()
        var hour = time.getHours()
        hour = hour < 10 ? '0' + hour : hour
        var minute = time.getMinutes()
        minute = minute < 10 ? '0' + minute : minute
        var second = time.getSeconds()
        second = second < 10 ? '0' + second : second
        return hour + ':' + minute + ':' + second
    }
    return time + ' ' + getTimerr()
}


function responseObj(msg,obj){
    return {
        status:200,
        message:msg,
        timestamp:getTimer,
        data:obj
    }
}

module.exports = {
    out:responseObj
}







