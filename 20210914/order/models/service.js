const mongoose=require('mongoose');
const validator=require('validator');

const Service=mongoose.model('Service',{
    name:{
        type:String,
        required:true,
        maxLength:160
    },
    description:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
        min:0
    }
});

module.exports=Service;