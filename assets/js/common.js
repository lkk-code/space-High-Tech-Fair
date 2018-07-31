/**
 *  BH 命名空间  namespace
 */
var ZBW = {};

/**
 * 1. 浏览器的类型判断
 * 2. 浏览器版本
 * */
ZBW.Navigator = function(){
    //浏览器信息
    //document.write(navigator.userAgent);

    var agent=navigator.userAgent;
    var browser="unknown";

    if(agent.indexOf("MSIE")!=-1){
        browser="IE";
    }else if(agent.indexOf("Firefox")!=-1){
        browser="Firefox";
    }else if(agent.indexOf("OPR")!=-1){
        browser="Opera";
    }else if(agent.indexOf("Chrome")!=-1){
        browser="Chrome";
    }else if(agent.indexOf("Safari")!=-1){
        browser="Safari";
    }else if(agent.indexOf("Trident")!=-1){
        browser="IE10+";
    }
    //document.write("你正在使用："+browser+" 浏览器");

    if(browser=="Opera"){
        var i=agent.indexOf("OPR")+3+1;
    }else if(browser=="IE10+"){
        i=agent.indexOf("rv")+2+1;
    }else{
        i=agent.indexOf(browser)+browser.length+1;
    }
    var version=parseFloat(agent.slice(i,i+3));
    if(browser=="IE"&&version<9){

    }
    //document.write("版本："+version);
    return {
        browserType : browser,    //浏览器类型
        browserVersion : version  //浏览器版本
    }
};


/**
 * 判断是否为空
 */
ZBW.isEmpty = function(str){
    //                                     去掉字符串首尾空格
    if(str==null||typeof str=="undefined"||str.trim()==""){
        return true;
    }else{
        return false;
    }
};

/**
 * 电子邮件
 */
ZBW.isEmail = function(str){
    var reg = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return reg.test(str);
};

/**
 * 获取URL参数
 * @param name
 * @returns
 */
ZBW.getUrlParam = function(name){
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var url = window.location.search.substr(1).match(reg);
    if (url!=null){
        return decodeURI(url[2]);
    }
    return null;
};

/**
 *格式化日期,
 * */
ZBW.formatDate = function(date,format){
    var paddNum = function(num){
        num += "";
        return num.replace(/^(\d)$/,"0$1");
    };
    //指定格式字符
    var cfg = {
        yyyy : date.getFullYear() //年 : 4位
        ,yy : date.getFullYear().toString().substring(2)//年 : 2位
        ,M  : date.getMonth() + 1  //月 : 如果1位的时候不补0
        ,MM : paddNum(date.getMonth() + 1) //月 : 如果1位的时候补0
        ,d  : date.getDate()   //日 : 如果1位的时候不补0
        ,dd : paddNum(date.getDate())//日 : 如果1位的时候补0
        ,hh : date.getHours()  //时
        ,mm : date.getMinutes() //分
        ,ss : date.getSeconds() //秒
    };
    format || (format = "yyyy-MM-dd hh:mm:ss");
    return format.replace(/([a-z])(\1)*/ig,function(m){return cfg[m];});
};

/** 实现数字从0递增到想要的数字的效果
 * 调用方法：  $('.demo').numberRock({speed:24, count:100});
 *
 * **/
$.fn.numberRock=function(options){
    var defaults={
        speed:24,
        count:100
    };
    var opts=$.extend({}, defaults, options);

    var div_by = 100,
        count=opts["count"],
        speed = Math.floor(count / div_by),
        sum=0,
        $display = this,
        run_count = 1,
        int_speed = opts["speed"];

    var int = setInterval(function () {
        if (run_count <= div_by&&speed!=0) {
            $display.text(sum=speed * run_count);
            run_count++;
        } else if (sum < count) {
            $display.text(++sum);
        } else {
            clearInterval(int);
        }
    }, int_speed);
};


/**
 * 回顶部特效
 * @param el ---> 元素
 *
 */
function backTop(el) {
    $(window).scroll(function() {
        var t = $(this).scrollTop();
        //console.log(t);
        if (t > 300) {
            $(el).stop().fadeIn(300);
        } else {
            $(el).stop().fadeOut(300);
        }
    });
    $(el).click(function() {
        $("body,html").stop().animate({
            scrollTop: 0
        }, 300); //html是为了兼容火狐和IE
    });
}
