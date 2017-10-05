/**
 * Created by Dustin on 4/4/2017.
 */
//Slider Function

$(document).ready(function(){
    $(".section").click(function(){
        $(this).next().toggle("fast","swing");
    });
});

//Google Maps API
function initMap() {
    var uluru = {lat: 41.033056, lng: -111.936111};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 13,
        center: uluru
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
    google.maps.event.addListenerOnce(map, 'idle', function() {
        google.maps.event.trigger(map, 'onLoad');
    });
}

//Take user input and display in a box on the page.
function submit() {
    if($('#content').firstChild = $('#content p')){
        $('#content').hide();
        $('#content p').remove();
        var input = $('#userInput').val();
        var para = document.createElement("p");
        var node = document.createTextNode(input);
        para.appendChild(node);

        var element = document.getElementById("content");
        element.append(para);
        $('#content').slideDown("fast");
    }else {
        var input = $('#userInput').val();
        var para = document.createElement("p");
        var node = document.createTextNode(input);
        para.appendChild(node);

        var element = document.getElementById("content");
        element.append(para);
        $('#content').slideDown("fast");

        }
}


