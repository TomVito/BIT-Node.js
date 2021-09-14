const express=require('express');
const router=express.Router();
const Service=require('../models/service');

router.get('/services',(req,res,next)=>{
   Service.find({}).then((services)=>{
       res.send(services);
   }).catch((e)=>{
       res.status(500).send(e);
   });
});

router.get('/services/:id',(req,res,next)=>{
   const id=req.params.id;
   Service.findById(id).then((services)=>{
       if (!services){
           return res.status(404).send();
       }
       res.send(services);
   }).catch((e)=>{
       res.status(500).send(e);
   });
});

router.post('/services',(req,res,next)=>{
   const service=new Service(req.body);
   service.save().then(()=>{
       res.status(201).send(service);
   }).catch((e)=>{
       res.status(400).send(e);
   });
});

module.exports=router;