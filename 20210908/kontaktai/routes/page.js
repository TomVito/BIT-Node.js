const express=require('express');
const {ObjectId}=require('mongodb');

const router=express.Router();

router.get('/', async (req, res, next)=>{
  const contacts=await db.collection('contacts').find({}).toArray();
  const types=await db.collection('type').find({}).toArray();

  res.render('index',{contacts:contacts, types:types});
});

router.get('/new', async (req, res, next)=>{
    const types=await db.collection('type').find({}).toArray();
    res.render('new',{
      types:types
    });
});

router.post('/new', (req, res, next)=>{
    db.collection('contacts').insertOne(req.body).then((result)=>{
        res.redirect('/');
    });
});

router.get('/edit', async (req, res, next)=>{
  const contact=await db.collection('contacts').findOne({
    _id:new ObjectId(req.query.id)
  });
  const types=await db.collection('type').find({}).toArray();
  res.render('edit', {
    contact:contact,
    types:types
  });
});

router.post('/edit', async (req, res, next)=>{
  db.collection('contacts').updateOne({
    _id:new ObjectId(req.query.id)
  },{
    $set:req.body
  });
  res.redirect('/');
});

router.get('/delete', (req,res, next)=>{
   db.collection('contacts').deleteOne({
      _id:new ObjectId(req.query.id)
   });
   res.redirect('/');
});

module.exports=router;