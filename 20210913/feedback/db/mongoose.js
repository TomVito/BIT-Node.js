const mongoose=require('mongoose');

const connectionURL='mongodb://127.0.0.1:27017';
const dbName='feedback';

mongoose.connect(connectionURL+'/'+dbName,{
  
});