/**
 * 打字效果
 * **/
$.fn.autotype = function() {
    var $text = $(this);
    console.log('this', this);
    var str = $text.html(); //返回被选 元素的内容
    var index = 0;
    var x = $text.html('');
    //$text.html()和$(this).html('')有区别
    var timer = setInterval(function() {
            //substr(index, 1) 方法在字符串中抽取从index下标开始的一个的字符
            var current = str.substr(index, 1);
            if (current == '<') {
                //indexOf() 方法返回">"在字符串中首次出现的位置。
                index = str.indexOf('>', index) + 1;
            } else {
                index++;
            }
            //console.log(["0到index下标下的字符",str.substring(0, index)],["符号",index & 1 ? '_': '']);
            //substring() 方法用于提取字符串中介于两个指定下标之间的字符
            $text.html(str.substring(0, index) + (index & 1 ? '': ''));
            if (index >= str.length) {
                clearInterval(timer);
            }
        },
        80);
};

var u = navigator.userAgent,
    app = navigator.appVersion;
var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //android终端或者uc浏览器
var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
//alert('是否是Android：'+isAndroid);
//alert('是否是iOS：'+isiOS);


$(function () {
    (function(win,doc,$,undefined){

        /**
         * 页面管理
         * */
        var PageMana = function () {

            this.page0Dom = $('.page0');
            this.pagePopDom = $('.page_pop');
            this.page1Dom = $('.page1');
            this.page2Dom = $('.page2');
            this.page3Dom = $('.page3');
            this.page4Dom = $('.page4');

            this.init();
        };

        PageMana.prototype = {
            constructor: PageMana,
            mySwiper:null,
            init:function () {
                var that = this;

                setTimeout(function () {
                    $('.remind_box').hide();
                },3000);
                Music();
                var mySwiper = new Swiper ('.swiper-container', {
                    direction : 'vertical',
                    //pagination: '.swiper-pagination',
                    //virtualTranslate : true,
                    effect : 'coverflow',
                    mousewheelControl : true,
                    onInit: function(swiper){
                        swiperAnimateCache(swiper);
                        swiperAnimate(swiper);
                    },
                    onSlideChangeEnd: function(swiper){

                        /**最后一页 向上箭头消失*/
                        if(swiper.activeIndex === 5){
                            $('.common_arrow').hide();
                        }else{
                            $('.common_arrow').show();
                        }

                        if(swiper.activeIndex === 1){
                            setTimeout(function () {
                                that.pagePopDom.find('.star_ball').addClass('animation_bounce_star');
                            },2000);
                        }else{
                            that.pagePopDom.find('.star_ball').removeClass('animation_bounce_star');
                        }

                        swiperAnimate(swiper);

                        function focusEvent() {
                            if(isAndroid){
                                $('#data-form input, #data-form textarea').focus(function () {
                                    var windowH = $('body').height();

                                    $(window).resize(function () {
                                        var windowH2 = $('body').height();
                                        if(windowH2 < windowH){
                                            //alert('出现')
                                            mySwiper.lockSwipes();
                                        }else{
                                            //alert('隐藏')
                                            mySwiper.unlockSwipes();
                                        }
                                    })

                                });
                            }

                            if(isiOS){
                                $('#data-form input, #data-form textarea').bind('focus',function(){
                                    //alert('focus');
                                    mySwiper.lockSwipes();
                                }).bind('blur',function(){
                                    //alert('blur');
                                    mySwiper.unlockSwipes();
                                });
                            }
                        }
                        focusEvent();

                    },
                    onTransitionEnd: function(swiper){
                        swiperAnimate(swiper);
                    },
                    watchSlidesProgress: true,
                    onProgress: function(swiper){
                        for (var i = 0; i < swiper.slides.length; i++){
                            var slide = swiper.slides[i];
                            var progress = slide.progress;
                            var translate = progress*swiper.height/4;
                            scale = 1 - Math.min(Math.abs(progress * 0.5), 1);
                            var opacity = 1 - Math.min(Math.abs(progress/2),0.5);
                            slide.style.opacity = opacity;
                            es = slide.style;
                            es.webkitTransform = es.MsTransform = es.msTransform = es.MozTransform = es.OTransform = es.transform = 'translate3d(0,'+translate+'px,-'+translate+'px) scaleY(' + scale + ')';

                        }
                    },
                    onSetTransition: function(swiper, speed) {
                        for (var i = 0; i < swiper.slides.length; i++){
                            es = swiper.slides[i].style;
                            es.webkitTransitionDuration = es.MsTransitionDuration = es.msTransitionDuration = es.MozTransitionDuration = es.OTransitionDuration = es.transitionDuration = speed + 'ms';

                        }
                    }

                });

                that.mySwiper = mySwiper;
                that.page0();
                that.pagePop();
                that.page3();

            },
            slideToFn:function () {
                /**
                 * 跳到最后一页
                 * */
                this.mySwiper.slideTo(5,1000, false);
                swiperAnimate(this.mySwiper);
            },
            page0:function () {
                var that = this;
                //console.log(that.page0Dom);
            },
            pagePop:function () {//创造宇宙中最美的科技
                var that = this;
                //console.log(that.pagePopDom);
                var $boxPopBg = $('.box_pop_bg');//弹出框
                var timer = null;

                /**
                 * 打字方法
                 * */
                function autoFont(text1, text2) {
                    timer = setTimeout(function () {
                        $boxPopBg.find('.box_text_1').html(text1).autotype();
                        $boxPopBg.find('.box_text_2').html(text2).autotype();
                    },500);
                }

                that.pagePopDom.on('click','.star_ball .btn_circle',function () {
                    var thatVal = $(this).attr('data-name');
                    $boxPopBg.show();

                    //清空标题 宽带设置为0
                    $boxPopBg.find('.box_text_1').css('width','0').html('');
                    $boxPopBg.find('.box_text_2').css('width','0').html('');
                    //$boxPopBg.find('.pic').attr('src','');

                    $('.J_hand').hide();//点击小手隐藏

                    clearTimeout(timer);
                    switch (thatVal){
                        case '机器人':
                            //$boxPopBg.find('.pic').attr('src','assets/img/page_pop/pic_4.png');
                            //console.log($boxPopBg.find('.pic').eq(3));
                            $boxPopBg.find('.pic').eq(3).show().siblings('.pic').hide();
                            $boxPopBg.find('.box_text_1').css({
                                left:'.5rem',
                                top:'40%',
                                width:'5.2rem'
                            }).delay(.5).fadeIn();
                            $boxPopBg.find('.box_text_2').css({
                                left:'.5rem',
                                top:'52%',
                                width:'5.2rem'
                            }).delay(1).fadeIn();
                            /*setTimeout(function () {
                                $boxPopBg.find('.box_text_1').html('机器人').autotype();
                                $boxPopBg.find('.box_text_2').html('智能数控、语音聊天、人机互动').autotype();
                            },500);*/
                            $boxPopBg.find('.left_top_text').html('第一站').css({opacity: 0.7});
                            autoFont('时空机器人', '智能数控、语音聊天、人机互动');
                            break;
                        case '互动荧幕':
                            //$boxPopBg.find('.pic').attr('src','assets/img/page_pop/pic_5.png');
                            $boxPopBg.find('.pic').eq(4).show().siblings('.pic').hide();
                            $boxPopBg.find('.box_text_1').css({
                                left:'.5rem',
                                top:'15%',
                                width:'6rem'
                            }).delay(.5).fadeIn();
                            $boxPopBg.find('.box_text_2').css({
                                left:'.5rem',
                                top:'27%',
                                width:'6rem'
                            }).delay(1).fadeIn();
                            $boxPopBg.find('.left_top_text').html('第二站').css({opacity: 1});
                            autoFont('时空互动荧幕', '将新媒体技术融入生活');
                            break;
                        case '互动全息':
                            //$boxPopBg.find('.pic').attr('src','assets/img/page_pop/pic_1.png');
                            $boxPopBg.find('.pic').eq(0).show().siblings('.pic').hide();
                            $boxPopBg.find('.box_text_1').css({
                                right:'.5rem',
                                top:'15%',
                                width:'6rem'
                            }).delay(.5).fadeIn();
                            $boxPopBg.find('.box_text_2').css({
                                right:'.5rem',
                                top:'27%',
                                width:'6rem'
                            }).delay(1).fadeIn();
                            $boxPopBg.find('.left_top_text').html('第五站').css({opacity: 0.7});
                            autoFont('时空互动全息', '实时交互的神奇之地');
                            break;
                        case '混合现实':
                            //$boxPopBg.find('.pic').attr('src','assets/img/page_pop/pic_3.png');
                            $boxPopBg.find('.pic').eq(2).show().siblings('.pic').hide();
                            $boxPopBg.find('.box_text_1').css({
                                left:'.5rem',
                                top:'55%',
                                width:'6rem'
                            }).delay(.5).fadeIn();
                            $boxPopBg.find('.box_text_2').css({
                                left:'.5rem',
                                top:'67%',
                                width:'6rem'
                            }).delay(1).fadeIn();
                            $boxPopBg.find('.left_top_text').html('第四站').css({opacity: 0.7});
                            autoFont('时空混合现实', '世界就是你的画布');
                            break;
                        case '虚拟现实':
                            //$boxPopBg.find('.pic').attr('src','assets/img/page_pop/pic_2.png');
                            $boxPopBg.find('.pic').eq(1).show().siblings('.pic').hide();
                            $boxPopBg.find('.box_text_1').css({
                                right:'.5rem',
                                top:'70%',
                                width:'6rem'
                            }).delay(.5).fadeIn();
                            $boxPopBg.find('.box_text_2').css({
                                right:'.5rem',
                                top:'82%',
                                width:'6rem'
                            }).delay(1).fadeIn();
                            $boxPopBg.find('.left_top_text').html('第三站').css({opacity: 1});
                            autoFont('时空虚拟现实', '体验从未如此生动');
                            break;
                    }

                });
                $boxPopBg.on('click',function () {
                    $boxPopBg.hide();
                });

            },
            page1:function () {
                var that = this;
                //console.log(that.page1Dom);
            },
            page2:function () {
                var that = this;
                //console.log(that.page2Dom);
            },
            page3:function () {
                var that = this;
                //console.log(that.page3Dom);
                /**
                 * 提交按钮
                 * **/
                that.page3Dom.find('.btn_submit').on('touchstart',function () {

                    var userName_ = $('#name_').find('input').val();//姓名
                    var userIphone_ = $('#iphone').find('input').val();//手机
                    var joinNum_ = $('#num').find('input').val();//人数
                    var companyName_ = $('#corporateName').find('input').val();//公司名称
                    var message_ = $('#message').val();//留言

                    /**
                     * 提交信息
                     * */
                    var sendData = {
                        'name': userName_,
                        'mobile': userIphone_,
                        'person_num': joinNum_,
                        'company': companyName_,
                        'msg': message_
                    };

                    // 验证手机号
                    function isPhoneNo(phone) {
                        var pattern = /^1[34578]\d{9}$/;
                        return pattern.test(phone);
                    }
                    //验证非负整数
                    function isParseInt(mun) {
                        var pattern = /^\d+$/;
                        return pattern.test(mun);

                    }

                    if(userName_ == '' || userName_ == null){
                        alert('姓名不能为空');
                    }else if(!isPhoneNo(userIphone_)){
                        alert('请输入正确手机号');
                    }else{

                        $.ajax({
                            url:'http://si.vr68.com/api/invitation-signup/add',
                            type: "POST",
                            data: $("#data-form").serializeArray(),
                            dataType:'json',
                            success: function(msg){
                                console.log(msg);
                                //alert(msg);
                                //alert( "Data Saved: " + msg );
                                if(msg.status === 1 && msg.msg === '成功'){
                                    alert('提交成功！');
                                    that.slideToFn();

                                }

                                if(msg.status === -1){
                                    alert(msg.msg);//手机已经被占用！
                                }


                            }
                        });
                    }
                });

            },
            page4:function () {
                var that = this;
                console.log(that.page4Dom);

            }

        };
        win.PageMana = PageMana;//把这个对象附给window底下的 名字叫PageMana的对象；要不你调用的时候  new PageMana() 怕在window的环境下找不到；
    }(window,document,jQuery));

    /**
     * 首次打开资源加载
     * **/
    var loader = new resLoader({
        resources: [
            'assets/img/common/music_icon.png',
            'assets/img/common/music_stop.png',

            'assets/img/loading/bg_circle.png',
            'assets/img/loading/circle_run.png',

            'assets/img/bg_star.jpg',
            'assets/img/bg_stone.png',
            'assets/img/bottom_logo.png',
            'assets/img/circle.png',
            'assets/img/code.png',
            'assets/img/map.png',
            'assets/img/stone_1.png',
            'assets/img/stone_2.png',
            'assets/img/stone_3.png',
            'assets/img/stone_4.png',
            'assets/img/stone_5.png',
            'assets/img/wave.png',

            'assets/img/page_pop/bg_circle_line.png',
            'assets/img/page_pop/box.png',
            'assets/img/page_pop/center_circle.png',
            'assets/img/page_pop/circle_1.png',
            'assets/img/page_pop/circle_2.png',
            'assets/img/page_pop/circle_3.png',
            'assets/img/page_pop/circle_4.png',
            'assets/img/page_pop/circle_5.png',
            'assets/img/page_pop/circle_line.png',
            'assets/img/page_pop/cloud_1.png',
            'assets/img/page_pop/cloud_2.png',
            'assets/img/page_pop/cloud_y.png',
            'assets/img/page_pop/pic_1.png',
            'assets/img/page_pop/pic_2.png',
            'assets/img/page_pop/pic_3.png',
            'assets/img/page_pop/pic_4.png',
            'assets/img/page_pop/pic_5.png',
            'assets/img/page_pop/VectorSmartObject.png',

            'assets/img/begin.gif',
            'assets/music/begin.mp3',
            'assets/music/ThomasPrimeSkyHigh.mp3'
        ],
        onStart: function (total) {
            console.log('start:' + total);
        },
        onProgress: function (current, total) {
            console.log(current + '/' + total);
            var percent = current / total * 100;
            percent = Math.ceil(percent);
            //$('.progress_bar').css('width', percent + '%');
            //$('.tooltip').text(percent + '%');
            $('.loading_progress').text(percent + '%');

        },
        onComplete: function (total) {//加载完成时
            console.log(total);

            /*var audio=document.createElement('audio');
            audio.src='assets/music/begin.mp3';

            var videoItem=document.createElement('video');
            videoItem.setAttribute('style','object-fit: fill');
            videoItem.setAttribute('preload','auto');
            videoItem.setAttribute('playsinline','');
            videoItem.setAttribute('123','456');
            videoItem.setAttribute('123','456');
            videoItem.setAttribute('123','456');
            videoItem.setAttribute('123','456');
            var videoBox=document.querySelector('.video_box');*/

            /**
             * 创建音频标签
             * */
            $('body audio').remove();
            $('body').append('<audio id="audio"><source src="assets/music/begin.mp3" type="audio/mp3"></audio>');
            $('.loading_page').hide();

            //$('body .video_box #video').remove();
            //$('body .video_box').append('<video id="video" class="video" style="object-fit: fill" preload="auto" playsinline="" webkit-playsinline="true" x5-video-player-type="h5" x5-video-player-fullscreen="true" src="assets/video/hi-tech-fair.mp4" type="video/mp4"></video>');


            audioAutoPlay();

            /*if(isAndroid){
                //一般情况下，这样就可以自动播放了，但是一些奇葩iPhone机不可以
                document.getElementById('audio').play();
                document.getElementById('video').play();
            }
            if(isiOS){/!**ios系统自动播放视频*!/
                $('.btn_box').hide();
                $('.btn_jump').show();
                document.getElementById('audio').play();
                setTimeout(function () {
                    document.getElementById('video').play();
                },2500);
                //必须在微信Weixin JSAPI的WeixinJSBridgeReady才能生效
                document.addEventListener("WeixinJSBridgeReady", function () {
                    document.getElementById('audio').play();
                    setTimeout(function () {
                        document.getElementById('video').play();
                    },2500);
                }, false);
            }*/


            VideoPlay();

        }
    });

    loader.start();

    /**音乐功能*/
    function Music() {

        $('.top_right_music_box').on('touchstart', function (event) {
            event.preventDefault();
            var audio = $('#audio_bg');

            if (audio[0].paused) {
                audio[0].play();
                //this.style.animationPlayState = 'running';
                $('.music_start').addClass('play_music');
                $('.music_stop').fadeOut();
            } else {
                audio[0].pause();
                //this.style.animationPlayState = 'paused';
                $('.music_start').removeClass('play_music');
                $('.music_stop').fadeIn();
            }
        });
    }

    /**视频播放**/
    function VideoPlay() {

        var vid = document.getElementById("video");

        vid.addEventListener('touchend',function(e_){
            e_.stopPropagation();
            e_.preventDefault();
        });
        vid.addEventListener('touchstart',function(e_){
            e_.stopPropagation();
            e_.preventDefault();
        });
        vid.addEventListener('click',function(e_){
            e_.stopPropagation();
            e_.preventDefault();
        });
        vid.addEventListener('mousedown',function(e_){
            e_.stopPropagation();
            e_.preventDefault();
        });
        vid.addEventListener('mouseup',function(e_){
            e_.stopPropagation();
            e_.preventDefault();
        });

        /**
         * 监控视频播放的进度
         * */
        vid.addEventListener('timeupdate', function (e) {
            console.log(vid.currentTime);
        });

        /**
         * 监控视频播放的结束
         * */
        vid.addEventListener('ended', function (e) {
            $('.video_box').hide();

            /**提示用户手机竖屏继续观看*/
            /*$('.warn_info').show();
            setTimeout(function () {
                $('.warn_info').hide();
                var pageMana = new PageMana();
            },3000);*/
            var pageMana = new PageMana();
            $('.music_stop').show();
            $('.music_start').removeClass('play_music');
            $('.top_right_music_box').show();
            $('body').append('<audio id="audio_bg" autoplay loop="loop" src="assets/music/ThomasPrimeSkyHigh.mp3"></audio>');

            var audio_ = document.getElementById('audio_bg');

            audio_.pause();
            document.addEventListener("WeixinJSBridgeReady", function () {
                audio_.pause();
            }, false);


        });

        /**
         * 点击视频播放按钮
         * */
        $('.video_box .btn_').on('touchstart',function () {
            $(this).hide();
            $('#video').width('100%');
            $('.warn_look_good').hide();
            vid.play();
            $('.btn_jump').show();
        });
        /**
         * 点击跳过视频
         * */
        $('.btn_jump').on('touchstart',function () {
            $('.video_box').remove();

            $('.remind_box').hide();
            $('.top_right_music_box').show();
            $('body').append('<audio id="audio_bg" autoplay loop="loop" src="assets/music/ThomasPrimeSkyHigh.mp3"></audio>');

            var audio_ = document.getElementById('audio_bg');

            audio_.play();
            document.addEventListener("WeixinJSBridgeReady", function () {
                audio_.play();
            }, false);

            var pageMana = new PageMana();
            /**提示用户手机竖屏继续观看*/
            /*$('.warn_info').show();
            setTimeout(function () {
                $('.warn_info').hide();
                var pageMana = new PageMana();
            },3000)*/
        });

        /*document.getElementById('video').addEventListener("x5videoexitfullscreen", function(){
            alert("exit fullscreen")
        });

        document.getElementById('video').addEventListener("x5videoenterfullscreen", function(){
            alert("enter fullscreen")
        });*/
    }


});

