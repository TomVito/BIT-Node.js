const express=require('express');
const logRouter=require('./routes/log');
const pageRouter=require('./routes/page');
const path=require('path');

const app=express();

app.use(express.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')));
app.use(logRouter);
app.use(pageRouter);

app.listen(3000);