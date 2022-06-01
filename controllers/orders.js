const database = require("./database");

module.exports = {
  addOrder: async function (req, res, next) {
    const qs = req.body;
    const custId = req.custId;
    const prodId = req.prodId;
    const price = req.price;
    const quantity = req.quantity;

    if (!prodId || prodId.length === 0) {
      throw "ERROR: name is empty";
    }
    const sql =
      "INSERT INTO orders(customer_id, product_id, price, quantity)" +
      " VALUES(?,?,?,?);";

    try {
      const result = await database.query(
        sql[(orderTime, custId, prodId, price, quantity)]
      );
      console.log(result);
    } catch (err) {
      console.log(err);
    }
    res.send(
      `Order has been made for product with ID of ${prodId}, sent to ${custId}.`
    );
  },

  ordersList: async function (req, res) {
    const sql = "SELECT * FROM orders";

    try {
      //const connection = await database.getConnection(); //awaiting connection - INCLUDED IN DATABASE WITH query()
      const result = await database.query(sql); //awaiting results
      res.send(result[0]);
    } catch (err) {
      console.log(err);
    }
  },
};

//____________________ OLD CODE_________________________
/* const givenOrder = process.argv.slice(2)[0];

let order1 = {
    name: "An amazing orderName",
    UUID: "An even amazing-er uuid!",
  };

let orders = [order1];


class Order {
  constructor(name, UUID) {
    this.name = name;
    this.UUID = UUID;
  }
}

//generate a "uuid" (until I understand how to do uuid)
function UUIDgenerator() {
  let length = 8,
    charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
    retVal = "";
  for (let i = 0, n = charset.length; i < length; ++i) {
    retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
}

//adds product to globat products array
function addProductToArray(product) {
  let newOrder = new Order(product, UUIDgenerator());
  orders.push(newOrder);
}

function printProductsFromProductsArray(){
    for(i =0; i < orders.length; i++){
        console.log(orders[i]);
    } // Prints as object 
    for(const order of orders){
        console.log('Order name:', order.name, '| UUID:', order.UUID);
    } //Prints in string
}
console.log("given product is: ", givenOrder);
addProductToArray(givenOrder);
printProductsFromProductsArray(); */

/*  addOrder: function (orderTime, cutomerId, price) {
    if (!name || name.length === 0) {
        throw ('ERROR: name is empty');
    }

    database.pool.getConnection(function (connErr, connection) {
        if (connErr) throw connErr; // not connected!

        const sql = "INSERT INTO products(name, description, price)" +
            " VALUES(?,?,?);";

        connection.query(
            sql,
            [name, desc, price],
            function (sqlErr, result, fields) {
                if (sqlErr) throw sqlErr;

                console.log(result);
            });
    });
}, */
