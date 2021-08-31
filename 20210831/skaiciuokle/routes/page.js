const express=require('express');
const commonMultiple=require('../commonMultiple')
const path=require('path');
const router=express.Router();

router.get('/',(req, res, next)=>{
    res.sendFile(path.join(__dirname,'..','views','page.html'));
});

router.post('/result',(req, res, next)=>{
    let a = req.body.a;
    let b = req.body.b;
    res.send("<h1>Rezultatas: "+commonMultiple(a,b)+"</h1>");
});

router.get('/result',(req, res, next)=>{
    res.redirect('/');
});

module.exports=router;