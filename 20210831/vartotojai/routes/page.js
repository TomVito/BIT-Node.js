const express=require('express');

//Susikuriam router, objektą į kurį sudėsime susijusiu middlewares
const router=express.Router();

//Jei vartotojas atėjo į pagrindinį puslapį / mes jam išvedame informaciją
router.get('/',(req,res,next)=>{
    res.send("<h1>Pagrindinis puslapis</h1>");
 });

//Exportuojame router objektą su mūsų middlewares
module.exports=router;