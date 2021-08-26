const chalk = require('chalk');

const isTrikampis=(a, b, c) => {
    if (a+b>c && a+c>b && b+c>a){
        return true;
    }else{
        return false;
    }
}

const trikampis=(a, b, c) => {
    if (isTrikampis(a, b, c)) {
        console.log(chalk.bgGreen("Trikampį išvesti galima"));
        if (a==b && a==c){
            console.log(chalk.yellow("Trikampis lygiakraštis"));
        } else if(a==b || b==c || c==a) {
            console.log(chalk.yellow("Trikampis lygiašonis"));
        }
    }else{
        console.log(chalk.bgRed("Trikampio išvesti negalima"));
    }
}

module.exports={trikampis, isTrikampis};
