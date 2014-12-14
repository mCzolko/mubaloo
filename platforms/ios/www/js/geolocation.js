// Stolen from
// https://developers.google.com/maps/documentation/javascript/examples/geocoding-reverse

var geocoder = new google.maps.Geocoder();

function getAddress(latitude, longitude, callback) {
    var latlng = new google.maps.LatLng(latitude, longitude);

    geocoder.geocode({'latLng': latlng}, function(results, status) {
        var address = results[1]['formatted_address'];
        callback(address);
    });
}


document.addEventListener('deviceready', function () {

    var options = { enableHighAccuracy: true };

    var onSuccess = function(location) {

        var coords = location['coords'];

        getAddress(coords.latitude, coords.longitude, function (address) {

            $('#currentLocation').val(address);

        });

    };

    var onError = function(err) {
        console.log(err);
    };

    var location = navigator.geolocation.getCurrentPosition(onSuccess, onError, options);

});