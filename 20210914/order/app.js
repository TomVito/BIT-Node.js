const express=require('express')
require('./db/mongoose');
const orderRoutes=require('./routes/orderRoutes');
const serviceRoutes=require('./routes/serviceRoutes');
const userRoutes=require('./routes/userRoutes');
const jwt=require('jsonwebtoken');

const app=express();

app.use(express.json());
app.use(orderRoutes);
app.use(serviceRoutes);
app.use(userRoutes);

app.listen(3000);