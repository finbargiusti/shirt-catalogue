const express = require("express");
const router = express.Router();

const data = require("../data/data");

router.post("/", async (req, res) => {
  let { query } = req.body;

  const queryWords = query.split(" ");

  const searchReg = new RegExp(
    queryWords.map(q => `(?=.*${q})`).join(""),
    "gi"
  );

  console.log(searchReg);

  const results = data.results
    .filter(item => {
      const itemNames = []
        .concat(item.meta_title, item.brand, item.color, item.category)
        .join(" ");

      return searchReg.test(itemNames);
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
