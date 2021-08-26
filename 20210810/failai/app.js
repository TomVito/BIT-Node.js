const fs=require('fs');
const os=require('os');
fs.writeFileSync('tekstas.txt', 'Labas pasauli. ');
fs.appendFileSync('tekstas.txt', 'Viso gero pasauli!');

console.log(os.cpus());