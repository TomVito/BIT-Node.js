const express=require('express');
const { get } = require('mongoose');
const router=express.Router();
const Order=require('../models/order');
const Service=require('../models/service');

router.get('/orders',(req,res,next)=>{
   Order.find({}).then((orders)=>{
       res.send(orders);
   }).catch((e)=>{
       res.status(500).send(e);
   });
});

router.get('/orders/services/:id',(req,res,next)=>{
   Order.find({service_id:'6140db6af28a75d60875abb0'}).then((orders)=>{
       if (!orders){
           return res.status(404).send();
       }
       res.send(orders);
   }).catch((e)=>{
       res.status(500).send(e);
   });
});

router.get('/orders/:id',(req,res,next)=>{
   const id=req.params.id;
   Order.findById(id).then((orders)=>{
       if (!orders){
           return res.status(404).send();
       }
       res.send(orders);
   }).catch((e)=>{
       res.status(500).send(e);
   });
});

router.post('/orders',(req,res,next)=>{
   const order=new Order(req.body);
   order.save().then(()=>{
       res.status(201).send(order);
   }).catch((e)=>{
       res.status(400).send(e);
   });
});

module.exports=router;