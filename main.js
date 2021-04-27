const apiKey = "at_SsKGF3XZ8YMdYdvtD3t0wewKOV6LQ";

searchInput = document.getElementById('search-input');

document.querySelector('form').addEventListener('submit', function (e){
    e.preventDefault();
    console.log(searchInput.value);
})