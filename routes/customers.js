const express = require('express');
const router = express.Router();
const cm = require('../controllers/customers');
const path = require('path');

//__________________________________CUSTOMERS__________________________________________
router.get('/home', function (req, res, next) {
  const filePath = path.join(__dirname, "../client", "customers-home.html");
  res.sendFile(filePath);
});

router.get      ("/", cm.customersList);
router.get      ("/details", cm.findCustomer);
router.get      ("/export", cm.exportCustomers);
router.patch    ("/", cm.updateCustomer);
router.post     ("/", cm.addCustomer);
router.delete   ("/", cm.deleteCustomer);


module.exports = router;

