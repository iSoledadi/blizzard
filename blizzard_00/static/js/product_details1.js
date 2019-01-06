$(function(){
    //鼠标移入图标文字变蓝，点击时底部变蓝

        // $(".floor3_logo1").mouseenter(function(){
        //     $(".floor3_logo1 img").attr("src","img/product/product_deatails1/windows2.png");
        // });
        // $(".floor3_logo1").mouseleave(function(){
        //     $(".floor3_logo1 img").attr("src","img/product/product_deatails1/windows1.png");
        // })
        // $(".floor3_logo2").mouseenter(function(){
        //     $(".floor3_logo2 img").attr("src","img/product/product_deatails1/ios2.png");
        // });
        // $(".floor3_logo2").mouseleave(function(){
        //     $(".floor3_logo2 img").attr("src","img/product/product_deatails1/ios1.png");
        // })
        // $(".floor3_logo3").mouseenter(function(){
        //     $(".floor3_logo3 img").attr("src","img/product/product_deatails1/android2.png");
        // });
        // $(".floor3_logo3").mouseleave(function(){
        //     $(".floor3_logo3 img").attr("src","img/product/product_deatails1/android1.png");
        // })

    //点击配置需求出现各个环境需求

        // $(".floor3_logo2").click(function(){
        //     $(".floor3_msg2").removeClass("floorHide");
        //     $(".floor3_msg2").addClass("floorShow");
        //     $(".floor3_msg1").addClass("floorHide");
        //     $(".floor3_msg3").addClass("floorHide");
        //     $(".floor3_logo2").addClass("borderBottomBlue");
        //     $(".floor3_logo1").removeClass("borderBottomBlue");
        //     $(".floor3_logo3").removeClass("borderBottomBlue");
        //     $(".floor3_select").val(2);
        // })
        // $(".floor3_logo1").click(function(){
        //     $(".floor3_msg1").removeClass("floorHide");
        //     $(".floor3_msg1").addClass("floorShow");
        //     $(".floor3_msg2").addClass("floorHide");
        //     $(".floor3_msg3").addClass("floorHide");
        //     $(".floor3_logo1").addClass("borderBottomBlue");
        //     $(".floor3_logo2").removeClass("borderBottomBlue");
        //     $(".floor3_logo3").removeClass("borderBottomBlue");
        //     $(".floor3_select").val(1);
        // })
        // $(".floor3_logo3").click(function(){
        //     $(".floor3_msg3").removeClass("floorHide");
        //     $(".floor3_msg3").addClass("floorShow");
        //     $(".floor3_msg1").addClass("floorHide");
        //     $(".floor3_msg2").addClass("floorHide");
        //     $(".floor3_logo3").addClass("borderBottomBlue");
        //     $(".floor3_logo1").removeClass("borderBottomBlue");
        //     $(".floor3_logo2").removeClass("borderBottomBlue");
        //     $(".floor3_select").val(3);
        // })


    //floor3下拉框选择哪个配置出现那个需求环境

        // $(".floor3_select").change(function(){
        //     var val=$(".floor3_select").val();
        //     if (val==1){
        //         $(".floor3_msg1").removeClass("floorHide");
        //         $(".floor3_msg1").addClass("floorShow");
        //         $(".floor3_msg2").addClass("floorHide");
        //         $(".floor3_msg3").addClass("floorHide");
        //         $(".floor3_logo1").addClass("borderBottomBlue");
        //         $(".floor3_logo2").removeClass("borderBottomBlue");
        //         $(".floor3_logo3").removeClass("borderBottomBlue");
        //     }else if(val==2){
        //         $(".floor3_msg2").removeClass("floorHide");
        //         $(".floor3_msg2").addClass("floorShow");
        //         $(".floor3_msg1").addClass("floorHide");
        //         $(".floor3_msg3").addClass("floorHide");
        //         $(".floor3_logo2").addClass("borderBottomBlue");
        //         $(".floor3_logo1").removeClass("borderBottomBlue");
        //         $(".floor3_logo3").removeClass("borderBottomBlue");
        //     }else{
        //         $(".floor3_msg3").removeClass("floorHide");
        //         $(".floor3_msg3").addClass("floorShow");
        //         $(".floor3_msg1").addClass("floorHide");
        //         $(".floor3_msg2").addClass("floorHide");
        //         $(".floor3_logo3").addClass("borderBottomBlue");
        //         $(".floor3_logo1").removeClass("borderBottomBlue");
        //         $(".floor3_logo2").removeClass("borderBottomBlue");
        //     }
        // })


    // 鼠标移入播放器时图片改变

        // $(".detail_floor1_video").mouseenter(function(){
        //     $(".video_play").attr("src","img/product/video/video_play3.png")
        // })
        // $(".detail_floor1_video").mouseleave(function(){
        //     $(".video_play").attr("src","img/product/video/video_play1.png")
        // })


    //播放视频

        // $(".detail_floor1_video").click(function(){
        //     $(".product_detail_video").fadeIn();
        //     $(".detail_video").get(0).play();
        //     $(".contentZheZhao").show();
        // })




//点击video的关闭按钮关闭视频

    // $(".closeVideo").click(function(){
    //     $(".product_detail_video").fadeOut();
    //     $(".detail_video").get(0).pause();
    //     $(".detail_video").get(0).currentTime=0;
    //     $(".contentZheZhao").hide();
    // })

})