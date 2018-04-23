/**
 * Created by user on 2017/10/20.
 */
$(function(){
    $("#all").click(function(){
        if(this.checked){
            $("#bannerList :checkbox").prop("checked", true);
        }else{
            $("#bannerList :checkbox").prop("checked", false);
        }
    });


    $("#reverse").click(function () {
        $("#bannerList :checkbox").each(function () {
            $(this).prop("checked", !$(this).prop("checked"));
        });
        allchk();
    });


    function allchk(){
        var chknum = $("#bannerList :checkbox").size();//选项总个数
        var chk = 0;
        $("#bannerList :checkbox").each(function () {
            if($(this).prop("checked")==true){
                chk++;
            }
        });
        if(chknum==chk){//全选
            $("#all").prop("checked",true);
        }else{//不全选
            $("#all").prop("checked",false);
        }
    }











});
