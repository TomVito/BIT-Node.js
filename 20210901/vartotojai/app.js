const express=require('express');
const path = require('path');
const hbs=require('hbs');

//-------Routes-----------
//systemRoutes - kinamasis kuris būs router objektas ir turės jame aprašytus middleware
const systemRouter=require('./routes/system');
//puslapio router, kuriame yra middleware's susiję su puslapiu
const pageRouter=require('./routes/page');
//user router
const userRouter=require('./routes/user');

//--------Keliai---------
//Konstanta, kelias iki šablonų
const viewsPath=path.join(__dirname,'views','templates');
//Konstanta, kelias iki daliniu šablonų
const partialsPath=path.join(__dirname,'views','partials');
//Konstanta kelias iki public katalogo
const publicPath=path.join(__dirname,'public');

const app=express();

app.set('view engine','hbs');
app.set('views',viewsPath);
hbs.registerPartials(partialsPath);

//Užregistruojame Body-parser middleware kuris sutvarko atsiųstus duomenis
app.use(express.urlencoded({extended:false}));

//Registruojame express.static middleware kuris pagal užklausas atsiųs failus iš katalogo, 
//kurį mes padavėme kaip kintamajį middleware sukūrimo f-jai
app.use(express.static(publicPath));
app.use(systemRouter);
app.use('/user',userRouter);
app.use(pageRouter);




app.listen(3000);
