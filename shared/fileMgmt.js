const path = require("path");
const database = require("../controllers/database");
const fs = require("fs");

module.exports={
    getHtmlFilePath: function(fileName){
       return path.join(__dirname, "../client", fileName);
    },

    exportToFile: async function(res, sql, filePrefix){
        try {
            const result = await database.query(sql);
      
            const now = new Date().getTime();
            const filePath = path.join(__dirname, "../exports", `${filePrefix}-${now}.txt`);
            const stream = fs.createWriteStream(filePath);
      
            stream.on("open", function () {
              stream.write(JSON.stringify(result[0]));
              stream.end();
            });
      
            stream.on("finish", function () {
              res.send(`${filePrefix} export file created at ${filePath}`);
            });
          } catch (err) {
            throw(err);
          }
        },
    }
