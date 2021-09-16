const express=require('express');
const User=require('./../models/user');
const router=express.Router();

router.get('/user', (req,res,next)=>{
    User.find({}).then((users)=>{
        res.send(users);
    }).catch((e)=>{
        res.status(500).send(e);
    });
});

router.post('/user/login', async (req, res, next)=>{
   try{
       const user=await User.findByEmail(req.body.email, req.body.password);
       const token=await user.generateAuthToken();
       res.send({user, token});
   } catch (e){
        res.status(400).send(e);
   }
});

router.post('/user', (req,res,next)=>{
    const user=new User(req.body);
    user.save().then(async ()=>{
        await user.generateAuthToken();
        res.status(201).send(user);
    }).catch((e)=>{
        res.status(500);
    });
});

module.exports=router;