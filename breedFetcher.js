const request = require('request');
const fs = require('fs');
const args = process.argv.slice(2);
const URL = "https://api.thecatapi.com/v1/breeds/search?q=";
const urlAndArgs = URL + args;

request(urlAndArgs, (error, response, body) => {

  if (error) {
    console.log("getaddrinfo", error);
  } else {
    const data = JSON.parse(body);
    if (data.length === 0) {
      console.log("breed cannot be found", args[0])
    } else {
      console.log(data[0].description);
    }
  } 
});