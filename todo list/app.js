$(function(){
    $(".text").on("keyup",function(e){
       // 13 means enter button
        if(e.keyCode==13 && $(".text").val()!=""){

            var task = $("<div class ='task'></div>").text($(".text").val());
            var del=$("<i class ='fas fa-trash'></i>").click(function(){
                var p = $(this).parent();
                p.fadeOut(function(){
                    p.remove();
                });
            });


            var check = $("<i class ='fas fa-check'></i>").click(function(){
                var p = $(this).parent();
                p.fadeOut(function(){
                    $(".comp").append(p);
                    p.fadeIn();
            });
            $(this).remove();
        });

             task.append(del,check);
            $(".notcomp").append(task);

            $(".text").val("");
        }
        // alert("this is text");
    });
});