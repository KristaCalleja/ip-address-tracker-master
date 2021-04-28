const apiKey = "at_SsKGF3XZ8YMdYdvtD3t0wewKOV6LQ";
// Select the inputted ip address
const searchInput = document.querySelector(".search-input");
// Select the tag where the resultant data will be returned
const generatedLocation = document.querySelector(".location-show");
// Select form to use for the event listener on "click"
const form = document.querySelector('form');


// Create function
const fetchIpAddress = (event) => {
    event.preventDefault();
    fetch(`https://geo.ipify.org/api/v1?apiKey=${apiKey}&ipAddress=8.8.8.8`)
        // Transform the response to JSON
        .then(response => response.json())
        .then((data) => {
            const country = data.location.country;
            const region = data.location.region;
            const city = data.location.city;
            const location = `${country}, ${region}, ${city}`;
            console.log(location);
            generatedLocation.insertAdjacentHTML("beforeend", location);
        });
};


form.addEventListener('submit', fetchIpAddress);