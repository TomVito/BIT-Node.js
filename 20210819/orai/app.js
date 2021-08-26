const forecast=require('./forecast');

function isveskKaiGausiDuomenis(data){
    console.log("APP.JS GAVO DUOMENIS");
    console.log(data);
}

forecast('kaunas', isveskKaiGausiDuomenis);

console.log("Sistema baige darba");