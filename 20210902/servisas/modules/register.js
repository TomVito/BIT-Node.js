const fs=require('fs');

const getRegistration=()=>{
   const data=fs.readFileSync('./data/registration.json').toString();
   const register=JSON.parse(data);
   return register;
};

const addRegistration=(model, make, productionYear, preferredDate, yourNumber, problem)=>{
    let register=getRegistration();
    register.push({
        model: model,
        make: make,
        productionYear: productionYear,
        preferredDate: preferredDate,
        yourNumber: yourNumber,
        problem: problem
    });
    fs.writeFileSync('./data/registration.json', JSON.stringify(register));
};

module.exports={getRegistration, addRegistration};