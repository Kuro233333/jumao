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
        var chknum = $("#bannerList :checkbox").size();//ѡ���ܸ���
        var chk = 0;
        $("#bannerList :checkbox").each(function () {
            if($(this).prop("checked")==true){
                chk++;
            }
        });
        if(chknum==chk){//ȫѡ
            $("#all").prop("checked",true);
        }else{//��ȫѡ
            $("#all").prop("checked",false);
        }
    }











});
