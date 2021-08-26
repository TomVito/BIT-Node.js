const request=require('postman-request');

const currency=(from, to, amount)=>{
    const url='https://api.frankfurter.app/latest?amount='+amount+'&from='+from+'&to='+to;

    request({url:url}, (error, response)=>{
    const data=response.body;
    const frankfurter=JSON.parse(data);
    console.log(frankfurter.rates[to]);
    });
}

module.exports=currency;