var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

// Routes \\

app.get('/', function(req, res){
    res.sendFile('/home.html', {root : './public'})
});

app.get('/services', function(req, res){
    res.sendFile('/services.html', {root : './public'})
});

app.get('/contact', function(req, res){
    res.sendFile('/contact.html', {root : './public'})
});

app.get('/reviews', function(req, res){
    res.sendFile('/reviews.html', {root :'./public'})
});

// Creating Server and Listening for Connections \\
var port = 3000;
app.listen(port, function(){
    console.log('Server running on port ' + port);

});