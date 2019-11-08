var express = require('express');
var app = express();
var serv = require('http').Server(app);
 
// app.get('/',function(req, res) {
//     res.sendFile(__dirname + '/client/index.html');
// });
app.use('/libs',express.static(__dirname + '/client/lib'));
app.use("*",function(req, res) {
    res.sendFile(__dirname + '/client/index.html');
})
 
serv.listen(process.env.PORT || 2000, function () {
    console.log('Starting server on port 2000');
});