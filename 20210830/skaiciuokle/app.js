const express=require('express');
const fs = require('fs');

const app=express();

app.use((req, res, next)=>{
    let date = Date().toString();
    fs.appendFileSync('log.txt', date + " IP address: " + req.socket.remoteAddress + " URL:" + req.url +"\n");
    next();
});

app.get('/rezultatas',(req, res, next)=>{
    res.send("<h1>Rezultatų puslapis</h1>");
});

app.use('/',(req, res, next)=>{
    res.send("<h1>Pagrindinis puslapis</h1>");
});

app.listen(3000);