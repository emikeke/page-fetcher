const fs = require("fs");
const args = process.argv;
const request = require("request");

const url = args[2];
const localFile = args[3];

const getData = function (url, localFile) {
  request(url, function (error, response, body) {
    if (error) {
      console.log("error: ", error);
    }
    fs.writeFile(localFile, body, err => {
      if (err) {
        console.log("error");
      } else {
        console.log("Downloaded and saved " + body.length + " bytes to " + localFile);
      }
    });
    return;
  })
};

getData(url, localFile);

