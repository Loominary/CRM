const database = require("./database");
const joi = require("joi");
const fs = require("fs");
const path = require("path");

module.exports = {
  addCustomer: async function (req, res, next) {
    const reqBody = req.body;

    const schema = joi.object({
      name: joi.string().required().min(2).max(200),
      phone: joi.string().required() /* .regex(/^[0-9]\d{8,11}$/) */,
      email: joi.string().required().regex(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/),
      countryinput: joi.number().required(),
    });

    const { error } = schema.validate(reqBody);

    if (error) {
      res.send(`error adding customer ${error}`);
      return;
    }

    const sql =
      "INSERT INTO customers(name, phone, email, country_id)" +
      " VALUES(?,?,?,?);";

    try {
      const result = await database.query(sql, [
        reqBody.name,
        reqBody.phone,
        reqBody.email,
        reqBody.country,
      ]);
      //awaiting the query which includes the connection already. Will return [rows, fields]

      console.log(result);

    } catch (err) {
      console.log(err);
    }
    res.send(`${reqBody.name} added successfully`);
  },

  customersList: async function (req, res) {
    const sql =
      "SELECT cust.name, cust.phone, cust.email, countries.name AS country FROM `customers` cust JOIN countries ON cust.country_id = countries.id;";

    try {
      const result = await database.query(sql); //awaiting the query which includes the connection already. Will return [rows, fields]
      console.log(result);
      res.send(result[0]);
    } catch (err) {
      console.log(err);
    }
  },

  //todo: delete customer
  //sql: DROP
  deleteCustomer: async function (req, res, next) {},

  exportCustomers: async function (req, res, next) {
    const sql =
      "SELECT cust.name, cust.phone, cust.email, " +
      "cntr.name AS country_name FROM customers cust " + //shows the name of country as new col AS country_name
      "LEFT JOIN countries cntr ON cust.country_id = cntr.id ORDER BY cust.name ASC";

    try {
      const result = await database.query(sql);

      const now = new Date().getTime();
      const filePath = path.join(__dirname, "../files", `customers-${now}.txt`);
      const stream = fs.createWriteStream(filePath);

      stream.on("open", function () {
        stream.write(JSON.stringify(result[0]));
        stream.end();
      });
      stream.on("finish", function () {
        res.send(`Success. CUSTOMERS file created at: ${filePath}`);
      });
    } catch (err) {
      console.log(err);
    }
  },

  //todo: sort customers by column
  //sql: SORT BY ASC/DESC

  //todo: search in customers by parameter (name, email, country)
  //sql: SELECT WHERE
  findCustomer: async function (req, res, next) {},

  //todo: edit customers
  updateCustomer: async function (req, res, next) {},

  //todo: view more details of a customer
  viewCustomer: async function (req, res, next) {},
};

//_________________________OLD CODE________________________
/* databases.getConnection()
            .then(connection=> databases.runQuery(connection, sql))
            .then(result => res.send(result))
            .catch(err => console.log(err)); */

/* database.pool.getConnection(function (connErr, connection) {
            if (connErr) throw connErr; // not connected!

            

            connection.query(
                sql,
                [name, phone, email, countryId],
                function (sqlErr, result, fields) {
                    if (sqlErr) throw sqlErr;

                    console.log(fields);
                    console.log(result);
                });
        }); */
/*  const qs = req.body;
        const name = qs.name;
        const phone = qs.phone;
        const email = qs.email;
        const country = qs.country;

        if (!name || name.length === 0) {
            throw ('ERROR: name is empty');
        } */
