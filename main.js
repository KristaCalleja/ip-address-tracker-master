const apiKey = "at_SsKGF3XZ8YMdYdvtD3t0wewKOV6LQ";
// Select the inputted ip address
const searchInput = document.querySelector(".search-input");
// Select the ul tag where results will be returned
const list = document.querySelector('#results');
// Select the tag where the resultant data will be returned
const generatedIpAddress = document.querySelector(".search-input-show");
const generatedLocation = document.querySelector(".location-show");
const generatedTimezone = document.querySelector(".timezone-show");
const generatedIsp = document.querySelector(".isp-show");
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
         });
 };

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