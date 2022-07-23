// Initialize and add the map
function initMap() {
    // The location of Uluru
    const uluru = { lat: -25.344, lng: 131.031 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: uluru,
    });
    // The marker, positioned at Uluru
    const galapagos = { lat: -0.4724, lng: -90.6811 }
    const marker1 = new google.maps.Marker({
        position: galapagos,
        map: map,
        title: "Islas Galápagos"
    });

    const amsterdam = { lat: 52.3738, lng: 4.89093 }
    const marker2 = new google.maps.Marker({
        position: amsterdam,
        map: map,
        title: "Ámsterdam"
    });

    const roma = { lat: 41.8905, lng: 12.4942}
    const marker3 = new google.maps.Marker({
        position: roma,
        map: map,
        title: "Roma"
    });
}
window.initMap = initMap;