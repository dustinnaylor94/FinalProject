/**
 * Created by Dustin on 4/4/2017.
 */
//Slider Function

$(document).ready(function(){
    $(".section").click(function(){
        $(this).next().toggle("fast","swing");
    });
});

