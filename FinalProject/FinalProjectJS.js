/**
 * Created by Dustin on 4/4/2017.
 */
//Slider Function

$(document).ready(function(){
    $(".section").click(function(){
        $(this).next().toggle("fast","swing");
    });
});

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



