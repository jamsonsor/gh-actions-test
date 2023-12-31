var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('{ "response": "Hello From Jamson" }');
});

app.get('/will', function (req, res) {
    res.send('{ "response": "Hello World" }');
});
app.get('/ready', function (req, res) {
    res.send('{ "response": " Great!, It works!" }');
});

app.get('/status', (req, res) => {
    res.json({ status: 'Application is running' });
});

app.listen(process.env.PORT || 3000);
module.exports = app;