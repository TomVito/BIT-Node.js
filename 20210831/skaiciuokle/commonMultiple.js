const commonMultiple = (a, b) => {
    for (let i=1; i<=(a*b); i++){
        if ((i % a == 0) && (i % b == 0)) {
            return i;
        }
    }
 };

module.exports=commonMultiple;