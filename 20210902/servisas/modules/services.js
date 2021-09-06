const fs=require('fs');

const getPrices=()=>{
   const data=fs.readFileSync('./data/services.json').toString();
   const prices=JSON.parse(data);
   return prices;
};

module.exports={getPrices};