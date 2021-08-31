const express=require('express');
const fs = require('fs');
const router=express.Router();

router.use((req, res, next)=>{
    let date = Date().toString();
    fs.appendFileSync('log.txt', date + " IP address: " + req.socket.remoteAddress + " URL:" + req.url +"\n");
    next();
});

module.exports=router;