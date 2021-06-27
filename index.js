const express = require('express')

const app= express();

const port = 3000;

app.get('/about', function(req,res){
    res.send("Hello how are you?");
})
app.get('/home', function(req,res){
    console.log(__dirname)
 res.sendFile(__dirname + '/pages/index.html')
})
app.post('/home', function(req,res){
res.send("Hello again");
})

app.get ('/contact', function(req,res){
     res.send("Hello");
})

app.get('/login',function (req,res) {
    res.status(401);
    res.send('');
})

app.listen(port,function(){
    console.log('Listening at port:' + port)
})
