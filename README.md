# Frontend Mentor - IP address tracker solution

This is a solution to the [IP address tracker challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ip-address-tracker-I8-0yYAH0). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for each page depending on their device's screen size
- See hover states for all interactive elements on the page
- See their own IP address on the map on the initial page load
- Search for any IP addresses or domains and see the key information and location

### Links

- Solution URL: [IP Address Tracked git repository](https://github.com/KristaCalleja/ip-address-tracker-master)
- Live Site URL: [Live site URL](https://kristacalleja.github.io/ip-address-tracker-master/)

## My process

### Built with

- Mobile-first workflow
- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Vanilla JavaScript

### What I learned

I practiced GET requests, DOM manipulation, API and dot notation, event handling. 

Some JS code I'm proud of:
```js
const fetchIpAddress = (ip) => {
     fetch(`https://geo.ipify.org/api/v1?apiKey=${apiKey}&ipAddress=${searchInput.value}`)
         .then(response => response.json())
         .then((data) =>{
```

### Continued development

Once I had finished the project I decided to add a further challenge to try to hide the api and access tokens from the main JS file. At first I decided to do this by moving them to a config.js file which I would then included in my .gitignore file. However it did not work, so I instead looked through using .env packages to create environmental variables. This would have been the best solution I found, however it would have required changing the app to Node.js and using a module bundler like webpack to load it. I will keep that for a future project.

### Useful resources

- Using dotenv package to create environment variables - [Medium article](https://medium.com/@thejasonfile/using-dotenv-package-to-create-environment-variables-33da4ac4ea8f)

## Author

- Website - [Krista Calleja](https://kristacalleja.github.io/)
- Frontend Mentor - [My Frontend Mentor profile](https://www.frontendmentor.io/profile/KristaCalleja)