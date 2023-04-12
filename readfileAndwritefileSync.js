//Synchronous read and write file 
const { readFileSync, writeFileSync } = require('fs');

const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');
console.log(first, second);
 //it createa a new file if the file name does not exist. It also overwrites the file if it exiist
writeFileSync('content/twofiles',
    `contents of the 2 files are: ${first} and ${second}`);

    