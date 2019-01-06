/**
 * Created by web on 2018/11/25.
 */
$(function(){
    $(".right_select_big").click(function(){
        if($(".header_right_select").is(":hidden")){
            $(".header_right_select").show(300);
            $(".right_select_big>a>img").css('transform', 'rotate(' +180+ 'deg)');
            $(".contentZheZhao").show();
            $(".header-nav-select-game2").slideUp(100);
            $(".header-nav-select-game").slideUp(300);
            $(".header-nav-select-match2").slideUp(100);
            $(".header-nav-select-match").slideUp(300);
            for(var i=1;i<=8;i++){
                $(".gamedown"+i).removeClass("down"+i);
            }
            for(var i=1;i<=6;i++){
                $(".matchdown"+i).removeClass("down"+i);
            }
            $(".my_header_match>a>img").css('transform', 'rotate(' + 0+ 'deg)');
            $(".my_header_li>a>img").css('transform', 'rotate(' + 0+ 'deg)');
    
        }else{
            $(".header_right_select").hide(300);
            $(".right_select_big>a>img").css('transform', 'rotate(' +0+ 'deg)');
            $(".contentZheZhao").hide();
        }
    })
    
     //先实现单击按钮下拉
     $("[data-trigger=dropdown] ul").hide();
     for(var i=2;i<=5;i++){
         $("[data-trigger=dropdown"+i+"] ul").slideUp();
     };
     //.css("display","none")
     $("[data-trigger=dropdown]").on("click",function(){
         if($("[data-trigger=dropdown] ul").is(":hidden")){
             $("#gameList img").css('transform', 'rotate(' + (-180)+ 'deg)');
         }
         else{
             $("#gameList img").css('transform', 'rotate(' + 0+ 'deg)');
         };
         var $btn=$(this).children("ul");
         $btn.slideToggle(200);
         $(".left_select_border").fadeToggle(200);
         $("[data-trigger=dropdown2] ul").slideUp(200);
         $("#gameList2 img").css('transform', 'rotate(' + 0+ 'deg)');
         $(".left_select_border2").hide();
     })
     $("[data-trigger=dropdown2]").on("click",function(){
         if($("[data-trigger=dropdown2] ul").is(":hidden"))
             $("#gameList2 img").css('transform', 'rotate(' + (-180)+ 'deg)');
         else{
             $("#gameList2 img").css('transform', 'rotate(' + 0+ 'deg)');
         }
         var $btn=$(this).children("ul");
         $btn.slideToggle(200);
         $(".left_select_border2").fadeToggle(200);
         $("[data-trigger=dropdown] ul").slideUp(200);
         $("#gameList img").css('transform', 'rotate(' + 0+ 'deg)');
         $(".left_select_border").hide();
     })
     $("[data-trigger=dropdown3]").on("click",function(){
         if($("[data-trigger=dropdown3] ul").is(":hidden"))
             $("#gameList3 img").css('transform', 'rotate(' + (-180)+ 'deg)');
         else{
             $("#gameList3 img").css('transform', 'rotate(' + 0+ 'deg)');
         }
         var $btn=$(this).children("ul");
         $btn.slideToggle(200);
         $(".left_select_border3").fadeToggle(200);
         $("[data-trigger=dropdown4] ul").slideUp(200);
         $("[data-trigger=dropdown5] ul").slideUp(200);
         $("#gameList4 img").css('transform', 'rotate(' + 0+ 'deg)');
         $("#gameList5 img").css('transform', 'rotate(' + 0+ 'deg)');
         $(".left_select_border4").hide();
         $(".left_select_border5").hide();
     })
     $("[data-trigger=dropdown4]").on("click",function(){
         if($("[data-trigger=dropdown4] ul").is(":hidden"))
             $("#gameList4 img").css('transform', 'rotate(' + (-180)+ 'deg)');
         else{
             $("#gameList4 img").css('transform', 'rotate(' + 0+ 'deg)');
         }
         var $btn=$(this).children("ul");
         $btn.slideToggle(200);
         $(".left_select_border4").fadeToggle(200);
         $("[data-trigger=dropdown3] ul").slideUp(200);
         $("[data-trigger=dropdown5] ul").slideUp(200);
         $("#gameList3 img").css('transform', 'rotate(' + 0+ 'deg)');
         $("#gameList5 img").css('transform', 'rotate(' + 0+ 'deg)');
         $(".left_select_border3").hide();
         $(".left_select_border5").hide();
     })
     $("[data-trigger=dropdown5]").on("click",function(){
         if($("[data-trigger=dropdown5] ul").is(":hidden"))
             $("#gameList5 img").css('transform', 'rotate(' + (-180)+ 'deg)');
         else{
             $("#gameList5 img").css('transform', 'rotate(' + 0+ 'deg)');
         }
         var $btn=$(this).children("ul");
         $btn.slideToggle(200);
         $(".left_select_border5").fadeToggle(200);
         $("[data-trigger=dropdown3] ul").slideUp(200);
         $("[data-trigger=dropdown4] ul").slideUp(200);
         $("#gameList3 img").css('transform', 'rotate(' + 0+ 'deg)');
         $("#gameList4 img").css('transform', 'rotate(' + 0+ 'deg)');
         $(".left_select_border3").hide();
         $(".left_select_border4").hide();
     })
    
     $("#headerBtn2").click(function(){
        $("#my_nav_right_selection").addClass("rightMove");
        $("#my_nav_left_selection").removeClass("leftMove");
        $(".contentZheZhao").show();
        $("[data-trigger=dropdown] ul").slideUp();
        $("#gameList img").css('transform', 'rotate(' + 0+ 'deg)');
        $(".left_select_border").hide();
        for(var i=2;i<=5;i++){
            $("[data-trigger=dropdown"+i+"] ul").slideUp();
        };
        for(var i=2;i<=5;i++){
            $("#gameList"+i+" img").css('transform', 'rotate(' + 0+ 'deg)');
        };
        for(var i=2;i<=5;i++){
            $(".left_select_border"+i).hide();
        };
    })
    $("#colseRightSelect").click(function(){
        $("#my_nav_right_selection").removeClass("rightMove");
        $(".contentZheZhao").hide();
        $("[data-trigger=dropdown] ul").slideUp();
        $("[data-trigger=dropdown2] ul").slideUp();
        $("#gameList img").css('transform', 'rotate(' + 0+ 'deg)');
        $("#gameList2 img").css('transform', 'rotate(' + 0+ 'deg)');
    })
    $("#headerBtn1").click(function(){
        $("#my_nav_left_selection").addClass("leftMove");
        $("#my_nav_right_selection").removeClass("rightMove");
        $("[data-trigger=dropdown] ul").slideUp();
        $("#gameList img").css('transform', 'rotate(' + 0+ 'deg)');
        $(".left_select_border").hide();
        for(var i=2;i<=5;i++){
            $("[data-trigger=dropdown"+i+"] ul").slideUp();
        };
        for(var i=2;i<=5;i++){
            $("#gameList"+i+" img").css('transform', 'rotate(' + 0+ 'deg)');
        };
        for(var i=2;i<=5;i++){
            $(".left_select_border"+i).hide();
        };
        $(".contentZheZhao").show();
    })
    $("#colseLeftSelect").click(function(){
        $("#my_nav_left_selection").removeClass("leftMove");
        $(".contentZheZhao").hide();
        for(var i=3;i<=5;i++){
            $("[data-trigger=dropdown"+i+"] ul").slideUp();
        };
        for(var i=3;i<=5;i++){
            $("#gameList"+i+" img").css('transform', 'rotate(' + 0+ 'deg)');
        };
        for(var i=3;i<=5;i++){
            $(".left_select_border"+i).hide();
        };
    })
    //      $(".contentZheZhao").click(function(){
    //         $(".contentZheZhao").hide();
    //      }
    $(".contentZheZhao").click(function(){
        $("#my_nav_left_selection").removeClass("leftMove");
        $("#my_nav_right_selection").removeClass("rightMove");
        $(".header-nav-select-game2").slideUp(100);
        $(".header-nav-select-game").slideUp(300);
        $(".header-nav-select-match2").slideUp(100);
        $(".header-nav-select-match").slideUp(300);
        $(".header_right_select").hide(300);
        for(var i=1;i<=8;i++){
            $(".gamedown"+i).removeClass("down"+i);
        };
        for(var i=1;i<=6;i++){
            $(".matchdown"+i).removeClass("down"+i);
        };
        $(".right_select_big>a>img").css('transform', 'rotate(' +0+ 'deg)');
        $(".my_header_match>a>img").css('transform', 'rotate(' + 0+ 'deg)');
        $(".my_header_li>a>img").css('transform', 'rotate(' + 0+ 'deg)');
        $("[data-trigger=dropdown] ul").slideUp();
        $("#gameList img").css('transform', 'rotate(' + 0+ 'deg)');
        $(".left_select_border").hide();
        $("[data-trigger=dropdown2] ul").slideUp();
        for(var i=2;i<=5;i++){
            $("[data-trigger=dropdown"+i+"] ul").slideUp();
        };
        for(var i=2;i<=5;i++){
            $("#gameList"+i+" img").css('transform', 'rotate(' + 0+ 'deg)');
        };
        for(var i=2;i<=5;i++){
            $(".left_select_border"+i).hide();
        };
        $(".contentZheZhao").hide();
    })
    
    
    
    //      窗口大小变化时
    $(window).resize(function(){
        $("#my_nav_left_selection").removeClass("leftMove");
        $("#my_nav_right_selection").removeClass("rightMove");
        $(".header-nav-select-game2").slideUp(100);
        $(".header-nav-select-game").slideUp(300);
        $(".header-nav-select-match2").slideUp(100);
        $(".header-nav-select-match").slideUp(300);
        $(".header_right_select").hide(300);
        for(var i=1;i<=8;i++){
            $(".gamedown"+i).removeClass("down"+i);
        }
        for(var i=1;i<=6;i++){
            $(".matchdown"+i).removeClass("down"+i);
        }
        $(".right_select_big>a>img").css('transform', 'rotate(' +0+ 'deg)');
        $(".my_header_match>a>img").css('transform', 'rotate(' + 0+ 'deg)');
        $(".my_header_li>a>img").css('transform', 'rotate(' + 0+ 'deg)');
        $("[data-trigger=dropdown] ul").slideUp();
        $("#gameList img").css('transform', 'rotate(' + 0+ 'deg)');
        $(".left_select_border").hide();
        for(var i=2;i<=5;i++){
            $("[data-trigger=dropdown"+i+"] ul").slideUp();
        };
        for(var i=2;i<=5;i++){
            $("#gameList"+i+" img").css('transform', 'rotate(' + 0+ 'deg)');
        };
        for(var i=2;i<=5;i++){
            $(".left_select_border"+i).hide();
        };
        $(".contentZheZhao").hide();
    })
    
    // input框focus
    $(".search_input input").focus(function(){
        $(this).addClass("input_big");
    }).blur(function(){
        $(this).removeClass("input_big");
    })
    
    // 屏幕下拉40px时搜索栏固定
    $(window).scroll(function(){
        if($(window).scrollTop()>=40){
            $(".header_search").addClass("searchFixed");
        }else{
            $(".header_search").removeClass("searchFixed");
        }
    })
    
    
    // 搜索栏下拉菜单js
    $(".header_game_drop").click(function(e){
        e.stopPropagation();
        if($(".header_drop1").is(":hidden")){
            $(".header_drop1").show();
            $(".header_drop2").hide();
            $(".header_drop3").hide();
            $(".search_li1>a>img").css('transform', 'rotate(' + (-180)+ 'deg)');
            $(".search_li2>a>img").css('transform', 'rotate(' + 0+ 'deg)');
            $(".search_li3>a>img").css('transform', 'rotate(' + 0+ 'deg)');
        }else{
            $(".header_drop1").hide();
            $(".search_li1>a>img").css('transform', 'rotate(' + 0+ 'deg)');
        };
    })
    $(".header_help_drop").click(function(e){
        e.stopPropagation();
        if($(".header_drop2").is(":hidden")){
            $(".header_drop2").show();
            $(".header_drop1").hide();
            $(".header_drop3").hide();
            $(".search_li2>a>img").css('transform', 'rotate(' + (-180)+ 'deg)');
            $(".search_li1>a>img").css('transform', 'rotate(' + 0+ 'deg)');
            $(".search_li3>a>img").css('transform', 'rotate(' + 0+ 'deg)');
        }else{
            $(".header_drop2").hide();
            $(".search_li2>a>img").css('transform', 'rotate(' + 0+ 'deg)');
        };
    })
    $(".header_money_drop").click(function(e){
        e.stopPropagation();
        if($(".header_drop3").is(":hidden")){
            $(".header_drop3").show();
            $(".header_drop1").hide();
            $(".header_drop2").hide();
            $(".search_li3>a>img").css('transform', 'rotate(' + (-180)+ 'deg)');
            $(".search_li1>a>img").css('transform', 'rotate(' + 0+ 'deg)');
            $(".search_li2>a>img").css('transform', 'rotate(' + 0+ 'deg)');
        }else{
            $(".header_drop3").hide();
            $(".search_li3>a>img").css('transform', 'rotate(' + 0+ 'deg)');
        };
    })
    
    $(function(){
        $(document).on("click",function(){
            $(".header_drop1").hide();
            $(".header_drop2").hide();
            $(".header_drop3").hide();
            $(".search_li1>a>img").css('transform', 'rotate(' + 0+ 'deg)');
            $(".search_li2>a>img").css('transform', 'rotate(' + 0+ 'deg)');
            $(".search_li3>a>img").css('transform', 'rotate(' + 0+ 'deg)');
        })
    })
    
    
    // 返回顶部滑动效果
    $(".toTop").click(function(){
        $('body,html').animate({scrollTop:0},1000);
    })
    
    $(window).scroll(function(){
        if($(window).scrollTop()>=150){
            $(".product_tag").fadeIn();
        }else{
            $(".product_tag").fadeOut();
        }
    })
})