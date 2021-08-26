const currency=require('./currency');

currency('EUR', 'USD', (rates)=>{
    rates.forEach((d)=>{
        console.log("Date: "+d.date+"\t Rate: "+d.rate);
    })
});