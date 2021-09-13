const mongoose=require('mongoose');
const validator=require('validator');

const connectionURL='mongodb://127.0.0.1:27017';
const dbName='uzrasai';

mongoose.connect(connectionURL+'/'+dbName,{
  
});

const Comment = mongoose.model('Comment',{
    name:{
        type:String,
        required:true,
        trim:true
    },
    text:{
        type:String,
        trim:true
    },
    age:{
        type:Number,
        min:18
    },
    salary:{
        type:Number,
        validate(value){
            if (value < 0 || value > 10000){
                throw new Error("Atlyginimas turi būti daugiau už 0 ir mažiau už 10000");
            }
        }
    },
    email:{
        type:String,
        validate(value){
            if (!validator.isEmail(value)){
                throw new Error("El. paštas neteisingas");
            }
        }
    }
});

/*
const nc=new Comment({
    name:'Jonas',
    text:'Labai įdomus straipsnis',
    age:25
});
*/

const nc=new Comment({
    name:' Karolis',
    text:'Kazkas ',
    age:38,
    salary:500,
    email: 't.tomas@com.lt'
});

nc.save().then((nc)=>{
    console.log(nc);
}).catch((error)=>{
    /*
    for (const m[k,m] of Object.entries(error.errors)){
    console.log(k);
    }
    */
   console.log(error);
});