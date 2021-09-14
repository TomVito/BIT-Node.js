const mongoose=require('mongoose');
const validator=require('validator');

const Order=mongoose.model('Order',{
    service_id:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true,
        maxLength:24
    },
    surname:{
        type:String,
        required:true,
        maxLength:24
    },
    email:{
        type:String,
        required:true,
        maxLength:32,
        validate(value){
            if (!validator.isEmail(value)){
                throw new Error('Email is incorrect');
            }
        }
    },
    phone:{
        type:String,
        maxLength:16,
        validate(value){
            if (!validator.isMobilePhone(value)){
                throw new Error('Phone is incorrect')
            }
        }
    },
});

module.exports=Order;