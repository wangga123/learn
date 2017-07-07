
   $(function () {
       $(window).scroll(function () {
           if($(document).scrollTop()>=$("#topertian").height()){
               $("#topertian").css("position","fixed").css("top",0);
               $(".banner").css("marginTop",$("#topertian").height());
           }
           else{
               $("#topertian").css("position","relative")
               $(".banner").css("marginTop",0);
           }
       }) ;
   });
$(function () {
    $("#mulu1").mouseover(function () {
       $(".youxi").stop().slideDown("slow",function () {
           $(this).css("display","block")
           })
       //     .mouseover(function () {
       //     $(".youxi").show() ;
       // });
    });
    $("#mulu1").mouseout(function () {
        $(".youxi").stop().slideUp("slow",function () {
            $(this).css("display","none")
        });
    });
    $(".youxi").mouseover(function () {
        $(".youxi").stop().slideDown("slow",function () {
            $(this).css("display","block")
        })
        //     .mouseover(function () {
        //     $(".youxi").show() ;
        // });
    });
    $(".youxi").mouseleave(function () {
        $(".youxi").stop().slideUp("slow",function () {
            $(this).css("display","none")
        });
    });
});
   $(function () {
       $("#fanren").click(function () {
           $(this).hide(1000,function () {
               $(this).remove();
           });
       });

   });