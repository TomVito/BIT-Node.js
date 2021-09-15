const express=require('express');
const router=express.Router();
const Order=require('../models/order');
const Service=require('../models/service');

router.get('/orders', (req,res,next)=>{
   Order.find({}).then((orders)=>{
       res.send(orders);
   }).catch((e)=>{
       res.status(500).send(e);
   });
});

router.get('/orders/services/:id', (req,res,next)=>{
   const id=req.params.id;
   Order.find({service_id:id}).then((orders)=>{
    if (orders.length==0){
        return res.status(404).send();
    }
       res.send(orders);
   }).catch((e)=>{
       res.status(500).send(e);
   });
});

router.get('/orders/:id', (req,res,next)=>{
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

router.post('/orders', async (req,res,next)=>{
   const order=new Order(req.body);
   const service=await Service.findById(order.service_id);
   if (!service){
    return res.status(404).send();
   }
    order.save().then(()=>{
       res.status(201).send(order);
   }).catch((e)=>{
       res.status(400).send(e);
   });
});

router.patch('/orders/:id', async (req,res,next)=>{
    try {
        const order=await Order.findById(req.params.id);
        const updates=Object.keys(req.body);
        /*
        const allowed=['email','phone'];
        if (!updates.every((update)=>allowed.includes(update))){
            return res.status(400).send({error:"Wrong update fields"});
        }
        */
        updates.forEach((update)=>{
            order[update]=req.body[update];
        });
        await order.save();
        res.send(order);
    } catch (error) {
        res.status(400).send(error);
    }
});

router.delete('/orders/:id', async (req,res,next)=>{
    try {
        const order=await Order.findByIdAndDelete(req.params.id);
        if (!order){
            return res.status(404).send({error:"Record not found"})
        }
        return res.send(order);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports=router;