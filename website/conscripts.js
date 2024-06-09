// Initialize and add the map
function initMap() {
    // The location of the store
    const storeLocation = { lat: 40.7128, lng: -74.006 };
    // The map, centered at storeLocation
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: storeLocation,
    });
    // The marker, positioned at storeLocation
    const marker = new google.maps.Marker({
        position: storeLocation,
        map: map,
    });
}
