/**
 * Created by Dustin on 4/4/2017.
 */
//Slider Function

$(document).ready(function(){
    $(".section").click(function(){
        if($(this).next().is(":hidden")) {
            $(this).next().slideDown("fast");
        } else{
            $(this).next().hide();
        }
    });
});
