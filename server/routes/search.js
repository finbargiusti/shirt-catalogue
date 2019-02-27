const express = require("express");
const router = express.Router();

const data = require("../data/data");

router.post("/", async (req, res) => {
  let { query } = req.body;

  const results = data.results
    .filter(
      item => item.meta_title.toLowerCase().search(query.toLowerCase()) !== -1
    )
    .map((item, index) => {
      const name = item.meta_title;
      const price = item.price / 100;
      const sku = item.sku;
      return {
        sku,
        name,
        price,
        imgUrl:
          "https://mosaic03.ztat.net/vgs/media/pdp-gallery/" +
          item.gallery_images[0]
      };
    });

  // await sleep(1000);

  res.json(results);
});

let sleep = ms => {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
};

module.exports = router;
