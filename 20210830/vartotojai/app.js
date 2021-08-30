const express=require('express');

const app=express();

app.use(express.urlencoded({extended:false}));

app.use((req, res, next)=>{
    console.log("Atėjo naujas vartotojas: "+ req.socket.remoteAddress + " " + req.url);
    next();
});

app.get('/users',(req, res, next)=>{
    res.send("<form action='/add_user' method='POST'><input type='text' name='vardas'><br><input type='text' name='pavarde'><button type='submit'>Issiusti</button></input></form>");
});

app.post('/add_user',(req, res, next)=>{
    console.log(req.body);
    res.send("<h1>Pridėti vartotoją</h1>"+"<br>Vardas: "+req.body.vardas+"<br>Pavarde: "+req.body.pavarde);
});

app.use('/',(req, res, next)=>{
    res.send("<h1>Pagrindinis puslapis</h1>");
});

app.listen(3000);