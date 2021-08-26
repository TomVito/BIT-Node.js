const forecast=require('./forecast');

function isveskKaiGausiDuomenis(data){
    console.log(data);
}

forecast ('kaunas', (temp)=>{
    console.log("Temperaturos prognozes ");
    temp.forEach((d)=>{
        console.log("Diena: "+d.date+"\t Temperatura: " + d.temperature);
    });
});