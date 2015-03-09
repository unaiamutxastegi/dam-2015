(function() {
    console.log('Geolocalización');
    var mapOptions = {
        zoom: 6
    };
    var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

    navigator.geolocation.getCurrentPosition(function(position) {
        console.log(position);

        var pos = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

        var infowindow = new google.maps.InfoWindow({
            map: map,
            position: pos,
            content: 'Location found using HTML5.'
        });

        map.setCenter(pos);
/*        var options = {
            map: map,
            position: new google.maps.LatLng(60, 105),
            content: content
        };

        var infowindow = new google.maps.InfoWindow(options);
        map.setCenter(options.position);*/

    });
})();
