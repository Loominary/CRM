const express = require('express');
const router = express.Router();
const pm = require('../controllers/products')
const ordersModule = require('../controllers/orders');
const path = require('path');;


/* GET home page. */
router.get('/', function (req, res, next) {
  res.send('this is the home page. use further directory (/customers, /products or /orders)')
});

/* GET chat page */
router.get('/chat', function (req, res, next) {
  const filePath = path.join(__dirname, '../client', 'chat.html')
  res.sendFile(filePath);
});


//_______________________________PRODUCTS__________________________________________
router.get('/products-home', function(req, res, next){
  const filePath = path.join(__dirname, '../client', 'products-home.html')
  res.sendFile(filePath);
  //res.sendFile(`${__dirname}/client/products-home.html`);
})

router.get('/products', pm.productsList);
router.post('/products', pm.addProduct);
router.get('/products/export', pm.exportProducts);
router.patch('/products', pm.editDesc);
router.delete('/products', pm.deleteProduct);
router.get('/products/search/id', pm.searchProducts);




//todo: sort customers by column
//L A T E R

 
//todo: view more details of a customer
//router.get('/customer-details', cm.viewCustomer)







//_____________________________________ORDERS____________________________________________
router.get('/orders', ordersModule.ordersList);
//route.get('/orders-add', ordersModule.addOrder);







module.exports = router;








//____________O L D C O D E_________________//
/* const express = require('express');
const router = express.Router();
const customers = require('../customers');


/* GET home page. */
/* router.get('/', function(req, res, next) {
  //res.send('hi there lil mama');
  customers.addCustomer('Lola', '050234234', 'aaaaa@gmail.com', 1);
  customers.customersList(req, res);
});

module.exports = router; */


/* router.get('/customers', function (req, res, next) {
  //cm.addCustomer('Yes', '05233333', 'hiaaa@gmail.com', 1);
  cm.customersList(req, res);
}); */
 
/* router.get('/orders', function (req, res, next) {
  //ordersModule.addOrder('Yes', '05233333', 'hiaaa@gmail.com', 1);
  ordersModule.ordersList(req, res);
}); */

/* router.get('/products', function (req, res, next) {
  //productsModule.addProduct('Good Product', 'A very good product', 50);
  productsModule.productsList(req, res);
}); */