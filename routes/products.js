const express = require("express");
const router = express.Router();
const pm = require("../controllers/products");
const fileMgmt = require('../shared/fileMgmt');

//__________________________________PRODUCTS__________________________________________
router.get("/home", function (req, res, next) {
  const filePath = fileMgmt.getHtmlFilePath("products-home.html");
  res.sendFile(filePath);
});

router.get      ("/", pm.productsList);
router.get      ("/export", pm.exportProducts);
router.get      ("/search/id", pm.searchProducts);
router.patch    ("/", pm.editDesc);
router.post     ("/", pm.addProduct);
router.delete   ("/", pm.deleteProduct);

module.exports = router;
