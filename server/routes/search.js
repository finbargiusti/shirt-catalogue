const express = require("express");
const router = express.Router();

const data = require("../data/data");

router.post("/", async (req, res) => {
  let { query } = req.body;

  const results = data.results
    .filter(item => {
      if (item.meta_title.toLowerCase().search(query.toLowerCase()) !== -1)
        return true;
      if (item.brand.toLowerCase().search(query.toLowerCase()) !== -1)
        return true;
      if (item.color.toLowerCase().search(query.toLowerCase()) !== -1)
        return true;
      for (let i = 0; i < item.category.length; i++) {
        if (item.category[i].toLowerCase().search(query.toLowerCase()) !== -1)
          return true;
      }
      return false;
    })
    .map((item, index) => {
      const name = item.meta_title;
      const price = item.price / 100;
      const sku = item.sku;
      const is_sale = item.is_sale;
      return {
        sku,
        name,
        price: price.toFixed(2),
        imgUrl:
          "https://mosaic03.ztat.net/vgs/media/pdp-gallery/" +
          item.gallery_images[0],
        is_sale
      };
    });

  await sleep(200);

  res.json(results);
});

let sleep = ms => {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
};

module.exports = router;
