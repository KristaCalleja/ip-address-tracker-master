const apiKey = "at_SsKGF3XZ8YMdYdvtD3t0wewKOV6LQ";
const queriedIpAddress = document.querySelector('.search-input-show');
// Use querySelectorAll to manipulate all elements
const generatedResults = document.querySelectorAll(".listed-results li")
const generatedLocation = document.querySelector('.location-show');
const generatedTimezone = document.querySelector('.timezone-show');
const generatedISP = document.querySelector('.isp-show');

// Iterate over all elements
generatedResults.forEach((result)=>{
    result.innerText = "192.212.174.101"
});


// Collect queried IP Address
var searchInput = document.getElementById('search-input');

// 
const updateIpField = () => {
    queriedIpAddress.insertAdjacentHTML("beforeend", searchInput.value);
}
     

document.querySelector('form').addEventListener('submit', function (event){
    event.preventDefault();
    console.log(searchInput.value);
})

const fetchIP = () => {
    fetch(`https://geo.ipify.org/api/v1?apiKey=at_SsKGF3XZ8YMdYdvtD3t0wewKOV6LQ&ipAddress=8.8.8.8`)
        .then(response => response.json())
}