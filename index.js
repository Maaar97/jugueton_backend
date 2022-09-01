var express = require("express");
var app = express();

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    next();
});

app.get("/api/data", (request, response, next) => {
    var data = require('./data/jugueton_data.json');
    response.json(data);
});

app.get("/api/products/:product_type", (request, response, next) => {
    var product_type = request.params.product_type
    var file = require(`./data/${product_type}_products.json`);
    response.json(file.products);
});

app.listen(8000, () => {
    console.log("Server running on port 8000");
});