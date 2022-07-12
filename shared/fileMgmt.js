const path = require("path");
const database = require("../controllers/database");
const fs = require("fs");

module.exports={
    getHtmlFilePath: function(htmlFileName){
       return path.join(__dirname, "../client", htmlFileName);
    },

    exportToFile: async function(res, sql, filePrefix){
        try {
            const result = await database.query(sql);
      
            const now = new Date().getTime();
            const fileName = `${filePrefix}-${now}.txt`
            const filePath = path.join(__dirname, "../exports", fileName);
            const stream = fs.createWriteStream(filePath);
      
            stream.on("open", function () {
              stream.write(JSON.stringify(result[0]));
              stream.end();
            });
      
            stream.on("finish", function () {
             //res.send(`${filePrefix} export file created at ${filePath}`);
             //res.set('Access-Control-Allow-Origin', '*');
              res.json({ name: fileName });
            });
          } catch (err) {
            throw(err);
          }
        },
    }
