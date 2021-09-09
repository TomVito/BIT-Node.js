const express=require('express');
const {ObjectId}=require('mongodb');

const router=express.Router();

router.get('/', async (req, res, next)=>{
    const tasks=await db.collection('tasks').find({}).toArray();
    res.render('index',{tasks:tasks});
  });
  
  router.get('/new', (req, res, next)=>{
      res.render('new');
  });
  
  router.post('/new', (req, res, next)=>{
    db.collection('tasks').insertOne(req.body).then((result)=>{
        res.redirect('/');
      });
  });

  router.get('/edit', async (req, res, next)=>{
    const tasks=await db.collection('tasks').findOne({
      _id:new ObjectId(req.query.id)
    });
      res.render('edit',{
        tasks:tasks,
      });
  });
  
  router.post('/edit', async (req, res, next)=>{
    db.collection('tasks').updateOne({
      _id:new ObjectId(req.query.id)
    },{
      $set:req.body
    });
    res.redirect('/');
  });
  
  router.get('/delete', (req,res, next)=>{
     db.collection('tasks').deleteOne({
        _id:new ObjectId(req.query.id)
     });
     res.redirect('/');
  });

module.exports=router;