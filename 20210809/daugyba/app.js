function daugyba() {

    for (let x=1; x<=10; x++) {

        console.log("2 * "+x+"\t="+(x*2) );

    }

    let x=5;

    console.log( (x/3).toFixed(2) );

}

daugyba();

function convert() {

    console.log("Inch."+"\t"+"Cm."+"\t"+"Cm."+"\t"+"Inch.");

    for (let x=1; x<=10; x++ ) {

        console.log(x+"\t"+(x*2.54)+"\t|"+x+"\t"+(x/2.54).toFixed(2));

    }

}

convert ();
