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
        //���ע�ᣬ�������ֲ�
        $('#zhuce').click(function () {
            $("body").append("<div id='mask'></div>");
            $("#mask").addClass("mask").fadeIn("slow");
            $("#LoginZhuceBox").fadeIn("slow");
            $('#register_content').fadeIn("slow");
            $('#login_content').hide();
            $('#register_btn').addClass('LoginZhuceBox_active');
        })
        //�����¼���������ֲ�
        $('#login').click(function () {
            $("body").append("<div id='mask'></div>");
            $("#mask").addClass("mask").fadeIn("slow");
            $("#LoginZhuceBox").fadeIn("slow");
            $('#login_content').fadeIn("slow");
            $('#register_content').hide();
            $('#login_btn').addClass('LoginZhuceBox_active');
        })
        //ע���¼�����л�
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
        //�����Źر�
        $('#close').click(function(){
            $("#mask").remove();
            $("#LoginZhuceBox").hide();
            $('#register_btn').removeClass('LoginZhuceBox_active');
            $('#login_btn').removeClass('LoginZhuceBox_active');
        });
    }





    function slideImg() {

        //����������
        //1.���ʱ��XX��ʧ
        $('#search').focus(function(){
            $('.search_tags').hide();
        });


        //���������ʱ�����뿪����
        $('#banner').mouseover(function () {
            //���������ʱ��
            if(time) {clearInterval(time)};
        });
        function tt() {
            time=setInterval(function () {
                index++;
                if (index >= len) {
                    index = 0;
                }
                //�л�ͼƬ
                changeImg();
            }, 1000);
        }
        $('#banner').mouseout(function(){
            tt();
        });

        //�������е�����Ұ󶨵���¼������Բ���л�ͼƬ
        for(var d=0;d<len;d++){
            //������span���һ��id�����ԣ�ֵΪd����Ϊ��ǰspan������
            $('#dots span').eq(d).attr('id',d);
           $('#dots span').eq(d).click(function(){
                //�ı�indexΪ��ǰspan������
               index=this.id;
               //����changeImg��ʵ���л�ͼƬ
               changeImg();
            });
        }
        //��һ��
        $('#next').click(function(){
           index++;
            if (index >= len) {index = 0;}
            changeImg();
        });
        //��һ��
        $('#prev').click(function(){
            index--;
            if (index < 0) {index = len-1 ;}
            changeImg();
        });
        //�����˵�
        //1.�������˵����Ұ��¼�
        for(var n=0;n<navLen;n++){
            //��ÿһ��item����data-index���ԣ���Ϊ����
            $('#left_nav .left_nav_item').eq(n).attr("data-index",n);
           // $("#sub_nav .inner_box").eq(n).hide();
            $('#left_nav .left_nav_item').eq(n).mouseover(function(){
               var idx=$(this).attr("data-index");
                //���������Ӳ˵�����ÿһ��������
                for(var j=0;j<navLen;j++){
                    $("#sub_nav .inner_box").eq(j).hide();
                }
                $("#sub_nav").show();
                $("#sub_nav .inner_box").eq(idx).show();

                //��ѡ�в˵�������һ��
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

        //��껬��������animate.css
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




//�л�ͼƬ
    function changeImg(){
        //����banner�¶��е�div�����е�span����div���أ���span�����
        for(var i=0;i<len;i++){
            $('#bannerImg div').eq(i).hide();
            $('#dots span').eq(i).removeClass();
        }

        //����index����ֵ�ҵ���ǰdiv�͵�ǰspan����ʾ����
        $('#bannerImg div').eq(index).show();
        $('#dots span').eq(index).addClass("dots_active");
    }





    //����ҳ����ֲ�
    function lunbo(){
        $('#tieziImg').mouseover(function () {
            //���������ʱ��
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
            //���������ʱ��
           tt2();

        });

    }


    //����ɸѡ�������˵�
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


    //user���Ӷ���
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

