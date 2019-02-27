const express = require("express");
const router = express.Router();

const data = require("../data/data");

router.post("/", async (req, res, next) => {
  let { query } = req.body;

  console.log(data.results[0].sku);

  const results = data.results.filter(item => item.sku.search(query) !== -1)[0];

  await sleep(1000);

  res.json(results);
});

let sleep = ms => {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
};

module.exports = router;
