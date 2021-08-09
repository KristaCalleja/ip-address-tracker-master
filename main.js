const apiKey = ipGeolocationApiKey;
const accessToken = leafletAccessToken;
// Select the inputted ip address
const searchInput = document.querySelector(".search-input");
// Select the ul tag where results will be returned
const list = document.querySelector('#results');
// Select the tag where the resultant data will be returned
const generatedIpAddress = document.querySelector(".search-input-show");
const generatedLocation = document.querySelector(".location-show");
const generatedTimezone = document.querySelector(".timezone-show");
const generatedIsp = document.querySelector(".isp-show");
const mapbox = document.querySelector(".mapbox");
// Select form to use for the event listener on "click"
const form = document.querySelector('form');
// Select button for 'loading'
const button = document.getElementById('btn');
// Default ip address on load
const defaultIp = ('192.212.174.101');

// Create function
const fetchIpAddress = (ip) => {
    // GET command
     fetch(`https://geo.ipify.org/api/v1?apiKey=${apiKey}&ipAddress=${searchInput.value}`)
         // Transform the response to JSON
         .then(response => response.json())
         .then((data) =>{
        // For first field
        const ipAddress = data.ip;
        const ip = `${ipAddress}`;
        generatedIpAddress.insertAdjacentHTML("beforeend", ip);
        // For second field
        const country = data.location.country;
        const region = data.location.region;
        const city = data.location.city;
        const location = `${country}, ${region}, ${city}`;
        generatedLocation.insertAdjacentHTML("beforeend", location);
    // For third field
        const dataTimeZone = data.location.timezone;
        const timeZone = `${dataTimeZone}`;
        generatedTimezone.insertAdjacentHTML("beforeend", timeZone);
    // For fourth field
        const ispData = data.isp;
        const isp = `${ispData}`
        generatedIsp.insertAdjacentHTML("beforeend", isp);
    // For latitude and longitude values
        const lat = data.location.lat;
        const lng = data.location.lng;
        let coordinates = [lat, lng];
        console.log(coordinates);

        mapbox.innerHTML = "<div id='map'></div>";
        mapRender(coordinates);
    });
 };

const mapRender = (coordinates) => {
    var map = L.map('map').setView(coordinates, 13);
    
    L.tileLayer
    ('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoia3Jpc3RhY2FsbGVqYSIsImEiOiJjazJxbmF3bm0wZ3llM2Nvenh2YnA3NWg2In0.XkkUnhzEcLYoXp7Lh3kR_Q', {
        attribution: 
        'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: accessToken,
    }).addTo(map);
}

const updateResultsList = (event) => {
    // Remove default behaviour of form (refresh) to keep a value loading in default on load
    event.preventDefault();
    // Refresh the latest results
    generatedIpAddress.innerHTML = " ";
    generatedLocation.innerHTML = " ";
    generatedTimezone.innerHTML = " ";
    generatedIsp.innerHTML = " ";
    fetchIpAddress(searchInput.value);
}
    
fetchIpAddress(defaultIp);

// Add event listener upon submit
form.addEventListener('submit', updateResultsList);