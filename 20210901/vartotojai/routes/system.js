const express=require('express');

//Susikuriam router, objektą į kurį sudėsime susijusiu middlewares
const router=express.Router();

//Middleware taikomas visiems (loginame atėjusius vartotojus)
router.use((req, res, next)=>{
    console.log("Atejo naujas vartotojas:  "+req.url);
    next();
});

//Exportuojame router objektą su mūsų middlewares
module.exports=router;