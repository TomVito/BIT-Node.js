const express=require('express');
const prices=require('../modules/services');
const register=require('./../modules/register')

const router=express.Router();

router.get('/', (req, res, next)=>{
    res.render('index');
});

router.get('/services', (req,res,next)=>{
    const priceList = prices.getPrices();
    res.render('services', {
        title : 'Services',
        prices: priceList
    });
});

router.get('/register', (req, res, next)=>{
    res.render('register');
});

router.post('/register', (req, res, next)=>{
    register.addRegistration(req.body.model, req.body.make, req.body.productionYear, req.body.preferredDate, req.body.yourNumber, req.body.problem);
    res.redirect('/register');
});

router.get('/admin', (req, res, next)=>{
    const registerList=register.getRegistration();
    res.render('admin',{
        title : 'Registrations List',
        register: registerList
    });      
});

router.get('/contacts', (req, res, next)=>{
    res.render('contacts');
});

module.exports=router;