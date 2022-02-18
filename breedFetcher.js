const request = require('request');
const fs = require('fs');




const fetchBreedDescription = function (breedName, callback) {
  
  const URL = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;


  request(URL, (error, response, body) => {

    if (error) {
      return callback(error, null);
    } else {
      const data = JSON.parse(body);
      if (data.length === 0) {
        return callback("breed cannot be found", null)
      } else {
        return callback(null, data[0].description)
      }
    } 
  });

}

module.exports = {fetchBreedDescription};