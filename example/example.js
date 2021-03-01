const file = process.argv[2] || "20121209080728.tkl";

var fs = require('fs');

try {
  var TklParser = require('./src/tkl-parser.js');
}
catch(err) {
  var TklParser = require('./../src/tkl-parser.js');
}

fs.readFile(file, function (err, content) {

  const tklParser = new TklParser();

  tklParser.parse(content, function (error, data) {
    if (error) {
      console.log(error);
      console.log("node ./example/example.js ./example/20160501161648.tkl\n");
    } else {
      console.log(data.sessions);
      console.log(data.records);
      console.log(data.records[data.records.length - 1]);
    }
  });
});

