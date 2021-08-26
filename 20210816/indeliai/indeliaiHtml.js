const indeliai = require('./indeliai');

const index = () => {
    let s='<html>';
    s+='<body>';
    s+='<form method="POST" action="skaiciuoti">';
    s+='<input type="text" name="x"> <br> ';
    s+='<input type="text" name="y"> <br> ';
    s+='<input type="text" name="m"> <br> ';
    s+='<button type="submit">Skaiciuoti</button>';
    s+='</form>';
    s+='</body>';
    s+='</html>';
    return s;
}

const result = (x, y, m)=>{
    let s='<html>';
    s+='<body>';
    s+="Rezultatas: "+indeliai(x, y, m).toFixed(2);
    s+='</body>';
    s+='</html>';
    return s;
}

module.exports={index, result};