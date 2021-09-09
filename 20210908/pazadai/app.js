/*
const suma=(x, y, callback)=>{
    setTimeout(()=>{
        let s=x+y;
        if (x<0 || y<0) {
            callback("Neigiami skaičiai", undefined);
        }else{
            callback(undefined, s);
        }   
    }, 1000);
}

suma(1,2, (error, result)=>{
    if (error){
        return console.log("Įvyko klaida");
    }
    suma(result, 3, (error, result)=>{
        if (error){
            return console.log("Įvyko klaida");
        }
        suma(result, 5, (error, result)=>{
            if (error){
                return console.log("Įvyko klaida")
            }
            console.log("Skaičių suma: ",result)
        });
        
    })
});



*/
const suma=(x, y)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if (x<0 || y<0){
                reject("Skaičius neigiamas");
            }
            resolve(x+y);
        },1000);
    })
}
/*
let s1;
let s2;
let s3;
suma(1, 2).then((result1)=>{
    let s1=result1;
    return suma(result1,3);
}).then((result2)=>{
    s2=result2;
    return suma(result2,5);
}).then((result3)=>{
    s3=result3;
    console.log("Rezultatai",s1, s2, s3);
}).catch((error)=>{
    console.log(error);
});
*/

const skaiciuok = async ()=>{
    let s1=await suma(1, 2);
    console.log("Step 1");
    let s2=await suma(2, 3);
    console.log("Step 2");
    let s3=await suma(7, -5);
    console.log("Step 3");
    console.log(s1,s2,s3);
}

skaiciuok().catch((e)=>console.log(e));
