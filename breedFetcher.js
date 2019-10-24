
const fs = require("fs");
const argv = process.argv;

console.log(process.argv[2])

let host = 'https://api.thecatapi.com/v1/breeds/search?q=' + argv[2]
 const request = require('request');
 request(host, (error, response, body) => {
   const data = JSON.parse(body);   // if not work set argv values 2,3,4
  // for (let names in data.name)
  console.log(data[0]['description'])
 });

 // module.exports = { fetchBreedDescription };