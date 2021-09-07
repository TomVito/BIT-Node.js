const mongodb=require('mongodb');
/*
const MongoClient=mongodb.MongoClient;
const ObjectId=mongodb.ObjectId;
*/
const {MongoClient,ObjectId}=require('mongodb');

const connectionURL='mongodb://127.0.0.1:27017';
const dbName='vartotojai';

MongoClient.connect(connectionURL, (error, client)=>{
    if (error){
        return console.log("Nepavyksta prisijungti!");
    }
    console.log("Prisijungta prie duomenų bazės");

    const db=client.db(dbName);
   /* 
   db.collection('vardai').insertOne({
        vardas: 'Jonas',
        pavarde: 'Jonaitis',
        atlyginimas: 1200
    }, (error, result)=>{
        if (error){
            return console.log('Įrašas neįsiterpė');
        }
        console.log('Įrašas įterptas');
    }); 
    */
    /*
    db.collection('vardai').findOne({
        _id: new ObjectId("6137a807145f11d1dfbeda59")
    }, (error, user)=>{
        if (error){
            return "Įvyko klaida paimant įrašą";
        }
        console.log(user);
    });
    */
    /*
    db.collection('vardai').find({
        vardas: 'Jonas'
    }).toArray((error, users)=>{
        if (error){
            return console.log('Nepaimu įrašų');
        }
        console.log(users);
    });
    */

    db.collection('vardai').find({
        vardas: 'Jonas'
    }).count((error, kiekis)=>{
        if (error){
            return console.log("Nepaimu įrašų");
        }
        console.log("Viso įrašų: "+kiekis);
    });
});