var express = require('express');


var app = express();

var port = process.env.PORT || 5000;

app.get('/', function(req, res){
    res.send('hello world');
})

app.listen(port, function(err){
   console.log('Listening on port '+ port);
});
