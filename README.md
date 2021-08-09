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
- [Author](#author)
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

I had some problems implementing the transfer of api keys to a config.js file which I then included in my .gitignore file. It was just an added challenge I chose to include in my project to practice using gitignore files. 

## Author

- Website - [Krista Calleja](https://kristacalleja.github.io/)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/KristaCalleja)