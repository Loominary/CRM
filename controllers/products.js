const database = require("./database");
const joi = require("joi");
const fileMgmt = require("../shared/fileMgmt");

module.exports = {
  addProduct: async function (req, res, next) {
    const reqBody = req.body;

    const schema = joi.object({
      name: joi.string().required().min(2).max(100),
      desc: joi.string().required().max(300),
      price: joi.number().required(),
    });

    const { error } = schema.validate(reqBody);

    if (error) {
      res.send(`Error in creating product. Error:${error}`);
      return;
    }

    const sql =
      "INSERT INTO products(name, description, price)" + " VALUES(?,?,?);";
    try {
      const result = await database.query(sql, [
        reqBody.name,
        reqBody.desc,
        reqBody.price,
      ]);
      console.log(result);
    } catch (err) {
      console.log(err);
    }
    res.send(
      `${reqBody.name} with price of ${reqBody.price} added successfully`
    );
  },

  productsList: async function (req, res, next) {
    const param = req.query;

    const schema = joi.object({
      column: joi.string().valid("name", "price").default("name"),
      sort: joi.string().valid("ASC", "DESC").default("ASC"),
    });

    const { error, value } = schema.validate(param);
    if (error) {
      console.log(error);
      res.status(400).send();
      return;
    }

    const fieldsMap = new Map([
      ["name", "products.name"],
      ["price", "products.price"],
    ]);

    const sql = `SELECT * FROM products ORDER BY ${fieldsMap.get(
      value.column
    )} ${value.sort}`;

    try {
      const result = await database.query(sql);
      res.send(result[0]);
    } catch (err) {
      console.log(err);
    }
  },

  //todo: export all products - CHECK IF WORKS
  exportProducts: async function (req, res, next) {
    const sql =
      "SELECT name, description, price FROM products ORDER BY name ASC;";

    fileMgmt.exportToFile(res, sql, "products");
  },

  //todo: search in products by param
  searchProducts: async function () {
    //const sql = SELECT WHERE
  },

  //todo: edit details of products
  editDesc: async function () {
    //const sql = UPDATE
  },

  //todo: delete product
  deleteProduct: async function () {
    //const sql = DROP
  },

  //
};

//__________ OLD CODE________________
/* database.pool.getConnection(function (connErr, connection) {
    if (connErr) throw connErr; // not connected!

    
    connection.query(
        sql,
        [name, desc, price],
        function (sqlErr, result, fields) {
            if (sqlErr) throw sqlErr;

            console.log(result);
        });
}); */
