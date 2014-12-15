// Stolen from
// https://developers.google.com/maps/documentation/javascript/examples/geocoding-reverse




function getLocation() {

    var options = { enableHighAccuracy: true };

    var onSuccess = function(location) {

        var coords = location['coords'];

        // If there is no internet connection, put to field just coords.
        if(navigator.network.connection.type == Connection.NONE) {

            $('#currentLocation').val(coords.latitude +','+ coords.longitude);

        } else {

            var geocoder = new google.maps.Geocoder();

            var latlng = new google.maps.LatLng(coords.latitude, coords.longitude);

            geocoder.geocode({'latLng': latlng}, function(results, status) {
                var address = results[1]['formatted_address'];

                $('#currentLocation').val(address);
                $('#currentLocation').change();
            });

        }

    };

    var onError = function(err) {
        console.log(err);
    };

    var location = navigator.geolocation.getCurrentPosition(onSuccess, onError, options);

};