/**解决微信不能自动播音频问题
 * 因为微信自动屏蔽了 自动播放
 * 主要是为了防止 自动加载浪费资源 和 加载速度会变慢
 * **/
function audioAutoPlay(){

    var audio_ = document.getElementById('audio');
    var isTrue = true;

     audio_.play();
     document.addEventListener("WeixinJSBridgeReady", function () {
         audio_.play();
         //document.getElementById('video').play();
     }, false);

    audio_.addEventListener('ended', function (e) {// 播放结束时触发

        //首屏打字隐藏
        setTimeout(function () {
            $('.begin_box').hide();
        },500)

    });

    audio_.addEventListener('timeupdate', function (e) {// 当前播放的进度
        //console.log(audio_.currentTime);
        if(isTrue){
            $('.begin_text').html('你收到一份来自未来的邀请函').autotype();
            isTrue = false;
        }
    });

}

/**
 * 判断手机横竖屏状态：
 * */
window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", function() {


    if (window.orientation === 180 || window.orientation === 0) {
        //alert('竖屏状态！');
        $('.warn_info').hide();
    }
    if (window.orientation === 90 || window.orientation === -90 ){
        //alert('横屏状态！');
        $('.warn_info').show();
    }
}, false);




/*document.addEventListener('DOMContentLoaded',function (){

    function audioAutoPlay(){
        var audio_ = document.getElementById('audio');
        var isTrue = true;

        audio_.play();
        document.addEventListener("WeixinJSBridgeReady", function () {
            audio_.play();
            //document.getElementById('video').play();
        }, false);


        audio_.addEventListener('ended', function (e) {
            // 播放结束时触发

            //首屏打字隐藏
            setTimeout(function () {
                $('.begin_box').hide();
            },500)

        });
        audio_.addEventListener('timeupdate', function (e) {
            //console.log(audio_.currentTime); // 当前播放的进度


            if(isTrue){
                $('.begin_text').html('你收到一份来自未来的邀请函').autotype();
                isTrue = false;
            }
        });

    }
    audioAutoPlay();
});*/

/*function orient() {
    if (window.orientation == 90 || window.orientation == -90) {
        //ipad、iphone竖屏；Andriod横屏
        $("body").attr("class", "landscape");
        orientation = 'landscape';
        return false;
    }
    else if (window.orientation == 0 || window.orientation == 180) {
        //ipad、iphone横屏；Andriod竖屏
        $("body").attr("class", "portrait");
        orientation = 'portrait';
        return false;
    }
}
//页面加载时调用
$(function(){
    orient();
});
//用户变化屏幕方向时调用
$(window).bind( 'orientationchange', function(e){
    orient();
});*/

//也可以在这个事件触发后播放一次然后暂停（这样以后视频会处于加载状态，为后面的流畅播放做准备）

