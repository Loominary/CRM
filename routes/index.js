const express = require("express");
const router = express.Router();
const ordersModule = require("../controllers/orders");
const path = require("path");
const mwAuth = require("../middleware/auth");
const auth = require('../controllers/auth');
const fileMgmt = require('../shared/fileMgmt');

/* Authentication */
router.get("/signin", function (req, res, next) {
  const filePath = fileMgmt.getHtmlFilePath('login.html')
  res.sendFile(filePath);
});

router.post   ("/login", auth.login);

router.get    ("/logout", mwAuth, function (req, res, next) {
  return res
    .clearCookie("access_token")
    .status(200)
    .send("Successfully logged out");
});

/* GET home page. */
router.get("/", mwAuth, function (req, res, next) {
  res.send(
    "this is the home page. use further directory (/customers, /products or /orders)"
  );
});

/* GET chat page */
router.get("/chat", mwAuth, function (req, res, next) {
  const filePath = path.join(__dirname, "../client", "chat.html");
  res.sendFile(filePath);
});

//_____________________________________ORDERS____________________________________________
router.get("/orders", ordersModule.ordersList);
//route.get('/orders-add', ordersModule.addOrder);

module.exports = router;
