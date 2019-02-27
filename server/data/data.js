const dataShirts = require("./mens-shirts.json");
const dataShoes = require("./mens-shoes.json");
const dataSports = require("./mens-sports.json");
const dataRandom = require("./mens-random.json");

const data = {
  results: []
};

data.results = data.results.concat(dataShirts.results);
data.results = data.results.concat(dataShoes.results);
data.results = data.results.concat(dataSports.results);
data.results = data.results.concat(dataRandom.results);

module.exports = data;
