'use strict'


function getPosition() {

    if (!navigator.geolocation) {
        alert('HTML5 Geolocation is not supported in your browser')
        return
    }

    
    // One shot position retrieval...
    navigator.geolocation.getCurrentPosition(showLocation, handleLocationError)

}

function showLocation() {

    const user = getUser()
    let { zoom, mapCoords } = user
    mapCoords = mapCoords.split(',')
    let lat = +mapCoords[0]
    let lng = +mapCoords[1]
  
    initMap(lat, lng, +zoom)
}

function initMap(lat = 31, lng = 31, zoom) {

    var elMap = document.querySelector('.map')
    var options = {
        center: { lat, lng },
        zoom: zoom
    }

    var map = new google.maps.Map(
        elMap,
        options
    )

    var marker = new google.maps.Marker({
        position: { lat, lng },
        map,
        title: 'Hello World!'
    })
}

function handleLocationError(error) {
    var locationError = document.getElementById("locationError")

    switch (error.code) {
        case 0:
            locationError.innerHTML = "There was an error while retrieving your location: " + error.message
            break
        case 1:
            locationError.innerHTML = "The user didn't allow this page to retrieve a location."
            break
        case 2:
            locationError.innerHTML = "The browser was unable to determine your location: " + error.message
            break
        case 3:
            locationError.innerHTML = "The browser timed out before retrieving the location."
            break
    }
}


