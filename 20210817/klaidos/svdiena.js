const svdiena = (diena) => {
    let sdiena=diena+4;
    sdiena=sdiena % 7;
    switch (sdiena){
        case 1:
            return "Pirmadienis";
        case 2:
            return "Antradienis";
        case 3:
            return "Trečiadienis";
        case 4:
            return "Ketvirtadienis";
        case 5:
            return "Penktadienis";
        case 6:
            return "Šeštadienis";
        case 0:
            return "Sekmadienis";
    }
}

module.exports=svdiena;