const {isKeliamieji, keliamieji} = require('./metai');
const chalk = require('chalk');

//console.log(process.argv);

let metai=process.argv[2];

if (isKeliamieji(metai)){
    console.log(chalk.green("Metai keliamieji"));
}else{
    console.log(chalk.red("Metai nekeliamieji"));
 }

//keliamieji(2021);

//console.log(isKeliamieji(2021));