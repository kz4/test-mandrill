var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.get('/', function (req, res) {
//   res.send('Hello World!')
// });

app.use(express.static(__dirname + '/public'));

require("./server/app.js")(app);

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
});
