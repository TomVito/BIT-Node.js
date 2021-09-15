const express=require('express');
const router=express.Router();
const Service=require('../models/service');

router.get('/services', (req,res,next)=>{
   Service.find({}).then((services)=>{
       res.send(services);
   }).catch((e)=>{
       res.status(500).send(e);
   });
});

router.get('/services/:id', (req,res,next)=>{
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

router.post('/services', (req,res,next)=>{
   const service=new Service(req.body);
   service.save().then(()=>{
       res.status(201).send(service);
   }).catch((e)=>{
       res.status(400).send(e);
   });
});

router.patch('/services/:id', async (req,res,next)=>{
    try {
        const service=await Service.findById(req.params.id);
        const updates=Object.keys(req.body);
        /*
        const allowed=['price'];
        if (!updates.every((update)=>allowed.includes(update))){
            return res.status(400).send({error:"Wrong update fields"});
        }
        */
        updates.forEach((update)=>{
            service[update]=req.body[update];
        });
        await service.save();
        res.send(service);
    } catch (error) {
        res.status(400).send(error);
    }
});

router.delete('/services/:id', async (req,res,next)=>{
    try {
        const service=await Service.findByIdAndDelete(req.params.id);
        if (!service){
            return res.status(404).send({error:"Record not found"})
        }
        return res.send(service);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports=router;