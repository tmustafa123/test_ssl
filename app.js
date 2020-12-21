var express = require('express');
var app = express();
app.listen(8080, () => console.log('running on 8080'));

app.get('/', (_req, res) => {
    res.send('<h1>hello world</h1>');
})