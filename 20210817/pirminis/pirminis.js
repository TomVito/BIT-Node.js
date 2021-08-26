const pirminis = (skaicius) => {
    for(let i = 2; i < skaicius; i++){
        if(skaicius % i === 0 || skaicius === 1) {
            return "Skaičius nėra pirminis";
        }
    }
    return "Skaičius yra pirminis";
}

module.exports=pirminis;