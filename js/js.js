/**
 * Created by user on 2017/9/27.
 */

$(function(){
    var index=0,
        index2=0,
        time=null,
        time2=null,
        len =$('#bannerImg div').length,
        navLen=$('#left_nav .left_nav_item').length;
        reLen=$('.hg_everygame').length,
            tieziLen=$('#tieziImg a').length;

    function loginZhuce(){
        //点击注册，弹出遮罩层
        $('#zhuce').click(function () {
            $("body").append("<div id='mask'></div>");
            $("#mask").addClass("mask").fadeIn("slow");
            $("#LoginZhuceBox").fadeIn("slow");
            $('#register_content').fadeIn("slow");
            $('#login_content').hide();
            $('#register_btn').addClass('LoginZhuceBox_active');
        })
        //点击登录，弹出遮罩层
        $('#login').click(function () {
            $("body").append("<div id='mask'></div>");
            $("#mask").addClass("mask").fadeIn("slow");
            $("#LoginZhuceBox").fadeIn("slow");
            $('#login_content').fadeIn("slow");
            $('#register_content').hide();
            $('#login_btn').addClass('LoginZhuceBox_active');
        })
        //注册登录互相切换
        $('#register_btn').click(function(){
            $("#LoginZhuceBox").fadeIn("slow");
            $('#register_content').fadeIn("slow");
            $('#login_content').hide();
            $('#register_btn').addClass('LoginZhuceBox_active');
            $('#login_btn').removeClass('LoginZhuceBox_active');
        });

        $('#login_btn').click(function(){
            $("#LoginZhuceBox").fadeIn("slow");
            $('#login_content').fadeIn("slow");
            $('#register_content').hide();
            $('#login_btn').addClass('LoginZhuceBox_active');
            $('#register_btn').removeClass('LoginZhuceBox_active');
        });
        //点击叉号关闭
        $('#close').click(function(){
            $("#mask").remove();
            $("#LoginZhuceBox").hide();
            $('#register_btn').removeClass('LoginZhuceBox_active');
            $('#login_btn').removeClass('LoginZhuceBox_active');
        });
    }





    function slideImg() {

        //导航搜索框
        //1.点击时，XX消失
        $('#search').focus(function(){
            $('.search_tags').hide();
        });


        //滑过清除定时器，离开继续
        $('#banner').mouseover(function () {
            //滑过清除定时器
            if(time) {clearInterval(time)};
        });
        function tt() {
            time=setInterval(function () {
                index++;
                if (index >= len) {
                    index = 0;
                }
                //切换图片
                changeImg();
            }, 1000);
        }
        $('#banner').mouseout(function(){
            tt();
        });

        //遍历所有点击，且绑定点击事件，点击圆点切换图片
        for(var d=0;d<len;d++){
            //给所有span添加一个id的属性，值为d，作为当前span的索引
            $('#dots span').eq(d).attr('id',d);
           $('#dots span').eq(d).click(function(){
                //改变index为当前span的索引
               index=this.id;
               //调用changeImg，实现切换图片
               changeImg();
            });
        }
        //下一张
        $('#next').click(function(){
           index++;
            if (index >= len) {index = 0;}
            changeImg();
        });
        //上一张
        $('#prev').click(function(){
            index--;
            if (index < 0) {index = len-1 ;}
            changeImg();
        });
        //导航菜单
        //1.遍历主菜单，且绑定事件
        for(var n=0;n<navLen;n++){
            //给每一个item定义data-index属性，作为索引
            $('#left_nav .left_nav_item').eq(n).attr("data-index",n);
           // $("#sub_nav .inner_box").eq(n).hide();
            $('#left_nav .left_nav_item').eq(n).mouseover(function(){
               var idx=$(this).attr("data-index");
                //遍历所有子菜单，将每一个都隐藏
                for(var j=0;j<navLen;j++){
                    $("#sub_nav .inner_box").eq(j).hide();
                }
                $("#sub_nav").show();
                $("#sub_nav .inner_box").eq(idx).show();

                //被选中菜单背景不一样
                $(this).addClass('nav_active');
            })
            $('#left_nav .left_nav_item').eq(n).mouseout(function(){
                $(this).removeClass('nav_active');
            });
        }

        $('#left_nav').mouseout(function(){
            $("#sub_nav").hide();
        });

        $("#sub_nav").mouseover(function(){
            $("#sub_nav").show();
        });
        $("#sub_nav").mouseout(function(){
            $("#sub_nav").hide();
        });

        //鼠标滑过，调用animate.css
        $(".hg_everygame .gamePic").on("mouseenter",function(e){
            var This=$(this);
            var hin=This.parent().attr("data-in");
            This.addClass(hin);
            This.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
                function(){
                     $(this).removeClass(hin);
                 });

        });


    }




//切换图片
    function changeImg(){
        //遍历banner下多有的div及所有的span，将div隐藏，将span清除类
        for(var i=0;i<len;i++){
            $('#bannerImg div').eq(i).hide();
            $('#dots span').eq(i).removeClass();
        }

        //根据index索引值找到当前div和当前span，显示出来
        $('#bannerImg div').eq(index).show();
        $('#dots span').eq(index).addClass("dots_active");
    }





    //帖子页面的轮播
    function lunbo(){
        $('#tieziImg').mouseover(function () {
            //滑过清除定时器
            if(time2) {clearInterval(time2)};
        });


        function tt2(){
            time2=setInterval(function(){

                for(j=0;j<tieziLen;j++){
                    $('#tieziImg a').eq(j).hide();
                }
                $('#tieziImg a').eq(index2).show();

                index2++;
                if (index2 >= tieziLen) {
                    index2 = 0;
                }



            },1000);
        }
        tt2();
        $('#tieziImg').mouseout(function () {
            //滑过清除定时器
           tt2();

        });

    }


    //帖子筛选的下拉菜单
    function downNav(){
        var timer1=timer2=timer3=null;
        $('#zhuti,#zhutiBox').mouseover(function(){
            clearInterval(timer1);
                $('#zhutiBox').show();
        });
        $('#zhuti,#zhutiBox').mouseout(function(){
            timer1=setTimeout(function (){
                $('#zhutiBox').hide();
            }, 200);
        });

        $('#timeBox,#time').mouseover(function(){
            clearInterval(timer2);
            $('#timeBox').show();
        });
        $('#timeBox,#time').mouseout(function(){
            timer2=setTimeout(function (){
                $('#timeBox').hide();
            }, 200);
        });

        $('#fabiao,#fabiaoBox').mouseover(function(){
            clearInterval(timer3);
            $('#fabiaoBox').show();
        });
        $('#fabiao,#fabiaoBox').mouseout(function(){
            timer3=setTimeout(function (){
                $('#fabiaoBox').hide();
            }, 200);
        });
    }


    //user帖子对齐
    function duiqi(){
        for(var i=0 ;i<$('.user').length;i++){
            if( $('#user'+[i]+' .user_left').height()<$('#user'+[i]+' .user_right').height()){
                $('#user'+[i]+' .user_left').css("height",$('#user'+[i]+' .user_right').height()+24)
            }else{
                $('#user'+[i]+' .user_right').css("height",$('#user'+[i]+' .user_left').height())
            }

        }

    }






    loginZhuce();
    slideImg();
    lunbo();
    downNav();
    duiqi();
});

