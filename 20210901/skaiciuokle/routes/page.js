const express=require('express');
const commonMultiple=require('../commonMultiple')
const path=require('path');
const router=express.Router();

router.get('/',(req, res, next)=>{
    res.render('index');
});

router.post('/result',(req, res, next)=>{
    let a = req.body.a;
    let b = req.body.b;
    res.render("result",{
        common: commonMultiple(a,b)
    });
});

router.get('/result',(req, res, next)=>{
    res.redirect('/');
});

router.use('/',(req, res, next)=>{
    res.status(404).render('404');
});

module.exports=router;