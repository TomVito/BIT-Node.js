const express=require('express');
//systemRoutes - kinamasis kuris būs router objektas ir turės jame aprašytus middleware
const systemRouter=require('./routes/system');
//puslapio router, kuriame yra middleware's susiję su puslapiu
const pageRouter=require('./routes/page');
//user router
const userRouter=require('./routes/user');
const path = require('path');

const app=express();

//Užregistruojame Body-parser middleware kuris sutvarko atsiųstus duomenis
app.use(express.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')));
app.use(systemRouter);
app.use(pageRouter);
app.use('/user',userRouter);



app.listen(3000);
