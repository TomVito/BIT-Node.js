const express=require('express');
const path=require('path')
const { route } = require('./system');

//Susikuriam router, objektą į kurį sudėsime susijusiu middlewares
const router=express.Router();

//Jei vartotojas atėjo į pagrindinį puslapį / mes jam išvedame informaciją
router.get('/',(req,res,next)=>{
    res.render('index');
 });

 //Middleware kuris aptarnauja bet kokius (visus) url ir išveda, kad toks puslapis neegzistuoja
 router.use('/', (req,res, next)=>{
   //Išsiunčiame failą 404.html
   //status - nustato statusą
   //res.status(404).sendFile(path.join(__dirname,'..','views','404.html'));
   res.status(404).render('404');

   //res.status(404).send("Puslapis nerastas");
   //res.status(404).send("<script>alert('Puslapis nerastas'); history.go(-1);</script>");

 });

//Exportuojame router objektą su mūsų middlewares
module.exports=router;